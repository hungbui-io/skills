## What it does

`managing-data-lineage-openlineage` records which datasets a job read and wrote, so an incident has a scope.

A lineage picture you draw by hand goes stale on the next model. The job emits its inputs and outputs when it runs.

## When to reach for it

Type `/managing-data-lineage-openlineage`, or the [agent](https://www.aihero.dev/ai-coding-dictionary/agent) reaches for it when a task fits.

Reach for this when you need impact for a backfill or a break. The backfill itself is [designing-backfills-and-replays](https://aihero.dev/skills-designing-backfills-and-replays).

## The edge

The leading word is **edge**. Each run records dataset in, dataset out, and the job that connected them. Impact is the downstream walk from the broken dataset. A backfill uses that walk instead of a guess.

## It's working if

- A run lists its input datasets and its output datasets.
- From a broken dataset you can list the downstream datasets in scope.

## Where it fits

This is a **cross-cutting** skill on jobs that already run.

Its neighbour is [designing-backfills-and-replays](https://aihero.dev/skills-designing-backfills-and-replays).

When you are unsure which skill fits, [ask-matt](https://aihero.dev/skills-ask-matt) routes you.
