## What it does

`reviewing-data-pipeline-code` reviews a data change for grain, idempotency, cost, tests, and PII.

A standards-and-spec review of an application diff is a different skill. This one reviews SQL, dbt, Spark, or an orchestrator change for data correctness and cost.

## When to reach for it

Type `/reviewing-data-pipeline-code`, or the [agent](https://www.aihero.dev/ai-coding-dictionary/agent) reaches for it when a task fits.

Reach for this on a data pipeline pull request. A standards-and-spec review of an application diff is [code-review](https://aihero.dev/skills-code-review).

## The checklist

The leading word is **grain**. Confirm the output grain, that a retry will not duplicate it, that incremental logic has a unique key, that the scan is bounded, and that sensitive columns are masked. A missing test on the key is a finding.

## Common questions

**How is this different from code-review?**

A standards-and-spec review of an application diff is [code-review](https://aihero.dev/skills-code-review). This skill reviews a data pipeline change: grain, idempotency, incremental logic, cost, tests, and PII.

## It's working if

- The review names the grain and whether a retry is safe.
- Cost and PII are each either checked or called out as missing.

## Where it fits

This is a **reach-for-it-anytime standalone** on a data change.

Its neighbour is [code-review](https://aihero.dev/skills-code-review), because that skill reviews an application diff against standards and spec.

When you are unsure which skill fits, [ask-matt](https://aihero.dev/skills-ask-matt) routes you.
