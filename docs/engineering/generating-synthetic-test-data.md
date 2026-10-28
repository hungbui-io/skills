## What it does

`generating-synthetic-test-data` builds seeded rows for pipeline tests, including the edge cases and the foreign keys.

Random rows with a new seed every run cannot fail a test the same way twice. The generator is seeded, and the keys still join.

## When to reach for it

Type `/generating-synthetic-test-data`, or the [agent](https://www.aihero.dev/ai-coding-dictionary/agent) reaches for it when a task fits.

Reach for this when a pipeline test needs data you can commit. The assertions on a dbt model are [testing-dbt-projects](https://aihero.dev/skills-implementing-data-quality-checks).

## The seed

The leading word is **seed**. Same seed, same rows. Include the null, the late row, the duplicate key, and the orphan that the test is there to catch. Referential keys point at rows that exist in the set.

## It's working if

- Running the generator with the same seed reproduces the file.
- A relationship in the fixture points at a parent row in the fixture.

## Where it fits

This is a **reach-for-it-anytime standalone** when tests need rows.

Its neighbour is [testing-dbt-projects](https://aihero.dev/skills-implementing-data-quality-checks).

When you are unsure which skill fits, [ask-matt](https://aihero.dev/skills-ask-matt) routes you.
