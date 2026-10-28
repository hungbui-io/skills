## What it does

`implementing-data-quality-checks` blocks bad data on freshness, volume, schema, and integrity.

A check that only warns, and still lets consumers read the table, is a log line. The gate has to be able to refuse the batch.

## When to reach for it

Type `/implementing-data-quality-checks`, or the [agent](https://www.aihero.dev/ai-coding-dictionary/agent) reaches for it when a task fits.

Reach for this when a dataset needs a pass or fail before consumers. dbt tests are [testing-dbt-projects](https://aihero.dev/skills-testing-dbt-projects). The daily red-green loop for application logic is [tdd](https://aihero.dev/skills-tdd).

## The gate

The leading word is **gate**. Pick freshness, volume, schema, or a key relationship, and say what a failure does. The next model reads a batch that passed.

## Common questions

**How is this different from tdd?**

The daily red-green loop for application logic is [tdd](https://aihero.dev/skills-tdd). This skill checks freshness, volume, schema, and integrity of a dataset.

## It's working if

- A broken batch fails a check a consumer can see.
- The failing check names freshness, volume, schema, or a key.

## Where it fits

This is a **chain step** before published data is trusted.

Its neighbour is [tdd](https://aihero.dev/skills-tdd), because that skill is the application red-green loop.

When you are unsure which skill fits, [ask-matt](https://aihero.dev/skills-ask-matt) routes you.
