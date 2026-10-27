## What it does

`code-review-and-quality` reads a change across five axes: correctness, readability, architecture, security, and performance.

The defining constraint is that this is a quality pass, not the house review. The house review asks whether the diff follows the repo's standards and whether it matches the spec. This skill asks whether the change is sound on those five axes, including when the diff is pasted into the chat.

## When to reach for it

Type `/code-review-and-quality`, or the [agent](https://www.aihero.dev/ai-coding-dictionary/agent) reaches for it when a task fits.

| Your situation | Reach for |
| --- | --- |
| You want the five-axis quality pass | This skill |
| Standards and spec on a diff since a fixed point | [code-review](https://aihero.dev/skills-code-review) |
| A full audit report of a repo | [security-audit](https://aihero.dev/skills-security-audit) |

## Five axes

The leading words are **five axes**. A comment belongs on one axis. A change can be readable and still be the wrong architecture. The pass says which axis failed.

## Common questions

**How is this different from code-review?**

[code-review](https://aihero.dev/skills-code-review) splits Standards and Spec into separate passes on the diff since a fixed point. This skill is the five-axis quality pass. Use the house review for the pre-merge standards-and-spec check.

## It's working if

- Findings name an axis.
- The pass does not pretend to be the standards-and-spec review.

## Where it fits

This is a **reach-for-it-anytime standalone** when you want that quality pass.

Its neighbour is [code-review](https://aihero.dev/skills-code-review), because both get asked for when someone says review.

When you are unsure which skill fits, [ask-matt](https://aihero.dev/skills-ask-matt) routes you.
