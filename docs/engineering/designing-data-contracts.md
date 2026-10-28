## What it does

`designing-data-contracts` writes what a producer promises and fails a change that would break consumers.

A schema that only lives in a wiki does not stop a breaking publish. The contract is checked where the data is produced.

## When to reach for it

Type `/designing-data-contracts`, or the [agent](https://www.aihero.dev/ai-coding-dictionary/agent) reaches for it when a task fits.

Reach for this when a producer and a consumer can change independently. Evolving a column without breaking readers is [handling-schema-evolution](https://aihero.dev/skills-handling-schema-evolution). Checks on the data itself are [implementing-data-quality-checks](https://aihero.dev/skills-implementing-data-quality-checks).

## The promise

The leading word is **promise**. Name the columns, the types, the grain, and the freshness a consumer may rely on. A change that removes or retypes a promised field fails before consumers read it.

## It's working if

- The contract names grain, columns, and freshness.
- A breaking change fails on the producer side.

## Where it fits

This is a **chain step** between a producer and its downstream models.

Its neighbour is [handling-schema-evolution](https://aihero.dev/skills-handling-schema-evolution).

When you are unsure which skill fits, [ask-matt](https://aihero.dev/skills-ask-matt) routes you.
