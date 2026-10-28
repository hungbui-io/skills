## What it does

`datalad` retrieves, versions, and publishes scientific datasets with DataLad and git-annex, and captures computational provenance with datalad run, rerun, and containers-run

The result has to name its inputs and the assumption that would change it. Ordinary software work stays with the house skills.

## When to reach for it

Type `/datalad`, or the [agent](https://www.aihero.dev/ai-coding-dictionary/agent) reaches for it when a task fits.

Use when cloning or fetching data from OpenNeuro, DANDI, datasets.datalad.org, or any DataLad dataset; when a file in a dataset reads as a broken symlink or a small pointer instead of real data; when an analysis needs a machine-readable record of how each output was produced so it can be re-executed; or when publishing a dataset to siblings such as a GitHub repository plus a storage remote. Also use to decide between DataLad and plain Git for a data-carrying repository.

## Datalad

The leading word is **Datalad**. Stay on that workflow, and write down the input that the result depends on.


## It's working if

- You can name the input and the tool the result came from.
- An assumption that would change the result is written down.

## Where it fits

This is a **reach-for-it-anytime standalone** for this scientific workflow.

When you are unsure which skill fits, [ask-matt](https://aihero.dev/skills-ask-matt) routes you.
