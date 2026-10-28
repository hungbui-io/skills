> **Archived.** Removed in the duplicate-skill pass. The house skill stays: [to-spec](https://aihero.dev/skills-to-spec).

## What it does

`spec-driven-development` writes a gated [spec](https://www.aihero.dev/ai-coding-dictionary/spec) from a vague idea before any code, including a capability map when one request is really several.

The defining constraint is no code until the spec is agreed. Turning a conversation you already had into a spec, without a second interview, is the house to-spec skill, and you start that one yourself.

## When to reach for it

Type `/spec-driven-development`, or the [agent](https://www.aihero.dev/ai-coding-dictionary/agent) reaches for it when a task fits.

| Your situation | Reach for |
| --- | --- |
| The idea is still vague and no spec exists | This skill |
| The thread already holds the decisions | [to-spec](https://aihero.dev/skills-to-spec) |

## Prerequisites

Approved specs are saved at the project root, and a multi-capability map is saved beside them. The skill asks when the objective, the boundaries, or the definition of done is still a guess.

## Gated

The leading word is **gated**. The spec names the objective, the commands, the boundaries, and how you will know it is done. A request that spans several capabilities gets a map first, then one spec per capability. Implementation starts after you accept the spec.

## Common questions

**How is this different from to-spec?**

[to-spec](https://aihero.dev/skills-to-spec) synthesizes a spec from the current conversation and publishes it. It does not interview you again. You invoke it yourself. This skill builds the spec from a vague idea and waits for the gate.

## It's working if

- No code landed before the spec was accepted.
- The spec names done in a way a test or a command could check.

## Where it fits

This is a **reach-for-it-anytime standalone** at the spec step of the vendored lifecycle.

Its neighbour is [to-spec](https://aihero.dev/skills-to-spec), because both produce a spec and they start from different amounts of prior conversation.

When you are unsure which skill fits, [ask-matt](https://aihero.dev/skills-ask-matt) routes you.
