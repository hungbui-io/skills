## What it does

`authoring-airflow-dags` writes an Airflow DAG whose tasks can be retried without duplicating data.

A schedule that retries a task is only safe when that task writes the same result the second time. The DAG has to say which task, which window, and what a retry does.

## When to reach for it

Type `/authoring-airflow-dags`, or the [agent](https://www.aihero.dev/ai-coding-dictionary/agent) reaches for it when a task fits.

Reach for this when you are writing or changing an Airflow DAG. A task that is already failing or stuck is [debugging-airflow-pipelines](https://aihero.dev/skills-debugging-airflow-pipelines).

## The task

The leading word is **retry**. Name the schedule, the window each run owns, and the write that makes a second attempt a no-op. A catchup or a backfill uses that same write.

## It's working if

- Each task names the window it owns.
- A retry of that task does not append a second copy of the window.

## Where it fits

This is a **chain step** when the orchestrator is Airflow.

Its neighbour is [writing-idempotent-transformations](https://aihero.dev/skills-writing-idempotent-transformations), because the DAG cannot make a non-idempotent load safe.

When you are unsure which skill fits, [ask-matt](https://aihero.dev/skills-ask-matt) routes you.
