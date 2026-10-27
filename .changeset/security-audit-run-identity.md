---
"mattpocock-skills": patch
---

`security-audit` now takes its output directory and prior runs from `run-identity.cjs`: a sanitized slug plus a hash of the resolved target path. A target-controlled directory name or git remote can no longer escape `~/security-audit-skill/` or mix one repo's findings into another's. Validator commands are pinned to the skill directory, and the audit's research role is disclaimed at each launch site so it is not the `research` skill.
