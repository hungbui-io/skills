## What it does

`llm-rag` retrieves grounded passages and cites the ones the answer used.

An answer that cannot point at a retrieved passage is an ungrounded generation. Retrieval quality is measured on a fixed set of questions, separately from how fluent the answer sounds.

## When to reach for it

Type `/llm-rag`, or the [agent](https://www.aihero.dev/ai-coding-dictionary/agent) reaches for it when a task fits.

Reach for this when the product should answer from your documents. Preparing those documents is [llm-data-preparation](https://aihero.dev/skills-llm-data-preparation). Scoring retrieval and answers is [llm-evaluation](https://aihero.dev/skills-llm-evaluation).

## The citation

The leading word is **citation**. The index, the query, and the passages returned are inspectable. The answer names which passages it used. If retrieval missed, you fix the index or the query before you rewrite the prompt to hide the miss.

## It's working if

- An answer can point at the passages it used.
- A fixed question set reports whether the right passage was retrieved.

## Where it fits

This is a **chain step** after data preparation, as an alternative or a partner to fine-tuning.

Its neighbour is [llm-evaluation](https://aihero.dev/skills-llm-evaluation), because a fluent answer can still retrieve the wrong passage.

When you are unsure which skill fits, [ask-matt](https://aihero.dev/skills-ask-matt) routes you.
