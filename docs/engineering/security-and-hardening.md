## What it does

`security-and-hardening` hardens a feature while you build it: trust boundaries, the OWASP risks that apply, and an always/ask/never list for the risky calls.

The defining constraint is that this skill edits the feature. A source-first audit that writes a report and does not change the target is the house audit skill. Do not start that audit from here, and do not probe a deployed system.

## When to reach for it

Type `/security-and-hardening`, or the [agent](https://www.aihero.dev/ai-coding-dictionary/agent) reaches for it when a task fits.

| Your situation | Reach for |
| --- | --- |
| The change accepts untrusted input, sessions, or a third party | This skill |
| You want an audit report of a repo you are allowed to review | [security-audit](https://aihero.dev/skills-security-audit) |

## While you build

The leading words are **while you build**. Name the boundary, treat input as hostile, and sort the dangerous operations into always, ask, and never. Secrets stay out of the tree. A finding you only describe, without changing the code, belongs in the audit skill.

## Common questions

**How is this different from security-audit?**

[security-audit](https://aihero.dev/skills-security-audit) is a source-first review. Guidance for a question. A full report only when you ask for the audit. It does not edit the target. This skill hardens the feature you are writing.

## It's working if

- The trust boundary for the change is named.
- Risky calls are sorted into always, ask, and never, and the code matches that list.

## Where it fits

This is a **reach-for-it-anytime standalone** on the security branch of a build.

Its neighbour is [security-audit](https://aihero.dev/skills-security-audit), because both start from the word security and they do different jobs. Model threats, privacy, and the ML supply chain are [ml-security](https://aihero.dev/skills-ml-security). Filters on LLM inputs and outputs are [llm-guardrails](https://aihero.dev/skills-llm-guardrails).

When you are unsure which skill fits, [ask-matt](https://aihero.dev/skills-ask-matt) routes you.
