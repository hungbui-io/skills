## What it does

`constraint-driven-development` turns a quality bar into a written contract, then watches the diff for a quiet attempt to lower it.

The defining constraint is the bar has to exist on disk before the code leans on it. A skipped test, a new suppression comment, or an assertion deleted to go green is a lowered bar, and the skill treats that as a failure.

## When to reach for it

Type `/constraint-driven-development`, or the [agent](https://www.aihero.dev/ai-coding-dictionary/agent) reaches for it when a task fits.

## Prerequisites

The skill writes `CONSTRAINTS.md` in the project. It asks which dimensions matter, and it supplies a default number only when you have none.

## The floor

The leading word is **floor**. The floor is the set of checks the project refuses to dip under: types, tests, assertions, and the suppressions it will not accept. A change that crosses the floor gets called out before it lands.

## It's working if

- `CONSTRAINTS.md` names the dimensions and the numbers.
- A diff that adds a suppression or deletes a test is flagged as a lowered floor.

## Where it fits

This is a **reach-for-it-anytime standalone** you run before a project has a written quality bar.

Its neighbour is [tdd](https://aihero.dev/skills-tdd), because the floor says which tests must exist, and the red-green loop is how those tests get written.

When you are unsure which skill fits, [ask-matt](https://aihero.dev/skills-ask-matt) routes you.
