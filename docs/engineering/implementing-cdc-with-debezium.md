## What it does

`implementing-cdc-with-debezium` replicates an OLTP database, including deletes, through a change stream.

An insert-only apply of a change stream keeps deleted rows forever. Deletes and updates have to land in the target, in order, from a snapshot plus the log.

## When to reach for it

Type `/implementing-cdc-with-debezium`, or the [agent](https://www.aihero.dev/ai-coding-dictionary/agent) reaches for it when a task fits.

Reach for this when the source is a database log. A batch watermark extract is [building-ingestion-pipelines](https://aihero.dev/skills-building-ingestion-pipelines). Applying the stream is [processing-streaming-data](https://aihero.dev/skills-processing-streaming-data).

## The change

The leading word is **change**. Snapshot first, then tail the log from that position. Apply inserts, updates, and deletes in order. Store the source position so a restart continues rather than repeating the snapshot.

## It's working if

- The target shows a delete that happened in the source.
- A restart continues from a stored log position.

## Where it fits

This is a **chain step** for database ingestion.

Its neighbour is [building-ingestion-pipelines](https://aihero.dev/skills-building-ingestion-pipelines).

When you are unsure which skill fits, [ask-matt](https://aihero.dev/skills-ask-matt) routes you.
