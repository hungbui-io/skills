## What it does

`llm-fine-tuning` fine-tunes an LLM from a config, an eval set, and a checkpoint policy.

A checkpoint you cannot tie back to the data split and the eval is not a candidate for deployment. Stop on the eval, not on the training loss alone. Hugging Face Transformers loading, pipelines, and Trainer fine-tuning are part of this skill.

## When to reach for it

Type `/llm-fine-tuning`, or the [agent](https://www.aihero.dev/ai-coding-dictionary/agent) reaches for it when a task fits.

Reach for this when a prepared corpus should change model weights. Scoring that result is [llm-evaluation](https://aihero.dev/skills-llm-evaluation). A smaller model that copies a larger one is [llm-distillation](https://aihero.dev/skills-llm-distillation).

## The checkpoint

The leading word is **checkpoint**. Keep the base model, the data version, the method, and the eval beside the weights. A checkpoint that wins on the eval set is the one you hand to deployment. Training loss is a progress meter.

## It's working if

- The chosen checkpoint names its base model, data version, and eval score.
- An earlier checkpoint is still available if the latest one got worse on the eval.

## Where it fits

This is a **chain step** after data preparation. Distillation sits beside it.

Its neighbours are [llm-evaluation](https://aihero.dev/skills-llm-evaluation) and [llm-distillation](https://aihero.dev/skills-llm-distillation).

When you are unsure which skill fits, [ask-matt](https://aihero.dev/skills-ask-matt) routes you.
