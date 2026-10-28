<p>
  <a href="https://www.aihero.dev/s/skills-newsletter">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://res.cloudinary.com/total-typescript/image/upload/v1777382277/skills-repo-dark_2x.png">
      <source media="(prefers-color-scheme: light)" srcset="https://res.cloudinary.com/total-typescript/image/upload/v1777382277/skill-repo-light_2x.png">
      <img alt="Skills" src="https://res.cloudinary.com/total-typescript/image/upload/v1777382277/skill-repo-light_2x.png" width="369">
    </picture>
  </a>
</p>

# Skills For Real Engineers

[![skills.sh](https://skills.sh/b/mattpocock/skills)](https://skills.sh/mattpocock/skills)

My agent skills that I use every day to do real engineering - not vibe coding.

Developing real applications is hard. Approaches like GSD, BMAD, and Spec-Kit try to help by owning the process. But while doing so, they take away your control and make bugs in the process hard to resolve.

These skills are designed to be small, easy to adapt, and composable. They work with any model. They're based on decades of engineering experience. Hack around with them. Make them your own. Enjoy.

If you want to keep up with changes to these skills, and any new ones I create, you can join ~60,000 other devs on my newsletter:

[Sign Up To The Newsletter](https://www.aihero.dev/s/skills-newsletter)

## Installation (30-second setup)

A plugin updates itself. [skills.sh](https://skills.sh/mattpocock/skills) copies editable files into your project, and you update them by hand. Pick one per agent, because installing both gives you every skill twice.

### 1. Get the skills

<details>
<summary><strong>Claude Code</strong></summary>

```bash
claude plugin install mattpocock-skills@claude-plugins-official
```

Updates itself by default.

</details>

<details>
<summary><strong>Codex</strong></summary>

```bash
codex plugin marketplace add mattpocock/skills
codex plugin add mattpocock-skills@mattpocock
```

Updates itself at startup.

</details>

<details>
<summary><strong>GitHub Copilot</strong> (CLI and VS Code)</summary>

```bash
copilot plugin marketplace add mattpocock/skills
copilot plugin install mattpocock-skills@mattpocock
```

Then, once, add to `~/.copilot/settings.json`:

```json
{
  "extraKnownMarketplaces": {
    "mattpocock": { "source": { "source": "github", "repo": "mattpocock/skills" }, "autoUpdate": true }
  }
}
```

In VS Code, run **Chat: Install Plugin From Source** and enter `https://github.com/mattpocock/skills`. It updates daily.

</details>

<details>
<summary><strong>Gemini CLI</strong> (manual updates)</summary>

```bash
gemini skills install https://github.com/mattpocock/skills.git --path skills/engineering
gemini skills install https://github.com/mattpocock/skills.git --path skills/productivity
```

Re-run both commands to update.

</details>

<details>
<summary><strong>Any other agent, or editable files</strong> (manual updates)</summary>

```bash
npx skills@latest add mattpocock/skills -a <agent>  # cursor, opencode, devin, windsurf, amp, pi; omit -a to choose
```

When the installer asks which skills to take, include `setup-matt-pocock-skills`. To update, run `npx skills@latest update`, and re-run `add` to pick up new skills.

</details>

### 2. Run `/setup-matt-pocock-skills`

In your agent, run it once per repo. It will:

- Ask you which issue tracker you want to use (GitHub, GitLab, local files, or anything else you describe)
- Ask you what labels you apply to tickets when you triage them (`/triage` uses labels)
- Ask you where you want to save any docs we create

### 3. Bam - you're ready to go.

## Why These Skills Exist

I built these skills as a way to fix common failure modes I see with Claude Code, Codex, and other coding agents.

### #1: The Agent Didn't Do What I Want

> "No-one knows exactly what they want"
>
> David Thomas & Andrew Hunt, [The Pragmatic Programmer](https://www.amazon.co.uk/Pragmatic-Programmer-Anniversary-Journey-Mastery/dp/B0833F1T3V)

**The Problem**. The most common failure mode in software development is misalignment. You think the dev knows what you want. Then you see what they've built - and you realize it didn't understand you at all.

This is just the same in the AI age. There is a communication gap between you and the agent. The fix for this is a **grilling session** - getting the agent to ask you detailed questions about what you're building.

**The Fix** is to use:

- [`/grill-me`](./skills/productivity/grill-me/SKILL.md) - for non-code uses
- [`/grill-with-docs`](./skills/engineering/grill-with-docs/SKILL.md) - same as [`/grill-me`](./skills/productivity/grill-me/SKILL.md), but adds more goodies (see below)

These are my most popular skills. They help you align with the agent before you get started, and think deeply about the change you're making. Use them _every_ time you want to make a change.

### #2: The Agent Is Way Too Verbose

> With a ubiquitous language, conversations among developers and expressions of the code are all derived from the same domain model.
>
> Eric Evans, [Domain-Driven-Design](https://www.amazon.co.uk/Domain-Driven-Design-Tackling-Complexity-Software/dp/0321125215)

**The Problem**: At the start of a project, devs and the people they're building the software for (the domain experts) are usually speaking different languages.

I felt the same tension with my agents. Agents are usually dropped into a project and asked to figure out the jargon as they go. So they use 20 words where 1 will do.

**The Fix** for this is a shared language. It's a document that helps agents decode the jargon used in the project.

<details>
<summary>
Example
</summary>

Here's an example [glossary](https://github.com/mattpocock/course-video-manager/blob/076a5a7a182db0fe1e62971dd7a68bcadf010f1c/CONTEXT.md) (still named `CONTEXT.md` at that pinned commit, from before the skills renamed the convention), from my `course-video-manager` repo. Which one is easier to read?

- **BEFORE**: "There's a problem when a lesson inside a section of a course is made 'real' (i.e. given a spot in the file system)"
- **AFTER**: "There's a problem with the materialization cascade"

This concision pays off session after session.

</details>

This is built into [`/grill-with-docs`](./skills/engineering/grill-with-docs/SKILL.md). It's a grilling session, but that helps you build a shared language with the AI, and document hard-to-explain decisions in ADR's.

It's hard to explain how powerful this is. It might be the single coolest technique in this repo. Try it, and see.

> [!TIP]
> A shared language has many other benefits than reducing verbosity:
>
> - **Variables, functions and files are named consistently**, using the shared language
> - As a result, the **codebase is easier to navigate** for the agent
> - The agent also **spends fewer tokens on thinking**, because it has access to a more concise language

### #3: The Code Doesn't Work

> "Always take small, deliberate steps. The rate of feedback is your speed limit. Never take on a task that’s too big."
>
> David Thomas & Andrew Hunt, [The Pragmatic Programmer](https://www.amazon.co.uk/Pragmatic-Programmer-Anniversary-Journey-Mastery/dp/B0833F1T3V)

**The Problem**: Let's say that you and the agent are aligned on what to build. What happens when the agent _still_ produces crap?

It's time to look at your feedback loops. Without feedback on how the code it produces actually runs, the agent will be flying blind.

**The Fix**: You need the usual tranche of feedback loops: static types, browser access, and automated tests.

For automated tests, a red-green-refactor loop is critical. This is where the agent writes a failing test first, then fixes the test. This helps give the agent a consistent level of feedback that results in far better code.

I've built a **[`/tdd`](./skills/engineering/tdd/SKILL.md) skill** you can slot into any project. It encourages red-green-refactor and gives the agent plenty of guidance on what makes good and bad tests.

For debugging, I've also built a **[`/diagnosing-bugs`](./skills/engineering/diagnosing-bugs/SKILL.md)** skill that wraps best debugging practices into a disciplined loop, gated phase by phase.

### #4: We Built A Ball Of Mud

> "Invest in the design of the system _every day_."
>
> Kent Beck, [Extreme Programming Explained](https://www.amazon.co.uk/Extreme-Programming-Explained-Embrace-Change/dp/0321278658)

> "The best modules are deep. They allow a lot of functionality to be accessed through a simple interface."
>
> John Ousterhout, [A Philosophy Of Software Design](https://www.amazon.co.uk/Philosophy-Software-Design-2nd/dp/173210221X)

**The Problem**: Most apps built with agents are complex and hard to change. Because agents can radically speed up coding, they also accelerate software entropy. Codebases get more complex at an unprecedented rate.

**The Fix** for this is a radical new approach to AI-powered development: caring about the design of the code.

This is built in to every layer of these skills:

- [`/to-spec`](./skills/engineering/to-spec/SKILL.md) quizzes you about which modules you're touching before creating a spec

And crucially, [`/improve-codebase-architecture`](./skills/engineering/improve-codebase-architecture/SKILL.md) surveys a codebase for deepening opportunities and hands you the candidates. I recommend running it on your codebase once every few days. It is a survey, not a rescue: on a genuinely old codebase it will find real candidates, but it won't untangle the mud for you.

### Summary

Software engineering fundamentals matter more than ever. These skills are my best effort at condensing these fundamentals into repeatable practices, to help you ship the best apps of your career. Enjoy.

## Reference

These split on one axis: who can invoke them. **User-invoked** skills are reachable only when you type them (e.g. `/grill-me`); their job is to orchestrate. **Model-invoked** skills can be invoked by you _or_ reached for automatically by the agent when the task fits; they hold the reusable discipline. A user-invoked skill may invoke model-invoked skills, but never another user-invoked one.

### Engineering

Skills I use daily for code work.

**User-invoked**

- **[ask-matt](./skills/engineering/ask-matt/SKILL.md)**: Ask which skill or flow fits your situation. A router over the user-invoked skills in this repo.
- **[grill-with-docs](./skills/engineering/grill-with-docs/SKILL.md)**: Grilling session that also builds your project's domain model, sharpening terminology and updating `GLOSSARY.md` and ADRs inline.
- **[triage](./skills/engineering/triage/SKILL.md)**: Move issues through a state machine of triage roles.
- **[improve-codebase-architecture](./skills/engineering/improve-codebase-architecture/SKILL.md)**: Scan a codebase for deepening opportunities, present them as a visual HTML report, then grill through whichever one you pick.
- **[setup-matt-pocock-skills](./skills/engineering/setup-matt-pocock-skills/SKILL.md)**: Configure this repo for the engineering skills (issue tracker, triage labels, domain doc layout). Run once per repo before using the other engineering skills.
- **[to-spec](./skills/engineering/to-spec/SKILL.md)**: Turn the current conversation into a spec and publish it to the issue tracker. No interview, just synthesizes what you've already discussed.
- **[to-tickets](./skills/engineering/to-tickets/SKILL.md)**: Break any plan, spec, or conversation into a set of tracer-bullet tickets, each declaring its blocking edges, written as text in a local file, or as native blocking links on a real tracker.
- **[implement](./skills/engineering/implement/SKILL.md)**: Build the work described by a spec or set of tickets, driving `/tdd` at pre-agreed seams and closing out with `/code-review` before committing.
- **[implement-spec](./skills/engineering/implement-spec/SKILL.md)**: Implement a whole spec on one integration branch. Works the tickets as a task graph, running implementer subagents across the ready frontier for maximum concurrency, then closes out with `/code-review`.
- **[wayfinder](./skills/engineering/wayfinder/SKILL.md)**: Plan a huge chunk of work, more than one agent session can hold, as a shared map of decision tickets on the issue tracker, and resolve them one at a time until the way to the destination is clear.
- **[retro](./skills/engineering/retro/SKILL.md)**: Suggest improvements to the coding agent's environment (navigation, automated checks, coding standards, steering files, tooling) after a session, most severe first.


**Model-invoked**

- **[prototype](./skills/engineering/prototype/SKILL.md)**: Build a throwaway prototype to answer a design question, either a single shareable HTML file for state/logic questions, or several radically different UI variations toggleable from one route.
- **[diagnosing-bugs](./skills/engineering/diagnosing-bugs/SKILL.md)**: Disciplined diagnosis loop for hard bugs and performance regressions: build a feedback loop that goes red on this bug → minimise → hypothesise → instrument → fix → regression-test.
- **[security-audit](./skills/engineering/security-audit/SKILL.md)**: Source-first security review of a codebase you are allowed to audit. Guidance by default. A full six-phase audit (coverage ledger, independent verification, report files) runs only when you explicitly ask for an audit, a pen-test, or report artifacts.
- **[research](./skills/engineering/research/SKILL.md)**: Investigate a question against high-trust primary sources and capture the findings as a cited Markdown file in the repo, run as a background agent.
- **[tdd](./skills/engineering/tdd/SKILL.md)**: Test-driven development with a red-green-refactor loop. Builds features or fixes bugs one vertical slice at a time.
- **[domain-modeling](./skills/engineering/domain-modeling/SKILL.md)**: Actively build and sharpen a project's domain model: challenge terms against the glossary, stress-test with edge-case scenarios, and update `GLOSSARY.md` and ADRs inline.
- **[codebase-design](./skills/engineering/codebase-design/SKILL.md)**: Shared discipline and vocabulary for designing deep modules: a lot of behaviour behind a small interface, placed at a clean seam, testable through that interface.
- **[code-review](./skills/engineering/code-review/SKILL.md)**: Two-axis review of the diff since a fixed point: **Standards** (does it follow the repo's coding standards, plus a Fowler smell baseline?) and **Spec** (does it faithfully implement the originating issue/spec?), run as parallel sub-agents so neither pollutes the other.
- **[pr](./skills/engineering/pr/SKILL.md)**: The shape a pull request body should take: a summary as the smallest visual that makes the change clear, before/after evidence that it works, and a merge-danger call (one-way or two-way door, plus blast radius).
- **[wizard](./skills/engineering/wizard/SKILL.md)**: Generate an interactive bash wizard that walks a human through steps only they can perform: provisioning infrastructure, setting up credentials or CI secrets, walking an unfamiliar third-party dashboard, or running a one-off migration or cutover.
- **[authoring-airflow-dags](./skills/engineering/authoring-airflow-dags/SKILL.md)**: Write Airflow DAGs with retries, schedules, and tasks that are safe to re-run.
- **[building-dagster-assets](./skills/engineering/building-dagster-assets/SKILL.md)**: Build Dagster assets with partitions, resources, and asset checks.
- **[building-dbt-models](./skills/engineering/building-dbt-models/SKILL.md)**: Build dbt models with a declared grain and incremental logic that is safe to re-run.
- **[building-feature-pipelines](./skills/engineering/building-feature-pipelines/SKILL.md)**: Build warehouse feature tables with point-in-time joins and one definition for offline and online reads.
- **[building-iceberg-tables](./skills/engineering/building-iceberg-tables/SKILL.md)**: Create and maintain Iceberg tables: partitioning, compaction, and time travel.
- **[building-ingestion-pipelines](./skills/engineering/building-ingestion-pipelines/SKILL.md)**: Extract from databases, APIs, and files with incremental loads, watermarks, and pagination.
- **[debugging-airflow-pipelines](./skills/engineering/debugging-airflow-pipelines/SKILL.md)**: Diagnose a failed or stuck Airflow task. One known application bug stays diagnosing-bugs.
- **[debugging-data-pipelines](./skills/engineering/debugging-data-pipelines/SKILL.md)**: Trace wrong, missing, or duplicated data to the first bad stage, then plan a safe backfill. One known application bug stays diagnosing-bugs.
- **[debugging-dbt-runs](./skills/engineering/debugging-dbt-runs/SKILL.md)**: Diagnose a failing or stale dbt run. One known application bug stays diagnosing-bugs.
- **[designing-backfills-and-replays](./skills/engineering/designing-backfills-and-replays/SKILL.md)**: Reprocess a historical window without doubling rows or rewriting the wrong dates.
- **[designing-data-contracts](./skills/engineering/designing-data-contracts/SKILL.md)**: Define what a producer promises downstream, and fail a change that would break that promise.
- **[designing-medallion-architecture](./skills/engineering/designing-medallion-architecture/SKILL.md)**: Organize a lakehouse into bronze, silver, and gold, with a rule for what each layer may contain.
- **[documenting-dbt-models](./skills/engineering/documenting-dbt-models/SKILL.md)**: Write dbt model and column descriptions and exposures. Documents that agents read stay writing-for-agents.
- **[engineering-databricks-pipelines](./skills/engineering/engineering-databricks-pipelines/SKILL.md)**: Build Delta and Auto Loader pipelines and register them in Unity Catalog.
- **[generating-synthetic-test-data](./skills/engineering/generating-synthetic-test-data/SKILL.md)**: Generate seeded test rows with edge cases and referential integrity.
- **[handling-schema-evolution](./skills/engineering/handling-schema-evolution/SKILL.md)**: Add, rename, or retype a column so existing readers keep working.
- **[implementing-cdc-with-debezium](./skills/engineering/implementing-cdc-with-debezium/SKILL.md)**: Replicate an OLTP database with Debezium, including deletes.
- **[implementing-data-cicd](./skills/engineering/implementing-data-cicd/SKILL.md)**: Lint, compile, and test a data change, then promote it across environments.
- **[implementing-data-quality-checks](./skills/engineering/implementing-data-quality-checks/SKILL.md)**: Block bad data on freshness, volume, schema, and integrity. Application red-green stays tdd.
- **[implementing-pipeline-observability](./skills/engineering/implementing-pipeline-observability/SKILL.md)**: Alert on pipeline freshness and volume before a stakeholder finds the gap.
- **[managing-data-lineage-openlineage](./skills/engineering/managing-data-lineage-openlineage/SKILL.md)**: Capture cross-tool lineage so an incident or a backfill has a scope.
- **[masking-pii-data](./skills/engineering/masking-pii-data/SKILL.md)**: Classify PII and choose masking, hashing, tokenization, or encryption. A source-first audit report stays security-audit.
- **[migrating-legacy-etl](./skills/engineering/migrating-legacy-etl/SKILL.md)**: Move legacy ETL or an on-prem warehouse onto dbt, Spark, or a cloud warehouse.
- **[modeling-dimensional-data](./skills/engineering/modeling-dimensional-data/SKILL.md)**: Design a star schema, declare the grain, and track history. Glossary work stays domain-modeling.
- **[optimizing-parquet-storage](./skills/engineering/optimizing-parquet-storage/SKILL.md)**: Fix small files, row-group size, and compression so scans stay cheap. An application performance regression stays diagnosing-bugs.
- **[optimizing-sql-queries](./skills/engineering/optimizing-sql-queries/SKILL.md)**: Read the query plan and cut the scan. An application performance regression stays diagnosing-bugs.
- **[orchestrating-prefect-flows](./skills/engineering/orchestrating-prefect-flows/SKILL.md)**: Write Prefect flows with retries, caching, and a schedule.
- **[processing-streaming-data](./skills/engineering/processing-streaming-data/SKILL.md)**: Handle delivery semantics, windows, and late data in a stream.
- **[reviewing-data-pipeline-code](./skills/engineering/reviewing-data-pipeline-code/SKILL.md)**: Review a data change for grain, idempotency, cost, tests, and PII. Standards-and-spec review of an application diff stays code-review.
- **[terraform-for-data-infra](./skills/engineering/terraform-for-data-infra/SKILL.md)**: Provision warehouses, buckets, and orchestration with Terraform. Steps only a human can click stay wizard.
- **[writing-idempotent-transformations](./skills/engineering/writing-idempotent-transformations/SKILL.md)**: Write loads that produce the same rows when they run again.

- **[api-and-interface-design](./skills/engineering/api-and-interface-design/SKILL.md)**: Design the contract callers may rely on: resources, errors, compatibility, and the line between frontend and backend.
- **[browser-testing-with-devtools](./skills/engineering/browser-testing-with-devtools/SKILL.md)**: Check UI in a real browser through Chrome DevTools: DOM, console, network, performance, and a screenshot.
- **[ci-cd-and-automation](./skills/engineering/ci-cd-and-automation/SKILL.md)**: Put quality gates and a deploy strategy in the pipeline so a red check can block a ship.
- **[code-simplification](./skills/engineering/code-simplification/SKILL.md)**: Local clarity refactor that preserves behavior. A codebase-wide deepening survey stays improve-codebase-architecture.
- **[constraint-driven-development](./skills/engineering/constraint-driven-development/SKILL.md)**: Interview a quality bar into CONSTRAINTS.md and reject a diff that quietly lowers it.
- **[context-engineering](./skills/engineering/context-engineering/SKILL.md)**: Pack the context for the task in front of you. It does not run at the start of every session. Post-session environment fixes stay retro.
- **[deprecation-and-migration](./skills/engineering/deprecation-and-migration/SKILL.md)**: Sunset an API or migrate a schema by expanding first and contracting only after callers have moved.
- **[doubt-driven-development](./skills/engineering/doubt-driven-development/SKILL.md)**: Fresh-context adversarial review that tries to disprove a decision before it stands. The reviewer does not see your reasoning.
- **[frontend-ui-engineering](./skills/engineering/frontend-ui-engineering/SKILL.md)**: Build accessible, responsive UI that belongs to the product, including keyboard, contrast, and a layout that is not a generic template.
- **[git-workflow-and-versioning](./skills/engineering/git-workflow-and-versioning/SKILL.md)**: Atomic commits, branching, conflict splits, and semantic versioning. The pull request body stays pr.
- **[observability-and-instrumentation](./skills/engineering/observability-and-instrumentation/SKILL.md)**: Write the on-call question first, then add the log, metric, trace, or alert that can answer it.
- **[performance-optimization](./skills/engineering/performance-optimization/SKILL.md)**: Measure a bottleneck, fix it, and leave a guard. One known performance regression stays diagnosing-bugs.
- **[security-and-hardening](./skills/engineering/security-and-hardening/SKILL.md)**: Harden a feature while you build it: trust boundaries, OWASP, and an always/ask/never list. A full audit report stays security-audit.
- **[shipping-and-launch](./skills/engineering/shipping-and-launch/SKILL.md)**: Pre-launch checklist, feature flags, staged rollout, and a rollback. The pull request body stays pr.
- **[source-driven-development](./skills/engineering/source-driven-development/SKILL.md)**: Implement from the official docs and cite the page. A cited note that does not change code stays research.
- **[llm-agent-orchestration](./skills/engineering/llm-agent-orchestration/SKILL.md)**: Build a product agent with tools, a graph, and a stop condition. The router for this repo stays ask-matt.
- **[llm-cost-optimization](./skills/engineering/llm-cost-optimization/SKILL.md)**: Cut token, routing, and cache cost for LLM calls. Measuring an application bottleneck stays performance-optimization.
- **[llm-data-preparation](./skills/engineering/llm-data-preparation/SKILL.md)**: Clean, dedupe, and split a text corpus for fine-tuning or retrieval.
- **[llm-distillation](./skills/engineering/llm-distillation/SKILL.md)**: Train a smaller student model to match a larger teacher's outputs on a fixed eval set.
- **[llm-evaluation](./skills/engineering/llm-evaluation/SKILL.md)**: Score LLM outputs with a fixed set, retrieval metrics, and a judge. Application red-green stays tdd.
- **[llm-fine-tuning](./skills/engineering/llm-fine-tuning/SKILL.md)**: Fine-tune an LLM from a config, an eval set, and a checkpoint policy.
- **[llm-guardrails](./skills/engineering/llm-guardrails/SKILL.md)**: Filter LLM inputs and outputs for private data, toxicity, and jailbreaks. Hardening an application feature stays security-and-hardening.
- **[llm-observability](./skills/engineering/llm-observability/SKILL.md)**: Track token use, latency, and feedback on LLM calls. Application logs, metrics, and traces stay observability-and-instrumentation.
- **[llm-prompt-engineering](./skills/engineering/llm-prompt-engineering/SKILL.md)**: Design and version the prompts an LLM product sends. Documents that agents read stay writing-for-agents.
- **[llm-rag](./skills/engineering/llm-rag/SKILL.md)**: Retrieve grounded passages and cite the ones the answer used.
- **[ml-cost-optimization](./skills/engineering/ml-cost-optimization/SKILL.md)**: Cut GPU and infrastructure cost for training and serving. Measuring an application bottleneck stays performance-optimization.
- **[ml-experiment-tracking](./skills/engineering/ml-experiment-tracking/SKILL.md)**: Record params, metrics, and artifacts so two training runs can be compared.
- **[ml-pipeline-orchestration](./skills/engineering/ml-pipeline-orchestration/SKILL.md)**: Schedule train, validate, and promote as one pipeline with retries and a failure alert.
- **[ml-security](./skills/engineering/ml-security/SKILL.md)**: Threat-model a model: adversarial inputs, poisoning, privacy, and the ML supply chain. A source-first audit report stays security-audit.
- **[ml-solution-design](./skills/engineering/ml-solution-design/SKILL.md)**: Turn an ML problem into requirements and a reference architecture. A spec from an existing thread stays to-spec.
- **[ml-testing](./skills/engineering/ml-testing/SKILL.md)**: Test data, features, and model behavior, then gate promotion on them. The daily red-green loop stays tdd.
- **[model-drift-detection](./skills/engineering/model-drift-detection/SKILL.md)**: Detect input or prediction drift and send a retrain trigger back to training.
- **[model-monitoring](./skills/engineering/model-monitoring/SKILL.md)**: Alert when a deployed model's performance or traffic leaves its band. Application telemetry stays observability-and-instrumentation.
- **[model-observability](./skills/engineering/model-observability/SKILL.md)**: Explain a prediction and log the features that produced it. Application telemetry stays observability-and-instrumentation.
- **[model-registry](./skills/engineering/model-registry/SKILL.md)**: Register a versioned model artifact and the contract a server needs to load it.
- **[model-serving](./skills/engineering/model-serving/SKILL.md)**: Serve a model behind an API with a health check and a rollback. An application launch checklist stays shipping-and-launch.
- **[model-training](./skills/engineering/model-training/SKILL.md)**: Train a model from a pinned config, split, and seed, and package the artifact for the registry.

### Productivity

General workflow tools, not code-specific.

**User-invoked**

- **[grill-me](./skills/productivity/grill-me/SKILL.md)**: Get relentlessly interviewed about a plan or design until every branch of the design tree is resolved.
- **[handoff](./skills/productivity/handoff/SKILL.md)**: Compact the current conversation into a handoff document so another agent can continue the work.
- **[teach](./skills/productivity/teach/SKILL.md)**: Teach the user a new skill or concept over multiple sessions, using the current directory as a stateful teaching workspace.
- **[to-questionnaire](./skills/productivity/to-questionnaire/SKILL.md)**: Turn a decision you can't answer alone into a Markdown questionnaire for the one person who can, filled in async, or together over a meeting. It grills you about the send (who it's for, what you need back), not the subject.
- **[wait-what](./skills/productivity/wait-what/SKILL.md)**: Fire this the moment a message doesn't land. The agent re-pitches it with the context you're missing, in plain English, using your `GLOSSARY.md` vocabulary.

**Model-invoked**

- **[grilling](./skills/productivity/grilling/SKILL.md)**: Interview the user relentlessly about a plan, decision, or idea until every branch of the design tree is resolved. The reusable interview primitive behind `grill-me`, `grill-with-docs`, `triage`, `wayfinder` and `improve-codebase-architecture`.
- **[writing-for-agents](./skills/productivity/writing-for-agents/SKILL.md)**: Writing documents for agents: skills, AGENTS.md/CLAUDE.md, and any doc an agent reaches by a pointer.
