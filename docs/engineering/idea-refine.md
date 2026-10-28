> **Archived.** Removed in the duplicate-skill pass. The house skill stays: [grill-with-docs](https://aihero.dev/skills-grill-with-docs).

## What it does

`idea-refine` takes a vague product idea, opens it up, and closes it into one direction with a one-pager.

The defining constraint is diverge, then converge. It is not the house interview. If you do not yet know what you want, the house interview is the skill to type. This skill starts once there is an idea to vary.

## When to reach for it

Type `/idea-refine`, or the [agent](https://www.aihero.dev/ai-coding-dictionary/agent) reaches for it when a task fits.

| Your situation | Reach for |
| --- | --- |
| You have a rough idea and want options before you commit | This skill |
| You are in a repo and want the design tree resolved | [grill-with-docs](https://aihero.dev/skills-grill-with-docs) |
| You are not in a working directory | [grill-me](https://aihero.dev/skills-grill-me) |

## Prerequisites

The one-pager is written to `docs/ideas/` after you confirm it. An optional script creates that directory: `skills/engineering/idea-refine/scripts/idea-refine.sh`, run from the repo root.

## Diverge, then converge

The leading words are **diverge, then converge**. Generate real variants, stress the assumptions, then pick one direction and write the problem, the MVP, and the list of things you are not doing.

## Common questions

**How is this different from the house interview?**

[grill-with-docs](https://aihero.dev/skills-grill-with-docs) and [grill-me](https://aihero.dev/skills-grill-me) resolve a design tree one decision at a time, and you type them yourself. This skill generates variants of an idea you already have and ends in a one-pager.

## It's working if

- More than one direction was real before one was chosen.
- The one-pager names the problem, the direction, and what you are not doing.

## Where it fits

This is a **reach-for-it-anytime standalone** before a spec, when the idea itself is still soft.

Its neighbours are [grill-with-docs](https://aihero.dev/skills-grill-with-docs) and [spec-driven-development](https://aihero.dev/skills-spec-driven-development). The interview resolves decisions. The gated spec starts once a direction exists.

When you are unsure which skill fits, [ask-matt](https://aihero.dev/skills-ask-matt) routes you.
