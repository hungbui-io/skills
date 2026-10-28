## What it does

`llm-cost-optimization` cuts token, routing, and cache cost for LLM calls.

Measuring an application bottleneck is a different skill. This one changes what you send, which model you route to, and what you can reuse from cache.

## When to reach for it

Type `/llm-cost-optimization`, or the [agent](https://www.aihero.dev/ai-coding-dictionary/agent) reaches for it when a task fits.

Reach for this when the LLM bill is tokens, model choice, or repeated calls. An application bottleneck is [performance-optimization](https://aihero.dev/skills-performance-optimization). GPU footprint for training is [ml-cost-optimization](https://aihero.dev/skills-ml-cost-optimization).

## The token

The leading word is **token**. Know the price of the prompt and the completion before you shorten them. Routing sends easy calls to a cheaper model. A cache returns a repeated call without a second completion. The application profiler is a different tool.

## Common questions

**How is this different from performance-optimization?**

Measuring an application bottleneck is [performance-optimization](https://aihero.dev/skills-performance-optimization). This skill is token, routing, and caching cost for LLM calls.

## It's working if

- You can state token cost before and after the change.
- A repeated call can hit a cache, or a cheap route, and you can tell which.

## Where it fits

This is a **cross-cutting** skill on the LLM path once calls have a volume.

Its neighbour is [performance-optimization](https://aihero.dev/skills-performance-optimization), because that skill measures an application bottleneck.

When you are unsure which skill fits, [ask-matt](https://aihero.dev/skills-ask-matt) routes you.
