## What it does

`llm-guardrails` filters LLM inputs and outputs for private data, toxicity, and jailbreaks.

Hardening an application feature while you build it is a different skill. This one sits on the text going into the model and the text coming out.

## When to reach for it

Type `/llm-guardrails`, or the [agent](https://www.aihero.dev/ai-coding-dictionary/agent) reaches for it when a task fits.

Reach for this when an LLM product needs input and output filters. Hardening an application feature is [security-and-hardening](https://aihero.dev/skills-security-and-hardening). Model threats such as poisoning and extraction are [ml-security](https://aihero.dev/skills-ml-security).

## The filter

The leading word is **filter**. Decide what is blocked, what is redacted, and what is logged, on the way in and on the way out. A filter that only lives in a system prompt is a wish. The check runs on the text.

## Common questions

**How is this different from security-and-hardening?**

Hardening an application feature is [security-and-hardening](https://aihero.dev/skills-security-and-hardening). This skill filters LLM inputs and outputs.

## It's working if

- A blocked input or output is refused or redacted, and the event is logged.
- You can name the category the filter is there for (private data, toxicity, or a jailbreak).

## Where it fits

This is a **chain step** beside the product agent and the deployed runtime.

Its neighbour is [security-and-hardening](https://aihero.dev/skills-security-and-hardening), because that skill hardens application features.

When you are unsure which skill fits, [ask-matt](https://aihero.dev/skills-ask-matt) routes you.
