const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");

const repoRoot = path.join(__dirname, "..");
const engineering = path.join(repoRoot, "skills", "engineering");
const referencesDir = path.join(engineering, "agent-skills-references");
const upstream = "aeac41d4d005999432bb7312f7ff06383a91d59d";
const dash = /[\u2014\u2013]/;

const vendored = [
  "api-and-interface-design",
  "browser-testing-with-devtools",
  "ci-cd-and-automation",
  "code-review-and-quality",
  "code-simplification",
  "constraint-driven-development",
  "context-engineering",
  "debugging-and-error-recovery",
  "deprecation-and-migration",
  "documentation-and-adrs",
  "doubt-driven-development",
  "frontend-ui-engineering",
  "git-workflow-and-versioning",
  "idea-refine",
  "incremental-implementation",
  "interview-me",
  "observability-and-instrumentation",
  "performance-optimization",
  "planning-and-task-breakdown",
  "security-and-hardening",
  "shipping-and-launch",
  "source-driven-development",
  "spec-driven-development",
  "test-driven-development",
  "using-agent-skills",
];

const userInvoked = new Set([
  "interview-me",
  "test-driven-development",
  "using-agent-skills",
]);

const collisions = {
  "code-review-and-quality": "skills-code-review",
  "code-simplification": "skills-improve-codebase-architecture",
  "context-engineering": "skills-retro",
  "debugging-and-error-recovery": "skills-diagnosing-bugs",
  "documentation-and-adrs": "skills-domain-modeling",
  "git-workflow-and-versioning": "skills-pr",
  "idea-refine": "skills-grill-with-docs",
  "incremental-implementation": "skills-implement",
  "interview-me": "skills-grill-with-docs",
  "performance-optimization": "skills-diagnosing-bugs",
  "planning-and-task-breakdown": "skills-to-tickets",
  "security-and-hardening": "skills-security-audit",
  "shipping-and-launch": "skills-pr",
  "source-driven-development": "skills-research",
  "spec-driven-development": "skills-to-spec",
  "test-driven-development": "skills-tdd",
  "using-agent-skills": "skills-ask-matt",
  "api-and-interface-design": "skills-codebase-design",
};

function read(relativePath) {
  return fs.readFileSync(path.join(repoRoot, relativePath), "utf8");
}

function walk(dir) {
  const files = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) files.push(...walk(full));
    else files.push(full);
  }
  return files;
}

function markdownLinks(text) {
  return [...text.matchAll(/\[[^\]]*\]\(([^)]+)\)/g)].map((match) => match[1]);
}

function sliceBetween(text, startMarker, endMarker) {
  const start = text.indexOf(startMarker);
  assert.ok(start >= 0, `missing marker ${startMarker}`);
  const from = start + startMarker.length;
  const end = endMarker ? text.indexOf(endMarker, from) : text.length;
  assert.ok(end >= 0, `missing end marker ${endMarker}`);
  return text.slice(from, end);
}

function frontmatter(text) {
  const match = text.match(/^---\n([\s\S]*?)\n---/);
  assert.ok(match, "missing frontmatter");
  return match[1];
}

test("the vendored lifecycle is promoted once and the reference folder is not a skill", () => {
  const plugin = JSON.parse(read(".claude-plugin/plugin.json"));
  const promoted = [];
  for (const bucket of ["engineering", "productivity"]) {
    for (const name of fs.readdirSync(path.join(repoRoot, "skills", bucket))) {
      if (fs.existsSync(path.join(repoRoot, "skills", bucket, name, "SKILL.md"))) {
        promoted.push(`./skills/${bucket}/${name}`);
      }
    }
  }
  assert.deepEqual(plugin.skills.slice().sort(), promoted.sort());
  assert.equal(plugin.skills.length, 81);
  for (const name of vendored) {
    assert.equal(plugin.skills.filter((entry) => entry === `./skills/engineering/${name}`).length, 1, name);
  }
  assert.equal(plugin.skills.includes("./skills/engineering/agent-skills-references"), false);
  assert.equal(fs.existsSync(path.join(referencesDir, "SKILL.md")), false);
  assert.match(read(".agents/install-block.md"), /exactly the promoted set \(81 skills\)/);
  assert.match(plugin.description, /vendored engineering lifecycle/);
});

