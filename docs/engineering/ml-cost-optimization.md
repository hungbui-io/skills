## What it does

`ml-cost-optimization` cuts GPU and infrastructure cost for training and serving.

Measuring an application bottleneck is a different skill. This one asks what a training hour and a served prediction cost, then changes the footprint.

## When to reach for it

Type `/ml-cost-optimization`, or the [agent](https://www.aihero.dev/ai-coding-dictionary/agent) reaches for it when a task fits.

Reach for this when the bill is GPU, storage, or serving instances. Measuring an application bottleneck is [performance-optimization](https://aihero.dev/skills-performance-optimization). Token cost for LLM calls is [llm-cost-optimization](https://aihero.dev/skills-llm-cost-optimization).

## Unit cost

The leading word is **unit cost**. Cost per training run and cost per prediction come before a larger instance. Spot capacity, right-sized GPUs, and a serving footprint you can turn down are the usual moves, after you can see the unit.

## Common questions

**How is this different from performance-optimization?**

Measuring an application bottleneck is [performance-optimization](https://aihero.dev/skills-performance-optimization). This skill is GPU and infrastructure cost for training and serving.

## It's working if

- You can state cost per run or cost per prediction before and after the change.
- The change is a smaller footprint, not only a faster microbenchmark.

## Where it fits

This is a **cross-cutting** skill on training and serving.

Its neighbour is [performance-optimization](https://aihero.dev/skills-performance-optimization), because that skill measures an application bottleneck.

When you are unsure which skill fits, [ask-matt](https://aihero.dev/skills-ask-matt) routes you.
