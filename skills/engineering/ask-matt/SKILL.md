---
name: ask-matt
description: Ask which skill or flow fits your situation. A router over the skills in this repo.
disable-model-invocation: true
---

# Ask Matt

You don't remember every skill, so ask.

Before stating what a skill does or recommending a step be skipped, read that skill's SKILL.md: the summaries here are for orientation only.

A **flow** is a path through the skills. Most paths run along one **main flow**, and two **on-ramps** merge onto it. Everything else is standalone, or a vocabulary layer that runs underneath.

## The main flow: idea → ship

The route most work travels. You have an idea and want it built.

1. **`/grill-with-docs`** sharpens the idea by interview. Start here whenever you are **working in a working directory**: it's stateful, retaining what it learns in `GLOSSARY.md` and ADRs. (No working directory? Use `/grill-me` instead, covered under Standalone. Both run the same `/grilling` primitive; `grill-with-docs` is the one that leaves a paper trail, which makes it the better of the two whenever a repo is there to leave it in.)
2. **Branch: can you settle every question in conversation?** If a question needs a runnable answer (state, business logic, a UI you have to see), detour through a prototype, bridged by **`/handoff`** in both directions (a prototype lives in its own directory, which is exactly what `/handoff` is for; see Phase boundaries):
   - **`/handoff`** out, then open a fresh session against that file,
   - **`/prototype`** to answer the question with throwaway code,
   - **`/handoff`** back what you learned, and reference it from the original idea thread.
3. **Branch: is this a multi-session build?**
   - **Yes** → **`/to-spec`** (turn the thread into a spec), then **`/to-tickets`** to split it into tracer-bullet tickets, each declaring its **blocking edges**. Then work the tickets one of two ways:
     - **`/implement`** per ticket, **`/clear`ing context between each one**. On a local tracker that's one file per ticket under `.scratch/<feature>/issues/`, worked blockers-first by hand; on a real tracker the edges become native blocking links, so any ticket whose blockers are done can be grabbed. Each ticket is self-contained, so the last one's context is disposable.
     - **`/implement-spec`** for the whole spec in one run. It reads the tickets as a **task graph**, runs implementer subagents across the ready **frontier** in parallel, and lands everything on one **integration branch**. Reach for it when you'd rather orchestrate the build than drive each ticket yourself.
   - **No** → **`/implement`** right here, in the same context window.

   Either way, the code gets built by driving **`/tdd`** (one red-green slice at a time) and closes out with **`/code-review`**, a two-axis review (Standards + Spec) of the diff. `/implement` runs both per ticket; `/implement-spec`'s implementers each drive `/tdd`, and it runs one `/code-review` over the integration branch. Reach for **`/tdd`** on its own when you just want to build a concrete behaviour test-first without a full spec, and **`/code-review`** on its own whenever you want to review a branch or PR against a fixed point.

   When the work goes up as a pull request, **`/pr`** shapes the body: the smallest visual that shows the change, before/after evidence that it works, and a one-way or two-way door call. It's model-invoked, so the agent reaches for it whenever it writes a PR.

4. **`/retro`** closes the loop. After a build, and especially one that went sideways, it looks back over the session and suggests changes to the agent's **environment**, not the code: navigation pointers, automated checks, the coding standards `/code-review` enforces, steering files, tooling. Mechanical mistakes become deterministic checks; judgement calls become coding standards. The next build then starts from a better environment.

### Context hygiene

