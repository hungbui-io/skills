const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");

const repoRoot = path.join(__dirname, "..");
const skillDir = path.join(repoRoot, "skills", "engineering", "security-audit");
const skillDoc = path.join(repoRoot, "docs", "engineering", "security-audit.md");

const NUMBER_WORDS = {
  sixteen: 16,
  seventeen: 17,
  eighteen: 18,
  nineteen: 19,
  twenty: 20,
  "twenty-one": 21,
  "twenty-two": 22,
  "twenty-three": 23,
  "twenty-four": 24,
  "twenty-five": 25,
  "twenty-six": 26,
  "twenty-seven": 27,
  "twenty-eight": 28,
  "twenty-nine": 29,
  thirty: 30,
  "thirty-one": 31,
  "thirty-two": 32,
  "thirty-three": 33,
  "thirty-four": 34,
  "thirty-five": 35,
  "thirty-six": 36,
  "thirty-seven": 37,
  "thirty-eight": 38,
  "thirty-nine": 39,
  "forty": 40,
  "forty-one": 41,
  "forty-two": 42,
  "forty-three": 43,
  "forty-four": 44,
  "forty-five": 45,
  "forty-six": 46,
  "forty-seven": 47,
  "forty-eight": 48,
  "forty-nine": 49,
  "fifty": 50,
  "fifty-one": 51,
  "fifty-two": 52,
  "fifty-three": 53,
  "fifty-four": 54,
  "fifty-five": 55,
  "fifty-six": 56,
  "fifty-seven": 57,
  "fifty-eight": 58,
  "fifty-nine": 59,
  "sixty": 60,
  "sixty-one": 61,
  "sixty-two": 62,
  "sixty-three": 63,
  "sixty-four": 64,
  "sixty-five": 65,
  "sixty-six": 66,
  "sixty-seven": 67,
  "sixty-eight": 68,
  "sixty-nine": 69,
  "seventy": 70,
  "seventy-one": 71,
  "seventy-two": 72,
  "seventy-three": 73,
  "seventy-four": 74,
  "seventy-five": 75,
  "seventy-six": 76,
  "seventy-seven": 77,
  "seventy-eight": 78,
  "seventy-nine": 79,
  "eighty": 80,
  "eighty-one": 81,
  "eighty-two": 82,
  "eighty-three": 83,
  "eighty-four": 84,
  "eighty-five": 85,
  "eighty-six": 86,
  "eighty-seven": 87,
  "eighty-eight": 88,
  "eighty-nine": 89,
  "ninety": 90,
  "ninety-one": 91,
  "ninety-two": 92,
  "ninety-three": 93,
  "ninety-four": 94,
  "ninety-five": 95,
  "ninety-six": 96,
};

function read(relativePath) {
  return fs.readFileSync(path.join(repoRoot, relativePath), "utf8");
}

function skillFiles() {
  return fs
    .readdirSync(skillDir)
    .filter((name) => name.endsWith(".md"))
    .map((name) => path.join(skillDir, name));
}

function promotedSkillDirs() {
  const dirs = [];
  for (const bucket of ["engineering", "productivity"]) {
    const bucketDir = path.join(repoRoot, "skills", bucket);
    for (const name of fs.readdirSync(bucketDir)) {
      const skill = path.join(bucketDir, name, "SKILL.md");
      if (fs.existsSync(skill)) dirs.push(`./skills/${bucket}/${name}`);
    }
  }
  return dirs.sort();
}

function frontmatter(text) {
  const match = text.match(/^---\n([\s\S]*?)\n---/);
  assert.ok(match, "SKILL.md is missing frontmatter");
  return match[1];
}

function fencedBlocks(text, marker) {
  const blocks = [];
  const parts = text.split("```");
  for (let index = 1; index < parts.length; index += 2) {
    if (parts[index].includes(marker)) blocks.push(parts[index]);
  }
  return blocks;
}

