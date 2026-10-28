> **Archived.** Removed in the duplicate-skill pass. The house skill stays: [domain-modeling](https://aihero.dev/skills-domain-modeling).

## What it does

`documentation-and-adrs` records a decision, or the docs for a public API, so a later reader can see why the code looks like this.

The defining constraint is that this skill writes the record. It does not interview the domain or sharpen a glossary. That work is the house domain skill, and it updates `GLOSSARY.md` and domain ADRs in place.

## When to reach for it

Type `/documentation-and-adrs`, or the [agent](https://www.aihero.dev/ai-coding-dictionary/agent) reaches for it when a task fits.

| Your situation | Reach for |
| --- | --- |
| A decision or a public API needs a record | This skill |
| Terms and domain rules need sharpening | [domain-modeling](https://aihero.dev/skills-domain-modeling) |

## Prerequisites

It writes the ADR where the repo already keeps them. If the repo has no convention, it asks before inventing a folder.

## The record

The leading word is **record**. An ADR names the decision, the context, and the options that lost. API docs name what a caller may rely on. A record that only restates the diff did not earn the file.

## Common questions

**How is this different from domain-modeling?**

[domain-modeling](https://aihero.dev/skills-domain-modeling) challenges terms, stress-tests them with scenarios, and updates `GLOSSARY.md` and domain ADRs inline. This skill writes a general ADR or the docs for a public API.

## It's working if

- The file names the decision and why the alternatives lost.
- A later reader can find it without asking the person who wrote the code.

## Where it fits

This is a **reach-for-it-anytime standalone** when a decision has to outlive the session.

Its neighbour is [domain-modeling](https://aihero.dev/skills-domain-modeling), because both produce ADRs and they are easy to start by accident.

When you are unsure which skill fits, [ask-matt](https://aihero.dev/skills-ask-matt) routes you.
