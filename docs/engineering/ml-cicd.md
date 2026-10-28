## What it does

`ml-cicd` trains on a change, then promotes or rolls back a model across environments.

Application pipeline gates are a different skill. This one fails a model promotion when the training or the eval gate fails, and it can point production back at the previous version.

## When to reach for it

Type `/ml-cicd`, or the [agent](https://www.aihero.dev/ai-coding-dictionary/agent) reaches for it when a task fits.

Reach for this when a model version has to move from dev to staging to production. Application pipeline gates are [ci-cd-and-automation](https://aihero.dev/skills-ci-cd-and-automation).

## Promotion

The leading word is **promotion**. A pull request can train and evaluate. A version moves forward only when that gate passes. Rollback re-points the alias at the previous good version.

## Common questions

**How is this different from ci-cd-and-automation?**

Application build, test, and deploy gates are [ci-cd-and-automation](https://aihero.dev/skills-ci-cd-and-automation). This skill trains a model, promotes a version, and rolls a version back.

## It's working if

- A failed eval blocks promotion.
- You can name the version production was rolled back to.

## Where it fits

This is a **chain step** after the registry and before serving.

Its neighbour is [ci-cd-and-automation](https://aihero.dev/skills-ci-cd-and-automation), because that skill is the application pipeline.

When you are unsure which skill fits, [ask-matt](https://aihero.dev/skills-ask-matt) routes you.