function markdownLinks(text) {
  return [...text.matchAll(/\[[^\]]*\]\(([^)]+)\)/g)].map((match) => match[1]);
}

test("security-audit is promoted exactly once, with the plugin matching the on-disk set", () => {
  const plugin = JSON.parse(read(".claude-plugin/plugin.json"));
  const promoted = promotedSkillDirs();
  const listed = plugin.skills.slice().sort();

  assert.deepEqual(listed, promoted);
  assert.equal(plugin.skills.filter((entry) => entry === "./skills/engineering/security-audit").length, 1);
  assert.equal(plugin.keywords.includes("security-audit"), true);
  assert.equal(fs.existsSync(path.join(skillDir, "SKILL.md")), true);

  for (const bucket of ["misc", "in-progress", "deprecated"]) {
    assert.equal(fs.existsSync(path.join(repoRoot, "skills", bucket, "security-audit")), false);
  }
});

test("the install note and the ask-matt skill count match the plugin", () => {
  const plugin = JSON.parse(read(".claude-plugin/plugin.json"));
  const install = read(".agents/install-block.md");
  const count = plugin.skills.length;
  assert.match(install, new RegExp(`exactly the promoted set \\(${count} skills\\)`));

  const userInvoked = plugin.skills.filter((entry) => {
    const text = fs.readFileSync(path.join(repoRoot, entry, "SKILL.md"), "utf8");
    return /^disable-model-invocation:\s*true$/m.test(text);
  }).length;
  const askMattDocs = read("docs/engineering/ask-matt.md");
  const match = askMattDocs.match(/(\w+(?:-\w+)?) of the plugin's (\w+(?:-\w+)?) skills/);
  assert.ok(match, "ask-matt docs no longer state the plugin's user-invoked count");
  assert.equal(NUMBER_WORDS[match[1].toLowerCase()], userInvoked);
  assert.equal(NUMBER_WORDS[match[2].toLowerCase()], count);
});

function sliceBetween(text, startMarker, endMarker) {
  const start = text.indexOf(startMarker);
  assert.ok(start >= 0, `missing marker ${startMarker}`);
  const from = start + startMarker.length;
  const end = endMarker ? text.indexOf(endMarker, from) : text.length;
  assert.ok(end >= 0, `missing end marker ${endMarker}`);
  return text.slice(from, end);
}

test("catalog pages list security-audit as model-invoked and link its SKILL.md", () => {
  const topEngineering = sliceBetween(read("README.md"), "### Engineering", "### Productivity");
  const topModel = sliceBetween(topEngineering, "**Model-invoked**", null);
  const topUser = sliceBetween(topEngineering, "**User-invoked**", "**Model-invoked**");
  assert.match(topModel, /security-audit/);
  assert.doesNotMatch(topUser, /security-audit/);

  const bucket = read("skills/engineering/README.md");
  const bucketModel = sliceBetween(bucket, "## Model-invoked", null);
  const bucketUser = sliceBetween(bucket, "## User-invoked", "## Model-invoked");
  assert.match(bucketModel, /security-audit/);
  assert.doesNotMatch(bucketUser, /security-audit/);

  assert.match(read("README.md"), /\]\(\.\/skills\/engineering\/security-audit\/SKILL\.md\)/);
  assert.match(read("skills/engineering/README.md"), /\]\(\.\/security-audit\/SKILL\.md\)/);
  assert.match(read("skills/engineering/ask-matt/SKILL.md"), /\/security-audit/);
  assert.match(read("docs/engineering/ask-matt.md"), /skills-security-audit/);
  assert.match(read("docs/engineering/code-review.md"), /skills-security-audit/);
  assert.match(read("docs/engineering/diagnosing-bugs.md"), /skills-security-audit/);
});

