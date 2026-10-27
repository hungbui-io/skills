## What it does

`git-workflow-and-versioning` covers atomic commits, branching, splitting a messy tree, and the semantic version you cut.

The defining constraint is that this skill does not run on every edit, and it does not write the pull request body. The body has its own skill. Reach for this when history, branches, or a version number is the work.

## When to reach for it

Type `/git-workflow-and-versioning`, or the [agent](https://www.aihero.dev/ai-coding-dictionary/agent) reaches for it when a task fits.

| Your situation | Reach for |
| --- | --- |
| Split a messy tree, or choose a version bump | This skill |
| Write the pull request body | [pr](https://aihero.dev/skills-pr) |

## Atomic

The leading word is **atomic**. One commit, one reason. A version bump says whether callers must change, and the changelog note lands in the same change as the code.

## Common questions

**How is this different from pr?**

[pr](https://aihero.dev/skills-pr) is the shape of the pull request body: a summary, before/after evidence, and a merge-danger call. This skill is commits, branches, and semantic versioning.

## It's working if

- Each commit can be explained in one sentence.
- A version bump says what callers have to do.

## Where it fits

This is a **reach-for-it-anytime standalone** when history or versioning is the task.

Its neighbour is [pr](https://aihero.dev/skills-pr), because opening a pull request tempts both skills at once.

When you are unsure which skill fits, [ask-matt](https://aihero.dev/skills-ask-matt) routes you.
