## What it does

`autoskill` analyzes user-requested Screenpipe history windows to detect repeated research workflows, match existing scientific skills, and stage new skill drafts or composition recipes for review. Requires a reachable Screenpipe HTTP API, normally on localhost:3030. Detection and embedding inference run locally; the selected LLM receives redacted app/title cluster summaries and matched skill descriptions. Use only when the user explicitly asks to analyze their recent work and propose skills.

The result has to name its inputs and the assumption that would change it. Ordinary software work stays with the house skills.

## When to reach for it

Type `/autoskill`, or the [agent](https://www.aihero.dev/ai-coding-dictionary/agent) reaches for it when a task fits.

Reach for this when the task matches the workflow above.

## Autoskill

The leading word is **Autoskill**. Stay on that workflow, and write down the input that the result depends on.


## It's working if

- You can name the input and the tool the result came from.
- An assumption that would change the result is written down.

## Where it fits

This is a **reach-for-it-anytime standalone** for this scientific workflow.

When you are unsure which skill fits, [ask-matt](https://aihero.dev/skills-ask-matt) routes you.
