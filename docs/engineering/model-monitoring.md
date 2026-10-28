## What it does

`model-monitoring` alerts when a deployed model's performance or traffic leaves its band.

Application logs, metrics, and traces are a different skill. This one watches the model: accuracy or a proxy, latency, volume, and the slice that moved.

## When to reach for it

Type `/model-monitoring`, or the [agent](https://www.aihero.dev/ai-coding-dictionary/agent) reaches for it when a task fits.

Reach for this once a model is serving. Application telemetry is [observability-and-instrumentation](https://aihero.dev/skills-observability-and-instrumentation). Explaining a single prediction is [model-observability](https://aihero.dev/skills-model-observability).

## The band

The leading word is **band**. Pick the metric and the threshold before you page anyone. An alert names the model version and the slice. A drift signal that should retrain is the next skill, not another dashboard.

## Common questions

**How is this different from observability-and-instrumentation?**

Logs, metrics, and traces for an application are [observability-and-instrumentation](https://aihero.dev/skills-observability-and-instrumentation). This skill tracks a deployed model's performance and alerts.

## It's working if

- An alert names the model version and the metric that left its band.
- You can tell a traffic drop from a quality drop.

## Where it fits

This is a **chain step** after serving, and it can send you back to training.

Its neighbours are [observability-and-instrumentation](https://aihero.dev/skills-observability-and-instrumentation) and [model-drift-detection](https://aihero.dev/skills-model-drift-detection).

When you are unsure which skill fits, [ask-matt](https://aihero.dev/skills-ask-matt) routes you.