Keep steps 1–3 in **one unbroken context window** (don't compact or clear until after `/to-tickets`) so the grilling, spec, and tickets all build on the same thinking. Each `/implement` then starts fresh, working from the ticket. Run `/retro` in the session it's looking back on, before you clear; after clearing, point it at that session's log instead.

The limit on this is the **[smart zone](https://www.aihero.dev/ai-coding-dictionary/smart-zone)**: the window (~150k tokens on state-of-the-art models) within which the model still reasons sharply. If a session approaches it before `/to-tickets`, don't push on degraded; `/compact` at the nearest phase boundary and carry on (see Phase boundaries).

## On-ramps

A starting situation that generates work, then merges onto the main flow.

- **Bugs and requests piling up** → **`/triage`**. It moves issues through triage roles and produces agent-ready issues, which **`/implement`** later picks up.

  Triage is only for issues **you didn't create**: bug reports, incoming feature requests, anything that arrives raw. Tickets that `/to-tickets` produced are already agent-ready, so **don't triage them**.

- **Something's broken** → **`/diagnosing-bugs`**. For the hard ones: the bug that resists a first glance, the intermittent flake, the regression that crept in between two known-good states. It refuses to theorise until it has a **tight feedback loop** (one command that already goes red on *this* bug), then fixes with a regression test. Once the fix is in, run **`/retro`** in the same session to ask what would have prevented the bug; where the real finding is that there's no good seam to lock it down, that's a job for **`/improve-codebase-architecture`**. A security review of code you are allowed to audit, with no single known bug, is **`/security-audit`** instead.

- **A huge, foggy effort: a greenfield project or a huge feature build, too big for one session** → **`/wayfinder`**, the most cognitively demanding flow here. When the way from here to the destination isn't visible yet, it charts a **shared map** of **decision tickets** on the issue tracker and resolves them one at a time, producing **decisions, not deliverables**, until the fog is pushed back and the way is clear. Where **`/grill-with-docs`** sharpens an idea you can hold in one session, wayfinder is for the idea you can't, and it's slower and denser, so save it for exactly that, never a well-scoped feature.

  When the map clears, **it hands off, it doesn't build**: merge onto the main flow at **`/to-spec`**, which collapses the map's linked decisions into a buildable plan, then `/to-tickets` and `/implement` as usual. Looping the map straight into `/implement` skips that collapse and throws the linked detail away, so go straight to `/implement` only when the effort turned out genuinely small.

## Codebase health

Not feature work, just upkeep.

- **`/improve-codebase-architecture`** runs whenever you have a spare moment to keep the codebase good for agents to operate in. It surfaces **deepening opportunities**; picking one _generates an idea_ you can take into the main flow at `/grill-with-docs`. It's the survey that finds the candidates; **`/codebase-design`** (below) is the bench you design the chosen one on.

## Vocabulary underneath

Two model-invoked references that run *beneath* the other skills, each the single source of truth for its vocabulary. Reach for them directly when the **words**, not the process, are the problem; or let the skills above pull them in.

- **`/domain-modeling`**: sharpen the project's *domain* language: challenge a fuzzy term, resolve an overloaded word ("account" doing three jobs), record a hard-to-reverse decision as an ADR. It's the active discipline `/grill-with-docs` drives to keep `GLOSSARY.md` a clean glossary.
- **`/codebase-design`** is the deep-module vocabulary (module, interface, depth, seam, adapter, leverage, locality) for designing a module's *shape*: a lot of behaviour behind a small interface at a clean seam. `/tdd` and `/improve-codebase-architecture` both speak it.

## Phase boundaries

A **phase** is a chunk of work inside a session: the grilling, the implementation, the QA. At the **boundary** between two of them you have five options, and picking between them is the fuzziest decision in this whole map:

- **Continue**: stay put. Costs nothing, loses nothing.
- **`/clear`**: empty the window, when nothing here matters to what's next.
- **`/handoff`** writes a portable markdown file. Narrow: only for a **new harness**, a **new directory**, a **colleague**, or forking a side task **mid-phase**. What it buys is portability.
- **Subagent**: send a tightly-scoped task to its own window and get a report back.
- **`/compact`** compresses this context and seeds a fresh session with it. The **default**, at the bottom of the tree rather than the first reach.

Read [PHASE-BOUNDARIES.md](PHASE-BOUNDARIES.md) for the ordered tree: the five questions, the reasoning behind each branch, and why the primary-source cost makes **Continue** the one to rule out first. Make the decision **at** a boundary; mid-phase, continue or split the rest into subagents.

## Standalone

Off the main flow entirely.

- **`/grill-me`**: the same relentless interview as `/grill-with-docs`, but **stateless**: it saves nothing locally and builds no `GLOSSARY.md`. Reach for it when you are **not working in a working directory** (sharpening a plan, a design, a piece of writing, anything with no repo under it). If you are in a working directory, use `/grill-with-docs` instead: it runs the same interview and leaves a paper trail, so it is strictly the better one.
- **`/grilling`** is the interview primitive itself: rounds, the frontier, facts are the agent's job and decisions are yours. `/grill-me` and `/grill-with-docs` are the two named ways in, and `/triage`, `/wayfinder` and `/improve-codebase-architecture` all run it internally. Reach for it directly only when you want the interview with no wrapper around it.
- **`/prototype`** is a small, throwaway program that answers one design question: does this state model feel right, or what should this UI look like. Throwaway is a constraint on how the code is written, not a promise to destroy it: the answer folds into the real code, and the prototype itself is kept as a **primary source** on a `prototype/<name>` branch out of main, pointed at from the implementation issue. It's the detour in step 2 of the main flow, but reach for it any time a design question is hard to settle on paper.
- **`/research`**: delegate reading legwork to a **background agent**: it investigates a question against **primary sources**, then leaves a cited Markdown file in the repo. Keep working while it reads. The file it produces is something to take *into* the main flow at `/grill-with-docs`, since research feeds the thinking rather than replacing it. The `research` agent that `/security-audit` launches is not this skill. It is a read-only subagent inside that audit.
- **`/security-audit`**: source-first security review of a codebase you are allowed to audit. Guidance by default: a security question or a focused look, and no report files. Full audit mode only when you explicitly ask to audit, pen-test, or get report artifacts. It then runs six phases (reconnaissance, coverage-led hunting, candidate validation, structured findings, independent verification, a target-neutral report) and writes them under `~/security-audit-skill/` by default, using a sanitized run identity rather than the raw git remote. It does not edit the target, and it does not probe deployed systems. It is not `/code-review` (standards and spec on a diff) and not `/diagnosing-bugs` (one known bug). A confirmed finding you decide to fix re-enters the main flow at `/to-spec` or `/implement`.
- **`/to-questionnaire`** comes in when the thing blocking you isn't in your head or the codebase but in **someone else's**, and it writes them a questionnaire to fill in. It's the inverse of `/grill-me`: instead of interviewing you about the subject, it interviews you about the **send** (who it's going to, what you need back) and aims the questions at the gap. What comes back is material for `/grill-with-docs` or `/to-spec`.
- **`/wizard`** is for the steps only a **human** can take: provisioning infrastructure, setting up credentials or CI secrets, clicking through an unfamiliar third-party dashboard, running a one-off migration or cutover. It generates an interactive bash script that opens each URL, captures each value, and writes it into `.env` and GitHub secrets, so the procedure stops being something you re-explain to an agent every time. Model-invoked, so the agent reaches for it the moment it hits a wall only you can pass. If the agent could just do it itself, it should; this is for where a human is genuinely in the loop.
- **`/wait-what`** is the corrective for a message that didn't land. Use it mid-conversation, inside any other skill, and the agent re-pitches what it just said with the context you were missing, in plain English, using the `GLOSSARY.md` vocabulary. It works after the fact; `/grill-with-docs` is the upfront cure, because a shared language agreed early is what stops the jargon arriving at all.
- **`/teach`**: learn a concept over multiple sessions, using the current directory as a stateful workspace.
- **`/writing-for-agents`** is the reference for writing documents agents consume: skills, AGENTS.md, pointed-at docs.

## Vendored lifecycle

A second engineering set is vendored from [agent-skills](https://github.com/addyosmani/agent-skills) (MIT). `/ask-matt` stays the router. Skills that repeated a house job are not in this set. The daily red-green loop is `/tdd`. The interview is `/grill-with-docs` in a repo and `/grill-me` outside one. A standards-and-spec diff review is `/code-review`. One hard bug is `/diagnosing-bugs`. A spec from the current thread is `/to-spec`. Tracer-bullet tickets are `/to-tickets`. Driving a ticket is `/implement`. Domain ADRs and the glossary are `/domain-modeling`.

When two skills could fire, use the house skill. Use the vendored skill for the job the house set does not cover.

- One known performance regression: `/diagnosing-bugs`. `/performance-optimization` measures a bottleneck (Core Web Vitals, N+1, bundles) and guards the fix.
- Cited reading that does not change code: `/research`. `/source-driven-development` implements from official docs and cites them.
- Full audit report, no edits to the target: `/security-audit`. `/security-and-hardening` hardens code while you build it.
- Deepening survey of a codebase: `/improve-codebase-architecture`. `/code-simplification` is a local clarity refactor with no behavior change.
- Post-session environment fixes: `/retro`. `/context-engineering` packs the context for the task in front of you. It does not run at session start.
- Pull request body: `/pr`. `/shipping-and-launch` is the pre-launch checklist, flags, staged rollout, and rollback. `/git-workflow-and-versioning` is commits, branches, and semver.
- Module shape: `/codebase-design`. `/api-and-interface-design` is the caller contract: resources, errors, and compatibility.

The rest have no house twin. Call the Skill tool with the name, one skill per call: `browser-testing-with-devtools`, `ci-cd-and-automation`, `constraint-driven-development`, `deprecation-and-migration`, `doubt-driven-development`, `frontend-ui-engineering`, `observability-and-instrumentation`.

## ML and LLM lifecycle

A third engineering set is vendored from [MLOps-agent-skills](https://github.com/timwukp/MLOps-agent-skills) (Apache-2.0). `/ask-matt` stays the router. These skills are model-invoked. Call the Skill tool with one name per call.

ML delivery, in order: `/ml-solution-design`, then the data engineering skills for landing data, checks, and features (`/building-ingestion-pipelines`, `/implementing-data-quality-checks`, `/building-feature-pipelines`), `/model-training` with `/ml-experiment-tracking`, `/model-registry`, `/implementing-data-cicd`, `/model-serving`, `/model-monitoring`, `/model-drift-detection` (a drift trigger goes back to `/model-training`). Cross-cutting: `/ml-testing`, `/ml-security`, `/ml-cost-optimization`, `/ml-pipeline-orchestration` for Kubeflow, ZenML, and Argo (warehouse Airflow is `/authoring-airflow-dags`, Dagster is `/building-dagster-assets`, Prefect is `/orchestrating-prefect-flows`), `/model-observability`. The training, registry, and serving handoff follows `skills/engineering/model-registry/references/ARTIFACT_CONTRACT.md`.

LLM delivery: `/ml-solution-design`, `/llm-data-preparation`, then `/llm-fine-tuning` or `/llm-rag` (or both), `/llm-evaluation`, `/model-serving`, `/llm-agent-orchestration` and `/llm-guardrails`, `/llm-observability`, `/llm-cost-optimization`. `/llm-prompt-engineering` applies whenever the prompt is the product. `/llm-distillation` sits beside fine-tuning. SHAP plots are part of `/model-observability`. scikit-learn and Lightning are part of `/model-training`. Hugging Face Trainer fine-tuning is part of `/llm-fine-tuning`.

When two skills could fire, use the house or application skill for ordinary software, and the ML skill when the work is a model or an LLM system:

- Application red-green loop: `/tdd`. Model, feature, and data tests: `/ml-testing`.
- Application pipeline gates: `/ci-cd-and-automation`. Model train, promote, and roll back: `/implementing-data-cicd`.
- Application telemetry: `/observability-and-instrumentation`. Deployed model health: `/model-monitoring`. Prediction explanations: `/model-observability`. Token and latency tracking: `/llm-observability`.
- Source-first audit report: `/security-audit`. Hardening an application feature: `/security-and-hardening`. Model threats, privacy, and ML supply chain: `/ml-security`. LLM input and output filters: `/llm-guardrails`.
- Application launch checklist: `/shipping-and-launch`. Serving a model or an LLM runtime: `/model-serving`.
- A spec from a thread you already had: `/to-spec` (tell the user to run it; only the user runs it). ML requirements and architecture: `/ml-solution-design`.
- Measuring an application bottleneck: `/performance-optimization`. GPU and infra cost: `/ml-cost-optimization`. Token and routing cost: `/llm-cost-optimization`.
- Documents agents read: `/writing-for-agents`. Prompts for an LLM product: `/llm-prompt-engineering`.
- Product LLM agents (tools, graphs, multi-agent): `/llm-agent-orchestration`. The router for this repo stays `/ask-matt`.

## Data engineering

A data engineering set is vendored from [awesome-data-engineering-skills](https://github.com/Unknown-333/awesome-data-engineering-skills) (Apache-2.0). `/ask-matt` stays the router. These skills are model-invoked. Call the Skill tool with one name per call. This set is for tables, pipelines, warehouses, and streams.

When two skills could fire, use the house skill for ordinary software, and the data skill when the work is a dataset or a pipeline:

- Application diff review: `/code-review`. A data pipeline change (grain, idempotency, incremental logic, cost, PII): `/reviewing-data-pipeline-code`.
- One known application bug: `/diagnosing-bugs`. Wrong, missing, or duplicated data: `/debugging-data-pipelines`. A failing dbt run: `/debugging-dbt-runs`. A stuck Airflow task: `/debugging-airflow-pipelines`.
- Application red-green loop: `/tdd`. Dataset checks, including dbt tests and source freshness: `/implementing-data-quality-checks`.
- Source-first audit report: `/security-audit`. Classifying and masking PII in a pipeline: `/masking-pii-data`.
- Glossary and domain terms: `/domain-modeling`. Star schema, grain, and slowly changing dimensions: `/modeling-dimensional-data`.
- Documents agents read: `/writing-for-agents`. dbt model and column docs: `/documenting-dbt-models`.
- Steps only a human can click: `/wizard`. Terraform for warehouses, buckets, and orchestration: `/terraform-for-data-infra`.
- One known application performance regression: `/diagnosing-bugs`. Slow or expensive SQL, including Snowflake, BigQuery, and Spark: `/optimizing-sql-queries`. Parquet layout: `/optimizing-parquet-storage`.

A new pipeline, in the usual order: `/designing-medallion-architecture` or `/modeling-dimensional-data`, then `/building-ingestion-pipelines` (or `/implementing-cdc-with-debezium` and `/processing-streaming-data`), then `/writing-idempotent-transformations` and `/building-dbt-models` (or `/engineering-databricks-pipelines`), then `/implementing-data-quality-checks` and `/designing-data-contracts`, then orchestration with `/authoring-airflow-dags`, `/building-dagster-assets`, or `/orchestrating-prefect-flows`, then `/implementing-data-cicd` and `/implementing-pipeline-observability`.

Lakehouse storage: `/building-iceberg-tables`, `/optimizing-parquet-storage`, `/handling-schema-evolution`. Safe history rewrites: `/designing-backfills-and-replays`. Lineage: `/managing-data-lineage-openlineage`. A legacy warehouse move: `/migrating-legacy-etl`. Seeded test rows: `/generating-synthetic-test-data`. Warehouse feature tables: `/building-feature-pipelines`.

## Precondition

**`/setup-matt-pocock-skills`**: run before your first engineering flow to configure the issue tracker, triage labels, and doc layout the other skills assume. Custom issue trackers also work.
