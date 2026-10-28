## What it does

`deprecation-and-migration` retires an API, a feature, or a schema without a flag day.

The defining constraint is overlap. The new path exists before the old path disappears. Callers move, then you contract. Dropping a column, or a function, while something still calls it is the failure this skill is here to prevent.

## When to reach for it

Type `/deprecation-and-migration`, or the [agent](https://www.aihero.dev/ai-coding-dictionary/agent) reaches for it when a task fits.

## Expand, then contract

The leading words are **expand, then contract**. Add the new shape beside the old one, move callers, keep the old path until the window you promised has passed, then remove it. A compulsory migration and an advisory one are different promises. Write down which one this is.

## It's working if

- The new path is live before the old path is removed.
- The deprecation says whether callers must move, and by when.

## Where it fits

This is a **reach-for-it-anytime standalone** when the work is a sunset or a migration.

Its neighbour is [shipping-and-launch](https://aihero.dev/skills-shipping-and-launch), because the release that removes the old path still needs a rollback.

When you are unsure which skill fits, [ask-matt](https://aihero.dev/skills-ask-matt) routes you.
