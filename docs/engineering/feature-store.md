## What it does

`feature-store` serves one feature definition to training and to online inference.

Training has to read features as they were at the label's time. An online read that uses a later value is a different feature.

## When to reach for it

Type `/feature-store`, or the [agent](https://www.aihero.dev/ai-coding-dictionary/agent) reaches for it when a task fits.

Reach for this when the same feature must be available offline and online. Building the transform itself is [feature-engineering](https://aihero.dev/skills-feature-engineering).

## Point in time

The leading word is **point-in-time**. A training row asks for the feature values that existed when the label was known, and an online request asks for the latest allowed value. Both calls use the definition from feature engineering.

## It's working if

- A training read and an online read name the same feature.
- The training read is pinned to the label time, so it cannot see a later update.

## Where it fits

This is a **chain step** beside feature engineering, feeding training and serving.

Its neighbours are [feature-engineering](https://aihero.dev/skills-feature-engineering) and [model-training](https://aihero.dev/skills-model-training).

When you are unsure which skill fits, [ask-matt](https://aihero.dev/skills-ask-matt) routes you.
