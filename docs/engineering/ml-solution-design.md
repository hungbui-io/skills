## What it does

`ml-solution-design` turns an ML problem into requirements and a reference architecture.

The intake chooses the kind of system (batch score, online model, retrieval, fine-tune) before anyone trains a model. The architecture is a decision, recorded where the later skills can follow it.

## When to reach for it

Type `/ml-solution-design`, or the [agent](https://www.aihero.dev/ai-coding-dictionary/agent) reaches for it when a task fits.

Reach for this at the start of an ML or LLM effort. Turning an existing conversation into a [spec](https://www.aihero.dev/ai-coding-dictionary/spec) is [to-spec](https://aihero.dev/skills-to-spec), which you run. The house interview is [grill-with-docs](https://aihero.dev/skills-grill-with-docs) or [grill-me](https://aihero.dev/skills-grill-me). Deep-module vocabulary is [codebase-design](https://aihero.dev/skills-codebase-design).

## The intake

The leading word is **intake**. Write the decision the rest of the chain consumes: the user, the latency and cost band, the data you actually have, and the reference shape (train and serve, or retrieve, or fine-tune). Later skills follow that shape.

## Common questions

**How is this different from to-spec?**

You run [to-spec](https://aihero.dev/skills-to-spec) to synthesize a spec from a conversation you already had, with no second interview. This skill is the ML requirements and architecture intake.

## It's working if

- The architecture names batch, online, retrieval, or fine-tune, and why.
- Latency, cost, and data constraints are written down before a training job exists.

## Where it fits

This is the **first chain step** of both the ML delivery chain and the LLM delivery chain.

Its neighbour is [to-spec](https://aihero.dev/skills-to-spec), because a spec synthesized from a thread you already had is a different job, and you run that skill yourself.

When you are unsure which skill fits, [ask-matt](https://aihero.dev/skills-ask-matt) routes you.
