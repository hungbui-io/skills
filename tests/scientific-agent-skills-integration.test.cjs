const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");

const repoRoot = path.join(__dirname, "..");
const upstream = "5f2bc0341354fd5590aef76a533ada1e1e5b4e62";
const upstreamUrl = "https://github.com/K-Dense-AI/scientific-agent-skills";
const copyright = "Copyright (c) 2025 K-Dense Inc.";
const dash = new RegExp("[" + String.fromCharCode(0x2014, 0x2013) + "]");
const excluded = ["adaptyv", "ginkgo-cloud-lab", "what-if-oracle", "deepspot-m"];

const COLLISIONS = {
  "literature-review": "research",
  "research-lookup": "research",
  "paper-lookup": "research",
  "citation-management": "research",
  "bgpt-paper-search": "research",
  "scholar-evaluation": "research",
  "exa-search": "research",
  "parallel-web": "research",
  "paperclip": "research",
  "paperzilla": "research",
  "scientific-writing": "writing-for-agents",
  "markdown-mermaid-writing": "writing-for-agents",
  "venue-templates": "writing-for-agents",
  "peer-review": "code-review",
  "experimental-design": "codebase-design",
  "hypothesis-generation": "grill-with-docs",
  "scientific-brainstorming": "grill-with-docs",
};

function read(relativePath) {
  return fs.readFileSync(path.join(repoRoot, relativePath), "utf8");
}

function walk(dir, predicate, out = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, predicate, out);
    else if (predicate(entry.name)) out.push(full);
  }
  return out;
}

