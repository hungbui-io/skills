## What it does

`model-serving` serves a model behind an API with a health check and a rollback.

An application launch checklist is a different skill. This one loads a registry artifact and answers prediction requests. LLM runtimes and Modal GPU jobs are part of this skill.

## When to reach for it

Type `/model-serving`, or the [agent](https://www.aihero.dev/ai-coding-dictionary/agent) reaches for it when a task fits.

Reach for this when a registered model has to answer requests. An application launch checklist is [shipping-and-launch](https://aihero.dev/skills-shipping-and-launch).

## The endpoint

The leading word is **endpoint**. It loads the artifact the registry contract describes, exposes a health check, and can return to the previous version. Latency and error metrics from this endpoint feed monitoring.

## Common questions

**How is this different from shipping-and-launch?**

Flags, a staged application rollout, and an application rollback are [shipping-and-launch](https://aihero.dev/skills-shipping-and-launch). This skill serves a model.

## It's working if

- A health check tells you the loaded version.
- Rollback returns traffic to the previous version.

## Where it fits

This is a **chain step** after promotion.

Its neighbour is [shipping-and-launch](https://aihero.dev/skills-shipping-and-launch), because that skill is the application launch.

When you are unsure which skill fits, [ask-matt](https://aihero.dev/skills-ask-matt) routes you.
