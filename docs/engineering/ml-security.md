## What it does

`ml-security` threat-models a model: adversarial inputs, poisoning, extraction, privacy, and the ML supply chain.

A source-first audit report of an application is a different skill, and so is hardening an application feature while you build it. This skill starts from threats that exist because the system is a model.

## When to reach for it

Type `/ml-security`, or the [agent](https://www.aihero.dev/ai-coding-dictionary/agent) reaches for it when a task fits.

Reach for this when the thing to protect is a model, its training data, or its artifact. A source-first audit report is [security-audit](https://aihero.dev/skills-security-audit). Hardening an application feature is [security-and-hardening](https://aihero.dev/skills-security-and-hardening).

## The model threat

The leading word is **threat**. Name the model-specific abuse: a crafted input, poisoned training rows, an attempt to steal the model, private data in the training set, or an unsigned artifact. Controls (validation, privacy, signing, scanning) attach to that threat.

## Common questions

**How is this different from security-audit?**

A source-first audit report that does not edit the target is [security-audit](https://aihero.dev/skills-security-audit). Hardening an application feature while you build it is [security-and-hardening](https://aihero.dev/skills-security-and-hardening). This skill is for model-specific threats.

## It's working if

- The write-up names a model threat, not only an application OWASP item.
- An artifact or a training set has a check you can rerun (signature, scan, or a privacy pass).

## Where it fits

This is a **cross-cutting** skill you reach for whenever the system is a model.

Its neighbours are [security-audit](https://aihero.dev/skills-security-audit) and [security-and-hardening](https://aihero.dev/skills-security-and-hardening).

When you are unsure which skill fits, [ask-matt](https://aihero.dev/skills-ask-matt) routes you.
