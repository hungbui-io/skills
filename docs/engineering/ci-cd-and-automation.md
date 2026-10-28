## What it does

`ci-cd-and-automation` puts the build, the tests, and the deploy decision into a pipeline a red check can stop.

The defining constraint is that a gate you can click past is not a gate. The pipeline has to fail closed on the checks the repo already treats as mandatory.

## When to reach for it

Type `/ci-cd-and-automation`, or the [agent](https://www.aihero.dev/ai-coding-dictionary/agent) reaches for it when a task fits.

## A gate

The leading word is **gate**. Name the command that must pass, where it runs, and what happens on red. A deploy strategy (straight to production, or staged) sits after that gate, not instead of it.

## It's working if

- A failing test or lint blocks the pipeline.
- The deploy step is described as something the gate can refuse.

## Where it fits

This is a **reach-for-it-anytime standalone** when the work is the pipeline itself.

Its neighbour is [shipping-and-launch](https://aihero.dev/skills-shipping-and-launch), because a rollout plan assumes the pipeline can already stop a bad build. CI for model training, promotion, and rollback is [implementing-data-cicd](https://aihero.dev/skills-implementing-data-cicd).

When you are unsure which skill fits, [ask-matt](https://aihero.dev/skills-ask-matt) routes you.
