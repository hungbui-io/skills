> **Archived.** Removed in the duplicate-skill pass. The replacement is [processing-streaming-data](https://aihero.dev/skills-processing-streaming-data).

## What it does

`building-kafka-consumers` writes consumers and producers that commit offsets only after the write succeeds.

Committing the offset before the sink write loses the record on a crash. Committing it never, or too late, replays work the sink must tolerate.

## When to reach for it

Type `/building-kafka-consumers`, or the [agent](https://www.aihero.dev/ai-coding-dictionary/agent) reaches for it when a task fits.

Reach for this when the transport is Kafka. Windowing and late data on that stream are [processing-streaming-data](https://aihero.dev/skills-processing-streaming-data).

## The offset

The leading word is **offset**. The consumer group, the commit point, and the dead-letter path are explicit. A poison message has somewhere to go that is not an infinite retry of the same offset.

## It's working if

- The offset commits after the sink write.
- A message that cannot be processed lands on a dead-letter path you can name.

## Where it fits

This is a **chain step** when ingestion or transport is Kafka.

Its neighbour is [processing-streaming-data](https://aihero.dev/skills-processing-streaming-data).

When you are unsure which skill fits, [ask-matt](https://aihero.dev/skills-ask-matt) routes you.
