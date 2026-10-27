# Credits

This skill is from Addy Osmani's [agent-skills](https://github.com/addyosmani/agent-skills) collection, copied in under the MIT license (see [LICENSE](LICENSE)). Copyright (c) 2025 Addy Osmani.

Shared checklists from the same collection live in `../agent-skills-references/` and carry the same license.

The upstream tree this copy tracks is commit `aeac41d4d005999432bb7312f7ff06383a91d59d` (`chore(release): bump plugin manifests to 0.6.13`).

Local adaptations:

- Prose in this directory follows this repo's rule against em-dashes and en-dashes. Sentences were rewritten. The meaning is unchanged.
- Links that used to point at the upstream `references/` directory now point at `../agent-skills-references/`.
- Where a step used to tell the agent to run another skill by a filesystem path, it now names the Skill tool, one skill per call. User-invoked skills are a request to the human, not a Skill tool call.
- House boundaries in `SKILL.md` say which skill in this repo wins when two could fire. `/ask-matt` is the router.

- `using-agent-skills` is user-invoked (`disable-model-invocation: true` and `policy.allow_implicit_invocation: false`) so it does not steal a house trigger.
