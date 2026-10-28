## What it does

`model-drift-detection` detects input or prediction drift and sends a retrain trigger.

A chart that moves is not yet a trigger. The check compares a reference window to a current window and names the test that fired.

## When to reach for it

Type `/model-drift-detection`, or the [agent](https://www.aihero.dev/ai-coding-dictionary/agent) reaches for it when a task fits.

Reach for this when live inputs or predictions may have left the training distribution. Paging on a performance band is [model-monitoring](https://aihero.dev/skills-model-monitoring). The retrain itself is [model-training](https://aihero.dev/skills-model-training).

## Drift

The leading word is **drift**. Compare a reference window to live inputs, or to the model's own outputs. When the test fires, the trigger goes back to training with the window that moved, rather than starting a silent retrain on whatever data arrived today.

## It's working if

- The alert names the feature or the prediction that drifted, and the test.
- A trigger points at a retrain, and the reference window is identifiable.

## Where it fits

This is a **chain step** that closes the loop from production back to training.

Its neighbours are [model-monitoring](https://aihero.dev/skills-model-monitoring) and [model-training](https://aihero.dev/skills-model-training).

When you are unsure which skill fits, [ask-matt](https://aihero.dev/skills-ask-matt) routes you.
