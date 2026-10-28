## What it does

`debugging-data-pipelines` traces wrong, missing, or duplicated rows to the first bad stage.

One known application bug is a different skill. This one starts from a table, a column, and a time window, then walks upstream until the numbers stop matching the source.

## When to reach for it

Type `/debugging-data-pipelines`, or the [agent](https://www.aihero.dev/ai-coding-dictionary/agent) reaches for it when a task fits.

Reach for this when a dataset is wrong and the job may still be green. A failing Airflow task is [debugging-airflow-pipelines](https://aihero.dev/skills-debugging-airflow-pipelines). A failing dbt run is [debugging-dbt-runs](https://aihero.dev/skills-debugging-dbt-runs). One known application bug is [diagnosing-bugs](https://aihero.dev/skills-diagnosing-bugs).

## The window

The leading word is **window**. Name the table, the column, and the dates that are wrong. Reconcile that window to its source. The fix includes an idempotent backfill of the affected window and a check that would have caught it.

## Common questions

**How is this different from diagnosing-bugs?**

One known application bug, with a tight feedback loop, is [diagnosing-bugs](https://aihero.dev/skills-diagnosing-bugs). This skill traces wrong, missing, or duplicated data and plans a safe backfill.

## It's working if

- The symptom names a table, a column, and a window.
- The backfill covers that window and does not rewrite unrelated dates.

## Where it fits

This is a **reach-for-it-anytime standalone** for a data incident.

Its neighbour is [diagnosing-bugs](https://aihero.dev/skills-diagnosing-bugs), because that skill is one known application bug.

When you are unsure which skill fits, [ask-matt](https://aihero.dev/skills-ask-matt) routes you.