test("invocation metadata keeps the skill model-invoked", () => {
  const skill = fs.readFileSync(path.join(skillDir, "SKILL.md"), "utf8");
  const meta = frontmatter(skill);
  assert.match(meta, /^name:\s*security-audit$/m);
  assert.doesNotMatch(meta, /disable-model-invocation/);
  assert.match(meta, /explicit codebase audit or pen-test requests/);
  assert.match(meta, /url:\s*"https:\/\/github\.com\/cloudflare\/security-audit-skill"/);

  const openai = fs.readFileSync(path.join(skillDir, "agents", "openai.yaml"), "utf8");
  assert.match(openai, /display_name:\s*"Security Audit"/);
  assert.match(openai, /short_description:/);
  assert.doesNotMatch(openai, /allow_implicit_invocation/);
});

test("attribution travels with the skill", () => {
  const license = fs.readFileSync(path.join(skillDir, "LICENSE"), "utf8");
  assert.match(license, /MIT License/);
  assert.match(license, /Copyright \(c\) 2025-2026 Cloudflare, Inc\./);
  const credits = fs.readFileSync(path.join(skillDir, "CREDITS.md"), "utf8");
  assert.match(credits, /c1c8a8c1471069fb0e188eeaff69b8e8db6564a8/);
  assert.match(credits, /https:\/\/github\.com\/cloudflare\/security-audit-skill/);
  assert.match(credits, /run-identity\.cjs/);
});

