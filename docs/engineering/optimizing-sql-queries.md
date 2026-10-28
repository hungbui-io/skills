## What it does

`optimizing-sql-queries` reads the query plan and cuts the scan.

One known performance regression in application code is a different skill. This one starts from the plan: which table was scanned, which join blew up, and which predicate could not be pushed down.

## When to reach for it

Type `/optimizing-sql-queries`, or the [agent](https://www.aihero.dev/ai-coding-dictionary/agent) reaches for it when a task fits.

Reach for this when analytical SQL is slow or expensive across engines. Snowflake specifics are [optimizing-snowflake-workloads](https://aihero.dev/skills-optimizing-sql-queries). BigQuery specifics are [optimizing-bigquery-queries](https://aihero.dev/skills-optimizing-sql-queries). One known application performance regression is [diagnosing-bugs](https://aihero.dev/skills-diagnosing-bugs).

Snowflake, BigQuery, and Spark cost work are part of this skill.

## The plan

The leading word is **plan**. Read it before you rewrite the query. A scan of a table you meant to prune, or a join that multiplies rows, is the change. Filter early. Select the columns you need.

## Common questions

**How is this different from diagnosing-bugs?**

One known application performance regression is [diagnosing-bugs](https://aihero.dev/skills-diagnosing-bugs). This skill reads a SQL plan and cuts the scan.

## It's working if

- The plan shows a smaller scan or a smaller join after the change.
- You can name the predicate that now prunes.

## Where it fits

This is a **reach-for-it-anytime standalone** for analytical SQL.

Its neighbour is [diagnosing-bugs](https://aihero.dev/skills-diagnosing-bugs), because that skill is one known application performance regression.

When you are unsure which skill fits, [ask-matt](https://aihero.dev/skills-ask-matt) routes you.
