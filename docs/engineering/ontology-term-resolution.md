## What it does

`ontology-term-resolution` resolves free-text scientific labels to ontology term IDs and validates existing CURIEs against the EBI Ontology Lookup Service (OLS4). Also looks up prefixes in Bioregistry, resolves compact identifiers via Identifiers.org, maps lab shorthand with ZOOMA, and builds Ontobee term pages. Use whenever an ontology identifier must be produced or checked - annotating tissue, cell type, disease, phenotype, assay, chemical, organism, sex, or developmental stage fields; preparing metadata for GEO, ENA, BioSamples, CELLxGENE, HCA, or ISA-Tab submission; auditing a metadata table of term IDs; checking whether a term is obsolete and what replaced it; or deciding HPO vs HP. Triggers include "ontology term", "ontology ID", "CURIE", "controlled vocabulary", "UBERON", "CL:", "MONDO", "HPO", "EFO", "ChEBI", "NCBITaxon", "GO term", "PATO", "Zooma", "Bioregistry", "Identifiers.org", "Ontobee", "annotate this tissue/cell type/disease", and any request to emit or verify an identifier shaped like PREFIX:0001234.

The result has to name its inputs and the assumption that would change it. Ordinary software work stays with the house skills.

## When to reach for it

Type `/ontology-term-resolution`, or the [agent](https://www.aihero.dev/ai-coding-dictionary/agent) reaches for it when a task fits.

Reach for this when the task matches the workflow above.

## Ontology Term Resolution

The leading word is **Ontology Term Resolution**. Stay on that workflow, and write down the input that the result depends on.


## It's working if

- You can name the input and the tool the result came from.
- An assumption that would change the result is written down.

## Where it fits

This is a **reach-for-it-anytime standalone** for this scientific workflow.

When you are unsure which skill fits, [ask-matt](https://aihero.dev/skills-ask-matt) routes you.