test("catalog pages put the three user-invoked skills on the user side", () => {
  const top = sliceBetween(read("README.md"), "### Engineering", "### Productivity");
  const topUser = sliceBetween(top, "**User-invoked**", "**Model-invoked**");
  const topModel = sliceBetween(top, "**Model-invoked**", null);
  const bucket = read("skills/engineering/README.md");
  const bucketUser = sliceBetween(bucket, "## User-invoked", "## Model-invoked");
  const bucketModel = sliceBetween(bucket, "## Model-invoked", null);

  for (const name of vendored) {
    const userSide = userInvoked.has(name);
    assert.equal(topUser.includes(name), userSide, `top user ${name}`);
    assert.equal(topModel.includes(name), !userSide, `top model ${name}`);
    assert.equal(bucketUser.includes(name), userSide, `bucket user ${name}`);
    assert.equal(bucketModel.includes(name), !userSide, `bucket model ${name}`);
    assert.match(read("README.md"), new RegExp(`\\]\\(\\./skills/engineering/${name}/SKILL\\.md\\)`));
    assert.match(bucket, new RegExp(`\\]\\(\\./${name}/SKILL\\.md\\)`));
  }
});

test("invocation flags keep the three overlaps user-invoked", () => {
  for (const name of vendored) {
    const skillPath = path.join(engineering, name, "SKILL.md");
    const meta = frontmatter(fs.readFileSync(skillPath, "utf8"));
    const openai = fs.readFileSync(path.join(engineering, name, "agents", "openai.yaml"), "utf8");
    assert.match(openai, /display_name:/);
    assert.match(openai, /short_description:/);
    if (userInvoked.has(name)) {
      assert.match(meta, /^disable-model-invocation:\s*true$/m, name);
      assert.match(openai, /allow_implicit_invocation:\s*false/, name);
      assert.doesNotMatch(meta, /Use when/i, name);
    } else {
      assert.doesNotMatch(meta, /disable-model-invocation/, name);
      assert.doesNotMatch(openai, /allow_implicit_invocation/, name);
    }
    assert.match(meta, /url:\s*"https:\/\/github\.com\/addyosmani\/agent-skills"/);
  }

  const interview = frontmatter(read("skills/engineering/interview-me/SKILL.md"));
  assert.doesNotMatch(interview, /grill me/);
  const tests = frontmatter(read("skills/engineering/test-driven-development/SKILL.md"));
  assert.doesNotMatch(tests, /implementing any logic/);
  const router = frontmatter(read("skills/engineering/using-agent-skills/SKILL.md"));
  assert.doesNotMatch(router, /starting a session/);
  const context = frontmatter(read("skills/engineering/context-engineering/SKILL.md"));
  assert.doesNotMatch(context, /starting a new session/);
  const review = frontmatter(read("skills/engineering/code-review-and-quality/SKILL.md"));
  assert.doesNotMatch(review, /before merging any change/);
  const git = frontmatter(read("skills/engineering/git-workflow-and-versioning/SKILL.md"));
  assert.doesNotMatch(git, /making any code change/);
});

