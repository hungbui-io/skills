# Engineering

Skills I use daily for code work.

## User-invoked

Reachable only when you type them (Claude Code: `disable-model-invocation: true`; Codex: `policy.allow_implicit_invocation: false` in `agents/openai.yaml`).

- **[ask-matt](./ask-matt/SKILL.md)**: Ask which skill or flow fits your situation. A router over the user-invoked skills in this repo.
- **[grill-with-docs](./grill-with-docs/SKILL.md)**: Grilling session that also builds your project's domain model, sharpening terminology and updating `GLOSSARY.md` and ADRs inline.
- **[triage](./triage/SKILL.md)**: Move issues through a state machine of triage roles.
- **[improve-codebase-architecture](./improve-codebase-architecture/SKILL.md)**: Scan a codebase for deepening opportunities, present them as a visual HTML report, then grill through whichever one you pick.
- **[setup-matt-pocock-skills](./setup-matt-pocock-skills/SKILL.md)**: Configure this repo for the engineering skills (issue tracker, triage labels, domain doc layout). Run once per repo.
- **[to-spec](./to-spec/SKILL.md)**: Turn the current conversation into a spec and publish it to the issue tracker.
- **[to-tickets](./to-tickets/SKILL.md)**: Break any plan, spec, or conversation into a set of tracer-bullet tickets, each declaring its blocking edges, whether as text in a local file or as native blocking links on a real tracker.
- **[implement](./implement/SKILL.md)**: Build the work described by a spec or set of tickets, driving `/tdd` at pre-agreed seams and closing out with `/code-review` before committing.
- **[implement-spec](./implement-spec/SKILL.md)**: Implement a whole spec on one integration branch. Works the tickets as a task graph, running implementer subagents across the ready frontier for maximum concurrency, then closes out with `/code-review`.
- **[wayfinder](./wayfinder/SKILL.md)**: Plan a huge chunk of work (more than one agent session can hold) as a shared map of decision tickets on the issue tracker, resolved one at a time until the way to the destination is clear.
- **[retro](./retro/SKILL.md)**: Suggest improvements to the coding agent's environment (navigation, automated checks, coding standards, steering files, tooling) after a session, most severe first.


## Model-invoked

Model- or user-reachable (rich trigger phrasing so the model can reach for them).

- **[prototype](./prototype/SKILL.md)**: Build a throwaway prototype to answer a design question: a single shareable HTML file for state/logic, or several toggleable UI variations.

