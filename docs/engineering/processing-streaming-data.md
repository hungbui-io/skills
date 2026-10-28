## What it does

`processing-streaming-data` handles delivery, windows, and late data on a stream.

A stream that assumes every event arrives once, in order, on time, will double-count or drop the late ones. Delivery and lateness are part of the job.

## When to reach for it

Type `/processing-streaming-data`, or the [agent](https://www.aihero.dev/ai-coding-dictionary/agent) reaches for it when a task fits.

Reach for this for Kafka, Spark, or Flink streaming logic. The consumer loop itself is [building-kafka-consumers](https://aihero.dev/skills-processing-streaming-data).

Kafka producers and consumers are part of this skill.

## The window

The leading word is **window**. Say whether delivery is at-least-once and how the sink makes that safe. A window has a lateness bound. Events after that bound have a rule: drop, side output, or update the window.

## It's working if

- The job states its delivery assumption and how the sink tolerates it.
- Late events have a written rule.

## Where it fits

This is a **chain step** when the pipeline is a stream.

Its neighbour is [building-kafka-consumers](https://aihero.dev/skills-processing-streaming-data).

When you are unsure which skill fits, [ask-matt](https://aihero.dev/skills-ask-matt) routes you.