function markdownLinks(text) {
  const prose = text.replace(/```[\s\S]*?```/g, "").replace(/`[^`\n]*`/g, "");
  return [...prose.matchAll(/\[[^\]]*\]\(([^)]+)\)/g)].map((match) => match[1]);
}

function sliceBetween(text, startMarker, endMarker) {
  const start = text.indexOf(startMarker);
  assert.ok(start >= 0, `missing marker ${startMarker}`);
  const from = start + startMarker.length;
  const end = endMarker ? text.indexOf(endMarker, from) : text.length;
  assert.ok(end >= 0, `missing end marker ${endMarker}`);
  return text.slice(from, end);
}

function promotedSkillDirs() {
  const dirs = [];
  for (const bucket of ["engineering", "productivity"]) {
    const bucketDir = path.join(repoRoot, "skills", bucket);
    for (const name of fs.readdirSync(bucketDir)) {
      if (fs.existsSync(path.join(bucketDir, name, "SKILL.md"))) {
        dirs.push(`./skills/${bucket}/${name}`);
      }
    }
  }
  return dirs.sort();
}

function scientificNames() {
  const engineering = path.join(repoRoot, "skills", "engineering");
  return fs.readdirSync(engineering).filter((name) => {
    const skill = path.join(engineering, name, "SKILL.md");
    return fs.existsSync(skill) && fs.readFileSync(skill, "utf8").includes(upstream);
  }).sort();
}

function scientificSection(router) {
  const start = router.indexOf("## Scientific skills");
  const end = router.indexOf("## Precondition");
  assert.ok(start >= 0 && end > start);
  return router.slice(start, end);
}

test("the scientific set is promoted once and leaves out the excluded skills", () => {
  const names = scientificNames();
  assert.equal(names.length, 173);
  const plugin = JSON.parse(read(".claude-plugin/plugin.json"));
  assert.deepEqual(plugin.skills.slice().sort(), promotedSkillDirs());
  assert.equal(plugin.skills.length, 201);
  assert.equal(plugin.keywords.includes("science"), true);
  assert.match(plugin.description, /scientific skill set/);

  for (const name of excluded) {
    assert.equal(names.includes(name), false, name);
    assert.equal(fs.existsSync(path.join(repoRoot, "skills", "engineering", name)), false, name);
    assert.equal(fs.existsSync(path.join(repoRoot, "docs", "engineering", name + ".md")), false, name);
    assert.equal(plugin.skills.some((entry) => entry.endsWith("/" + name)), false, name);
  }

  for (const name of names) {
    const entry = `./skills/engineering/${name}`;
    assert.equal(plugin.skills.filter((item) => item === entry).length, 1, name);
    const skill = read(`skills/engineering/${name}/SKILL.md`);
    assert.match(skill, new RegExp("^name:\\s*" + name + "$", "m"));
    assert.match(skill, /^description:\s*"/m);
    assert.doesNotMatch(skill, /disable-model-invocation/);
    assert.match(skill, new RegExp(upstream));
    assert.match(skill, new RegExp(upstreamUrl.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")));
    const openai = read(`skills/engineering/${name}/agents/openai.yaml`);
    assert.match(openai, /display_name:\s*"/);
    assert.doesNotMatch(openai, /allow_implicit_invocation/);
    const short = openai.match(/short_description:\s*"(.*)"/);
    assert.ok(short, name);
    assert.ok(short[1].length > 0 && short[1].length <= 60, name);
    const license = read(`skills/engineering/${name}/LICENSE`);
    assert.match(license, /MIT License/);
    assert.match(license, new RegExp(copyright.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")));
    const credits = read(`skills/engineering/${name}/CREDITS.md`);
    assert.match(credits, new RegExp(upstream));
    assert.match(credits, /does not route into any other vendored lifecycle/);
    if (COLLISIONS[name]) assert.match(skill, /House boundary:/);
  }

  assert.match(read(".agents/install-block.md"), /exactly the promoted set \(201 skills\)/);
  assert.match(read(".claude-plugin/marketplace.json"), /scientific skill set/);
  const changeset = read(".changeset/scientific-agent-skills.md");
  assert.match(changeset, /173 skills/);
  assert.match(changeset, /nucleic acid synthesis and protein expression is not included/);
  assert.match(changeset, /noncommercial/);
  assert.equal(dash.test(changeset), false);
});

test("catalog pages list every scientific skill as model-invoked", () => {
  const names = scientificNames();
  const topEngineering = sliceBetween(read("README.md"), "### Engineering", "### Productivity");
  const topModel = sliceBetween(topEngineering, "**Model-invoked**", null);
  const topUser = sliceBetween(topEngineering, "**User-invoked**", "**Model-invoked**");
  const bucket = read("skills/engineering/README.md");
  const bucketModel = sliceBetween(bucket, "## Model-invoked", null);
  const bucketUser = sliceBetween(bucket, "## User-invoked", "## Model-invoked");
  for (const name of names) {
    assert.match(topModel, new RegExp(name));
    assert.doesNotMatch(topUser, new RegExp(name));
    assert.match(bucketModel, new RegExp(name));
    assert.doesNotMatch(bucketUser, new RegExp(name));
    assert.match(read("README.md"), new RegExp("\\]\\(\\./skills/engineering/" + name + "/SKILL\\.md\\)"));
    assert.match(bucket, new RegExp("\\]\\(\\./" + name + "/SKILL\\.md\\)"));
  }
});

test("ask-matt routes scientific work separately from application work", () => {
  const router = read("skills/engineering/ask-matt/SKILL.md");
  const section = scientificSection(router);
  const enDash = String.fromCharCode(0x2013);
  assert.match(router, new RegExp("Keep steps 1" + enDash + "3"));
  assert.equal(dash.test(section), false);
  assert.match(section, /Call the Skill tool with one name per call/);
  assert.match(section, /\/research/);
  assert.match(section, /\/literature-review/);
  assert.match(section, /\/code-review/);
  assert.match(section, /\/peer-review/);
  assert.match(section, /\/writing-for-agents/);
  assert.match(section, /\/scientific-writing/);
  assert.match(section, /tell the user to run `\/grill-with-docs`/);
  for (const phrase of ["MLOps", "mlops", "ginkgo", "adaptyv", "what-if-oracle", "deepspot-m", "data engineering"]) {
    assert.equal(section.toLowerCase().includes(phrase.toLowerCase()), false, phrase);
  }
  const docs = read("docs/engineering/ask-matt.md");
  assert.match(docs, /There are six kinds of route/);
  assert.match(docs, /The scientific set/);
  assert.match(docs, /Sixteen of the plugin's two-hundred-one skills/);
  assert.equal(docs.includes("MLOps") || docs.includes("mlops"), false);
});

test("docs pages follow the published-page contract", () => {
  const required = ["What it does", "When to reach for it", "It's working if", "Where it fits"];
  for (const name of scientificNames()) {
    const doc = read(`docs/engineering/${name}.md`);
    assert.doesNotMatch(doc, /^# /m, name);
    assert.doesNotMatch(doc, /npx skills|claude plugin install|gemini skills install/, name);
    assert.match(doc, new RegExp("Type `/" + name + "`"));
    assert.match(doc, /https:\/\/www\.aihero\.dev\/ai-coding-dictionary\/agent/);
    assert.match(doc, /https:\/\/aihero\.dev\/skills-ask-matt/);
    for (const banned of ["K-Dense", "Matt Pocock", "MLOps", "mlops"]) {
      assert.equal(doc.includes(banned), false, `${name} docs contain ${banned}`);
    }
    const headings = [...doc.matchAll(/^## (.+)$/gm)].map((match) => match[1]);
    let cursor = -1;
    for (const heading of required) {
      const index = headings.indexOf(heading);
      assert.ok(index > cursor, `${name} missing or mis-ordered heading: ${heading}`);
      cursor = index;
    }
    assert.equal(headings.includes("Prerequisites"), false, name);
    if (COLLISIONS[name]) {
      assert.ok(headings.includes("Common questions"), name);
      assert.match(doc, /How is this different from/);
      assert.match(doc, new RegExp("https://aihero.dev/skills-" + COLLISIONS[name]));
    }
    for (const link of markdownLinks(doc)) {
      assert.match(link, /^https:\/\//, `${name} docs link is not absolute: ${link}`);
    }
    assert.equal(dash.test(doc), false, name);
  }
});

test("skill markdown links resolve and the vendored prose has no dash", () => {
  for (const name of scientificNames()) {
    const dir = path.join(repoRoot, "skills", "engineering", name);
    for (const file of walk(dir, (entry) => entry.endsWith(".md") || entry.endsWith(".yaml"))) {
      const text = fs.readFileSync(file, "utf8");
      assert.equal(dash.test(text), false, file);
      if (!file.endsWith(".md")) continue;
      for (const link of markdownLinks(text)) {
        if (/^[a-z][a-z0-9+.-]*:/i.test(link)) continue;
        const target = link.split("#")[0];
        if (!target || (!target.includes("/") && !/\.[A-Za-z0-9]+$/.test(target))) continue;
        assert.equal(fs.existsSync(path.resolve(path.dirname(file), target)), true, `${file} -> ${link}`);
      }
    }
  }
});

test("neighbour pages point at the scientific skill for that job", () => {
  assert.match(read("docs/engineering/research.md"), /skills-literature-review/);
  assert.match(read("docs/engineering/code-review.md"), /skills-peer-review/);
  assert.match(read("docs/engineering/codebase-design.md"), /skills-experimental-design/);
  assert.match(read("docs/productivity/writing-for-agents.md"), /skills-scientific-writing/);
});
