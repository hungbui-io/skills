## What it does

`bulk-rnaseq` prepares bulk RNA-seq FASTQ, Salmon, STAR or featureCounts output for gene-level differential expression. Covers nf-core/rnaseq and standalone quantification, biological replication, strandedness, reference provenance, validated count assembly and a PyDESeq2 handoff

The result has to name its inputs and the assumption that would change it. Ordinary software work stays with the house skills.

## When to reach for it

Type `/bulk-rnaseq`, or the [agent](https://www.aihero.dev/ai-coding-dictionary/agent) reaches for it when a task fits.

Use for FASTQ-to-counts analysis, nf-core/rnaseq configuration, STAR/Salmon quantification, or building a counts matrix for DESeq2. For single-cell data use scanpy; for statistical fitting alone use pydeseq2.

## Bulk Rnaseq

The leading word is **Bulk Rnaseq**. Stay on that workflow, and write down the input that the result depends on.


## It's working if

- You can name the input and the tool the result came from.
- An assumption that would change the result is written down.

## Where it fits

This is a **reach-for-it-anytime standalone** for this scientific workflow.

When you are unsure which skill fits, [ask-matt](https://aihero.dev/skills-ask-matt) routes you.
