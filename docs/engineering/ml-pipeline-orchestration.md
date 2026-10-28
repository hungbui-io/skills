## What it does

`ml-pipeline-orchestration` schedules train, validate, and promote as one pipeline with retries and a failure alert.

A notebook you rerun by hand is not a pipeline. The graph has owners for each step, a retry policy, and a page when a step stays failed.

## When to reach for it

Type `/ml-pipeline-orchestration`, or the [agent](https://www.aihero.dev/ai-coding-dictionary/agent) reaches for it when a task fits.

Reach for this when several ML steps have to run in order on a schedule. The promotion rules inside that graph are [ml-cicd](https://aihero.dev/skills-ml-cicd).

## The graph

The leading word is **graph**. Each node is a step you can retry or skip on purpose. Failure notifies a person. The schedule is written down. A green graph is the path from data to a promoted version, not a cron that starts a notebook.

## It's working if

- A failed step retries or pages, and you can see which node failed.
- The order of validate, train, and promote is the graph, not a README list.

## Where it fits

This is a **cross-cutting** skill that runs the ML chain on a schedule.

Its neighbour is [ml-cicd](https://aihero.dev/skills-ml-cicd), because promotion policy and the scheduler are different jobs.

When you are unsure which skill fits, [ask-matt](https://aihero.dev/skills-ask-matt) routes you.
