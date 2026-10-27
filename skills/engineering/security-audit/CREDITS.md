# Credits

The workflow, companion prompts, report schema, and validators in this directory are Cloudflare's [`security-audit`](https://github.com/cloudflare/security-audit-skill) skill, copied in under the MIT license (see [LICENSE](LICENSE)). Copyright (c) 2025-2026 Cloudflare, Inc.

This repo does not depend on that repository as a skill install. A hard dependency would break standalone installs of this plugin, so the content is copied rather than pointed at. This file is the attribution that dependency would otherwise have carried.

The upstream tree this copy tracks is commit `c1c8a8c1471069fb0e188eeaff69b8e8db6564a8` (`Clarify guidance and full audit modes`).

Local adaptations:

- Prose in this directory follows this repo's rule against em-dashes. The promotion procedure that hunters and verifiers copy is unchanged, and the two copies of that block still match.
- The `research` agent role is called out at the definition and at each launch site as a read-only subagent inside the audit, not this repo's `research` skill.
- `run-identity.cjs` chooses the output directory and which prior runs are visible. The path is a sanitized slug plus a hash of the resolved target path. The git remote is not a path segment. This closes an upstream path-escape and cross-target prior-run mixup.
- Validator commands are pinned to `<skill-dir>/validate-*.cjs`, including the hunting ledger update, so a copy planted in the target is not the script that runs.

Upstream describes the skill as the single-repo starting point of Cloudflare's vulnerability discovery harness: [Build your own vulnerability harness](https://blog.cloudflare.com/build-your-own-vulnerability-harness).
