#!/usr/bin/env node

/**
 * Resolve a full-audit output directory and the prior runs that belong to it.
 *
 * The target under review chooses neither path. A directory name or git remote
 * is target-controlled, so this script ignores the remote and never copies the
 * raw name into a path. The output parent is
 * `<home>/security-audit-skill/<slug>-<target_id>`, where `slug` is a single
 * safe segment from the resolved directory name (or `repo`) and `target_id`
 * is a hash of that resolved path.
 *
 * Usage: node run-identity.cjs --target <repository-root> [--home <dir>]
 */

const crypto = require("crypto");
const fs = require("fs");
const os = require("os");
const path = require("path");

const SLUG_PATTERN = /^[A-Za-z0-9][A-Za-z0-9._-]{0,63}$/;
const RUN_DIR_PATTERN = /^run-([1-9][0-9]*)$/;
const PRIOR_METADATA_MAX_BYTES = 1024 * 1024;
const WINDOWS_DEVICE_NAMES = new Set([
  "con",
  "prn",
  "aux",
  "nul",
  ...Array.from({ length: 9 }, (_, index) => `com${index + 1}`),
  ...Array.from({ length: 9 }, (_, index) => `lpt${index + 1}`),
]);

/** Return a single safe path segment, or null when the name must not be used. */
function sanitizeSlug(name) {
  if (typeof name !== "string" || name.length === 0) return null;
  if (name === "." || name === "..") return null;
  if (name.includes("..")) return null;
  if (/[\\/\0]/.test(name)) return null;
  if (!SLUG_PATTERN.test(name)) return null;
  if (WINDOWS_DEVICE_NAMES.has(name.toLowerCase())) return null;
  return name;
}

/** Throw when an existing path is a symlink. Missing paths are left for the parent to create. */
function assertNotSymlink(dir) {
  if (!fs.existsSync(dir)) return;
  const stat = fs.lstatSync(dir);
  if (stat.isSymbolicLink()) {
    throw new Error(`refusing symlink at ${dir}`);
  }
}

/** Read prior run directories whose metadata names this exact resolved target. */
function listPriors(outputParent, resolvedTarget, targetId) {
  if (!fs.existsSync(outputParent)) return [];
  const parentStat = fs.lstatSync(outputParent);
  if (parentStat.isSymbolicLink() || !parentStat.isDirectory()) return [];

  const priors = [];
  for (const name of fs.readdirSync(outputParent)) {
    const match = RUN_DIR_PATTERN.exec(name);
    if (!match) continue;
    const runDir = path.join(outputParent, name);
    const runStat = fs.lstatSync(runDir);
    if (runStat.isSymbolicLink() || !runStat.isDirectory()) continue;
    const metadataPath = path.join(runDir, "run-metadata.json");
    let metadataStat;
    try {
      metadataStat = fs.lstatSync(metadataPath);
    } catch {
      continue;
    }
    if (metadataStat.isSymbolicLink() || !metadataStat.isFile()) continue;
    if (metadataStat.size > PRIOR_METADATA_MAX_BYTES) continue;
    let metadata;
    try {
      metadata = JSON.parse(fs.readFileSync(metadataPath, "utf8"));
    } catch {
      continue;
    }
    if (!metadata || metadata.target !== resolvedTarget || metadata.target_id !== targetId) continue;
    priors.push({ run: Number(match[1]), dir: runDir });
  }
  priors.sort((left, right) => left.run - right.run);
  return priors;
}

/**
 * Build the output parent and prior-run list for a repository root.
 * `options.home` overrides the home directory (tests). The git remote is not an input.
 */
function identityForTarget(targetPath, options = {}) {
  if (typeof targetPath !== "string" || targetPath.length === 0) {
    throw new Error("target is required");
  }
  const resolved = fs.realpathSync(targetPath);
  const stat = fs.statSync(resolved);
  if (!stat.isDirectory()) throw new Error("target is not a directory");

  const slug = sanitizeSlug(path.basename(resolved)) || "repo";
  const targetId = crypto.createHash("sha256").update(resolved).digest("hex").slice(0, 16);
  const home = options.home ? path.resolve(options.home) : os.homedir();
  const outputRoot = path.join(home, "security-audit-skill");
  const outputParent = path.join(outputRoot, `${slug}-${targetId}`);
  const relative = path.relative(outputRoot, outputParent);
  if (relative.startsWith("..") || path.isAbsolute(relative) || relative.includes(path.sep)) {
    throw new Error("output parent escaped the security-audit-skill root");
  }
  assertNotSymlink(outputRoot);
  assertNotSymlink(outputParent);

  return {
    target: resolved,
    slug,
    target_id: targetId,
    output_root: outputRoot,
    output_parent: outputParent,
    priors: listPriors(outputParent, resolved, targetId),
  };
}

/** Parse `--target` and optional `--home` from argv. */
function parseArgs(argv) {
  const parsed = {};
  for (let index = 0; index < argv.length; index += 1) {
    const arg = argv[index];
    if (arg !== "--target" && arg !== "--home") {
      throw new Error(`unknown argument ${arg}`);
    }
    const value = argv[index + 1];
    if (!value || value.startsWith("--")) throw new Error(`${arg} needs a value`);
    parsed[arg.slice(2)] = value;
    index += 1;
  }
  if (!parsed.target) throw new Error("--target is required");
  return parsed;
}

function run(argv) {
  try {
    const args = parseArgs(argv);
    const identity = identityForTarget(args.target, { home: args.home });
    process.stdout.write(`${JSON.stringify(identity, null, 2)}\n`);
    return 0;
  } catch (error) {
    const message = error && error.message ? error.message : "run identity failed";
    process.stderr.write(`${message}\n`);
    return 1;
  }
}

module.exports = {
  PRIOR_METADATA_MAX_BYTES,
  identityForTarget,
  listPriors,
  parseArgs,
  sanitizeSlug,
};

if (require.main === module) process.exit(run(process.argv.slice(2)));
