## What it does

`writing-idempotent-transformations` writes loads that produce the same rows when they run again.

An append of a window that might be retried will duplicate that window. The write is a merge or a partition overwrite of a key you can name.

## When to reach for it

Type `/writing-idempotent-transformations`, or the [agent](https://www.aihero.dev/ai-coding-dictionary/agent) reaches for it when a task fits.

Reach for this whenever a load, a retry, or a backfill could run twice. Orchestrating that load is [authoring-airflow-dags](https://aihero.dev/skills-authoring-airflow-dags), [building-dagster-assets](https://aihero.dev/skills-building-dagster-assets), or [orchestrating-prefect-flows](https://aihero.dev/skills-orchestrating-prefect-flows).

## The key

The leading word is **key**. The write matches on a key, or replaces a partition, so the second run is a no-op for rows that did not change. A backfill of that key does not stack copies.

## It's working if

- You can name the key or the partition the load replaces.
- Running the load twice leaves the same row count for that key.

## Where it fits

This is a **cross-cutting** skill under ingestion, models, and backfills.

Its neighbour is [designing-backfills-and-replays](https://aihero.dev/skills-designing-backfills-and-replays), because a backfill assumes this property.

When you are unsure which skill fits, [ask-matt](https://aihero.dev/skills-ask-matt) routes you.
