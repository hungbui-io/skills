## What it does

`model-training` trains a model from a pinned config, a split, and a seed, then packages the artifact for the registry.

A run that cannot be repeated from its config, split, and seed is a demo. The artifact that leaves training is the one the registry contract describes.

## When to reach for it

Type `/model-training`, or the [agent](https://www.aihero.dev/ai-coding-dictionary/agent) reaches for it when a task fits.

Reach for this when features are ready and a model has to be fit. Comparing runs is [ml-experiment-tracking](https://aihero.dev/skills-ml-experiment-tracking). The package the server will load is [model-registry](https://aihero.dev/skills-model-registry).

## A repeatable run

The leading word is **repeatable**. Pin the data snapshot, the code, the hyperparameters, and the seed. Log them with experiment tracking. Hand the registry an artifact that matches the shared contract, so serving does not invent a second loader.

## It's working if

- You can name the config, split, and seed of the run that produced the artifact.
- The packaged artifact is something the registry contract can describe.

## Where it fits

This is a **chain step** after features, before the registry.

Its neighbours are [ml-experiment-tracking](https://aihero.dev/skills-ml-experiment-tracking) and [model-registry](https://aihero.dev/skills-model-registry).

When you are unsure which skill fits, [ask-matt](https://aihero.dev/skills-ask-matt) routes you.
