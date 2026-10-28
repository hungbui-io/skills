## What it does

`llm-evaluation` scores LLM outputs on a fixed set, including retrieval metrics and a judge.

The daily red-green loop for application logic is a different skill. This one freezes a set of prompts or questions and scores the system's outputs against that set.

## When to reach for it

Type `/llm-evaluation`, or the [agent](https://www.aihero.dev/ai-coding-dictionary/agent) reaches for it when a task fits.

Reach for this when you need a number for an LLM change: fine-tune, prompt, retrieval, or guardrail. Application red-green is [tdd](https://aihero.dev/skills-tdd).

## The fixed set

The leading word is **fixed set**. Agree the prompts, the expected evidence, and the metric before you compare two systems. A judge model is one scorer, used the same way on every candidate. A one-off chat is not an evaluation.

## Common questions

**How is this different from tdd?**

The daily red-green loop for application logic is [tdd](https://aihero.dev/skills-tdd). This skill scores LLM outputs on a fixed set.

## It's working if

- Two candidates were scored on the same set.
- The metric is named (task score, retrieval, or a judge rubric) and you can rerun it.

## Where it fits

This is a **chain step** before an LLM runtime is deployed.

Its neighbour is [tdd](https://aihero.dev/skills-tdd), because that skill is the application red-green loop.

When you are unsure which skill fits, [ask-matt](https://aihero.dev/skills-ask-matt) routes you.