- **[diagnosing-bugs](./diagnosing-bugs/SKILL.md)**: Disciplined diagnosis loop for hard bugs and performance regressions: build a feedback loop that goes red on this bug → minimise → hypothesise → instrument → fix → regression-test.
- **[security-audit](./security-audit/SKILL.md)**: Source-first security review of a codebase you are allowed to audit. Guidance by default. A full six-phase audit (coverage ledger, independent verification, report files) runs only when you explicitly ask for an audit, a pen-test, or report artifacts.
- **[research](./research/SKILL.md)**: Investigate a question against high-trust primary sources and capture the findings as a cited Markdown file in the repo, run as a background agent.
- **[tdd](./tdd/SKILL.md)**: Test-driven development with a red-green-refactor loop. Builds features or fixes bugs one vertical slice at a time.
- **[domain-modeling](./domain-modeling/SKILL.md)**: Actively build and sharpen a project's domain model by challenging terms, stress-testing with scenarios, and updating `GLOSSARY.md` and ADRs inline.
- **[codebase-design](./codebase-design/SKILL.md)**: Shared discipline and vocabulary for designing deep modules: small interfaces, clean seams, testable through the interface.
- **[code-review](./code-review/SKILL.md)**: Two-axis review of the diff since a fixed point: **Standards** (does it follow the repo's coding standards, plus a Fowler smell baseline?) and **Spec** (does it faithfully implement the originating issue/spec?), run as parallel sub-agents.
- **[pr](./pr/SKILL.md)**: The shape a pull request body should take: a summary as the smallest visual that makes the change clear, before/after evidence that it works, and a merge-danger call (one-way or two-way door, plus blast radius).
- **[wizard](./wizard/SKILL.md)**: Generate an interactive bash wizard that walks a human through steps only they can perform: provisioning infrastructure, setting up credentials or CI secrets, walking an unfamiliar third-party dashboard, or running a one-off migration or cutover.
- **[authoring-airflow-dags](./authoring-airflow-dags/SKILL.md)**: Write Airflow DAGs with retries, schedules, and tasks that are safe to re-run.
- **[building-dagster-assets](./building-dagster-assets/SKILL.md)**: Build Dagster assets with partitions, resources, and asset checks.
- **[building-dbt-models](./building-dbt-models/SKILL.md)**: Build dbt models with a declared grain and incremental logic that is safe to re-run.
- **[building-feature-pipelines](./building-feature-pipelines/SKILL.md)**: Build warehouse feature tables with point-in-time joins and one definition for offline and online reads.
- **[building-iceberg-tables](./building-iceberg-tables/SKILL.md)**: Create and maintain Iceberg tables: partitioning, compaction, and time travel.
- **[building-ingestion-pipelines](./building-ingestion-pipelines/SKILL.md)**: Extract from databases, APIs, and files with incremental loads, watermarks, and pagination.
- **[debugging-airflow-pipelines](./debugging-airflow-pipelines/SKILL.md)**: Diagnose a failed or stuck Airflow task. One known application bug stays diagnosing-bugs.
- **[debugging-data-pipelines](./debugging-data-pipelines/SKILL.md)**: Trace wrong, missing, or duplicated data to the first bad stage, then plan a safe backfill. One known application bug stays diagnosing-bugs.
- **[debugging-dbt-runs](./debugging-dbt-runs/SKILL.md)**: Diagnose a failing or stale dbt run. One known application bug stays diagnosing-bugs.
- **[designing-backfills-and-replays](./designing-backfills-and-replays/SKILL.md)**: Reprocess a historical window without doubling rows or rewriting the wrong dates.
- **[designing-data-contracts](./designing-data-contracts/SKILL.md)**: Define what a producer promises downstream, and fail a change that would break that promise.
- **[designing-medallion-architecture](./designing-medallion-architecture/SKILL.md)**: Organize a lakehouse into bronze, silver, and gold, with a rule for what each layer may contain.
- **[documenting-dbt-models](./documenting-dbt-models/SKILL.md)**: Write dbt model and column descriptions and exposures. Documents that agents read stay writing-for-agents.
- **[engineering-databricks-pipelines](./engineering-databricks-pipelines/SKILL.md)**: Build Delta and Auto Loader pipelines and register them in Unity Catalog.
- **[generating-synthetic-test-data](./generating-synthetic-test-data/SKILL.md)**: Generate seeded test rows with edge cases and referential integrity.
- **[handling-schema-evolution](./handling-schema-evolution/SKILL.md)**: Add, rename, or retype a column so existing readers keep working.
- **[implementing-cdc-with-debezium](./implementing-cdc-with-debezium/SKILL.md)**: Replicate an OLTP database with Debezium, including deletes.
- **[implementing-data-cicd](./implementing-data-cicd/SKILL.md)**: Lint, compile, and test a data change, then promote it across environments.
- **[implementing-data-quality-checks](./implementing-data-quality-checks/SKILL.md)**: Block bad data on freshness, volume, schema, and integrity. Application red-green stays tdd.
- **[implementing-pipeline-observability](./implementing-pipeline-observability/SKILL.md)**: Alert on pipeline freshness and volume before a stakeholder finds the gap.
- **[managing-data-lineage-openlineage](./managing-data-lineage-openlineage/SKILL.md)**: Capture cross-tool lineage so an incident or a backfill has a scope.
- **[masking-pii-data](./masking-pii-data/SKILL.md)**: Classify PII and choose masking, hashing, tokenization, or encryption. A source-first audit report stays security-audit.
- **[migrating-legacy-etl](./migrating-legacy-etl/SKILL.md)**: Move legacy ETL or an on-prem warehouse onto dbt, Spark, or a cloud warehouse.
- **[modeling-dimensional-data](./modeling-dimensional-data/SKILL.md)**: Design a star schema, declare the grain, and track history. Glossary work stays domain-modeling.
- **[optimizing-parquet-storage](./optimizing-parquet-storage/SKILL.md)**: Fix small files, row-group size, and compression so scans stay cheap. An application performance regression stays diagnosing-bugs.
- **[optimizing-sql-queries](./optimizing-sql-queries/SKILL.md)**: Read the query plan and cut the scan. An application performance regression stays diagnosing-bugs.
- **[orchestrating-prefect-flows](./orchestrating-prefect-flows/SKILL.md)**: Write Prefect flows with retries, caching, and a schedule.
- **[processing-streaming-data](./processing-streaming-data/SKILL.md)**: Handle delivery semantics, windows, and late data in a stream.
- **[reviewing-data-pipeline-code](./reviewing-data-pipeline-code/SKILL.md)**: Review a data change for grain, idempotency, cost, tests, and PII. Standards-and-spec review of an application diff stays code-review.
- **[terraform-for-data-infra](./terraform-for-data-infra/SKILL.md)**: Provision warehouses, buckets, and orchestration with Terraform. Steps only a human can click stay wizard.
- **[writing-idempotent-transformations](./writing-idempotent-transformations/SKILL.md)**: Write loads that produce the same rows when they run again.
- **[api-and-interface-design](./api-and-interface-design/SKILL.md)**: Design the contract callers may rely on: resources, errors, compatibility, and the line between frontend and backend.
- **[browser-testing-with-devtools](./browser-testing-with-devtools/SKILL.md)**: Check UI in a real browser through Chrome DevTools: DOM, console, network, performance, and a screenshot.
- **[ci-cd-and-automation](./ci-cd-and-automation/SKILL.md)**: Put quality gates and a deploy strategy in the pipeline so a red check can block a ship.
- **[code-simplification](./code-simplification/SKILL.md)**: Local clarity refactor that preserves behavior. A codebase-wide deepening survey stays improve-codebase-architecture.
- **[constraint-driven-development](./constraint-driven-development/SKILL.md)**: Interview a quality bar into CONSTRAINTS.md and reject a diff that quietly lowers it.
- **[context-engineering](./context-engineering/SKILL.md)**: Pack the context for the task in front of you. It does not run at the start of every session. Post-session environment fixes stay retro.
- **[deprecation-and-migration](./deprecation-and-migration/SKILL.md)**: Sunset an API or migrate a schema by expanding first and contracting only after callers have moved.
- **[doubt-driven-development](./doubt-driven-development/SKILL.md)**: Fresh-context adversarial review that tries to disprove a decision before it stands. The reviewer does not see your reasoning.
- **[frontend-ui-engineering](./frontend-ui-engineering/SKILL.md)**: Build accessible, responsive UI that belongs to the product, including keyboard, contrast, and a layout that is not a generic template.
- **[git-workflow-and-versioning](./git-workflow-and-versioning/SKILL.md)**: Atomic commits, branching, conflict splits, and semantic versioning. The pull request body stays pr.
- **[observability-and-instrumentation](./observability-and-instrumentation/SKILL.md)**: Write the on-call question first, then add the log, metric, trace, or alert that can answer it.
- **[performance-optimization](./performance-optimization/SKILL.md)**: Measure a bottleneck, fix it, and leave a guard. One known performance regression stays diagnosing-bugs.
- **[security-and-hardening](./security-and-hardening/SKILL.md)**: Harden a feature while you build it: trust boundaries, OWASP, and an always/ask/never list. A full audit report stays security-audit.
- **[shipping-and-launch](./shipping-and-launch/SKILL.md)**: Pre-launch checklist, feature flags, staged rollout, and a rollback. The pull request body stays pr.
- **[source-driven-development](./source-driven-development/SKILL.md)**: Implement from the official docs and cite the page. A cited note that does not change code stays research.
- **[llm-agent-orchestration](./llm-agent-orchestration/SKILL.md)**: Build a product agent with tools, a graph, and a stop condition. The router for this repo stays ask-matt.
- **[llm-cost-optimization](./llm-cost-optimization/SKILL.md)**: Cut token, routing, and cache cost for LLM calls. Measuring an application bottleneck stays performance-optimization.
- **[llm-data-preparation](./llm-data-preparation/SKILL.md)**: Clean, dedupe, and split a text corpus for fine-tuning or retrieval.
- **[llm-distillation](./llm-distillation/SKILL.md)**: Train a smaller student model to match a larger teacher's outputs on a fixed eval set.
- **[llm-evaluation](./llm-evaluation/SKILL.md)**: Score LLM outputs with a fixed set, retrieval metrics, and a judge. Application red-green stays tdd.
- **[llm-fine-tuning](./llm-fine-tuning/SKILL.md)**: Fine-tune an LLM from a config, an eval set, and a checkpoint policy.
- **[llm-guardrails](./llm-guardrails/SKILL.md)**: Filter LLM inputs and outputs for private data, toxicity, and jailbreaks. Hardening an application feature stays security-and-hardening.
- **[llm-observability](./llm-observability/SKILL.md)**: Track token use, latency, and feedback on LLM calls. Application logs, metrics, and traces stay observability-and-instrumentation.
- **[llm-prompt-engineering](./llm-prompt-engineering/SKILL.md)**: Design and version the prompts an LLM product sends. Documents that agents read stay writing-for-agents.
- **[llm-rag](./llm-rag/SKILL.md)**: Retrieve grounded passages and cite the ones the answer used.
- **[ml-cost-optimization](./ml-cost-optimization/SKILL.md)**: Cut GPU and infrastructure cost for training and serving. Measuring an application bottleneck stays performance-optimization.
- **[ml-experiment-tracking](./ml-experiment-tracking/SKILL.md)**: Record params, metrics, and artifacts so two training runs can be compared.
- **[ml-pipeline-orchestration](./ml-pipeline-orchestration/SKILL.md)**: Schedule train, validate, and promote as one pipeline with retries and a failure alert.
- **[ml-security](./ml-security/SKILL.md)**: Threat-model a model: adversarial inputs, poisoning, privacy, and the ML supply chain. A source-first audit report stays security-audit.
- **[ml-solution-design](./ml-solution-design/SKILL.md)**: Turn an ML problem into requirements and a reference architecture. A spec from an existing thread stays to-spec.
- **[ml-testing](./ml-testing/SKILL.md)**: Test data, features, and model behavior, then gate promotion on them. The daily red-green loop stays tdd.
- **[model-drift-detection](./model-drift-detection/SKILL.md)**: Detect input or prediction drift and send a retrain trigger back to training.
- **[model-monitoring](./model-monitoring/SKILL.md)**: Alert when a deployed model's performance or traffic leaves its band. Application telemetry stays observability-and-instrumentation.
- **[model-observability](./model-observability/SKILL.md)**: Explain a prediction and log the features that produced it. Application telemetry stays observability-and-instrumentation.
- **[model-registry](./model-registry/SKILL.md)**: Register a versioned model artifact and the contract a server needs to load it.
- **[model-serving](./model-serving/SKILL.md)**: Serve a model behind an API with a health check and a rollback. An application launch checklist stays shipping-and-launch.
- **[model-training](./model-training/SKILL.md)**: Train a model from a pinned config, split, and seed, and package the artifact for the registry.
