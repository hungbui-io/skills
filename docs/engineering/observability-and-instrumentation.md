## What it does

`observability-and-instrumentation` makes a production path visible: logs, metrics, traces, and alerts a person on call can use.

The defining constraint is the question comes first. A metric with no question is noise. Write the two to four questions an on-call engineer will ask, then add the signal that answers them.

## When to reach for it

Type `/observability-and-instrumentation`, or the [agent](https://www.aihero.dev/ai-coding-dictionary/agent) reaches for it when a task fits.

## The question first

The leading words are **question first**. An alert pages on a symptom (errors, latency, a queue aging), and it links a short runbook. Causes such as CPU belong on a dashboard. A log line is structured, and it does not contain a secret.

## It's working if

- The questions an on-call engineer will ask are written down before the new signal.
- An alert names the symptom and points at what to run first.

## Where it fits

This is a **reach-for-it-anytime standalone** when a feature is about to run in production.

Its neighbour is [shipping-and-launch](https://aihero.dev/skills-shipping-and-launch), because a staged rollout needs a signal that can stop it. Deployed model health is [model-monitoring](https://aihero.dev/skills-model-monitoring). Prediction explanations are [model-observability](https://aihero.dev/skills-model-observability). Token use and latency for an LLM are [llm-observability](https://aihero.dev/skills-llm-observability).

When you are unsure which skill fits, [ask-matt](https://aihero.dev/skills-ask-matt) routes you.
