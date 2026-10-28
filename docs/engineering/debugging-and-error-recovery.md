> **Archived.** Removed in the duplicate-skill pass. The house skill stays: [diagnosing-bugs](https://aihero.dev/skills-diagnosing-bugs).

## What it does

`debugging-and-error-recovery` stops the line on a fresh break: reproduce it, bisect, reduce, fix the root cause, add a guard, and verify.

The defining constraint is that this is the checklist for a break you have not pinned down yet. A hard bug or a performance regression that needs a tight red loop, with hypotheses and probes, is the house diagnosis skill.

## When to reach for it

Type `/debugging-and-error-recovery`, or the [agent](https://www.aihero.dev/ai-coding-dictionary/agent) reaches for it when a task fits.

| Your situation | Reach for |
| --- | --- |
| The build just went red, or yesterday's behaviour stopped | This skill |
| One hard bug, and you need a tight loop | [diagnosing-bugs](https://aihero.dev/skills-diagnosing-bugs) |

## Stop the line

The leading words are **stop the line**. Do not patch the symptom while the failure is still a guess. Get a repro, shrink it, fix the cause, and leave a guard so the same break fails a check next time.

## Common questions

**How is this different from diagnosing-bugs?**

[diagnosing-bugs](https://aihero.dev/skills-diagnosing-bugs) is the tight loop for one known bug or performance regression: a feedback loop that goes red, then minimise, hypothesise, instrument, fix, and regression-test. This skill is the stop-the-line checklist for a fresh break.

## It's working if

- There is a repro before there is a fix.
- The guard fails if the same break comes back.

## Where it fits

This is a **reach-for-it-anytime standalone** for a fresh break.

Its neighbour is [diagnosing-bugs](https://aihero.dev/skills-diagnosing-bugs), because both start from something that is broken.

When you are unsure which skill fits, [ask-matt](https://aihero.dev/skills-ask-matt) routes you.
