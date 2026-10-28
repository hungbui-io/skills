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
