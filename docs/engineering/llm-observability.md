## What it does

`llm-observability` tracks token use, latency, and feedback on LLM calls.

Application telemetry is a different skill. This one records the model call: tokens, latency, the prompt version, and whether the user kept the answer.

## When to reach for it

Type `/llm-observability`, or the [agent](https://www.aihero.dev/ai-coding-dictionary/agent) reaches for it when a task fits.

Reach for this when LLM calls are in production. Application logs, metrics, and traces are [observability-and-instrumentation](https://aihero.dev/skills-observability-and-instrumentation).

## The call

The leading word is **call**. Each call logs the model, the prompt version, token counts, latency, and a feedback signal when you have one. Cost and quality work starts from that log, not from a single slow request in an application trace.

## Common questions

**How is this different from observability-and-instrumentation?**

Application telemetry is [observability-and-instrumentation](https://aihero.dev/skills-observability-and-instrumentation). This skill tracks token use, latency, and LLM feedback.

## It's working if

- A call log shows tokens, latency, and the prompt or model version.
- You can separate a slow model call from a slow application handler.

## Where it fits

This is a **chain step** after an LLM runtime is serving.

Its neighbour is [observability-and-instrumentation](https://aihero.dev/skills-observability-and-instrumentation), because that skill is application telemetry.

When you are unsure which skill fits, [ask-matt](https://aihero.dev/skills-ask-matt) routes you.
