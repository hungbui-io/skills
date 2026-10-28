## What it does

`security-audit` reviews a codebase you are allowed to audit for vulnerabilities that cross a real trust boundary, then reports the source evidence, a bounded local check, a priority, and the smallest source fix.

Loading the skill does not start an audit. A security question, a focused review, or a look at one suspected bug stays in guidance mode: the relevant part of the workflow, in the conversation, with no output directory and no report files. The six-phase run, and the files it writes, happen only when you explicitly ask to audit or pen-test a codebase, ask for a full or end-to-end review, or ask for report artifacts. The workflow is vendored into this set under the MIT license. It describes fixes. It does not edit the target, and it does not probe deployed systems.

## When to reach for it

Type `/security-audit`, or the [agent](https://www.aihero.dev/ai-coding-dictionary/agent) reaches for it when you ask a security question, request a vulnerability review, or ask for an audit or pen-test.

| Your situation | Reach for |
| --- | --- |
| A security question, or a focused look at one suspected issue | This skill, in guidance mode. Say so if you do not want report files |
| An audit, a pen-test, or report artifacts for a repo you are allowed to review | This skill, in full audit mode |
| Does this diff follow the repo's standards, and does it match the spec? | [code-review](https://aihero.dev/skills-code-review) |
| One known bug or performance regression, and you want the cause | [diagnosing-bugs](https://aihero.dev/skills-diagnosing-bugs) |
| A raw report from someone else, not yet confirmed | [triage](https://aihero.dev/skills-triage) first |
| A fact in someone else's docs or spec, not a flaw in this repo | [research](https://aihero.dev/skills-research) |
| Hardening a feature while you build it | [security-and-hardening](https://aihero.dev/skills-security-and-hardening) |

If the request could be either mode, the skill asks one question before it creates files.

## Prerequisites

Full audit mode needs a repository you are allowed to audit, and Node.js. The parent runs `validate-findings.cjs` and `validate-coverage-ledger.cjs`. Both are zero-dependency.

Any check that executes target code needs an OS-enforced sandbox: no external network, an empty environment filled from an allowlist, a read-only target, and low CPU, memory, and time limits. Writes stay inside that agent's `scratch/` directory. If those controls are not available, the lead stays `needs_validation` and the target code is not run.

Report files go outside the target. The default directory is under `~/security-audit-skill/`, named from a sanitized slug plus a hash of the resolved target path. It is not the git remote and it is not a raw directory name. A directory inside the target is used only when you pick one that version control ignores.

This skill does not use the issue tracker, so it does not need [setup-matt-pocock-skills](https://aihero.dev/skills-setup-matt-pocock-skills).

## Trust boundary, then a verdict

The leading word is **trust boundary**. A candidate is not a finding until it names the lower-trust principal, the input or action that was accepted, the control that should have stopped it, the boundary that was crossed, and a result an owner can observe. A missing best practice, a guessed deployment setting, or a crash that only hurts the caller does not clear that bar.

Full audit mode keeps a **coverage ledger**: a deterministic list of surface, boundary, and attack class, updated after every [subagent](https://www.aihero.dev/ai-coding-dictionary/subagent) returns. Hunters are assigned from the ledger. The agent that checks a candidate is never the agent that found it.

| Verdict | What it means |
| --- | --- |
| `confirmed` | The source path and a bounded local result both hold. This is the only verdict that gets a severity |
| `needs_validation` | The source path is real, and one named fact (a provider setting, a proxy, an identity policy) is missing. No severity |
| `rejected` | A fresh verifier disproved the claim |

Severity is anchored to the demonstrated result. Critical means an unauthenticated actor gains code execution, full data-store access, or arbitrary account takeover. A feeling that something is "pretty bad" does not raise the rating past what was shown.

Profiles change breadth, not the evidence bar: `quick` (one hunter wave), `standard` (the workflow as written), `deep` (extra redundancy on a large or high-stakes target). A scoped or `quick` run says it is partial. It does not call the rest of the repo covered.

## Common questions

**I asked a security question and it started a full audit.**

That split is the point of the current workflow. Guidance is the default. Full audit mode runs only for an explicit audit or pen-test, a full or end-to-end review, or a request for report artifacts. If you wanted an answer in the thread, say "guidance only" and do not ask for a report.

**Will it pen-test the live service?**

No. Source inspection is read-only. The only execution it allows is target code inside the sandbox above, against dummy principals and fixtures, stopped at the smallest observable result. It does not probe deployed endpoints, shared infrastructure, production identities, or other people's data. Where the decisive fact is outside the repo, the record is `needs_validation` with a safe check the owner can run, not a live-probe instruction.

**Does the recommended fix prove the legitimate behavior still works?**

It names the invariant and the narrowest source change at the last trusted decision point, plus a regression test. It does not apply that change. It also does not require a separate check that the legitimate use still passes. That gap is real: a regression test can show the attack fails and still leave the happy path unproven. If you want that proof, ask for it, or take the finding into [tdd](https://aihero.dev/skills-tdd) when you implement the fix.

**It launched a `research` agent. Is that `/research`?**

No. Inside this skill, `research` is a read-only subagent role (reconnaissance, coverage critics, record verification). The `research` skill in this repo is a different tool: it reads external [primary sources](https://www.aihero.dev/ai-coding-dictionary/primary-source) and writes a cited note. The audit tells the agent not to call the Skill tool for that role.

## It's working if

- A security question is answered in the thread, and no `~/security-audit-skill/` run directory appears.
- A full audit's run directory stays under `~/security-audit-skill/`, and its name is not the git remote.
- A full audit ends in one of two states: the report files exist and both validators pass, or `run-metadata.json` says `run_status` is `incomplete` and the report states the gap.
- Every `confirmed` record names a principal, a crossed boundary, and a result. Every `needs_validation` record has no severity.
- The report does not tell you to hit a deployed endpoint, and the target repo has no audit edits in it.

## Where it fits

`security-audit` is a reach-for-it-anytime standalone. You start it when you want a security review, and it ends at the answer or the report. It is not a step in the idea-to-ship chain.

[code-review](https://aihero.dev/skills-code-review) is the neighbour people confuse it with, because both are reviews. That skill checks a diff against the repo's standards and the originating spec. This one hunts trust-boundary failures, including across a whole repo, and it will not score a checklist miss as a vulnerability. [diagnosing-bugs](https://aihero.dev/skills-diagnosing-bugs) is the other neighbour: one known bug, a tight feedback loop, then a fix. A confirmed finding you decide to fix can re-enter the main flow at [to-spec](https://aihero.dev/skills-to-spec) or [implement](https://aihero.dev/skills-implement).

Classifying and masking PII in a data pipeline is [masking-pii-data](https://aihero.dev/skills-masking-pii-data). Model-specific threats (adversarial inputs, poisoning, extraction, privacy, and the ML supply chain) are [ml-security](https://aihero.dev/skills-ml-security). [ask-matt](https://aihero.dev/skills-ask-matt) is the map when you are unsure which of those the situation wants.
