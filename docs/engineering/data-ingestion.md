> **Archived.** Removed in the duplicate-skill pass. The replacement is [building-ingestion-pipelines](https://aihero.dev/skills-building-ingestion-pipelines).

## What it does

`data-ingestion` lands raw data in a versioned store a later training job can reload.

A load is ready for the rest of the chain only when it can name its schema, its source, and the time it arrived.

## When to reach for it

Type `/data-ingestion`, or the [agent](https://www.aihero.dev/ai-coding-dictionary/agent) reaches for it when a task fits.

Reach for this when new data has to enter the ML path. A quality gate on a batch that is already landed is [data-validation](https://aihero.dev/skills-data-validation).

## A landing

The leading word is **landing**. Each batch records where it came from, the schema it claimed, and when it arrived. Training reads that batch, rather than whatever happens to sit in the bucket today.

## It's working if

- You can point at the batch a training run used.
- A partial or stale load stops before feature work starts.

## Where it fits

This is a **chain step** at the start of ML delivery, after [ml-solution-design](https://aihero.dev/skills-ml-solution-design).

Its neighbour is [data-validation](https://aihero.dev/skills-data-validation), because a landed batch still has to pass a quality gate before features are built.

When you are unsure which skill fits, [ask-matt](https://aihero.dev/skills-ask-matt) routes you.
