const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");

const repoRoot = path.join(__dirname, "..");
const upstream = "1a9bde3c514e107cfd790cc82b77be1f53f42b50";
const upstreamUrl = "https://github.com/Unknown-333/awesome-data-engineering-skills";
const copyright = "Copyright 2026 awesome-data-engineering-skills contributors";
const dash = new RegExp("[" + String.fromCharCode(0x2014, 0x2013) + "]");

const NAMES = [
  "authoring-airflow-dags",
  "building-dagster-assets",
  "building-dbt-models",
  "building-feature-pipelines",
  "building-iceberg-tables",
  "building-ingestion-pipelines",
  "debugging-airflow-pipelines",
  "debugging-data-pipelines",
  "debugging-dbt-runs",
  "designing-backfills-and-replays",
  "designing-data-contracts",
  "designing-medallion-architecture",
  "documenting-dbt-models",
  "engineering-databricks-pipelines",
  "generating-synthetic-test-data",
  "handling-schema-evolution",
  "implementing-cdc-with-debezium",
  "implementing-data-cicd",
  "implementing-data-quality-checks",
  "implementing-pipeline-observability",
  "managing-data-lineage-openlineage",
  "masking-pii-data",
  "migrating-legacy-etl",
  "modeling-dimensional-data",
  "optimizing-parquet-storage",
  "optimizing-sql-queries",
  "orchestrating-prefect-flows",
  "processing-streaming-data",
  "reviewing-data-pipeline-code",
  "terraform-for-data-infra",
  "writing-idempotent-transformations",
];

const COLLISIONS = {
  "reviewing-data-pipeline-code": "code-review",
  "debugging-data-pipelines": "diagnosing-bugs",
  "debugging-airflow-pipelines": "diagnosing-bugs",
  "debugging-dbt-runs": "diagnosing-bugs",
  "optimizing-sql-queries": "diagnosing-bugs",
  "optimizing-parquet-storage": "diagnosing-bugs",
  "implementing-data-quality-checks": "tdd",
  "masking-pii-data": "security-audit",
  "modeling-dimensional-data": "domain-modeling",
  "documenting-dbt-models": "writing-for-agents",
  "terraform-for-data-infra": "wizard",
};

const BANNED_DOCS = ["Unknown-333", "timwukp", "Addy", "Osmani", "Matt Pocock", "MLOps", "mlops"];
const SEPARATION = ["MLOps", "mlops", "/ml-security", "/data-ingestion", "/model-training", "/llm-"];

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

function dataSection(router) {
  const standalone = router.indexOf("## Standalone");
  const start = router.indexOf("## Data engineering");
  const end = router.indexOf("## Precondition");
  assert.ok(standalone >= 0 && start > standalone && end > start);
  return router.slice(start, end);
}

