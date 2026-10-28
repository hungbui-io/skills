const assert = require("node:assert/strict");
const { execFileSync } = require("node:child_process");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");

const repoRoot = path.join(__dirname, "..");
const engineering = path.join(repoRoot, "skills", "engineering");
const dash = /[\u2014\u2013]/;

const skills = [
  "data-ingestion",
  "data-validation",
  "feature-engineering",
  "feature-store",
  "llm-agent-orchestration",
  "llm-cost-optimization",
  "llm-data-preparation",
  "llm-deployment",
  "llm-distillation",
  "llm-evaluation",
  "llm-fine-tuning",
  "llm-guardrails",
  "llm-observability",
  "llm-prompt-engineering",
  "llm-rag",
  "ml-cicd",
  "ml-cost-optimization",
  "ml-experiment-tracking",
  "ml-pipeline-orchestration",
  "ml-security",
  "ml-solution-design",
  "ml-testing",
  "model-drift-detection",
  "model-monitoring",
  "model-observability",
  "model-registry",
  "model-serving",
  "model-training",
];

const collisions = {
  "ml-security": "skills-security-audit",
  "ml-testing": "skills-tdd",
  "ml-cicd": "skills-ci-cd-and-automation",
  "model-monitoring": "skills-observability-and-instrumentation",
  "model-observability": "skills-observability-and-instrumentation",
  "llm-observability": "skills-observability-and-instrumentation",
  "llm-guardrails": "skills-security-and-hardening",
  "model-serving": "skills-shipping-and-launch",
  "llm-deployment": "skills-shipping-and-launch",
  "ml-solution-design": "skills-to-spec",
  "llm-agent-orchestration": "skills-using-agent-skills",
  "llm-prompt-engineering": "skills-writing-for-agents",
  "ml-cost-optimization": "skills-performance-optimization",
  "llm-cost-optimization": "skills-performance-optimization",
  "llm-evaluation": "skills-tdd",
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

function markdownLinks(text) {
  return [...text.matchAll(/\[[^\]]*\]\(([^)]+)\)/g)].map((match) => match[1]);
}

test("the ML and LLM lifecycle is promoted once and stays model-invoked", () => {
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
  for (const name of skills) {
    assert.equal(plugin.skills.filter((entry) => entry === `./skills/engineering/${name}`).length, 1, name);
  }
  assert.match(read(".agents/install-block.md"), /exactly the promoted set \(81 skills\)/);
  assert.match(plugin.description, /ML and LLM lifecycle/);
  assert.equal(plugin.keywords.includes("mlops"), true);

  for (const name of skills) {
    const skillPath = path.join(engineering, name, "SKILL.md");
    const text = fs.readFileSync(skillPath, "utf8");
    const matter = frontmatter(text);
    assert.match(matter, new RegExp(`^name: ${name}$`, "m"));
    assert.doesNotMatch(matter, /disable-model-invocation/);
    assert.match(matter, /author: timwukp/);
    assert.match(matter, /https:\/\/github\.com\/timwukp\/MLOps-agent-skills/);
    if (collisions[name]) assert.match(matter, /House boundary:/);
    const openai = fs.readFileSync(path.join(engineering, name, "agents", "openai.yaml"), "utf8");
    assert.match(openai, /display_name:/);
    assert.match(openai, /short_description:/);
    assert.doesNotMatch(openai, /allow_implicit_invocation:\s*false/);
    const license = fs.readFileSync(path.join(engineering, name, "LICENSE"), "utf8");
    assert.match(license, /Apache License/);
    assert.match(license, /Version 2\.0/);
    const credits = fs.readFileSync(path.join(engineering, name, "CREDITS.md"), "utf8");
    assert.match(credits, /6426013a15ee0e431dbb81938deac2f6e25c0941/);
    assert.equal(fs.readdirSync(path.join(engineering, name, "scripts")).length > 0, true, name);
    assert.equal(fs.readdirSync(path.join(engineering, name, "references")).length > 0, true, name);
  }
});

