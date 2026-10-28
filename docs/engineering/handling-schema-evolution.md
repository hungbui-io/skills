## What it does

`handling-schema-evolution` changes a schema so current readers keep working.

A rename or a retype that lands in one step breaks every reader that still expects the old field. Add the new field, move readers, then remove the old one.

## When to reach for it

Type `/handling-schema-evolution`, or the [agent](https://www.aihero.dev/ai-coding-dictionary/agent) reaches for it when a task fits.

Reach for this when a column must be added, renamed, or retyped. The promise to consumers is [designing-data-contracts](https://aihero.dev/skills-designing-data-contracts).

## The expand

The leading word is **expand**. Add the new column beside the old one. Backfill it. Point readers at the new column. Drop the old column only after those readers have moved.

## It's working if

- The old field still exists while readers move.
- You can name which reader still depends on the old field.

## Where it fits

This is a **chain step** whenever a published table changes shape.

Its neighbour is [designing-data-contracts](https://aihero.dev/skills-designing-data-contracts).

When you are unsure which skill fits, [ask-matt](https://aihero.dev/skills-ask-matt) routes you.
