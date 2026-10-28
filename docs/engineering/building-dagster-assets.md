## What it does

`building-dagster-assets` builds a pipeline as software-defined assets, with partitions and checks.

An asset that hides its partition and its upstreams cannot be rerun for one bad day. The asset declares both.

## When to reach for it

Type `/building-dagster-assets`, or the [agent](https://www.aihero.dev/ai-coding-dictionary/agent) reaches for it when a task fits.

Reach for this when the orchestrator is Dagster. Quality checks on the asset are [implementing-data-quality-checks](https://aihero.dev/skills-implementing-data-quality-checks).

## The asset

The leading word is **asset**. The asset names what it materializes, which partitions it has, and which check fails the partition. A rerun targets the partition, not the whole history.

## It's working if

- The asset names its partition and its upstreams.
- A failed check is attached to the partition that failed.

## Where it fits

This is a **chain step** when the orchestrator is Dagster.

Its neighbour is [authoring-airflow-dags](https://aihero.dev/skills-authoring-airflow-dags), because the choice is the orchestrator, and the load underneath still has to be safe to re-run.

When you are unsure which skill fits, [ask-matt](https://aihero.dev/skills-ask-matt) routes you.
