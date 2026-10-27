## What it does

`test-driven-development` is the vendored red-green loop: discover the stack, write a failing test, make it pass, and refactor. Bugs use the prove-it pattern. Tests prefer DAMP over clever helpers.

The defining constraint is that the daily loop in this repo is tdd, and only you can start this variant. It does not fire because a task says implement logic or fix a bug.

## When to reach for it

You invoke this by typing `/test-driven-development`, and the [agent](https://www.aihero.dev/ai-coding-dictionary/agent) won't reach for it on its own.

| Your situation | Reach for |
| --- | --- |
| You want this vendored loop, including the pyramid and DAMP | This skill, which you type |
| The daily red-green loop | [tdd](https://aihero.dev/skills-tdd) |

## Prove it

The leading words are **prove it**. A failing test is the proof the behaviour was missing. The stack's own test command is the one that runs, found from the repo rather than assumed. The pyramid puts most tests at the small, fast layer.

## Common questions

**How is this different from tdd?**

[tdd](https://aihero.dev/skills-tdd) is the daily red-green loop the other house skills drive. This skill is the vendored variant: stack discovery, the test pyramid, DAMP tests, and the prove-it bug pattern. You type it when you want that variant.

## It's working if

- A failing test exists before the production change.
- The command that ran is the repo's command, and it is red, then green.

## Where it fits

This is a **reach-for-it-anytime standalone** you invoke when you want the vendored loop. It is not a step the house chain calls.

Its neighbour is [tdd](https://aihero.dev/skills-tdd), because both are red-green and only one of them is the daily loop.

When you are unsure which skill fits, [ask-matt](https://aihero.dev/skills-ask-matt) routes you.