test("the data engineering set is promoted once and stays off the other lifecycles", () => {
  const plugin = JSON.parse(read(".claude-plugin/plugin.json"));
  const listed = plugin.skills.slice().sort();
  assert.deepEqual(listed, promotedSkillDirs());
  assert.equal(plugin.skills.length, 96);
  assert.equal(plugin.keywords.includes("data-engineering"), true);
  assert.match(plugin.description, /data engineering set/);

  for (const name of NAMES) {
    const entry = `./skills/engineering/${name}`;
    assert.equal(plugin.skills.filter((item) => item === entry).length, 1, name);
    const skill = read(`skills/engineering/${name}/SKILL.md`);
    assert.match(skill, new RegExp("^name:\\s*" + name + "$", "m"));
    assert.match(skill, /^description:\s*"/m);
    assert.doesNotMatch(skill, /disable-model-invocation/);
    assert.match(skill, new RegExp(upstream));
    assert.match(skill, /metadata:/);
    assert.match(skill, new RegExp(upstreamUrl.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")));
    for (const phrase of SEPARATION) {
      assert.equal(skill.includes(phrase), false, `${name} contains ${phrase}`);
    }
    if (COLLISIONS[name]) {
      assert.match(skill, /House boundary:/);
    }

    const openai = read(`skills/engineering/${name}/agents/openai.yaml`);
    assert.match(openai, /display_name:\s*"/);
    assert.doesNotMatch(openai, /allow_implicit_invocation/);
    const short = openai.match(/short_description:\s*"(.*)"/);
    assert.ok(short, name);
    assert.ok(short[1].length > 0 && short[1].length <= 60, name);

    const license = read(`skills/engineering/${name}/LICENSE`);
    assert.match(license, /Apache License/);
    assert.match(license, /Version 2\.0/);
    assert.match(license, new RegExp(copyright));
    const credits = read(`skills/engineering/${name}/CREDITS.md`);
    assert.match(credits, new RegExp(upstream));
    assert.match(credits, /does not route into any other vendored lifecycle/);
  }

  const lineage = read("skills/engineering/managing-data-lineage-openlineage/agents/openai.yaml");
  assert.match(lineage, /display_name:\s*"Managing Data Lineage with OpenLineage"/);
  const cdc = read("skills/engineering/implementing-cdc-with-debezium/agents/openai.yaml");
  assert.match(cdc, /display_name:\s*"Implementing CDC with Debezium"/);

  assert.match(read(".agents/install-block.md"), /exactly the promoted set \(96 skills\)/);
  assert.match(read(".claude-plugin/marketplace.json"), /data engineering set/);
  const changeset = read(".changeset/data-engineering-skills.md");
  assert.match(changeset, /31 skills/);
  assert.match(changeset, /does not include any other vendored lifecycle/);
  assert.equal(dash.test(changeset), false);
});

test("catalog pages list every data skill as model-invoked", () => {
  const topEngineering = sliceBetween(read("README.md"), "### Engineering", "### Productivity");
  const topModel = sliceBetween(topEngineering, "**Model-invoked**", null);
  const topUser = sliceBetween(topEngineering, "**User-invoked**", "**Model-invoked**");
  const bucket = read("skills/engineering/README.md");
  const bucketModel = sliceBetween(bucket, "## Model-invoked", null);
  const bucketUser = sliceBetween(bucket, "## User-invoked", "## Model-invoked");

  for (const name of NAMES) {
    assert.match(topModel, new RegExp(name));
    assert.doesNotMatch(topUser, new RegExp(name));
    assert.match(bucketModel, new RegExp(name));
    assert.doesNotMatch(bucketUser, new RegExp(name));
    assert.match(read("README.md"), new RegExp("\\]\\(\\./skills/engineering/" + name + "/SKILL\\.md\\)"));
    assert.match(bucket, new RegExp("\\]\\(\\./" + name + "/SKILL\\.md\\)"));
  }
});

test("ask-matt routes data work separately from application work", () => {
  const router = read("skills/engineering/ask-matt/SKILL.md");
  const section = dataSection(router);
  const enDash = String.fromCharCode(0x2013);
  assert.match(router, new RegExp("Keep steps 1" + enDash + "3"));
  assert.equal(dash.test(section), false);
  assert.match(section, /Call the Skill tool with one name per call/);
  assert.match(section, /\/code-review/);
  assert.match(section, /\/reviewing-data-pipeline-code/);
  assert.match(section, /\/tdd/);
    assert.match(section, /\/diagnosing-bugs/);
  assert.match(section, /\/debugging-data-pipelines/);
  assert.match(section, /\/security-audit/);
  assert.match(section, /\/masking-pii-data/);
  for (const phrase of SEPARATION) {
    assert.equal(section.includes(phrase), false, phrase);
  }

  const docs = read("docs/engineering/ask-matt.md");
  assert.match(docs, /There are eight kinds of route/);
  assert.match(docs, /The data engineering set/);
  assert.match(docs, /Sixteen of the plugin's ninety-six skills/);
  assert.match(docs, /skills-modeling-dimensional-data/);
  assert.match(docs, /skills-designing-medallion-architecture/);
  for (const phrase of ["MLOps", "mlops"]) {
    assert.equal(docs.includes(phrase), false);
  }
});

test("docs pages follow the published-page contract", () => {
  const required = ["What it does", "When to reach for it", "It's working if", "Where it fits"];
  for (const name of NAMES) {
    const doc = read(`docs/engineering/${name}.md`);
    assert.doesNotMatch(doc, /^# /m);
    assert.doesNotMatch(doc, /npx skills|claude plugin install|gemini skills install/);
    assert.match(doc, new RegExp("Type `/" + name + "`"));
    assert.match(doc, /https:\/\/www\.aihero\.dev\/ai-coding-dictionary\/agent/);
    assert.match(doc, /https:\/\/aihero\.dev\/skills-ask-matt/);
    for (const banned of BANNED_DOCS) {
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
    } else {
      assert.equal(headings.includes("Common questions"), false, name);
    }
    for (const link of markdownLinks(doc)) {
      assert.match(link, /^https:\/\//, `${name} docs link is not absolute: ${link}`);
    }
    assert.equal(dash.test(doc), false, name);
  }
});

test("skill markdown links resolve and the vendored prose has no dash", () => {
  for (const name of NAMES) {
    const dir = path.join(repoRoot, "skills", "engineering", name);
    for (const file of walk(dir, (entry) => entry.endsWith(".md") || entry.endsWith(".yaml"))) {
      const text = fs.readFileSync(file, "utf8");
      assert.equal(dash.test(text), false, file);
      if (!file.endsWith(".md")) continue;
      for (const link of markdownLinks(text)) {
        if (/^https?:/.test(link)) continue;
        const target = link.split("#")[0];
        if (!target) continue;
        assert.equal(
          fs.existsSync(path.resolve(path.dirname(file), target)),
          true,
          `${file} -> ${link}`,
        );
      }
    }
  }
});

test("neighbour pages point at the data skill and leave application work alone", () => {
  assert.match(read("docs/engineering/code-review.md"), /skills-reviewing-data-pipeline-code/);
  assert.match(read("docs/engineering/diagnosing-bugs.md"), /skills-debugging-data-pipelines/);
    assert.match(read("docs/engineering/tdd.md"), /skills-implementing-data-quality-checks/);
  assert.match(read("docs/engineering/security-audit.md"), /skills-masking-pii-data/);
  assert.match(read("docs/engineering/domain-modeling.md"), /skills-modeling-dimensional-data/);
  assert.match(read("docs/engineering/wizard.md"), /skills-terraform-for-data-infra/);
  assert.match(read("docs/productivity/writing-for-agents.md"), /skills-documenting-dbt-models/);
  const features = read("docs/engineering/building-feature-pipelines.md");
  assert.match(features, /warehouse/);
  assert.equal(features.includes("mlops"), false);
});
