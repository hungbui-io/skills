## What it does

`llm-prompt-engineering` designs and versions the prompts an LLM product sends.

Documents an [agent](https://www.aihero.dev/ai-coding-dictionary/agent) reads (skills, AGENTS.md) are a different skill. This one is the prompt your product sends to a model.

## When to reach for it

Type `/llm-prompt-engineering`, or the agent reaches for it when a task fits.

Reach for this when the prompt is part of the product. Documents that agents read are [writing-for-agents](https://aihero.dev/skills-writing-for-agents).

## The prompt

The leading word is **prompt**. Version it beside the eval set. A change that is only in a chat window is not a release. Record the instruction, the variables, and the eval score that justified the current version.

## Common questions

**How is this different from writing-for-agents?**

Documents that agents read are [writing-for-agents](https://aihero.dev/skills-writing-for-agents). This skill designs prompts for an LLM product.

## It's working if

- The prompt the product sends has a version you can point at.
- A prompt change is scored on the same eval set as the previous version.

## Where it fits

This is a **cross-cutting** skill whenever the prompt is the product, from preparation through serving.

Its neighbour is [writing-for-agents](https://aihero.dev/skills-writing-for-agents), because that skill is for documents agents read.

When you are unsure which skill fits, [ask-matt](https://aihero.dev/skills-ask-matt) routes you.
