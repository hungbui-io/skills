## What it does

`engineering-databricks-pipelines` builds Delta and Auto Loader pipelines and registers them in Unity Catalog.

A notebook that writes a path nobody else can govern will not survive the next workspace. The pipeline has an owner, a catalog name, and a reload story.

## When to reach for it

Type `/engineering-databricks-pipelines`, or the [agent](https://www.aihero.dev/ai-coding-dictionary/agent) reaches for it when a task fits.

Reach for this on Databricks. Spark performance inside the job is [optimizing-pyspark-jobs](https://aihero.dev/skills-optimizing-sql-queries). The medallion layout is [designing-medallion-architecture](https://aihero.dev/skills-designing-medallion-architecture).

## The catalog

The leading word is **catalog**. Unity Catalog is where the table lives. Auto Loader or a Delta write names the checkpoint and the schema policy. A rerun uses that checkpoint instead of a second copy of the files.

## It's working if

- The output table has a catalog name.
- The load has a checkpoint or an equivalent cursor.

## Where it fits

This is a **chain step** when the platform is Databricks.

Its neighbour is [optimizing-pyspark-jobs](https://aihero.dev/skills-optimizing-sql-queries).

When you are unsure which skill fits, [ask-matt](https://aihero.dev/skills-ask-matt) routes you.
