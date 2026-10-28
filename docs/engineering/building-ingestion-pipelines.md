## What it does

`building-ingestion-pipelines` extracts from databases, APIs, and files with an incremental boundary.

A full reload every run hides the watermark. The pipeline has to name how far it has read, and a rerun from that point must not duplicate the rows it already landed.

## When to reach for it

Type `/building-ingestion-pipelines`, or the [agent](https://www.aihero.dev/ai-coding-dictionary/agent) reaches for it when a task fits.

Reach for this when data has to enter the platform. Database change capture is [implementing-cdc-with-debezium](https://aihero.dev/skills-implementing-cdc-with-debezium). A stream is [processing-streaming-data](https://aihero.dev/skills-processing-streaming-data).

Training-set ingest is part of this skill.

## The watermark

The leading word is **watermark**. Store the cursor (a timestamp, an id, or a page token) with the batch. The next run starts there. Pagination and late rows have an explicit rule.

## It's working if

- You can point at the cursor the last successful batch stored.
- Re-running that batch does not insert a second copy.

## Where it fits

This is a **chain step** at the start of a batch pipeline.

Its neighbour is [writing-idempotent-transformations](https://aihero.dev/skills-writing-idempotent-transformations), because the landing write has to survive a retry.

When you are unsure which skill fits, [ask-matt](https://aihero.dev/skills-ask-matt) routes you.
