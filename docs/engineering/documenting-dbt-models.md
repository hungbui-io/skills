## What it does

`documenting-dbt-models` writes model and column descriptions, plus the exposures that show who consumes them.

A description that restates the column name does not tell a reader the grain or the unit. The doc says what the column means and who depends on the model.

## When to reach for it

Type `/documenting-dbt-models`, or the [agent](https://www.aihero.dev/ai-coding-dictionary/agent) reaches for it when a task fits.

Reach for this when a dbt project needs descriptions or generated docs. Documents this repo writes for its own skills are [writing-for-agents](https://aihero.dev/skills-writing-for-agents).

## The description

The leading word is **description**. Say the grain, the unit, and the caveats. An exposure names a dashboard or an application that will break if the model changes.

## Common questions

**How is this different from writing-for-agents?**

Documents that agents read are [writing-for-agents](https://aihero.dev/skills-writing-for-agents). This skill documents dbt models, columns, and exposures.

## It's working if

- A reader can learn the grain from the model description.
- At least one downstream consumer is an exposure, when one exists.

## Where it fits

This is a **chain step** beside dbt models.

Its neighbour is [writing-for-agents](https://aihero.dev/skills-writing-for-agents), because that skill is for documents agents read.

When you are unsure which skill fits, [ask-matt](https://aihero.dev/skills-ask-matt) routes you.
