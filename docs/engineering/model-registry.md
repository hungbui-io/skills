## What it does

`model-registry` stores a versioned model artifact and the contract a server needs to load it.

Serving loads the artifact the contract describes. A checkpoint with no version, no metrics, and no loader notes is not yet a model you can promote.

## When to reach for it

Type `/model-registry`, or the [agent](https://www.aihero.dev/ai-coding-dictionary/agent) reaches for it when a task fits.

Reach for this when a training run has an artifact worth keeping. Deploying that version is [implementing-data-cicd](https://aihero.dev/skills-implementing-data-cicd) and [model-serving](https://aihero.dev/skills-model-serving).

## The artifact contract

The leading word is **contract**. The version records the artifact, the metrics that justified it, and how a server loads it. Training packages to that contract. Serving consumes it. Promotion moves a version forward, and rollback moves it back.

## It's working if

- A version id points at one artifact and the metrics that justified it.
- Serving can load that version without a second, undocumented loader.

## Where it fits

This is a **chain step** between training and promotion.

Its neighbours are [model-training](https://aihero.dev/skills-model-training) and [model-serving](https://aihero.dev/skills-model-serving).

When you are unsure which skill fits, [ask-matt](https://aihero.dev/skills-ask-matt) routes you.
