## What it does

`designing-backfills-and-replays` reprocesses history without doubling rows or rewriting the wrong dates.

A backfill is a second write of a window you can name. If the load is not idempotent, the backfill is how the table gets duplicates.

## When to reach for it

Type `/designing-backfills-and-replays`, or the [agent](https://www.aihero.dev/ai-coding-dictionary/agent) reaches for it when a task fits.

Reach for this when history must be recomputed after a fix. The load that makes that safe is [writing-idempotent-transformations](https://aihero.dev/skills-writing-idempotent-transformations).

## The window

The leading word is **window**. Write down the start, the end, the models in order, and the proof you will use when it finishes (counts, sums, a grain check). Run a narrow slice before the full range.

## It's working if

- The backfill names its date range and its models.
- A rerun of that range does not change row counts a second time.

## Where it fits

This is a **reach-for-it-anytime standalone** after a data fix.

Its neighbour is [debugging-data-pipelines](https://aihero.dev/skills-debugging-data-pipelines), because the incident names the window and this skill replays it.

When you are unsure which skill fits, [ask-matt](https://aihero.dev/skills-ask-matt) routes you.
