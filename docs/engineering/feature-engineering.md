> **Archived.** Removed in the duplicate-skill pass. The replacement is [building-feature-pipelines](https://aihero.dev/skills-building-feature-pipelines).

## What it does

`feature-engineering` turns validated rows into the columns a model trains on.

A feature that is computed one way in training and another way at serve time will look fine offline and fail in production. The definition is shared.

## When to reach for it

Type `/feature-engineering`, or the [agent](https://www.aihero.dev/ai-coding-dictionary/agent) reaches for it when a task fits.

Reach for this when validated data has to become model inputs. Storing that definition for online reads is [feature-store](https://aihero.dev/skills-feature-store).

## One definition

The leading word is **definition**. Write the transform once, fit it on the training window only, and use that same code when the model is served. Leakage is a transform that saw the answer, or the future, while it was fit.

## It's working if

- The training job and the server call the same feature code.
- A target or a future value is absent from the fit window.

## Where it fits

This is a **chain step** after validation and before training.

Its neighbour is [feature-store](https://aihero.dev/skills-feature-store), because online inference needs the same definition without recomputing it ad hoc.

When you are unsure which skill fits, [ask-matt](https://aihero.dev/skills-ask-matt) routes you.
