## What it does

`testing-dbt-projects` adds dbt tests and source freshness so a bad model fails before it is published.

The daily red-green loop for application logic is a different skill. This one puts unique, not-null, and relationship tests on the grain, plus freshness on the sources that feed it.

## When to reach for it

Type `/testing-dbt-projects`, or the [agent](https://www.aihero.dev/ai-coding-dictionary/agent) reaches for it when a task fits.

Reach for this when a dbt project needs tests. Broader freshness and volume checks are [implementing-data-quality-checks](https://aihero.dev/skills-implementing-data-quality-checks). The daily red-green loop for application logic is [tdd](https://aihero.dev/skills-tdd).

## The test

The leading word is **test**. A primary key has a uniqueness test. A foreign key has a relationship test. A source that must be recent has a freshness threshold. The suite fails the build when those fail.

## Common questions

**How is this different from tdd?**

The daily red-green loop for application logic is [tdd](https://aihero.dev/skills-tdd). This skill adds dbt tests and source freshness.

## It's working if

- The grain has a uniqueness test.
- A stale source fails freshness instead of building on it silently.

## Where it fits

This is a **chain step** on dbt models, especially before promotion.

Its neighbour is [tdd](https://aihero.dev/skills-tdd), because that skill is the application red-green loop.

When you are unsure which skill fits, [ask-matt](https://aihero.dev/skills-ask-matt) routes you.
