## What it does

`masking-pii-data` classifies personal data and chooses masking, hashing, tokenization, or encryption.

A source-first audit report of an application is a different skill. This one decides how a pipeline stores or shows a sensitive column, and how a deletion request removes it.

## When to reach for it

Type `/masking-pii-data`, or the [agent](https://www.aihero.dev/ai-coding-dictionary/agent) reaches for it when a task fits.

Reach for this when a table holds names, contact details, payment data, or health data. A source-first audit report is [security-audit](https://aihero.dev/skills-security-audit).

## The technique

The leading word is **technique**. Masking hides a value. Salted hashing can join without reversing. Tokenization can be reversed through a vault. Encryption protects the field at rest. Pick one per column, and say who can still see the raw value.

## Common questions

**How is this different from security-audit?**

A source-first audit report that does not edit the target is [security-audit](https://aihero.dev/skills-security-audit). This skill classifies and masks PII inside a data pipeline.

## It's working if

- Each sensitive column names its technique.
- A deletion request has a path that removes or invalidates that column.

## Where it fits

This is a **cross-cutting** skill whenever a pipeline touches personal data.

Its neighbour is [security-audit](https://aihero.dev/skills-security-audit), because that skill is a source-first audit report.

When you are unsure which skill fits, [ask-matt](https://aihero.dev/skills-ask-matt) routes you.
