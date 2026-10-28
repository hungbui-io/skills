## What it does

`implementing-pipeline-observability` alerts when a pipeline is late, empty, or suddenly huge.

An alert that fires because a stakeholder asked where the data is, is late by definition. Freshness and volume have a threshold before the table is published.

## When to reach for it

Type `/implementing-pipeline-observability`, or the [agent](https://www.aihero.dev/ai-coding-dictionary/agent) reaches for it when a task fits.

Reach for this when failures are found by dashboards instead of pages. The check that can fail the batch is [implementing-data-quality-checks](https://aihero.dev/skills-implementing-data-quality-checks).

## The SLA

The leading word is **SLA**. Name the dataset, how late is too late, and how small or large a batch may be. The page names the dataset and the threshold. A green job with no rows is still a failure if the SLA says so.

## It's working if

- An alert names the dataset and the freshness or volume threshold.
- You can tell a late batch from an empty one.

## Where it fits

This is a **chain step** once a pipeline is in production.

Its neighbour is [implementing-data-quality-checks](https://aihero.dev/skills-implementing-data-quality-checks).

When you are unsure which skill fits, [ask-matt](https://aihero.dev/skills-ask-matt) routes you.
