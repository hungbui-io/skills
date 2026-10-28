## What it does

`implementing-data-cicd` lints, compiles, and tests a data change before it is promoted.

A pipeline you can merge with a failing test is not a gate. The check has to be able to refuse the change, and promotion names the environment it moves to.

## When to reach for it

Type `/implementing-data-cicd`, or the [agent](https://www.aihero.dev/ai-coding-dictionary/agent) reaches for it when a task fits.

Reach for this when a data repo needs CI or a path from dev to prod. The tests themselves are [testing-dbt-projects](https://aihero.dev/skills-implementing-data-quality-checks) or [implementing-data-quality-checks](https://aihero.dev/skills-implementing-data-quality-checks).

Model promotion CI is part of this skill, beside dbt Slim CI.

## The gate

The leading word is **gate**. Name the command (lint, compile, test) and what a red result does. Slim CI that builds only the changed models is still a gate. Promotion is a second step after that gate, not a substitute for it.

## It's working if

- A failing test blocks the change.
- Promotion names the environment it moves the change into.

## Where it fits

This is a **chain step** after models and tests exist.

Its neighbour is [testing-dbt-projects](https://aihero.dev/skills-implementing-data-quality-checks), because CI runs those tests.

When you are unsure which skill fits, [ask-matt](https://aihero.dev/skills-ask-matt) routes you.
