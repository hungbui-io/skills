## What it does

`interview-me` asks one question at a time until an underspecified ask is sharp enough to build.

The defining constraint is one question, with your best guess attached, and only you can start it. The house interview is grill-with-docs in a repo and grill-me outside one. This skill does not answer to the words grill me.

## When to reach for it

You invoke this by typing `/interview-me`, and the [agent](https://www.aihero.dev/ai-coding-dictionary/agent) won't reach for it on its own.

| Your situation | Reach for |
| --- | --- |
| The ask is missing who, why, or what done means | This skill, which you type |
| You are in a repo and want a paper trail | [grill-with-docs](https://aihero.dev/skills-grill-with-docs) |
| You are not in a working directory | [grill-me](https://aihero.dev/skills-grill-me) |

## One question

The leading words are **one question**. Ask the single highest-leverage gap, include your current guess, and stop when you can predict the answer. A pile of questions in one message hides which answer mattered.

## Common questions

**How is this different from grill-with-docs?**

[grill-with-docs](https://aihero.dev/skills-grill-with-docs) resolves a design tree and updates the glossary and ADRs. [grill-me](https://aihero.dev/skills-grill-me) is the same interview with nothing saved. Both are what you type for the house interview. This skill is the shorter one-question loop for an ask that is not yet a plan.

## It's working if

- Each message asks one question.
- The close restates the ask in your words, and you can correct it line by line.

## Where it fits

This is a **reach-for-it-anytime standalone** at the front of the vendored lifecycle, and only you invoke it.

Its neighbours are [grill-with-docs](https://aihero.dev/skills-grill-with-docs) and [idea-refine](https://aihero.dev/skills-idea-refine). The house interview resolves a design. Idea refine varies an idea you already have.

When you are unsure which skill fits, [ask-matt](https://aihero.dev/skills-ask-matt) routes you.
