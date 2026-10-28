## What it does

`migrating-legacy-etl` moves a legacy warehouse or ETL job onto dbt, Spark, or a cloud warehouse.

A rewrite that does not reconcile the old output to the new one is a new pipeline, not a migration. The cutover has a comparison and a way back.

## When to reach for it

Type `/migrating-legacy-etl`, or the [agent](https://www.aihero.dev/ai-coding-dictionary/agent) reaches for it when a task fits.

Reach for this when SSIS, Informatica, stored procedures, or an on-prem warehouse must move. The new models are [building-dbt-models](https://aihero.dev/skills-building-dbt-models) or [optimizing-pyspark-jobs](https://aihero.dev/skills-optimizing-pyspark-jobs).

## The reconciliation

The leading word is **reconciliation**. Run old and new on the same window. Compare grain, counts, and the measures that matter. Cut over when the gap is explained. Keep the old job runnable until that window is accepted.

## It's working if

- Old and new outputs are compared on a named window.
- The cutover has a way back to the old job.

## Where it fits

This is a **reach-for-it-anytime standalone** for a platform move.

Its neighbour is [building-dbt-models](https://aihero.dev/skills-building-dbt-models), because that is often the destination, and this skill is the comparison.

When you are unsure which skill fits, [ask-matt](https://aihero.dev/skills-ask-matt) routes you.
