## What it does

`building-iceberg-tables` creates and maintains Iceberg tables, including partition, compaction, and time travel.

A table that grows small files and never compacts will scan more and more metadata. Partitioning and maintenance are part of the table, not a later chore.

## When to reach for it

Type `/building-iceberg-tables`, or the [agent](https://www.aihero.dev/ai-coding-dictionary/agent) reaches for it when a task fits.

Reach for this when the table format is Iceberg. File layout inside the files is [optimizing-parquet-storage](https://aihero.dev/skills-optimizing-parquet-storage). A column change is [handling-schema-evolution](https://aihero.dev/skills-handling-schema-evolution).

## The snapshot

The leading word is **snapshot**. Writes commit a snapshot. Readers can time-travel to one. Compaction and partition evolution keep later snapshots cheap to scan.

## It's working if

- You can name the snapshot a read used.
- A compaction plan exists for the small-file pattern you actually have.

## Where it fits

This is a **chain step** for lakehouse storage.

Its neighbours are [designing-medallion-architecture](https://aihero.dev/skills-designing-medallion-architecture) and [optimizing-parquet-storage](https://aihero.dev/skills-optimizing-parquet-storage).

When you are unsure which skill fits, [ask-matt](https://aihero.dev/skills-ask-matt) routes you.
