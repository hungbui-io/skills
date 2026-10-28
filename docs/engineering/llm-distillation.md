## What it does

`llm-distillation` trains a smaller student model to match a larger teacher's outputs on a fixed eval set.

The student is only a win if it holds the teacher's quality on the eval set at a cost you can state. Matching the teacher on the training prompts alone is not that win.

## When to reach for it

Type `/llm-distillation`, or the [agent](https://www.aihero.dev/ai-coding-dictionary/agent) reaches for it when a task fits.

Reach for this when a large model is too expensive to serve and a smaller one should copy it. Weight updates that are not trying to copy a teacher are [llm-fine-tuning](https://aihero.dev/skills-llm-fine-tuning).

## The student

The leading word is **student**. Generate the teacher's outputs, train the student against them, and score both on a fixed eval the student did not train on. Keep the student when the quality drop is one you accept and the cost drop is real.

## It's working if

- Teacher and student scores are on the same eval set.
- You can state the cost difference that justified the student.

## Where it fits

This is a **chain step** beside fine-tuning, before deployment.

Its neighbour is [llm-fine-tuning](https://aihero.dev/skills-llm-fine-tuning), because a fine-tune is not automatically a distillation.

When you are unsure which skill fits, [ask-matt](https://aihero.dev/skills-ask-matt) routes you.
