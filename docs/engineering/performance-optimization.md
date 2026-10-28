## What it does

`performance-optimization` measures a bottleneck, fixes that bottleneck, and leaves a guard so it cannot sneak back.

The defining constraint is measure first. A hunch about a slow page is not a profile. One known performance regression, with a before and an after, is the house diagnosis skill, which already has a performance branch.

## When to reach for it

Type `/performance-optimization`, or the [agent](https://www.aihero.dev/ai-coding-dictionary/agent) reaches for it when a task fits.

| Your situation | Reach for |
| --- | --- |
| Core Web Vitals, an N+1 query, a bundle, or a profile that names a hot spot | This skill |
| One known regression, and you want the cause | [diagnosing-bugs](https://aihero.dev/skills-diagnosing-bugs) |

## Measure

The leading word is **measure**. Capture a baseline, change one thing, and show the number moved. A cache, an index, or a smaller bundle is a fix only if the measurement says so. Leave a check or a budget so the next change cannot undo it silently.

## Common questions

**How is this different from diagnosing-bugs?**

[diagnosing-bugs](https://aihero.dev/skills-diagnosing-bugs) diagnoses one known failure, including a slow endpoint with a known before and after. This skill is for a bottleneck you still have to find and then guard: vitals, queries, bundles, a profile.

## It's working if

- A baseline number exists before the fix.
- The same number is better after the fix, and something will catch a relapse.

## Where it fits

This is a **reach-for-it-anytime standalone** when the work is a bottleneck.

Its neighbour is [diagnosing-bugs](https://aihero.dev/skills-diagnosing-bugs), because a slow endpoint can be either a known regression or a hunt for the hot spot. GPU and infrastructure cost for training and serving is [ml-cost-optimization](https://aihero.dev/skills-ml-cost-optimization). Token, routing, and cache cost for LLM calls is [llm-cost-optimization](https://aihero.dev/skills-llm-cost-optimization).

When you are unsure which skill fits, [ask-matt](https://aihero.dev/skills-ask-matt) routes you.