test("attribution, shared references, and operative calls survived the move", () => {
  const license = fs.readFileSync(path.join(referencesDir, "LICENSE"), "utf8");
  assert.match(license, /Copyright \(c\) 2025 Addy Osmani/);
  for (const name of vendored) {
    const dir = path.join(engineering, name);
    assert.match(fs.readFileSync(path.join(dir, "LICENSE"), "utf8"), /Copyright \(c\) 2025 Addy Osmani/);
    const credits = fs.readFileSync(path.join(dir, "CREDITS.md"), "utf8");
    assert.match(credits, new RegExp(upstream));
    assert.match(credits, /https:\/\/github\.com\/addyosmani\/agent-skills/);
  }

  const spec = read("skills/engineering/spec-driven-development/SKILL.md");
  assert.match(spec, /Call the Skill tool with "incremental-implementation"/);
  assert.match(spec, /Call the Skill tool with "context-engineering"/);
  assert.match(spec, /do not call the Skill tool for it/);
  assert.doesNotMatch(spec, /skills\/incremental-implementation\/SKILL\.md/);
  assert.doesNotMatch(spec, /skills\/test-driven-development\/SKILL\.md/);

  const idea = read("skills/engineering/idea-refine/SKILL.md");
  assert.match(idea, /bash skills\/engineering\/idea-refine\/scripts\/idea-refine\.sh/);
  assert.doesNotMatch(idea, /bash skills\/idea-refine\//);
  assert.equal(fs.existsSync(path.join(engineering, "idea-refine", "scripts", "idea-refine.sh")), true);

  const map = read("skills/engineering/using-agent-skills/SKILL.md");
  assert.match(map, /one skill per call/);
  assert.match(map, /Do not run this map at the start of a session/);

  const hardening = read("skills/engineering/security-and-hardening/SKILL.md");
  assert.match(hardening, /Do not start a full audit from here/);
});

test("vendored prose has no em-dash or en-dash and relative links resolve", () => {
  const roots = [referencesDir, ...vendored.map((name) => path.join(engineering, name))];
  for (const root of roots) {
    for (const file of walk(root)) {
      if (!file.endsWith(".md") && !file.endsWith(".sh") && !file.endsWith(".yaml")) continue;
      const text = fs.readFileSync(file, "utf8");
      assert.equal(dash.test(text), false, file);
      if (!file.endsWith(".md")) continue;
      assert.doesNotMatch(text, /\.\.\/\.\.\/references\//, file);
      assert.doesNotMatch(text, /\.\.\/\.\.\/\.\.\/references\//, file);
      for (const link of markdownLinks(text)) {
        if (/^https?:/.test(link)) continue;
        const target = link.split("#")[0];
        if (!target) continue;
        assert.equal(fs.existsSync(path.resolve(path.dirname(file), target)), true, `${file} -> ${link}`);
      }
    }
  }
  assert.equal(dash.test(read(".changeset/agent-skills-lifecycle.md")), false);
  const router = read("skills/engineering/ask-matt/SKILL.md");
  const section = sliceBetween(router, "## Vendored lifecycle", "## Precondition");
  assert.equal(dash.test(section), false);
});

test("ask-matt names the house skill when a vendored twin exists", () => {
  const router = read("skills/engineering/ask-matt/SKILL.md");
  const section = sliceBetween(router, "## Vendored lifecycle", "## Precondition");
  for (const pair of [
    ["/tdd", "/test-driven-development"],
    ["/code-review", "/code-review-and-quality"],
    ["/diagnosing-bugs", "/debugging-and-error-recovery"],
    ["/security-audit", "/security-and-hardening"],
    ["/grill-with-docs", "/interview-me"],
    ["/to-spec", "/spec-driven-development"],
    ["/to-tickets", "/planning-and-task-breakdown"],
    ["/implement", "/incremental-implementation"],
  ]) {
    for (const name of pair) assert.match(section, new RegExp(name.replace("/", "\\/")));
  }
  assert.match(section, /Tell the user to run them/);
  assert.match(section, /Do not call the Skill tool for them/);
  assert.match(read("docs/engineering/ask-matt.md"), /skills-using-agent-skills/);
});

test("each vendored skill has a docs page on the published-page contract", () => {
  const required = ["What it does", "When to reach for it", "It's working if", "Where it fits"];
  for (const name of vendored) {
    const docPath = path.join(repoRoot, "docs", "engineering", `${name}.md`);
    const doc = fs.readFileSync(docPath, "utf8");
    assert.equal(dash.test(doc), false, name);
    assert.doesNotMatch(doc, /^# /m, name);
    assert.doesNotMatch(doc, /Addy|Osmani|Matt Pocock|npx skills|claude plugin install/, name);
    const headings = [...doc.matchAll(/^## (.+)$/gm)].map((match) => match[1]);
    let cursor = -1;
    for (const heading of required) {
      const index = headings.indexOf(heading);
      assert.ok(index > cursor, `${name} missing or mis-ordered ${heading}`);
      cursor = index;
    }
    assert.equal(headings.at(-1), "Where it fits", name);
    const prereq = headings.indexOf("Prerequisites");
    if (prereq !== -1) {
      assert.ok(prereq > headings.indexOf("When to reach for it"), name);
      assert.ok(prereq < headings.indexOf("It's working if"), name);
    }
    const question = headings.indexOf("Common questions");
    if (question !== -1) {
      assert.equal(question, headings.indexOf("It's working if") - 1, name);
    }
    for (const link of markdownLinks(doc)) {
      assert.match(link, /^https:\/\//, `${name} ${link}`);
    }
    assert.match(doc, /https:\/\/aihero\.dev\/skills-ask-matt/, name);
    if (collisions[name]) assert.match(doc, new RegExp(collisions[name]), name);
  }
});
