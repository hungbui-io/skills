## What it does

`llm-data-preparation` cleans, dedupes, and splits a text corpus for fine-tuning or retrieval.

A dump of documents with duplicates, leaks from the eval set, and no split will train. It will also make the eval number meaningless. The corpus that leaves this skill has a split and a reason for each drop.

## When to reach for it

Type `/llm-data-preparation`, or the [agent](https://www.aihero.dev/ai-coding-dictionary/agent) reaches for it when a task fits.

Reach for this before fine-tuning or building a retrieval index. Fine-tuning is [llm-fine-tuning](https://aihero.dev/skills-llm-fine-tuning). Retrieval is [llm-rag](https://aihero.dev/skills-llm-rag).

## The corpus

The leading word is **corpus**. Record what you dropped (duplicates, too-short rows, eval leakage) and which split a row belongs to. The fine-tune and the index consume that corpus. They do not consume the raw dump.

## It's working if

- Train and eval splits are disjoint.
- You can say why a row was removed.

## Where it fits

This is a **chain step** after the ML intake and before fine-tuning or retrieval.

Its neighbours are [llm-fine-tuning](https://aihero.dev/skills-llm-fine-tuning) and [llm-rag](https://aihero.dev/skills-llm-rag).

When you are unsure which skill fits, [ask-matt](https://aihero.dev/skills-ask-matt) routes you.
