## What it does

`modeling-dimensional-data` designs a star schema: a fact grain and the dimensions that describe it.

Sharpening a glossary is a different skill. This one declares the grain of the fact, the keys, and how history changes in the dimensions.

## When to reach for it

Type `/modeling-dimensional-data`, or the [agent](https://www.aihero.dev/ai-coding-dictionary/agent) reaches for it when a task fits.

Reach for this when you are designing analytics tables. Glossary and domain terms are [domain-modeling](https://aihero.dev/skills-domain-modeling). The dbt models that implement the schema are [building-dbt-models](https://aihero.dev/skills-building-dbt-models).

## The grain

The leading word is **grain**. One row of the fact is one event you can point at. Dimensions carry the descriptive history. A slowly changing dimension says what happens when an attribute changes, instead of overwriting it by accident.

## Common questions

**How is this different from domain-modeling?**

Sharpening a glossary and domain terms is [domain-modeling](https://aihero.dev/skills-domain-modeling). This skill designs a star schema, a grain, and slowly changing dimensions.

## It's working if

- The fact table states its grain in one sentence.
- A dimension that must keep history says how a change is recorded.

## Where it fits

This is a **chain step** when the published model is dimensional.

Its neighbour is [domain-modeling](https://aihero.dev/skills-domain-modeling), because that skill sharpens terms and this one designs the schema.

When you are unsure which skill fits, [ask-matt](https://aihero.dev/skills-ask-matt) routes you.
