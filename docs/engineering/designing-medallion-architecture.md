## What it does

`designing-medallion-architecture` splits a lakehouse into bronze, silver, and gold with a rule for each layer.

A layer name without a rule becomes three copies of the same table. Bronze keeps source shape, silver cleans and conforms, gold is the grain consumers query.

## When to reach for it

Type `/designing-medallion-architecture`, or the [agent](https://www.aihero.dev/ai-coding-dictionary/agent) reaches for it when a task fits.

Reach for this when you are laying out a lakehouse. The dimensional model inside gold is [modeling-dimensional-data](https://aihero.dev/skills-modeling-dimensional-data). The table format is [building-iceberg-tables](https://aihero.dev/skills-building-iceberg-tables).

## The layer

The leading word is **layer**. Each dataset has one layer and a reason. Bronze is replayable source. Silver is conformed and tested. Gold is the published grain. A column does not skip a layer because it is convenient.

## It's working if

- Each table is bronze, silver, or gold, and the rule for that layer is written down.
- Gold tables name a grain a consumer can query.

## Where it fits

This is the **first chain step** when the platform is a lakehouse.

Its neighbour is [modeling-dimensional-data](https://aihero.dev/skills-modeling-dimensional-data), because gold still needs a grain.

When you are unsure which skill fits, [ask-matt](https://aihero.dev/skills-ask-matt) routes you.
