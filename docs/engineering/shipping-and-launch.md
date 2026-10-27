## What it does

`shipping-and-launch` is the pre-launch checklist: flags, a staged rollout, monitoring, and a rollback you could actually run.

The defining constraint is reversible. A launch you cannot undo is not ready. The pull request body is a different skill. This one starts when the question is what has to be true before production traffic arrives.

## When to reach for it

Type `/shipping-and-launch`, or the [agent](https://www.aihero.dev/ai-coding-dictionary/agent) reaches for it when a task fits.

| Your situation | Reach for |
| --- | --- |
| You are about to send a change to production | This skill |
| You need the pull request body | [pr](https://aihero.dev/skills-pr) |

## Reversible

The leading word is **reversible**. The flag can turn the change off. The first slice of traffic is small enough to watch. The rollback is a step someone can follow, and the signal that should stop the rollout is named before you start.

## Common questions

**How is this different from pr?**

[pr](https://aihero.dev/skills-pr) shapes the pull request body: summary, evidence, and merge danger. This skill is the launch: flags, staged rollout, monitoring, and rollback.

## It's working if

- There is a way to turn the change off.
- The signal that stops the rollout is named before traffic moves.

## Where it fits

This is a **reach-for-it-anytime standalone** at the end of the vendored lifecycle.

Its neighbours are [pr](https://aihero.dev/skills-pr) and [observability-and-instrumentation](https://aihero.dev/skills-observability-and-instrumentation). The body explains the change. The launch needs a signal.

When you are unsure which skill fits, [ask-matt](https://aihero.dev/skills-ask-matt) routes you.
