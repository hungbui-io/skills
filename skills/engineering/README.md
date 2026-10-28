# Engineering

Skills I use daily for code work.

## User-invoked

Reachable only when you type them (Claude Code: `disable-model-invocation: true`; Codex: `policy.allow_implicit_invocation: false` in `agents/openai.yaml`).

- **[ask-matt](./ask-matt/SKILL.md)**: Ask which skill or flow fits your situation. A router over the user-invoked skills in this repo.
- **[grill-with-docs](./grill-with-docs/SKILL.md)**: Grilling session that also builds your project's domain model, sharpening terminology and updating `GLOSSARY.md` and ADRs inline.
- **[triage](./triage/SKILL.md)**: Move issues through a state machine of triage roles.
- **[improve-codebase-architecture](./improve-codebase-architecture/SKILL.md)**: Scan a codebase for deepening opportunities, present them as a visual HTML report, then grill through whichever one you pick.
- **[setup-matt-pocock-skills](./setup-matt-pocock-skills/SKILL.md)**: Configure this repo for the engineering skills (issue tracker, triage labels, domain doc layout). Run once per repo.
- **[to-spec](./to-spec/SKILL.md)**: Turn the current conversation into a spec and publish it to the issue tracker.
- **[to-tickets](./to-tickets/SKILL.md)**: Break any plan, spec, or conversation into a set of tracer-bullet tickets, each declaring its blocking edges, whether as text in a local file or as native blocking links on a real tracker.
- **[implement](./implement/SKILL.md)**: Build the work described by a spec or set of tickets, driving `/tdd` at pre-agreed seams and closing out with `/code-review` before committing.
- **[implement-spec](./implement-spec/SKILL.md)**: Implement a whole spec on one integration branch. Works the tickets as a task graph, running implementer subagents across the ready frontier for maximum concurrency, then closes out with `/code-review`.
- **[wayfinder](./wayfinder/SKILL.md)**: Plan a huge chunk of work (more than one agent session can hold) as a shared map of decision tickets on the issue tracker, resolved one at a time until the way to the destination is clear.
- **[retro](./retro/SKILL.md)**: Suggest improvements to the coding agent's environment (navigation, automated checks, coding standards, steering files, tooling) after a session, most severe first.


## Model-invoked

Model- or user-reachable (rich trigger phrasing so the model can reach for them).

- **[prototype](./prototype/SKILL.md)**: Build a throwaway prototype to answer a design question: a single shareable HTML file for state/logic, or several toggleable UI variations.

- **[diagnosing-bugs](./diagnosing-bugs/SKILL.md)**: Disciplined diagnosis loop for hard bugs and performance regressions: build a feedback loop that goes red on this bug → minimise → hypothesise → instrument → fix → regression-test.
- **[security-audit](./security-audit/SKILL.md)**: Source-first security review of a codebase you are allowed to audit. Guidance by default. A full six-phase audit (coverage ledger, independent verification, report files) runs only when you explicitly ask for an audit, a pen-test, or report artifacts.
- **[research](./research/SKILL.md)**: Investigate a question against high-trust primary sources and capture the findings as a cited Markdown file in the repo, run as a background agent.
- **[tdd](./tdd/SKILL.md)**: Test-driven development with a red-green-refactor loop. Builds features or fixes bugs one vertical slice at a time.
- **[domain-modeling](./domain-modeling/SKILL.md)**: Actively build and sharpen a project's domain model by challenging terms, stress-testing with scenarios, and updating `GLOSSARY.md` and ADRs inline.
- **[codebase-design](./codebase-design/SKILL.md)**: Shared discipline and vocabulary for designing deep modules: small interfaces, clean seams, testable through the interface.
- **[code-review](./code-review/SKILL.md)**: Two-axis review of the diff since a fixed point: **Standards** (does it follow the repo's coding standards, plus a Fowler smell baseline?) and **Spec** (does it faithfully implement the originating issue/spec?), run as parallel sub-agents.
- **[pr](./pr/SKILL.md)**: The shape a pull request body should take: a summary as the smallest visual that makes the change clear, before/after evidence that it works, and a merge-danger call (one-way or two-way door, plus blast radius).
- **[wizard](./wizard/SKILL.md)**: Generate an interactive bash wizard that walks a human through steps only they can perform: provisioning infrastructure, setting up credentials or CI secrets, walking an unfamiliar third-party dashboard, or running a one-off migration or cutover.

- **[api-and-interface-design](./api-and-interface-design/SKILL.md)**: Design the contract callers may rely on: resources, errors, compatibility, and the line between frontend and backend.
- **[browser-testing-with-devtools](./browser-testing-with-devtools/SKILL.md)**: Check UI in a real browser through Chrome DevTools: DOM, console, network, performance, and a screenshot.
- **[ci-cd-and-automation](./ci-cd-and-automation/SKILL.md)**: Put quality gates and a deploy strategy in the pipeline so a red check can block a ship.
- **[code-simplification](./code-simplification/SKILL.md)**: Local clarity refactor that preserves behavior. A codebase-wide deepening survey stays improve-codebase-architecture.
- **[constraint-driven-development](./constraint-driven-development/SKILL.md)**: Interview a quality bar into CONSTRAINTS.md and reject a diff that quietly lowers it.
- **[context-engineering](./context-engineering/SKILL.md)**: Pack the context for the task in front of you. It does not run at the start of every session. Post-session environment fixes stay retro.
- **[deprecation-and-migration](./deprecation-and-migration/SKILL.md)**: Sunset an API or migrate a schema by expanding first and contracting only after callers have moved.
- **[doubt-driven-development](./doubt-driven-development/SKILL.md)**: Fresh-context adversarial review that tries to disprove a decision before it stands. The reviewer does not see your reasoning.
- **[frontend-ui-engineering](./frontend-ui-engineering/SKILL.md)**: Build accessible, responsive UI that belongs to the product, including keyboard, contrast, and a layout that is not a generic template.
- **[git-workflow-and-versioning](./git-workflow-and-versioning/SKILL.md)**: Atomic commits, branching, conflict splits, and semantic versioning. The pull request body stays pr.
- **[observability-and-instrumentation](./observability-and-instrumentation/SKILL.md)**: Write the on-call question first, then add the log, metric, trace, or alert that can answer it.
- **[performance-optimization](./performance-optimization/SKILL.md)**: Measure a bottleneck, fix it, and leave a guard. One known performance regression stays diagnosing-bugs.
- **[security-and-hardening](./security-and-hardening/SKILL.md)**: Harden a feature while you build it: trust boundaries, OWASP, and an always/ask/never list. A full audit report stays security-audit.
- **[shipping-and-launch](./shipping-and-launch/SKILL.md)**: Pre-launch checklist, feature flags, staged rollout, and a rollback. The pull request body stays pr.
- **[source-driven-development](./source-driven-development/SKILL.md)**: Implement from the official docs and cite the page. A cited note that does not change code stays research.
