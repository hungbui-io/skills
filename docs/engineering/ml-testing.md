## What it does

`ml-testing` tests data, features, and model behavior, then gates promotion on those tests.

The daily red-green loop for application logic is a different skill. This one builds the ML pyramid: data tests, feature tests, and checks that the model's behavior on known slices still holds.

## When to reach for it

Type `/ml-testing`, or the [agent](https://www.aihero.dev/ai-coding-dictionary/agent) reaches for it when a task fits.

Reach for this when a model, a feature, or a data pipeline needs a test that can block promotion. The daily red-green loop for application logic is [tdd](https://aihero.dev/skills-tdd).

## The pyramid

The leading word is **pyramid**. Data tests sit under feature tests, which sit under behavior tests (a slice that must keep its error, an invariance, a minimum case). A promotion gate runs that stack. A single application unit test does not replace it.

## Common questions

**How is this different from tdd?**

The daily red-green loop for application logic is [tdd](https://aihero.dev/skills-tdd). This skill tests models, features, and data pipelines.

## It's working if

- A data or feature failure fails the suite before a model is promoted.
- A known slice has a behavior check you can point at.

## Where it fits

This is a **cross-cutting** skill along the ML chain, especially at promotion.

Its neighbour is [tdd](https://aihero.dev/skills-tdd), because that skill is the application red-green loop.

When you are unsure which skill fits, [ask-matt](https://aihero.dev/skills-ask-matt) routes you.
