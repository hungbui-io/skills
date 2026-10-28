## What it does

`building-feature-pipelines` builds warehouse feature tables with a point-in-time join.

A feature that uses a value from after the label time will look accurate offline and fail when it is served. Training and serving have to read the same definition as of the label time.

## When to reach for it

Type `/building-feature-pipelines`, or the [agent](https://www.aihero.dev/ai-coding-dictionary/agent) reaches for it when a task fits.

Reach for this when an analytics or training table needs features built in the warehouse. The table design around it is [modeling-dimensional-data](https://aihero.dev/skills-modeling-dimensional-data).

## Point in time

The leading word is **point-in-time**. Each training row asks for feature values that existed when the label was known. The online read uses the same definition and cannot see a later update.

## It's working if

- The training read is pinned to the label time.
- The offline query and the online read name the same feature.

## Where it fits

This is a **reach-for-it-anytime standalone** when the work is a feature table in the warehouse.

Its neighbour is [writing-idempotent-transformations](https://aihero.dev/skills-writing-idempotent-transformations), because a feature build that is not safe to re-run will drift between backfill and the daily job.

When you are unsure which skill fits, [ask-matt](https://aihero.dev/skills-ask-matt) routes you.
