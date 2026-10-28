## What it does

`building-dbt-models` creates dbt models with a declared grain and a materialization you can rerun.

An incremental model without a unique key duplicates rows the second time it runs. The materialization has to be safe to re-run.

## When to reach for it

Type `/building-dbt-models`, or the [agent](https://www.aihero.dev/ai-coding-dictionary/agent) reaches for it when a task fits.

Reach for this when you are adding or refactoring a dbt model. Tests on that model are [testing-dbt-projects](https://aihero.dev/skills-testing-dbt-projects). A failed run is [debugging-dbt-runs](https://aihero.dev/skills-debugging-dbt-runs).

## The grain

The leading word is **grain**. Name the row the model outputs, pick view, table, or incremental, and make a second run produce the same rows. Incremental models set a unique key and a lookback for late rows.

## It's working if

- The model states its grain and, when incremental, its unique key.
- Running it twice does not duplicate that grain.

## Where it fits

This is a **chain step** when the transform is dbt.

Its neighbours are [writing-idempotent-transformations](https://aihero.dev/skills-writing-idempotent-transformations) and [testing-dbt-projects](https://aihero.dev/skills-testing-dbt-projects).

When you are unsure which skill fits, [ask-matt](https://aihero.dev/skills-ask-matt) routes you.
