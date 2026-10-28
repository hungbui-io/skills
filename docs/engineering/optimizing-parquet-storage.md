## What it does

`optimizing-parquet-storage` fixes file size, row groups, and compression so scans stay cheap.

One known performance regression in application code is a different skill. This one starts from file sizes and row groups on disk.

## When to reach for it

Type `/optimizing-parquet-storage`, or the [agent](https://www.aihero.dev/ai-coding-dictionary/agent) reaches for it when a task fits.

Reach for this when Parquet reads are slow or the small-file problem is the bill. Iceberg maintenance around those files is [building-iceberg-tables](https://aihero.dev/skills-building-iceberg-tables). One known application performance regression is [diagnosing-bugs](https://aihero.dev/skills-diagnosing-bugs).

## The file

The leading word is **file**. Target a file size large enough to scan and small enough to rewrite. Row groups match the columns you filter. Compression is a choice you can name, not the writer default you never checked.

## Common questions

**How is this different from diagnosing-bugs?**

One known application performance regression is [diagnosing-bugs](https://aihero.dev/skills-diagnosing-bugs). This skill fixes Parquet file size, row groups, and compression.

## It's working if

- You can name the file size and row-group size you are aiming at.
- A small-file pile has a compaction step.

## Where it fits

This is a **chain step** for columnar storage.

Its neighbour is [diagnosing-bugs](https://aihero.dev/skills-diagnosing-bugs), because that skill is one known application performance regression.

When you are unsure which skill fits, [ask-matt](https://aihero.dev/skills-ask-matt) routes you.
