## What it does

`code-simplification` rewrites code so a reader can follow it, without changing what it does.

The defining constraint is behaviour stays. If the simplification needs a new outcome, it is a feature, and it leaves this skill. A survey of the whole codebase for deeper modules is a different skill, and you start that one yourself.

## When to reach for it

Type `/code-simplification`, or the [agent](https://www.aihero.dev/ai-coding-dictionary/agent) reaches for it when a task fits.

| Your situation | Reach for |
| --- | --- |
| This function works and is hard to read | This skill |
| The codebase has drifted and you want a deepening survey | [improve-codebase-architecture](https://aihero.dev/skills-improve-codebase-architecture) |

## Clarity

The leading word is **clarity**. Delete a branch, name a value, or pull a step out so the next reader sees the same behaviour in fewer moves. The tests that already exist should still pass, because the behaviour did not change.

## Common questions

**How is this different from improve-codebase-architecture?**

[improve-codebase-architecture](https://aihero.dev/skills-improve-codebase-architecture) surveys a codebase for deepening opportunities and you invoke it yourself. This skill is a local clarity refactor on code that already behaves correctly.

## It's working if

- The behaviour the tests pin stays the same.
- The diff is shorter or easier to read than the code it replaced.

## Where it fits

This is a **reach-for-it-anytime standalone** for a local cleanup.

Its neighbour is [improve-codebase-architecture](https://aihero.dev/skills-improve-codebase-architecture), because a local cleanup and a deepening survey start from the same feeling that the code is harder than it should be.

When you are unsure which skill fits, [ask-matt](https://aihero.dev/skills-ask-matt) routes you.