test("the docs page follows the published-page contract", () => {
  const doc = fs.readFileSync(skillDoc, "utf8");
  assert.doesNotMatch(doc, /^# /m);
  assert.doesNotMatch(doc, /Cloudflare|Matt Pocock/);
  assert.doesNotMatch(doc, /npx skills|claude plugin install|gemini skills install/);

  const headings = [...doc.matchAll(/^## (.+)$/gm)].map((match) => match[1]);
  const required = [
    "What it does",
    "When to reach for it",
    "Prerequisites",
    "Common questions",
    "It's working if",
    "Where it fits",
  ];
  let cursor = -1;
  for (const heading of required) {
    const index = headings.indexOf(heading);
    assert.ok(index > cursor, `missing or mis-ordered heading: ${heading}`);
    cursor = index;
  }

  for (const link of markdownLinks(doc)) {
    assert.match(link, /^https:\/\//, `docs link is not absolute: ${link}`);
  }
  assert.match(doc, /https:\/\/aihero\.dev\/skills-ask-matt/);
  assert.match(doc, /https:\/\/aihero\.dev\/skills-code-review/);
  assert.match(doc, /https:\/\/aihero\.dev\/skills-diagnosing-bugs/);
  assert.match(doc, /sanitized slug/);
});

test("skill markdown links resolve and the new prose has no em-dash", () => {
  const dash = /[—–]/;
  for (const file of skillFiles()) {
    const text = fs.readFileSync(file, "utf8");
    assert.equal(dash.test(text), false, `${path.basename(file)} contains an em-dash or en-dash`);
    for (const link of markdownLinks(text)) {
      if (/^https?:/.test(link)) continue;
      const target = link.split("#")[0];
      if (!target) continue;
      assert.equal(fs.existsSync(path.resolve(path.dirname(file), target)), true, `${file} -> ${link}`);
    }
  }
  for (const relativePath of [
    "docs/engineering/security-audit.md",
    ".changeset/security-audit-skill.md",
    ".changeset/security-audit-run-identity.md",
    "skills/engineering/security-audit/CREDITS.md",
    "skills/engineering/security-audit/run-identity.cjs",
    "skills/engineering/security-audit/run-identity.test.cjs",
  ]) {
    assert.equal(dash.test(read(relativePath)), false, relativePath);
  }
});

test("guidance and full audit stay distinct, and neighbours are named", () => {
  const skill = fs.readFileSync(path.join(skillDir, "SKILL.md"), "utf8");
  const router = read("skills/engineering/ask-matt/SKILL.md");
  assert.match(skill, /guidance by default/i);
  assert.match(skill, /Full audit mode/);
  assert.match(skill, /Do not probe deployed endpoints/);
  assert.match(router, /not `\/code-review`/);
  assert.match(router, /not `\/diagnosing-bugs`/);
  assert.match(router, /sanitized run identity/);
  assert.doesNotMatch(router, /writes them outside the target/);
});

test("the research role is disclaimed at every launch site", () => {
  const phrase = "Do not call the Skill tool for this research role.";
  for (const name of ["SKILL.md", "RECONNAISSANCE.md", "HUNTING.md", "VALIDATION-AND-REPORTING.md"]) {
    const text = fs.readFileSync(path.join(skillDir, name), "utf8");
    assert.equal(text.includes(phrase), true, name);
  }
});

test("validator commands are pinned to the skill directory", () => {
  const hunting = fs.readFileSync(path.join(skillDir, "HUNTING.md"), "utf8");
  const skill = fs.readFileSync(path.join(skillDir, "SKILL.md"), "utf8");
  const recon = fs.readFileSync(path.join(skillDir, "RECONNAISSANCE.md"), "utf8");
  const validation = fs.readFileSync(path.join(skillDir, "VALIDATION-AND-REPORTING.md"), "utf8");

  assert.match(hunting, /node <skill-dir>\/validate-coverage-ledger\.cjs/);
  assert.doesNotMatch(hunting, /Run `validate-coverage-ledger\.cjs`/);
  assert.match(skill, /node <skill-dir>\/validate-findings\.cjs/);
  assert.match(skill, /node <skill-dir>\/validate-coverage-ledger\.cjs/);
  assert.match(skill, /found inside the target/);
  assert.match(recon, /node <skill-dir>\/validate-coverage-ledger\.cjs/);
  assert.match(validation, /node <skill-dir>\/validate-findings\.cjs/);
  assert.match(validation, /node <skill-dir>\/validate-coverage-ledger\.cjs/);
});

test("run identity does not take the output path from the git remote", () => {
  const skill = fs.readFileSync(path.join(skillDir, "SKILL.md"), "utf8");
  const recon = fs.readFileSync(path.join(skillDir, "RECONNAISSANCE.md"), "utf8");
  assert.match(skill, /run-identity\.cjs --target <target>/);
  assert.match(skill, /Do not interpolate the git remote/);
  assert.doesNotMatch(skill, /identifier from the directory or local Git remote/);
  assert.doesNotMatch(skill, /~\/security-audit-skill\/<repo-name>/);
  assert.match(recon, /run-identity\.cjs --target <target>/);
  assert.doesNotMatch(recon, /for the same repo/);
  assert.equal(fs.existsSync(path.join(skillDir, "run-identity.cjs")), true);
});

test("the promotion procedure is one identical block in both prompt files", () => {
  const hunting = fs.readFileSync(path.join(skillDir, "HUNTING.md"), "utf8");
  const validation = fs.readFileSync(path.join(skillDir, "VALIDATION-AND-REPORTING.md"), "utf8");
  const huntingBlocks = fencedBlocks(hunting, "Artifact promotion procedure");
  const validationBlocks = fencedBlocks(validation, "Artifact promotion procedure");
  assert.equal(huntingBlocks.length, 1);
  assert.equal(validationBlocks.length, 1);
  assert.equal(huntingBlocks[0], validationBlocks[0]);
  assert.match(huntingBlocks[0], /reject absolute, empty/);
  assert.doesNotMatch(huntingBlocks[0], /[—–]/);
});

test("companion files named by the attack-class index exist", () => {
  const index = fs.readFileSync(path.join(skillDir, "ATTACK-CLASSES.md"), "utf8");
  const names = new Set([...index.matchAll(/\(([A-Z0-9-]+\.md)\)/g)].map((match) => match[1]));
  assert.ok(names.size >= 10);
  for (const name of names) {
    assert.equal(fs.existsSync(path.join(skillDir, name)), true, name);
  }
  assert.equal(fs.existsSync(path.join(skillDir, "report-schema.json")), true);
  JSON.parse(fs.readFileSync(path.join(skillDir, "report-schema.json"), "utf8"));
});
