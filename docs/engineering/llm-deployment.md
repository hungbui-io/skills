> **Archived.** Removed in the duplicate-skill pass. The replacement is [model-serving](https://aihero.dev/skills-model-serving).

## What it does

`llm-deployment` deploys an LLM runtime with a health check and a rollback.

An application launch checklist is a different skill. This one stands up the runtime that serves the model (batching, a quantization choice, a health check, a way back to the previous build).

## When to reach for it

Type `/llm-deployment`, or the [agent](https://www.aihero.dev/ai-coding-dictionary/agent) reaches for it when a task fits.

Reach for this when an evaluated LLM has to serve traffic. An application launch checklist is [shipping-and-launch](https://aihero.dev/skills-shipping-and-launch). Serving a classical model is [model-serving](https://aihero.dev/skills-model-serving).

## The runtime

The leading word is **runtime**. Record the engine, the model build, the batching and quantization choices, and the health check. Rollback is a return to the previous build, not a hope that the next restart loads the old weights.

## Common questions

**How is this different from shipping-and-launch?**

An application launch checklist is [shipping-and-launch](https://aihero.dev/skills-shipping-and-launch). This skill deploys an LLM runtime.

## It's working if

- You can name the model build the endpoint loaded.
- A health check fails when that build is not ready, and rollback has a previous build to load.

## Where it fits

This is a **chain step** after evaluation.

Its neighbour is [shipping-and-launch](https://aihero.dev/skills-shipping-and-launch), because that skill is the application launch.

When you are unsure which skill fits, [ask-matt](https://aihero.dev/skills-ask-matt) routes you.
