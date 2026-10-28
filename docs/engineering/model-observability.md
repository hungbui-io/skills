## What it does

`model-observability` explains a prediction and logs the features that produced it.

Application telemetry tells you a request was slow. This skill tells you which features pushed a particular prediction. SHAP explainers and plots are part of this skill.

## When to reach for it

Type `/model-observability`, or the [agent](https://www.aihero.dev/ai-coding-dictionary/agent) reaches for it when a task fits.

Reach for this when you need to explain or debug a prediction. Application telemetry is [observability-and-instrumentation](https://aihero.dev/skills-observability-and-instrumentation). Health alerts on the deployed model are [model-monitoring](https://aihero.dev/skills-model-monitoring).

## The explanation

The leading word is **explanation**. Log the features (or a reference to them) with the prediction, and keep a way to attribute the score. A reviewer can answer why this row scored this way without rerunning the notebook from memory.

## Common questions

**How is this different from observability-and-instrumentation?**

Application logs, metrics, and traces are [observability-and-instrumentation](https://aihero.dev/skills-observability-and-instrumentation). This skill explains model predictions and logs the features behind them.

## It's working if

- A prediction log includes the features, or a pointer to them.
- You can attribute a score to a small set of inputs.

## Where it fits

This is a **cross-cutting** skill on the serving path.

Its neighbour is [observability-and-instrumentation](https://aihero.dev/skills-observability-and-instrumentation), because application traces do not explain a score.

When you are unsure which skill fits, [ask-matt](https://aihero.dev/skills-ask-matt) routes you.
