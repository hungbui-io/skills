> **Archived.** Removed in the duplicate-skill pass. The house skill stays: [to-tickets](https://aihero.dev/skills-to-tickets).

## What it does

`planning-and-task-breakdown` turns a [spec](https://www.aihero.dev/ai-coding-dictionary/spec) into an ordered plan: a dependency graph and vertical slices, saved as a plan document.

The defining constraint is the artifact is a plan, not a set of tracker tickets. Tracer-bullet tickets with blocking edges are the house ticket skill, and you start that one yourself.

## When to reach for it

Type `/planning-and-task-breakdown`, or the [agent](https://www.aihero.dev/ai-coding-dictionary/agent) reaches for it when a task fits.

| Your situation | Reach for |
| --- | --- |
| You have a spec and want an ordered plan | This skill |
| You want tracker tickets with blocking edges | [to-tickets](https://aihero.dev/skills-to-tickets) |

## Prerequisites

The plan is written to `tasks/plan.md`. An external tracker is used only when the repo's rules or you name one, and the plan says where those tasks live.

## The graph

The leading word is **graph**. Tasks name what they block and what blocks them. A task that is too big to land is split before it is called ready. Slices cut through the stack, so a finished task is a path a person could try.

## Common questions

**How is this different from to-tickets?**

[to-tickets](https://aihero.dev/skills-to-tickets) breaks work into tracer-bullet tickets with blocking edges, as a local file or as real links on a tracker. You invoke it yourself. This skill writes the plan document and the dependency graph.

## It's working if

- `tasks/plan.md` exists and a reader can see the order.
- No task is an entire horizontal layer with nothing a person could try.

## Where it fits

This is a **reach-for-it-anytime standalone** between a spec and the build, on the vendored lifecycle.

Its neighbour is [to-tickets](https://aihero.dev/skills-to-tickets), because both take a spec and produce work a builder can pick up.

When you are unsure which skill fits, [ask-matt](https://aihero.dev/skills-ask-matt) routes you.
