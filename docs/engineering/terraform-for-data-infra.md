## What it does

`terraform-for-data-infra` provisions warehouses, buckets, IAM, and orchestration as code.

Steps only a human can click through a console are a different skill. This one writes the Terraform that creates the warehouse, the bucket, and the role.

## When to reach for it

Type `/terraform-for-data-infra`, or the [agent](https://www.aihero.dev/ai-coding-dictionary/agent) reaches for it when a task fits.

Reach for this when data infrastructure should be reviewed as code. Steps only a human can click are [wizard](https://aihero.dev/skills-wizard).

## The plan

The leading word is **plan**. The change shows what will be created or destroyed before it is applied. State is remote. A warehouse, a bucket, and a role are resources with names, not a console checklist.

## Common questions

**How is this different from wizard?**

Steps only a human can click through are [wizard](https://aihero.dev/skills-wizard). This skill writes Terraform for warehouses, buckets, and orchestration.

## It's working if

- The plan lists the warehouse, bucket, or role that will change.
- State is not only on one laptop.

## Where it fits

This is a **reach-for-it-anytime standalone** for data infrastructure as code.

Its neighbour is [wizard](https://aihero.dev/skills-wizard), because that skill is for steps only a human can click.

When you are unsure which skill fits, [ask-matt](https://aihero.dev/skills-ask-matt) routes you.
