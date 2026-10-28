## What it does

`ml-experiment-tracking` records params, metrics, and artifacts so two training runs can be compared.

A metric that lives only in a notebook cell cannot decide which run to promote. The record has to outlive the session.

## When to reach for it

Type `/ml-experiment-tracking`, or the [agent](https://www.aihero.dev/ai-coding-dictionary/agent) reaches for it when a task fits.

Reach for this while a model is training or when you are choosing among runs. The training loop itself is [model-training](https://aihero.dev/skills-model-training).

## The run record

The leading word is **run**. Each run stores the params, the data version, the metrics, and the artifact id. Promotion asks the record which run won. It does not ask the last notebook that happened to be open.

## It's working if

- Two runs can be compared from stored params and metrics.
- The artifact you promote is the one the winning run recorded.

## Where it fits

This is a **chain step** that sits beside training.

Its neighbour is [model-training](https://aihero.dev/skills-model-training), because a run with no record cannot be chosen later.

When you are unsure which skill fits, [ask-matt](https://aihero.dev/skills-ask-matt) routes you.
