const assert = require("node:assert/strict");
const crypto = require("node:crypto");
const { execFileSync } = require("node:child_process");
const fs = require("node:fs");
const os = require("node:os");
const path = require("node:path");
const test = require("node:test");

const {
  PRIOR_METADATA_MAX_BYTES,
  identityForTarget,
  sanitizeSlug,
} = require("./run-identity.cjs");

const scriptPath = path.join(__dirname, "run-identity.cjs");

function makeTarget(root, name) {
  const dir = path.join(root, name);
  fs.mkdirSync(dir, { recursive: true });
  return dir;
}

test("sanitizeSlug accepts a single safe segment and rejects path-like names", () => {
  assert.equal(sanitizeSlug("api"), "api");
  assert.equal(sanitizeSlug("course-video-manager"), "course-video-manager");
  assert.equal(sanitizeSlug("v1.2.3"), "v1.2.3");
  for (const bad of [
    "",
    ".",
    "..",
    "../etc",
    "..hidden",
    "foo/bar",
    "foo\\bar",
    "git@host:../../foo",
    "https://host/x/..",
    "has space",
    "-rf",
    "con",
    "CON",
    "com1",
    "lpt9",
    "a".repeat(80),
    "foo\0bar",
    "foo..bar",
  ]) {
    assert.equal(sanitizeSlug(bad), null, bad);
  }
});

test("output parent stays under security-audit-skill and ignores the git remote", () => {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), "run-id-"));
  const home = path.join(root, "home");
  const target = makeTarget(path.join(root, "work"), "api");
  fs.mkdirSync(home);

  const identity = identityForTarget(target, { home });
  const expectedId = crypto.createHash("sha256").update(fs.realpathSync(target)).digest("hex").slice(0, 16);

  assert.equal(identity.slug, "api");
  assert.equal(identity.target_id, expectedId);
  assert.equal(identity.target, fs.realpathSync(target));
  assert.equal(identity.output_parent, path.join(home, "security-audit-skill", `api-${expectedId}`));
  assert.equal(path.relative(identity.output_root, identity.output_parent).includes(".."), false);
  assert.equal(identity.output_parent.includes("git@"), false);
  assert.deepEqual(identity.priors, []);
});

test("two directories with the same basename do not share an output parent", () => {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), "run-id-"));
  const home = path.join(root, "home");
  fs.mkdirSync(home);
  const first = identityForTarget(makeTarget(path.join(root, "a"), "api"), { home });
  const second = identityForTarget(makeTarget(path.join(root, "b"), "api"), { home });

  assert.notEqual(first.target_id, second.target_id);
  assert.notEqual(first.output_parent, second.output_parent);
  assert.equal(first.slug, "api");
  assert.equal(second.slug, "api");
});

test("unsafe directory names fall back to repo and never appear in the path", () => {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), "run-id-"));
  const home = path.join(root, "home");
  fs.mkdirSync(home);
  const target = makeTarget(path.join(root, "work"), "con");

  const identity = identityForTarget(target, { home });
  assert.equal(identity.slug, "repo");
  assert.equal(path.basename(identity.output_parent).startsWith("repo-"), true);
  assert.equal(path.basename(identity.output_parent).includes("con"), false);
});

test("a symlinked target uses the resolved directory, not the link name", () => {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), "run-id-"));
  const home = path.join(root, "home");
  fs.mkdirSync(home);
  const real = makeTarget(path.join(root, "real"), "proj");
  const link = path.join(root, "linkname");
  fs.symlinkSync(real, link);

  const viaLink = identityForTarget(link, { home });
  const viaReal = identityForTarget(real, { home });
  assert.deepEqual(viaLink, viaReal);
  assert.equal(viaLink.slug, "proj");
});

test("an existing symlink at the output root is refused", () => {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), "run-id-"));
  const home = path.join(root, "home");
  const elsewhere = path.join(root, "elsewhere");
  fs.mkdirSync(home);
  fs.mkdirSync(elsewhere);
  fs.symlinkSync(elsewhere, path.join(home, "security-audit-skill"));
  const target = makeTarget(path.join(root, "work"), "api");

  assert.throws(() => identityForTarget(target, { home }), /refusing symlink/);
});

test("priors are only runs whose metadata matches this resolved target", () => {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), "run-id-"));
  const home = path.join(root, "home");
  fs.mkdirSync(home);
  const target = makeTarget(path.join(root, "work"), "api");
  const other = makeTarget(path.join(root, "other"), "api");
  const identity = identityForTarget(target, { home });
  fs.mkdirSync(path.join(identity.output_parent, "run-2"), { recursive: true });
  fs.mkdirSync(path.join(identity.output_parent, "run-10"));
  fs.mkdirSync(path.join(identity.output_parent, "notes"));
  fs.writeFileSync(
    path.join(identity.output_parent, "run-10", "run-metadata.json"),
    JSON.stringify({ target: identity.target, target_id: identity.target_id }),
  );
  fs.writeFileSync(
    path.join(identity.output_parent, "run-2", "run-metadata.json"),
    JSON.stringify({ target: fs.realpathSync(other), target_id: "someone-else" }),
  );

  const again = identityForTarget(target, { home });
  assert.deepEqual(
    again.priors.map((prior) => prior.run),
    [10],
  );
  assert.equal(again.priors[0].dir, path.join(identity.output_parent, "run-10"));
});

test("priors skip symlinks, huge files, and broken metadata", () => {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), "run-id-"));
  const home = path.join(root, "home");
  fs.mkdirSync(home);
  const target = makeTarget(path.join(root, "work"), "api");
  const identity = identityForTarget(target, { home });
  const good = path.join(identity.output_parent, "run-1");
  const linked = path.join(identity.output_parent, "run-3");
  const huge = path.join(identity.output_parent, "run-4");
  const broken = path.join(identity.output_parent, "run-5");
  fs.mkdirSync(good, { recursive: true });
  fs.mkdirSync(path.join(root, "outside"));
  fs.symlinkSync(path.join(root, "outside"), linked);
  fs.mkdirSync(huge);
  fs.mkdirSync(broken);
  fs.writeFileSync(
    path.join(good, "run-metadata.json"),
    JSON.stringify({ target: identity.target, target_id: identity.target_id }),
  );
  fs.writeFileSync(path.join(huge, "run-metadata.json"), "x".repeat(PRIOR_METADATA_MAX_BYTES + 1));
  fs.writeFileSync(path.join(broken, "run-metadata.json"), "{");

  const again = identityForTarget(target, { home });
  assert.deepEqual(again.priors.map((prior) => prior.run), [1]);
});

test("the CLI prints identity JSON and rejects a missing target", () => {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), "run-id-"));
  const home = path.join(root, "home");
  fs.mkdirSync(home);
  const target = makeTarget(path.join(root, "work"), "api");

  const stdout = execFileSync(process.execPath, [scriptPath, "--target", target, "--home", home], {
    encoding: "utf8",
  });
  const identity = JSON.parse(stdout);
  assert.equal(identity.slug, "api");
  assert.equal(identity.output_parent.startsWith(path.join(home, "security-audit-skill")), true);
});

test("the CLI exits 1 for a missing target without writing identity JSON", () => {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), "run-id-"));
  let stdout = "";
  let status = 0;
  try {
    stdout = execFileSync(process.execPath, [scriptPath, "--target", path.join(root, "missing")], {
      encoding: "utf8",
      stdio: ["ignore", "pipe", "pipe"],
    });
  } catch (error) {
    status = error.status;
    stdout = error.stdout;
  }
  assert.equal(status, 1);
  assert.equal(stdout.includes("output_parent"), false);
});
