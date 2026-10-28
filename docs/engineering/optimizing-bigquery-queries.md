## What it does

`optimizing-bigquery-queries` reduces bytes billed and stops full scans.

One known performance regression in application code is a different skill. This one starts from bytes billed, the partition filter, and the columns the query actually needs.

## When to reach for it

Type `/optimizing-bigquery-queries`, or the [agent](https://www.aihero.dev/ai-coding-dictionary/agent) reaches for it when a task fits.

Reach for this when BigQuery cost or a full scan is the problem. Engine-agnostic plan reading is [optimizing-sql-queries](https://aihero.dev/skills-optimizing-sql-queries). One known application performance regression is [diagnosing-bugs](https://aihero.dev/skills-diagnosing-bugs).

## The bytes

The leading word is **bytes**. A query that filters a partitioned table still scans everything if the filter cannot prune. Select the columns you need. Cluster or partition on the filter you actually have.

## Common questions

**How is this different from diagnosing-bugs?**

One known application performance regression is [diagnosing-bugs](https://aihero.dev/skills-diagnosing-bugs). This skill reduces BigQuery bytes billed.

## It's working if

- You can state bytes billed before and after.
- The expensive query filters on the partition column.

## Where it fits

This is a **reach-for-it-anytime standalone** for BigQuery cost.

Its neighbour is [diagnosing-bugs](https://aihero.dev/skills-diagnosing-bugs), because that skill is one known application performance regression.

When you are unsure which skill fits, [ask-matt](https://aihero.dev/skills-ask-matt) routes you.
