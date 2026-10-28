> **Archived.** Removed in the duplicate-skill pass. The replacement is [optimizing-sql-queries](https://aihero.dev/skills-optimizing-sql-queries).

## What it does

`optimizing-pyspark-jobs` reduces spills, skew, and shuffles in a Spark job.

One known performance regression in application code is a different skill. This one starts from the Spark UI: the stage that spilled, the skewed key, or the shuffle you did not need.

## When to reach for it

Type `/optimizing-pyspark-jobs`, or the [agent](https://www.aihero.dev/ai-coding-dictionary/agent) reaches for it when a task fits.

Reach for this when a PySpark or Spark SQL job is slow or out of memory. Databricks packaging around it is [engineering-databricks-pipelines](https://aihero.dev/skills-engineering-databricks-pipelines). One known application performance regression is [diagnosing-bugs](https://aihero.dev/skills-diagnosing-bugs).

## The stage

The leading word is **stage**. Find the stage that dominates. Skew is one key with too many rows. A shuffle that exists only because of a needless repartition goes away. Cache a frame you really reuse, and name why.

## Common questions

**How is this different from diagnosing-bugs?**

One known application performance regression is [diagnosing-bugs](https://aihero.dev/skills-diagnosing-bugs). This skill reduces Spark spills, skew, and shuffles.

## It's working if

- The slow stage is named, with spill or skew as the reason.
- The change removes a shuffle, a skew, or a spill you can point at.

## Where it fits

This is a **reach-for-it-anytime standalone** for Spark jobs.

Its neighbour is [diagnosing-bugs](https://aihero.dev/skills-diagnosing-bugs), because that skill is one known application performance regression.

When you are unsure which skill fits, [ask-matt](https://aihero.dev/skills-ask-matt) routes you.
