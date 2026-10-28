## What it does

`context-engineering` packs the [context window](https://www.aihero.dev/ai-coding-dictionary/context-window) for the task in front of you: the rules, the spec, the relevant source, and the error output.

The defining constraint is that this is packing, not a session-start ritual. Run it when the window is full of the wrong material. Fixes to the agent's environment after a session are a different skill, and you start that one yourself.

## When to reach for it

Type `/context-engineering`, or the [agent](https://www.aihero.dev/ai-coding-dictionary/agent) reaches for it when a task fits.

| Your situation | Reach for |
| --- | --- |
| Output quality dropped, or the task just switched | This skill |
| After a session, you want the environment improved | [retro](https://aihero.dev/skills-retro) |

## Packing

The leading word is **packing**. Keep the task, the error, and the file you are editing. Summarise an exploration down to the conclusion before you drop it. Do not start every session by reloading the whole repo.

## Common questions

**How is this different from retro?**

[retro](https://aihero.dev/skills-retro) suggests changes to the agent's environment after a session, and you invoke it yourself. This skill only decides what stays in the window for the current task.

## It's working if

- The next step still has the task, the error, and the file being edited.
- Old exploration is one sentence, or it is gone.

## Where it fits

This is a **reach-for-it-anytime standalone** when the window is the problem.

Its neighbour is [retro](https://aihero.dev/skills-retro), because both get reached for when a session feels worse than it should.

When you are unsure which skill fits, [ask-matt](https://aihero.dev/skills-ask-matt) routes you.
