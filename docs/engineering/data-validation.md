> **Archived.** Removed in the duplicate-skill pass. The replacement is [implementing-data-quality-checks](https://aihero.dev/skills-implementing-data-quality-checks).

## What it does

`data-validation` stops a training batch that fails a schema, range, or distribution check.

A check that only warns, and still lets training start, is a log line. The gate has to be able to refuse the batch.

## When to reach for it

Type `/data-validation`, or the [agent](https://www.aihero.dev/ai-coding-dictionary/agent) reaches for it when a task fits.

Reach for this when a landed batch needs a pass or fail before features or training. Bringing the batch in is [data-ingestion](https://aihero.dev/skills-data-ingestion).

## A gate

The leading word is **gate**. Name the expectation (schema, null rate, range, a slice of the distribution) and what a failure does. The next step in the chain reads a batch that passed.

## It's working if

- A broken batch fails the check in a way training can see.
- The failing expectation is named, so the fix is a data change or a threshold change.

## Where it fits

This is a **chain step** between landing data and building features.

Its neighbours are [data-ingestion](https://aihero.dev/skills-data-ingestion) and [feature-engineering](https://aihero.dev/skills-feature-engineering).

When you are unsure which skill fits, [ask-matt](https://aihero.dev/skills-ask-matt) routes you.
