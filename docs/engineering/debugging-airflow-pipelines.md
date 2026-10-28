## What it does

`debugging-airflow-pipelines` finds why an Airflow task failed, stayed queued, or became a zombie.

One known bug in application code is a different skill. This one starts from the task instance: scheduler, pool, dependency, or the task's own log.

## When to reach for it

Type `/debugging-airflow-pipelines`, or the [agent](https://www.aihero.dev/ai-coding-dictionary/agent) reaches for it when a task fits.

Reach for this when an Airflow task will not run or will not finish. Wrong rows after a green task are [debugging-data-pipelines](https://aihero.dev/skills-debugging-data-pipelines). One known application bug is [diagnosing-bugs](https://aihero.dev/skills-diagnosing-bugs).

## The task instance

The leading word is **instance**. Pin the dag, the run, and the task try. Read that try's log before you restart the whole DAG. A queued task is a pool, a concurrency, or a dependency, and the log says which.

## Common questions

**How is this different from diagnosing-bugs?**

One known application bug is [diagnosing-bugs](https://aihero.dev/skills-diagnosing-bugs). This skill diagnoses a failed or stuck Airflow task.

## It's working if

- You can name the task instance and the try you read.
- The next action is a retry of that task, a pool change, or a code fix, and you can say which.

## Where it fits

This is a **reach-for-it-anytime standalone** for Airflow operations.

Its neighbour is [diagnosing-bugs](https://aihero.dev/skills-diagnosing-bugs), because that skill is one known application bug.

When you are unsure which skill fits, [ask-matt](https://aihero.dev/skills-ask-matt) routes you.
