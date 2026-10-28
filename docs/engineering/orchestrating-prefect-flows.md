## What it does

`orchestrating-prefect-flows` writes flows and tasks with retries, caching, and a schedule.

A retry of a task that appends rows will duplicate them. The task result is cached or the write is safe to repeat, and the schedule is part of the flow.

## When to reach for it

Type `/orchestrating-prefect-flows`, or the [agent](https://www.aihero.dev/ai-coding-dictionary/agent) reaches for it when a task fits.

Reach for this when the orchestrator is Prefect. The load underneath is [writing-idempotent-transformations](https://aihero.dev/skills-writing-idempotent-transformations).

## The flow

The leading word is **flow**. Tasks declare retries and what is safe to cache. A deployment carries the schedule. A rerun uses the cache or the idempotent write, not a second append.

## It's working if

- Retries and the schedule are on the flow, not in a side document.
- A retried task does not append a second copy.

## Where it fits

This is a **chain step** when the orchestrator is Prefect.

Its neighbour is [authoring-airflow-dags](https://aihero.dev/skills-authoring-airflow-dags), because the choice is the orchestrator.

When you are unsure which skill fits, [ask-matt](https://aihero.dev/skills-ask-matt) routes you.
