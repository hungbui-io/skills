## What it does

`doubt-driven-development` sends a decision to a fresh context whose job is to disprove it, before the decision stands.

The defining constraint is that the reviewer does not receive your reasoning. It receives the artifact and the contract. A review that can see how you talked yourself into the answer will agree with you.

## When to reach for it

Type `/doubt-driven-development`, or the [agent](https://www.aihero.dev/ai-coding-dictionary/agent) reaches for it when a task fits.

## Fresh context

The leading words are **fresh context**. Claim, extract the smallest reviewable unit, doubt it, reconcile the findings, and stop. The reviewer is biased to disprove. A [subagent](https://www.aihero.dev/ai-coding-dictionary/subagent) that only echoes the claim is not this loop. A second model is offered in an interactive session. It runs only when you say yes, and each run is its own yes.

## It's working if

- The reviewer was given the artifact and the contract, not the reasoning that produced them.
- Findings come back classified, and the loop stops instead of running forever.

## Where it fits

This is a **reach-for-it-anytime standalone** when the cost of being wrong is higher than the cost of a second look.

Its neighbour is [code-review](https://aihero.dev/skills-code-review), because a finished diff still wants standards and spec. Doubt is the in-flight attempt to disprove a decision before that.

When you are unsure which skill fits, [ask-matt](https://aihero.dev/skills-ask-matt) routes you.
