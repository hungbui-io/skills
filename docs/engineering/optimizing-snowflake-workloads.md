> **Archived.** Removed in the duplicate-skill pass. The replacement is [optimizing-sql-queries](https://aihero.dev/skills-optimizing-sql-queries).

## What it does

`optimizing-snowflake-workloads` right-sizes warehouses and stops needless scans.

One known performance regression in application code is a different skill. This one starts from warehouse queueing, spilling, and the pruning the query failed to do.

## When to reach for it

Type `/optimizing-snowflake-workloads`, or the [agent](https://www.aihero.dev/ai-coding-dictionary/agent) reaches for it when a task fits.

Reach for this when Snowflake cost or latency is the problem. Engine-agnostic plan reading is [optimizing-sql-queries](https://aihero.dev/skills-optimizing-sql-queries). One known application performance regression is [diagnosing-bugs](https://aihero.dev/skills-diagnosing-bugs).

## The warehouse

The leading word is **warehouse**. A warehouse that queues needs concurrency or a size change you can justify. A warehouse that spills is a query or a size. Auto-suspend stops the idle bill. Clustering matches the filter.

## Common questions

**How is this different from diagnosing-bugs?**

One known application performance regression is [diagnosing-bugs](https://aihero.dev/skills-diagnosing-bugs). This skill reduces Snowflake warehouse cost and queueing.

## It's working if

- You can say whether the cost is queueing, spilling, or idle time.
- The warehouse has an auto-suspend you can point at.

## Where it fits

This is a **reach-for-it-anytime standalone** for Snowflake cost.

Its neighbour is [diagnosing-bugs](https://aihero.dev/skills-diagnosing-bugs), because that skill is one known application performance regression.

When you are unsure which skill fits, [ask-matt](https://aihero.dev/skills-ask-matt) routes you.
