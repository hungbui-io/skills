## What it does

`llm-agent-orchestration` builds a product [agent](https://www.aihero.dev/ai-coding-dictionary/agent): tools, a graph, and a stop condition.

The router for this repository is a different skill, and the vendored phase list is one you run yourself. This skill is for an agent your product runs: it calls tools, it has a graph, and it knows when to stop.

## When to reach for it

Type `/llm-agent-orchestration`, or the agent reaches for it when a task fits.

Reach for this when you are building an LLM agent into a product. The router for this repo is [ask-matt](https://aihero.dev/skills-ask-matt). The vendored phase list is [using-agent-skills](https://aihero.dev/skills-using-agent-skills), and you run that yourself. Do not start a session here.

## The tool

The leading word is **tool**. List the tools the agent may call, the inputs each one accepts, and the condition that ends the loop. A graph with no stop condition will spend the budget. A session in this repo still starts from the house router.

## Common questions

**How is this different from ask-matt?**

[ask-matt](https://aihero.dev/skills-ask-matt) routes work in this repo. [using-agent-skills](https://aihero.dev/skills-using-agent-skills) is the vendored phase list, and you run it. This skill builds LLM product agents.

## It's working if

- Each tool has an input you can name, and a failure mode.
- The loop has a stop condition you can point at.

## Where it fits

This is a **chain step** on the LLM path when the product itself is an agent. It is not the router for this repo.

Its neighbours are [ask-matt](https://aihero.dev/skills-ask-matt) and [llm-guardrails](https://aihero.dev/skills-llm-guardrails). The phase list you type yourself is [using-agent-skills](https://aihero.dev/skills-using-agent-skills).

When you are unsure which skill fits, [ask-matt](https://aihero.dev/skills-ask-matt) routes you.
