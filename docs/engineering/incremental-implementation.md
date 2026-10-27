## What it does

`incremental-implementation` cuts a change into thin slices that each stay compilable and checkable.

The defining constraint is the tree stays green between slices. A feature flag is one way to land a slice before the whole behaviour is on. Driving a ticket through the daily red-green loop and a review is the house implement skill, and you start that one yourself.

## When to reach for it

Type `/incremental-implementation`, or the [agent](https://www.aihero.dev/ai-coding-dictionary/agent) reaches for it when a task fits.

| Your situation | Reach for |
| --- | --- |
| The change is too big for one step | This skill |
| A ticket should be built and reviewed | [implement](https://aihero.dev/skills-implement) |

## A slice

The leading word is **slice**. Each slice is a vertical path a person could use or a test could pin, not a horizontal layer of only-database or only-UI. The next slice starts from a tree that still builds.

## Common questions

**How is this different from implement?**

[implement](https://aihero.dev/skills-implement) builds the work in a ticket, drives [tdd](https://aihero.dev/skills-tdd) at the seams, and closes with [code-review](https://aihero.dev/skills-code-review). You invoke it yourself. This skill is the slicing discipline for a change that has to land in steps.

## It's working if

- The project still builds after each slice.
- A slice is a path through the stack, not a single layer.

## Where it fits

This is a **reach-for-it-anytime standalone** on the build step of the vendored lifecycle.

Its neighbour is [implement](https://aihero.dev/skills-implement), because both are how code gets written once the plan exists.

When you are unsure which skill fits, [ask-matt](https://aihero.dev/skills-ask-matt) routes you.
