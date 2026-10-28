## What it does

`debugging-dbt-runs` diagnoses a dbt run that fails, or an incremental model that is stale or duplicated.

One known application bug is a different skill. This one starts from the dbt error, the model, and whether the incremental filter dropped or doubled rows.

## When to reach for it

Type `/debugging-dbt-runs`, or the [agent](https://www.aihero.dev/ai-coding-dictionary/agent) reaches for it when a task fits.

Reach for this when `dbt run` or `dbt build` fails, or CI does not match local. Data that is wrong after a green run is [debugging-data-pipelines](https://aihero.dev/skills-debugging-data-pipelines). One known application bug is [diagnosing-bugs](https://aihero.dev/skills-diagnosing-bugs).

## The model run

The leading word is **run**. Read the failing node, not the whole project. For an incremental model, check the unique key and the filter before you full-refresh. A full-refresh is a decision about history, not the first click.

## Common questions

**How is this different from diagnosing-bugs?**

One known application bug is [diagnosing-bugs](https://aihero.dev/skills-diagnosing-bugs). This skill diagnoses a failing or stale dbt run.

## It's working if

- The failing node and the error are named.
- An incremental fix states whether a full-refresh is required, and for which models.

## Where it fits

This is a **reach-for-it-anytime standalone** for dbt runs.

Its neighbour is [diagnosing-bugs](https://aihero.dev/skills-diagnosing-bugs), because that skill is one known application bug.

When you are unsure which skill fits, [ask-matt](https://aihero.dev/skills-ask-matt) routes you.