test("vendored ML trees keep their contract and have no old paths or dashes", () => {
  for (const name of skills) {
    const root = path.join(engineering, name);
    for (const file of walk(root)) {
      if (!file.endsWith(".md") && !file.endsWith(".py") && !file.endsWith(".yaml")) continue;
      const text = fs.readFileSync(file, "utf8");
      assert.equal(dash.test(text), false, file);
      assert.equal(text.includes("skills/mlops/"), false, file);
      assert.equal(text.includes("skills/llmops/"), false, file);
      if (file.endsWith(".py")) {
        execFileSync(
          "python3",
          ["-c", "import py_compile,sys; py_compile.compile(sys.argv[1], cfile='/tmp/mlops-pyc.pyc', doraise=True)", file],
          { stdio: "pipe" },
        );
      }
      if (!file.endsWith(".md")) continue;
      for (const link of markdownLinks(text)) {
        if (/^https?:/.test(link)) continue;
        const target = link.split("#")[0];
        if (!target) continue;
        assert.equal(fs.existsSync(path.resolve(path.dirname(file), target)), true, `${file} -> ${link}`);
      }
    }
  }

  for (const name of ["model-serving", "model-training", "model-monitoring"]) {
    const text = read(`skills/engineering/${name}/SKILL.md`);
    assert.match(text, /skills\/engineering\/model-registry\/references\/ARTIFACT_CONTRACT\.md/);
  }
  assert.match(read("skills/engineering/llm-prompt-engineering/SKILL.md"), /def build_safe_prompt/);
  assert.equal(fs.existsSync(path.join(engineering, "llm-guardrails", "scripts", "red_team.py")), true);
  assert.equal(fs.existsSync(path.join(engineering, "ml-security", "scripts", "security_scan.py")), true);
  assert.equal(dash.test(read(".changeset/mlops-agent-skills.md")), false);
});

test("ask-matt routes ordinary software to the house skill and model work to this lifecycle", () => {
  const section = sliceBetween(read("skills/engineering/ask-matt/SKILL.md"), "## ML and LLM lifecycle", "## Precondition");
  assert.equal(dash.test(section), false);
  for (const pair of [
    ["/tdd", "/ml-testing"],
    ["/security-audit", "/ml-security"],
    ["/observability-and-instrumentation", "/model-monitoring"],
    ["/shipping-and-launch", "/model-serving"],
    ["/ci-cd-and-automation", "/ml-cicd"],
    ["/performance-optimization", "/ml-cost-optimization"],
    ["/writing-for-agents", "/llm-prompt-engineering"],
  ]) {
    for (const name of pair) assert.match(section, new RegExp(name.replace("/", "\\/")));
  }
  assert.match(section, /tell the user to run it/);
  assert.match(section, /only the user runs it/);
  assert.match(section, /skills\/engineering\/model-registry\/references\/ARTIFACT_CONTRACT\.md/);
  const docs = read("docs/engineering/ask-matt.md");
  assert.match(docs, /seven kinds of route/);
  assert.match(docs, /eighty-one/);
  assert.match(docs, /skills-ml-solution-design/);
  assert.match(docs, /skills-llm-data-preparation/);
});

test("catalog pages put every ML skill on the model-invoked side", () => {
  const top = sliceBetween(read("README.md"), "### Engineering", "### Productivity");
  const topUser = sliceBetween(top, "**User-invoked**", "**Model-invoked**");
  const topModel = sliceBetween(top, "**Model-invoked**", null);
  const bucket = read("skills/engineering/README.md");
  const bucketUser = sliceBetween(bucket, "## User-invoked", "## Model-invoked");
  const bucketModel = sliceBetween(bucket, "## Model-invoked", null);
  for (const name of skills) {
    assert.equal(topUser.includes(name), false, `top user ${name}`);
    assert.equal(topModel.includes(name), true, `top model ${name}`);
    assert.equal(bucketUser.includes(name), false, `bucket user ${name}`);
    assert.equal(bucketModel.includes(name), true, `bucket model ${name}`);
    assert.match(read("README.md"), new RegExp(`\\]\\(\\./skills/engineering/${name}/SKILL\\.md\\)`));
    assert.match(bucket, new RegExp(`\\]\\(\\./${name}/SKILL\\.md\\)`));
  }
});

test("each ML skill has a docs page on the published-page contract", () => {
  const required = ["What it does", "When to reach for it", "It's working if", "Where it fits"];
  for (const name of skills) {
    const doc = read(`docs/engineering/${name}.md`);
    assert.equal(dash.test(doc), false, name);
    assert.doesNotMatch(doc, /^# /m, name);
    assert.doesNotMatch(doc, /timwukp|Addy|Osmani|Matt Pocock|npx skills|claude plugin install/, name);
    const headings = [...doc.matchAll(/^## (.+)$/gm)].map((match) => match[1]);
    let cursor = -1;
    for (const heading of required) {
      const index = headings.indexOf(heading);
      assert.ok(index > cursor, `${name} missing or mis-ordered ${heading}`);
      cursor = index;
    }
    if (collisions[name]) {
      const questions = headings.indexOf("Common questions");
      assert.ok(questions > headings.indexOf("When to reach for it"), name);
      assert.ok(questions < headings.indexOf("It's working if"), name);
      assert.match(doc, new RegExp(`https://aihero\\.dev/${collisions[name]}`));
    } else {
      assert.equal(headings.includes("Common questions"), false, name);
    }
    for (const link of markdownLinks(doc)) {
      assert.match(link, /^https:\/\//, `${name} docs link is not absolute: ${link}`);
    }
    assert.match(doc, /https:\/\/aihero\.dev\/skills-ask-matt/);
    assert.match(doc, new RegExp("Type `/" + name + "`"));
  }
});
