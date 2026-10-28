<p>
  <a href="https://www.aihero.dev/s/skills-newsletter">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://res.cloudinary.com/total-typescript/image/upload/v1777382277/skills-repo-dark_2x.png">
      <source media="(prefers-color-scheme: light)" srcset="https://res.cloudinary.com/total-typescript/image/upload/v1777382277/skill-repo-light_2x.png">
      <img alt="Skills" src="https://res.cloudinary.com/total-typescript/image/upload/v1777382277/skill-repo-light_2x.png" width="369">
    </picture>
  </a>
</p>

# Skills For Real Engineers

[![skills.sh](https://skills.sh/b/mattpocock/skills)](https://skills.sh/mattpocock/skills)

My agent skills that I use every day to do real engineering - not vibe coding.

Developing real applications is hard. Approaches like GSD, BMAD, and Spec-Kit try to help by owning the process. But while doing so, they take away your control and make bugs in the process hard to resolve.

These skills are designed to be small, easy to adapt, and composable. They work with any model. They're based on decades of engineering experience. Hack around with them. Make them your own. Enjoy.

If you want to keep up with changes to these skills, and any new ones I create, you can join ~60,000 other devs on my newsletter:

[Sign Up To The Newsletter](https://www.aihero.dev/s/skills-newsletter)

## Installation (30-second setup)

A plugin updates itself. [skills.sh](https://skills.sh/mattpocock/skills) copies editable files into your project, and you update them by hand. Pick one per agent, because installing both gives you every skill twice.

### 1. Get the skills

<details>
<summary><strong>Claude Code</strong></summary>

```bash
claude plugin install mattpocock-skills@claude-plugins-official
```

Updates itself by default.

</details>

<details>
<summary><strong>Codex</strong></summary>

```bash
codex plugin marketplace add mattpocock/skills
codex plugin add mattpocock-skills@mattpocock
```

Updates itself at startup.

</details>

<details>
<summary><strong>GitHub Copilot</strong> (CLI and VS Code)</summary>

```bash
copilot plugin marketplace add mattpocock/skills
copilot plugin install mattpocock-skills@mattpocock
```

Then, once, add to `~/.copilot/settings.json`:

```json
{
  "extraKnownMarketplaces": {
    "mattpocock": { "source": { "source": "github", "repo": "mattpocock/skills" }, "autoUpdate": true }
  }
}
```

In VS Code, run **Chat: Install Plugin From Source** and enter `https://github.com/mattpocock/skills`. It updates daily.

</details>

<details>
<summary><strong>Gemini CLI</strong> (manual updates)</summary>

```bash
gemini skills install https://github.com/mattpocock/skills.git --path skills/engineering
gemini skills install https://github.com/mattpocock/skills.git --path skills/productivity
```

Re-run both commands to update.

</details>

<details>
<summary><strong>Any other agent, or editable files</strong> (manual updates)</summary>

```bash
npx skills@latest add mattpocock/skills -a <agent>  # cursor, opencode, devin, windsurf, amp, pi; omit -a to choose
```

When the installer asks which skills to take, include `setup-matt-pocock-skills`. To update, run `npx skills@latest update`, and re-run `add` to pick up new skills.

</details>

### 2. Run `/setup-matt-pocock-skills`

In your agent, run it once per repo. It will:

- Ask you which issue tracker you want to use (GitHub, GitLab, local files, or anything else you describe)
- Ask you what labels you apply to tickets when you triage them (`/triage` uses labels)
- Ask you where you want to save any docs we create

### 3. Bam - you're ready to go.

## Why These Skills Exist

I built these skills as a way to fix common failure modes I see with Claude Code, Codex, and other coding agents.

### #1: The Agent Didn't Do What I Want

> "No-one knows exactly what they want"
>
> David Thomas & Andrew Hunt, [The Pragmatic Programmer](https://www.amazon.co.uk/Pragmatic-Programmer-Anniversary-Journey-Mastery/dp/B0833F1T3V)

**The Problem**. The most common failure mode in software development is misalignment. You think the dev knows what you want. Then you see what they've built - and you realize it didn't understand you at all.

This is just the same in the AI age. There is a communication gap between you and the agent. The fix for this is a **grilling session** - getting the agent to ask you detailed questions about what you're building.

**The Fix** is to use:

- [`/grill-me`](./skills/productivity/grill-me/SKILL.md) - for non-code uses
- [`/grill-with-docs`](./skills/engineering/grill-with-docs/SKILL.md) - same as [`/grill-me`](./skills/productivity/grill-me/SKILL.md), but adds more goodies (see below)

These are my most popular skills. They help you align with the agent before you get started, and think deeply about the change you're making. Use them _every_ time you want to make a change.

### #2: The Agent Is Way Too Verbose

> With a ubiquitous language, conversations among developers and expressions of the code are all derived from the same domain model.
>
> Eric Evans, [Domain-Driven-Design](https://www.amazon.co.uk/Domain-Driven-Design-Tackling-Complexity-Software/dp/0321125215)

**The Problem**: At the start of a project, devs and the people they're building the software for (the domain experts) are usually speaking different languages.

I felt the same tension with my agents. Agents are usually dropped into a project and asked to figure out the jargon as they go. So they use 20 words where 1 will do.

**The Fix** for this is a shared language. It's a document that helps agents decode the jargon used in the project.

<details>
<summary>
Example
</summary>

Here's an example [glossary](https://github.com/mattpocock/course-video-manager/blob/076a5a7a182db0fe1e62971dd7a68bcadf010f1c/CONTEXT.md) (still named `CONTEXT.md` at that pinned commit, from before the skills renamed the convention), from my `course-video-manager` repo. Which one is easier to read?

- **BEFORE**: "There's a problem when a lesson inside a section of a course is made 'real' (i.e. given a spot in the file system)"
- **AFTER**: "There's a problem with the materialization cascade"

This concision pays off session after session.

</details>

This is built into [`/grill-with-docs`](./skills/engineering/grill-with-docs/SKILL.md). It's a grilling session, but that helps you build a shared language with the AI, and document hard-to-explain decisions in ADR's.

It's hard to explain how powerful this is. It might be the single coolest technique in this repo. Try it, and see.

> [!TIP]
> A shared language has many other benefits than reducing verbosity:
>
> - **Variables, functions and files are named consistently**, using the shared language
> - As a result, the **codebase is easier to navigate** for the agent
> - The agent also **spends fewer tokens on thinking**, because it has access to a more concise language

### #3: The Code Doesn't Work

> "Always take small, deliberate steps. The rate of feedback is your speed limit. Never take on a task that’s too big."
>
> David Thomas & Andrew Hunt, [The Pragmatic Programmer](https://www.amazon.co.uk/Pragmatic-Programmer-Anniversary-Journey-Mastery/dp/B0833F1T3V)

**The Problem**: Let's say that you and the agent are aligned on what to build. What happens when the agent _still_ produces crap?

It's time to look at your feedback loops. Without feedback on how the code it produces actually runs, the agent will be flying blind.

**The Fix**: You need the usual tranche of feedback loops: static types, browser access, and automated tests.

For automated tests, a red-green-refactor loop is critical. This is where the agent writes a failing test first, then fixes the test. This helps give the agent a consistent level of feedback that results in far better code.

I've built a **[`/tdd`](./skills/engineering/tdd/SKILL.md) skill** you can slot into any project. It encourages red-green-refactor and gives the agent plenty of guidance on what makes good and bad tests.

For debugging, I've also built a **[`/diagnosing-bugs`](./skills/engineering/diagnosing-bugs/SKILL.md)** skill that wraps best debugging practices into a disciplined loop, gated phase by phase.

### #4: We Built A Ball Of Mud

> "Invest in the design of the system _every day_."
>
> Kent Beck, [Extreme Programming Explained](https://www.amazon.co.uk/Extreme-Programming-Explained-Embrace-Change/dp/0321278658)

> "The best modules are deep. They allow a lot of functionality to be accessed through a simple interface."
>
> John Ousterhout, [A Philosophy Of Software Design](https://www.amazon.co.uk/Philosophy-Software-Design-2nd/dp/173210221X)

**The Problem**: Most apps built with agents are complex and hard to change. Because agents can radically speed up coding, they also accelerate software entropy. Codebases get more complex at an unprecedented rate.

**The Fix** for this is a radical new approach to AI-powered development: caring about the design of the code.

This is built in to every layer of these skills:

- [`/to-spec`](./skills/engineering/to-spec/SKILL.md) quizzes you about which modules you're touching before creating a spec

And crucially, [`/improve-codebase-architecture`](./skills/engineering/improve-codebase-architecture/SKILL.md) surveys a codebase for deepening opportunities and hands you the candidates. I recommend running it on your codebase once every few days. It is a survey, not a rescue: on a genuinely old codebase it will find real candidates, but it won't untangle the mud for you.

### Summary

Software engineering fundamentals matter more than ever. These skills are my best effort at condensing these fundamentals into repeatable practices, to help you ship the best apps of your career. Enjoy.

## Reference

These split on one axis: who can invoke them. **User-invoked** skills are reachable only when you type them (e.g. `/grill-me`); their job is to orchestrate. **Model-invoked** skills can be invoked by you _or_ reached for automatically by the agent when the task fits; they hold the reusable discipline. A user-invoked skill may invoke model-invoked skills, but never another user-invoked one.

### Engineering

Skills I use daily for code work.

**User-invoked**

- **[ask-matt](./skills/engineering/ask-matt/SKILL.md)**: Ask which skill or flow fits your situation. A router over the user-invoked skills in this repo.
- **[grill-with-docs](./skills/engineering/grill-with-docs/SKILL.md)**: Grilling session that also builds your project's domain model, sharpening terminology and updating `GLOSSARY.md` and ADRs inline.
- **[triage](./skills/engineering/triage/SKILL.md)**: Move issues through a state machine of triage roles.
- **[improve-codebase-architecture](./skills/engineering/improve-codebase-architecture/SKILL.md)**: Scan a codebase for deepening opportunities, present them as a visual HTML report, then grill through whichever one you pick.
- **[setup-matt-pocock-skills](./skills/engineering/setup-matt-pocock-skills/SKILL.md)**: Configure this repo for the engineering skills (issue tracker, triage labels, domain doc layout). Run once per repo before using the other engineering skills.
- **[to-spec](./skills/engineering/to-spec/SKILL.md)**: Turn the current conversation into a spec and publish it to the issue tracker. No interview, just synthesizes what you've already discussed.
- **[to-tickets](./skills/engineering/to-tickets/SKILL.md)**: Break any plan, spec, or conversation into a set of tracer-bullet tickets, each declaring its blocking edges, written as text in a local file, or as native blocking links on a real tracker.
- **[implement](./skills/engineering/implement/SKILL.md)**: Build the work described by a spec or set of tickets, driving `/tdd` at pre-agreed seams and closing out with `/code-review` before committing.
- **[implement-spec](./skills/engineering/implement-spec/SKILL.md)**: Implement a whole spec on one integration branch. Works the tickets as a task graph, running implementer subagents across the ready frontier for maximum concurrency, then closes out with `/code-review`.
- **[wayfinder](./skills/engineering/wayfinder/SKILL.md)**: Plan a huge chunk of work, more than one agent session can hold, as a shared map of decision tickets on the issue tracker, and resolve them one at a time until the way to the destination is clear.
- **[retro](./skills/engineering/retro/SKILL.md)**: Suggest improvements to the coding agent's environment (navigation, automated checks, coding standards, steering files, tooling) after a session, most severe first.

**Model-invoked**

- **[prototype](./skills/engineering/prototype/SKILL.md)**: Build a throwaway prototype to answer a design question, either a single shareable HTML file for state/logic questions, or several radically different UI variations toggleable from one route.
- **[diagnosing-bugs](./skills/engineering/diagnosing-bugs/SKILL.md)**: Disciplined diagnosis loop for hard bugs and performance regressions: build a feedback loop that goes red on this bug → minimise → hypothesise → instrument → fix → regression-test.
- **[security-audit](./skills/engineering/security-audit/SKILL.md)**: Source-first security review of a codebase you are allowed to audit. Guidance by default. A full six-phase audit (coverage ledger, independent verification, report files) runs only when you explicitly ask for an audit, a pen-test, or report artifacts.
- **[research](./skills/engineering/research/SKILL.md)**: Investigate a question against high-trust primary sources and capture the findings as a cited Markdown file in the repo, run as a background agent.
- **[tdd](./skills/engineering/tdd/SKILL.md)**: Test-driven development with a red-green-refactor loop. Builds features or fixes bugs one vertical slice at a time.
- **[domain-modeling](./skills/engineering/domain-modeling/SKILL.md)**: Actively build and sharpen a project's domain model: challenge terms against the glossary, stress-test with edge-case scenarios, and update `GLOSSARY.md` and ADRs inline.
- **[codebase-design](./skills/engineering/codebase-design/SKILL.md)**: Shared discipline and vocabulary for designing deep modules: a lot of behaviour behind a small interface, placed at a clean seam, testable through that interface.
- **[code-review](./skills/engineering/code-review/SKILL.md)**: Two-axis review of the diff since a fixed point: **Standards** (does it follow the repo's coding standards, plus a Fowler smell baseline?) and **Spec** (does it faithfully implement the originating issue/spec?), run as parallel sub-agents so neither pollutes the other.
- **[pr](./skills/engineering/pr/SKILL.md)**: The shape a pull request body should take: a summary as the smallest visual that makes the change clear, before/after evidence that it works, and a merge-danger call (one-way or two-way door, plus blast radius).
- **[wizard](./skills/engineering/wizard/SKILL.md)**: Generate an interactive bash wizard that walks a human through steps only they can perform: provisioning infrastructure, setting up credentials or CI secrets, walking an unfamiliar third-party dashboard, or running a one-off migration or cutover.
- **[13c-metabolic-flux](./skills/engineering/13c-metabolic-flux/SKILL.md)**: Estimates intracellular metabolic fluxes from steady-state carbon-13 isotope-tracing measurements using validated atom maps, mfapy isotope simulation, constrained multistart
- **[aeon](./skills/engineering/aeon/SKILL.md)**: This skill should be used for time series machine learning tasks including classification, regression, clustering, forecasting, anomaly detection, segmentation, and similarity search.
- **[alphagenome](./skills/engineering/alphagenome/SKILL.md)**: Looks up precomputed AlphaGenome Atlas effects for any GRCh38 single-nucleotide variant (AVI score with Phred and 18 SHAP feature attributions, plus raw and quantile scores for
- **[analytical-method-validation](./skills/engineering/analytical-method-validation/SKILL.md)**: Plans, executes, and documents validation, verification, and transfer of analytical procedures under the governing framework - ICH Q2(R2) and Q14, USP <1220>/<1225>/<1226>, ICH
- **[anndata](./skills/engineering/anndata/SKILL.md)**: Handles annotated matrices in single-cell analysis, .h5ad and Zarr files, and integration with the scverse ecosystem.
- **[arbor](./skills/engineering/arbor/SKILL.md)**: Applies Arbor Hypothesis Tree Refinement to research artifacts with repeatable evaluators, including model training, agent harnesses, data synthesis and benchmark optimization.
- **[arboreto](./skills/engineering/arboreto/SKILL.md)**: Infers candidate gene regulatory networks from bulk or single-cell expression data using AertsLab Arboreto GRNBoost2 and GENIE3.
- **[astropy](./skills/engineering/astropy/SKILL.md)**: Core Python library for astronomy and astrophysics workflows that need Astropy APIs, including units/quantities, coordinates, FITS I/O, tables, time systems, WCS, and cosmology.
- **[autoskill](./skills/engineering/autoskill/SKILL.md)**: Analyzes user-requested Screenpipe history windows to detect repeated research workflows, match existing scientific skills, and stage new skill drafts or composition recipes for review.
- **[benchling-integration](./skills/engineering/benchling-integration/SKILL.md)**: Benchling Python SDK and REST API integration for registry entities, inventory, ELN entries, workflows, Benchling Apps, and Data Warehouse queries.
- **[bids](./skills/engineering/bids/SKILL.md)**: Organizes, queries, validates, and converts Brain Imaging Data Structure (BIDS) datasets.
- **[biopython](./skills/engineering/biopython/SKILL.md)**: Provides Biopython workflows for sequence manipulation, file parsing (FASTA/GenBank/PDB), phylogenetics, and programmatic NCBI/PubMed access (Bio.Entrez).
- **[bioservices](./skills/engineering/bioservices/SKILL.md)**: Provides a Python interface to bioinformatics services including UniProt, KEGG, ChEMBL, Reactome, QuickGO, and UniChem.
- **[bulk-rnaseq](./skills/engineering/bulk-rnaseq/SKILL.md)**: Prepares bulk RNA-seq FASTQ, Salmon, STAR or featureCounts output for gene-level differential expression.
- **[cantera](./skills/engineering/cantera/SKILL.md)**: Runs Cantera homogeneous chemical reactors and evaluates ignition delay with mechanism provenance, conservation checks, and numerical refinement.
- **[cellprofiler](./skills/engineering/cellprofiler/SKILL.md)**: Runs reproducible CellProfiler microscopy pipelines for nuclear segmentation, cell counts, and per-object fluorescence measurements.
- **[cellxgene-census](./skills/engineering/cellxgene-census/SKILL.md)**: Queries the CZ CELLxGENE Census programmatically for versioned public single-cell and spatial transcriptomics data.
- **[clinical-decision-support](./skills/engineering/clinical-decision-support/SKILL.md)**: Prepares and validates research-only clinical decision-support evaluation, evidence-profile, cohort, survival, biomarker/model, privacy, and governance artifacts.
- **[clinical-reports](./skills/engineering/clinical-reports/SKILL.md)**: Creates safety-bounded draft structures and runs local deterministic checks for clinical case, diagnostic, trial, safety, and aggregate research reports.
- **[cobrapy](./skills/engineering/cobrapy/SKILL.md)**: Performs constraint-based metabolic modeling with COBRApy, including FBA, pFBA, FVA, gene knockouts, flux sampling, growth media, production envelopes, gap filling, and SBML model
- **[consciousness-council](./skills/engineering/consciousness-council/SKILL.md)**: Structures a multi-perspective council exercise for decisions, research trade-offs, and creative challenges.
- **[dask](./skills/engineering/dask/SKILL.md)**: Scales pandas, NumPy, and custom Python research workflows beyond memory or across clusters with Dask.
- **[database-lookup](./skills/engineering/database-lookup/SKILL.md)**: Queries documented public database APIs with explicit endpoints, filters, pagination, and provenance.
- **[datalad](./skills/engineering/datalad/SKILL.md)**: Retrieves, versions, and publishes scientific datasets with DataLad and git-annex, and captures computational provenance with datalad run, rerun, and containers-run.
- **[deepchem](./skills/engineering/deepchem/SKILL.md)**: Builds molecular property prediction and MoleculeNet workflows with DeepChem, including SMILES featurization, scaffold or grouped holdouts, masked labels, graph models and
- **[deeptools](./skills/engineering/deeptools/SKILL.md)**: NGS analysis toolkit.
- **[depmap](./skills/engineering/depmap/SKILL.md)**: Retrieves and analyzes Cancer Dependency Map (DepMap) release data, including CRISPR Chronos gene effects, cancer model annotations, omics biomarkers, and PRISM drug sensitivity.
- **[dhdna-profiler](./skills/engineering/dhdna-profiler/SKILL.md)**: Applies the DHDNA framework as an exploratory rubric for reasoning and writing patterns in supplied text.
- **[diffdock](./skills/engineering/diffdock/SKILL.md)**: Predicts protein-small-molecule binding poses with DiffDock and DiffDock-L from PDB or sequence plus SMILES/SDF/MOL2.
- **[dnanexus-integration](./skills/engineering/dnanexus-integration/SKILL.md)**: Builds and operates reproducible genomics workloads on DNAnexus with the dx CLI, dxpy, apps/applets, native workflows, dxCompiler, and Nextflow.
- **[esm](./skills/engineering/esm/SKILL.md)**: Uses the Biohub esm Python SDK for ESM3 protein generation, ESMC embeddings, and ESMFold2 all-atom folding.
- **[exa-search](./skills/engineering/exa-search/SKILL.md)**: Searches scientific and technical web content with Exa and extracts page or PDF text from URLs in batches.
- **[experimental-design](./skills/engineering/experimental-design/SKILL.md)**: Designs experiments and studies BEFORE data is collected: choosing a design, randomizing, blocking, and laying out treatment combinations so results are interpretable.
- **[exploratory-data-analysis](./skills/engineering/exploratory-data-analysis/SKILL.md)**: Performs bounded, local exploratory analysis of explicitly supported scientific files.
- **[fictiv](./skills/engineering/fictiv/SKILL.md)**: Operates Fictiv (app.fictiv.com), the on-demand manufacturing platform, end to end in the user's browser.
- **[flowio](./skills/engineering/flowio/SKILL.md)**: Reads, inspects, and writes Flow Cytometry Standard (FCS) 2.0, 3.0, and 3.1 files with FlowIO.
- **[flowkit](./skills/engineering/flowkit/SKILL.md)**: Analyzes flow cytometry data with FlowKit, including spillover compensation, logicle and biexponential transforms, hierarchical gating, GatingML strategies, and supported FlowJo 10 workspaces.
- **[fluidsim](./skills/engineering/fluidsim/SKILL.md)**: Plans, configures, inspects, restarts, and analyzes bounded FluidSim computational-fluid-dynamics simulations with explicit numerical-validity and HPC safety checks.
- **[folklore-variant-evidence](./skills/engineering/folklore-variant-evidence/SKILL.md)**: Retrieves ClinGen gene-disease validity assertions for a public gene or disease, and reviews source-linked public evidence and literature for one supported GRCh38 germline nuclear
- **[generate-image](./skills/engineering/generate-image/SKILL.md)**: Generates or edits images with AI models through the OpenRouter Image API (Gemini, Seedream, Recraft, GPT-Image, Riverflow).
- **[geniml](./skills/engineering/geniml/SKILL.md)**: Supports audited local Geniml genomic-interval workflows: validate BED and universe contracts, plan Region2Vec or scEmbed runs, inspect model/tokenizer compatibility, and assess consensus universes.
- **[genomic-coordinates](./skills/engineering/genomic-coordinates/SKILL.md)**: Converts genomic intervals between coordinate conventions, normalises and compares variant representations, and detects assembly or contig-naming mismatches before they corrupt an analysis.
- **[genomic-intelligence](./skills/engineering/genomic-intelligence/SKILL.md)**: Predicts regulatory features, gene structure, and expression directly from DNA sequence using Genomic Intelligence's hosted transformer DNA language models: no local GPU or model weights.
- **[geomaster](./skills/engineering/geomaster/SKILL.md)**: Supports geospatial research workflows for remote sensing, vector and raster GIS, spatial statistics, terrain and network analysis, and machine learning for Earth observation.
- **[geopandas](./skills/engineering/geopandas/SKILL.md)**: Guidance and local audit tools for Python workflows that directly use GeoPandas GeoSeries, GeoDataFrame, spatial operations, or vector-data I/O.
- **[get-available-resources](./skills/engineering/get-available-resources/SKILL.md)**: Detects host inventory and effective CPU, memory, disk, scheduler, container, and accelerator limits when a user asks for resource-aware planning or before a clearly resource-sensitive local workload.
- **[gget](./skills/engineering/gget/SKILL.md)**: Queries 20+ bioinformatics resources through CLI/Python.
- **[glycoengineering](./skills/engineering/glycoengineering/SKILL.md)**: Analyzes and engineers protein glycosylation by scanning canonical N-glycosylation sequons, describing S/T-rich regions, checking curated glycan evidence, and preparing NetNGlyc,
- **[gtars](./skills/engineering/gtars/SKILL.md)**: Supports Gtars for local genomic interval models and set algebra, overlaps and counts, consensus and coverage, tokenization, fragment processing, and refget/BEDbase planning
- **[histolab](./skills/engineering/histolab/SKILL.md)**: Extracts and preprocesses whole-slide histology image tiles with Histolab.
- **[hugging-science](./skills/engineering/hugging-science/SKILL.md)**: Discovers and evaluates scientific datasets, models, methodology posts, and Spaces through the Hugging Science catalog.
- **[hypogenic](./skills/engineering/hypogenic/SKILL.md)**: Plans and audits use of ChicagoHAI HypoGeniC/HypoRefine for LLM-assisted hypothesis generation from labeled text datasets.
- **[hypothesis-generation](./skills/engineering/hypothesis-generation/SKILL.md)**: Formulates evidence-bounded scientific questions, candidate hypotheses, rival explanations, causal or associational claims, discriminating predictions, measurements, and
- **[imaging-data-commons](./skills/engineering/imaging-data-commons/SKILL.md)**: Queries and downloads public cancer imaging data from NCI Imaging Data Commons.
- **[infographics](./skills/engineering/infographics/SKILL.md)**: Creates and reviews infographics with Nano Banana 2 via OpenRouter.
- **[iso-standards-readiness](./skills/engineering/iso-standards-readiness/SKILL.md)**: Prepares and structurally reviews readiness evidence for ISO management-system and laboratory-competence standards - ISO 13485 medical device QMS, ISO 14971 device risk
- **[lab-hardware-cad](./skills/engineering/lab-hardware-cad/SKILL.md)**: Designs custom laboratory hardware as parametric build123d models and exports fabrication artifacts as STEP, STL, and DXF files - microfluidic chips and molds, optomechanical
- **[labarchive-integration](./skills/engineering/labarchive-integration/SKILL.md)**: Integrates with the official LabArchives ELN REST-like API and Inventory API v1.
- **[lab-liquid-handling](./skills/engineering/lab-liquid-handling/SKILL.md)**: Authors Opentrons and PyLabRobot liquid-handling protocols, and keeps a physical robot run behind the operator.
- **[lamindb](./skills/engineering/lamindb/SKILL.md)**: Manages biological datasets and models with LaminDB, including artifact registration, lineage tracking, schema validation, Bionty ontology annotation, query/search, collections,
- **[latchbio-integration](./skills/engineering/latchbio-integration/SKILL.md)**: Builds, registers, debugs, and operates bioinformatics workflows on Latch using the Python SDK, CLI, Latch Data and Registry, Nextflow, Snakemake, programmatic execution, and Latch MCP.
- **[latex-posters](./skills/engineering/latex-posters/SKILL.md)**: Creates research posters in LaTeX using beamerposter, tikzposter, or baposter.
- **[liteparse](./skills/engineering/liteparse/SKILL.md)**: Local document and PDF parsing that returns spatial text with bounding boxes.
- **[literature-review](./skills/engineering/literature-review/SKILL.md)**: Conducts systematic, scoping, and narrative literature reviews using PubMed, arXiv, bioRxiv, Semantic Scholar, and other appropriate sources.
- **[mageck](./skills/engineering/mageck/SKILL.md)**: Analyzes pooled CRISPR screen FASTQ reads and guide-count matrices with MAGeCK, validates guide libraries and contrasts, measures replicate and library QC, and produces gene hit
- **[marine-carbonate-chemistry](./skills/engineering/marine-carbonate-chemistry/SKILL.md)**: Solves seawater carbonate chemistry with PyCO2SYS for chemical oceanography, ocean acidification, and marine carbon-cycle research.
- **[markdown-mermaid-writing](./skills/engineering/markdown-mermaid-writing/SKILL.md)**: Writes scientific Markdown documentation and Mermaid diagrams for workflows, relationships, timelines, and schemas.
- **[market-research-reports](./skills/engineering/market-research-reports/SKILL.md)**: Builds evidence-traceable market research reports and assumption-driven market sizing or forecast scenarios.
- **[markitdown](./skills/engineering/markitdown/SKILL.md)**: Converts heterogeneous documents and selected URIs to Markdown with Microsoft MarkItDown for text analysis, search, and LLM/RAG ingestion.
- **[matchms](./skills/engineering/matchms/SKILL.md)**: Processes, cleans, compares, and searches tandem mass spectra with matchms.
- **[matlab](./skills/engineering/matlab/SKILL.md)**: Builds, reviews, migrates, and plans MATLAB or GNU Octave numerical workflows.
- **[medchem](./skills/engineering/medchem/SKILL.md)**: Applies medicinal chemistry filters for compound triage, using drug-likeness rules (Lipinski, Veber, CNS), structural alert catalogs (PAINS, NIBR, ChEMBL), complexity metrics, and
- **[molecular-dynamics](./skills/engineering/molecular-dynamics/SKILL.md)**: Runs and analyzes molecular dynamics simulations with OpenMM and MDAnalysis.
- **[ncats-arax](./skills/engineering/ncats-arax/SKILL.md)**: Queries the NCATS Translator ARAX production API for bounded, typed, provenance-rich one-hop and endpoint-pinned two-hop biomedical knowledge-graph relationships.
- **[networkx](./skills/engineering/networkx/SKILL.md)**: Creates, analyzes, and visualizes complex networks and graphs in Python with NetworkX.
- **[neurokit2](./skills/engineering/neurokit2/SKILL.md)**: Builds and audits reproducible NeuroKit2 research workflows for physiological time-series preprocessing, event/interval analysis, multimodal alignment, variability, and complexity.
- **[neuropixels-analysis](./skills/engineering/neuropixels-analysis/SKILL.md)**: Analyzes Neuropixels extracellular recordings end-to-end with SpikeInterface.
- **[nextflow](./skills/engineering/nextflow/SKILL.md)**: Builds, runs, and debugs Nextflow DSL2 pipelines and nf-core workflows.
- **[nmrglue](./skills/engineering/nmrglue/SKILL.md)**: Processes calibrated one-dimensional complex NMR free-induction decays with nmrglue into phased spectra, peak candidates, and signed integration regions.
- **[nwb-conversion](./skills/engineering/nwb-conversion/SKILL.md)**: Converts neuroscience acquisition data to Neurodata Without Borders files with NeuroConv and PyNWB, preserves metadata and timebases, checks evidence-based clock alignment, and
- **[omero-integration](./skills/engineering/omero-integration/SKILL.md)**: Inspects and automates microscopy data workflows against OMERO.server with omero-py, BlitzGateway, OMERO CLI, tables, annotations, ROIs, rendering, and documented OMERO.web APIs.
- **[onekgpd](./skills/engineering/onekgpd/SKILL.md)**: Queries the 1000 Genomes Project dataset (3,202 whole-genome-sequenced individuals, GRCh38) at the level of individual participants.
- **[ontology-term-resolution](./skills/engineering/ontology-term-resolution/SKILL.md)**: Resolves free-text scientific labels to ontology term IDs and validates existing CURIEs against the EBI Ontology Lookup Service (OLS4).
- **[open-notebook](./skills/engineering/open-notebook/SKILL.md)**: Organizes research with the self-hosted Open Notebook alternative to NotebookLM.
- **[openpiv](./skills/engineering/openpiv/SKILL.md)**: Performs Particle Image Velocimetry (PIV) analysis with OpenPIV.
- **[optimize-for-gpu](./skills/engineering/optimize-for-gpu/SKILL.md)**: GPU-accelerates scientific Python on NVIDIA hardware and verifies that the result is correct and faster.
- **[pacsomatic](./skills/engineering/pacsomatic/SKILL.md)**: Prepares and launches nf-core/pacsomatic matched tumor-normal PacBio HiFi genomics workflows from unaligned BAM inputs.
- **[paperclip](./skills/engineering/paperclip/SKILL.md)**: Searches and reads biomedical papers, FDA/PMDA/EMA documents, clinical trials, and protein records with the GXL Paperclip CLI and Python SDK.
- **[paperzilla](./skills/engineering/paperzilla/SKILL.md)**: Reads projects, searches project feeds, and retrieves recommendations and canonical papers in Paperzilla through the pz CLI.
- **[parallel-web](./skills/engineering/parallel-web/SKILL.md)**: Uses Parallel CLI for web search, URL extraction, deep research, structured data enrichment, entity discovery, and recurring web monitoring.
- **[pathml](./skills/engineering/pathml/SKILL.md)**: Supports local computational pathology research with PathML: slide loading and tiling, preprocessing and QC, h5path storage, multiplex quantification, spatial graphs, and bounded model inference.
- **[pathogen-variant-surveillance](./skills/engineering/pathogen-variant-surveillance/SKILL.md)**: Queries public GenSpectrum LAPIS data for pathogen genomic surveillance, current lineage nomenclature, weekly sequence proportions, reporting delays, and descriptive mutation frequencies.
- **[pathway-enrichment](./skills/engineering/pathway-enrichment/SKILL.md)**: Performs pathway and gene-set enrichment analysis on gene lists or ranked gene data and interprets the results.
- **[peer-review](./skills/engineering/peer-review/SKILL.md)**: Prepares evidence-bounded, constructive peer-review drafts and structured manuscript assessments.
- **[phylogenetics](./skills/engineering/phylogenetics/SKILL.md)**: Builds and analyzes phylogenetic trees using MAFFT multiple sequence alignment, IQ-TREE maximum likelihood with ModelFinder and branch support, and FastTree approximate inference.
- **[pi-agent](./skills/engineering/pi-agent/SKILL.md)**: Builds with and operates Pi, the minimal terminal coding harness.
- **[pkpd-modeling](./skills/engineering/pkpd-modeling/SKILL.md)**: Pharmacokinetic and pharmacodynamic modelling and simulation - non-compartmental analysis, compartmental and population PK, PK/PD and exposure-response, TMDD, PBPK orientation,
- **[polars](./skills/engineering/polars/SKILL.md)**: High-performance DataFrame library for Python ETL, analytics, and pandas migration.
- **[polars-bio](./skills/engineering/polars-bio/SKILL.md)**: Performs genomic interval overlap, nearest, merge, coverage, complement and subtraction on Polars DataFrames, and reads or writes BED, VCF, BCF, BAM, CRAM, GFF, GTF, FASTA and FASTQ data.
- **[pptx-posters](./skills/engineering/pptx-posters/SKILL.md)**: Creates and audits editable scientific posters in macro-free PowerPoint (.pptx) from author-approved local content and assets.
- **[primekg](./skills/engineering/primekg/SKILL.md)**: Queries a pinned Precision Medicine Knowledge Graph (PrimeKG) CSV for typed gene, drug, disease, and phenotype nodes, direct associations, disease context, and one- or two-hop paths.
- **[primer-design](./skills/engineering/primer-design/SKILL.md)**: Designs and audits PCR and RT-qPCR primers with Primer3, explicit thermodynamic conditions, reference-based off-target amplification searches, and traceable sequence coordinates.
- **[protocolsio-integration](./skills/engineering/protocolsio-integration/SKILL.md)**: Reads, validates, and safely exports protocols.io data with current official REST/MCP contracts, or creates non-executing mutation plans.
- **[pufferlib](./skills/engineering/pufferlib/SKILL.md)**: Version-aware guidance for PufferLib reinforcement-learning environments, vectorization, policies, PuffeRL training, evaluation, and safe checkpoint review.
- **[pybamm](./skills/engineering/pybamm/SKILL.md)**: Simulates lithium-ion battery charge, discharge and rest experiments with PyBaMM, records parameter-set provenance, checks mesh and solver sensitivity, and compares predicted
- **[pycalphad](./skills/engineering/pycalphad/SKILL.md)**: Computes finite-temperature CALPHAD equilibria, phase fractions, and phase compositions from thermodynamic TDB databases using pycalphad.
- **[pydeseq2](./skills/engineering/pydeseq2/SKILL.md)**: Performs bulk RNA-seq differential expression analysis with PyDESeq2, including count validation, formula designs, explicit contrasts, Wald tests, FDR correction,
- **[pydicom](./skills/engineering/pydicom/SKILL.md)**: Reads, inspects, writes, transforms, and preflights local DICOM datasets and pixel data.
- **[pyhealth](./skills/engineering/pyhealth/SKILL.md)**: Builds and validates PyHealth clinical machine-learning pipelines for EHR, signals, imaging, and medical codes.
- **[pymatgen](./skills/engineering/pymatgen/SKILL.md)**: Analyzes, validates, converts, and transforms materials structures and computed materials data with pymatgen.
- **[pymc](./skills/engineering/pymc/SKILL.md)**: Builds and checks Bayesian models with PyMC, including hierarchical models, NUTS MCMC, variational inference, mutable-data predictions, posterior predictive checks, diagnostics,
- **[pymoo](./skills/engineering/pymoo/SKILL.md)**: Solves and validates single-, multi-, and many-objective optimization with pymoo, including NSGA-II, NSGA-III, MOEA/D, constraints, Pareto approximations, reference directions,
- **[pyopenms](./skills/engineering/pyopenms/SKILL.md)**: Processes mass spectrometry data with pyOpenMS.
- **[pysam](./skills/engineering/pysam/SKILL.md)**: Provides Python/HTSlib workflows for genomic files.
- **[pytdc](./skills/engineering/pytdc/SKILL.md)**: Provides Therapeutics Data Commons workflows through PyTDC for registry discovery, dataset access, task-aware splits, evaluator metrics, benchmark groups, and bounded molecular-oracle scoring.
- **[pyzotero](./skills/engineering/pyzotero/SKILL.md)**: Manages Zotero reference libraries using the pyzotero Python client: retrieves, creates, updates, and deletes items, collections, tags, and attachments via the Zotero Web API v3 or local API.
- **[qiime2-amplicon](./skills/engineering/qiime2-amplicon/SKILL.md)**: Processes paired-end 16S amplicon reads into QIIME 2 ASVs and taxonomy with retained artifact provenance.
- **[qiskit](./skills/engineering/qiskit/SKILL.md)**: Builds, simulates, transpiles, and executes quantum circuits with Qiskit and IBM Quantum Runtime.
- **[qutip](./skills/engineering/qutip/SKILL.md)**: Simulate and audit closed and open quantum-system models with QuTiP 5, including deterministic, trajectory, steady-state, spectral, and phase-space workflows.
- **[rdkit](./skills/engineering/rdkit/SKILL.md)**: Cheminformatics toolkit for fine-grained molecular control.
- **[relion](./skills/engineering/relion/SKILL.md)**: Validates and executes RELION single-particle cryo-EM refinement and half-map postprocessing.
- **[relsa-severity-assessment](./skills/engineering/relsa-severity-assessment/SKILL.md)**: Supports multivariate severity assessment and exploratory endpoint-time score forecasting for laboratory animal studies using the RELSA (RELative Severity Assessment) score and
- **[research-grants](./skills/engineering/research-grants/SKILL.md)**: Supports research proposal preparation and review for NSF, NIH, DOE, DARPA, and Taiwan NSTC, including opportunity-specific requirements, aims, review criteria, budgets, broader
- **[rowan](./skills/engineering/rowan/SKILL.md)**: Rowan is a cloud-native molecular modeling and medicinal-chemistry workflow platform with a Python API.
- **[scanpy](./skills/engineering/scanpy/SKILL.md)**: Performs Scanpy single-cell RNA-seq QC, normalization, HVG selection, PCA/UMAP/t-SNE, clustering, exploratory marker ranking, pseudobulk preparation, visualization, and Seurat or
- **[scholar-evaluation](./skills/engineering/scholar-evaluation/SKILL.md)**: Provides qualitative-first, evidence-traceable developmental review of scholarly works and audit low-stakes research-assessment rubrics with optional local quality controls.
- **[scientific-brainstorming](./skills/engineering/scientific-brainstorming/SKILL.md)**: Facilitates evidence-aware scientific ideation with independent generation, structured discussion, explicit assumptions, transparent evaluation, adversarial review, and decision logs.
- **[scientific-critical-thinking](./skills/engineering/scientific-critical-thinking/SKILL.md)**: Evaluates scientific claims and evidence quality.
- **[scientific-schematics](./skills/engineering/scientific-schematics/SKILL.md)**: Generates scientific diagram drafts using Nano Banana 2 AI with smart iterative refinement.
- **[scientific-slides](./skills/engineering/scientific-slides/SKILL.md)**: Builds slide decks and presentations for research talks.
- **[scientific-visualization](./skills/engineering/scientific-visualization/SKILL.md)**: Creates and audits truthful, accessible, publication-ready scientific figures with Matplotlib, Seaborn, or Plotly.
- **[scientific-writing](./skills/engineering/scientific-writing/SKILL.md)**: Drafts, revises, and audits scientific manuscripts or reports with explicit evidence provenance, reporting-guideline coverage, authorship accountability, confidentiality controls,
- **[scikit-bio](./skills/engineering/scikit-bio/SKILL.md)**: Biological data toolkit.
- **[scikit-survival](./skills/engineering/scikit-survival/SKILL.md)**: Builds, evaluates, and audits right-censored or competing-risk survival workflows with scikit-survival, including leakage-safe preprocessing, model selection, probability
- **[scvelo](./skills/engineering/scvelo/SKILL.md)**: Performs RNA velocity analysis with scVelo from spliced and unspliced single-cell RNA counts.
- **[scvi-tools](./skills/engineering/scvi-tools/SKILL.md)**: Fits probabilistic models for single-cell omics, including scVI batch integration, scANVI annotation, totalVI CITE-seq, MultiVI RNA/ATAC integration, and posterior differential expression.
- **[simpy](./skills/engineering/simpy/SKILL.md)**: Builds, inspects, tests, and analyzes bounded process-based discrete-event simulations with SimPy.
- **[stable-baselines3](./skills/engineering/stable-baselines3/SKILL.md)**: Trains and evaluates single-agent reinforcement learning with Stable Baselines3 (PPO, SAC, DQN, TD3, DDPG, A2C), Gymnasium custom environments, vectorized rollouts, callbacks, and
- **[statistical-analysis](./skills/engineering/statistical-analysis/SKILL.md)**: Guided statistical analysis for research data - test selection, assumption checking, effect sizes, power analysis, Bayesian alternatives, and APA-formatted reporting.
- **[statistical-power](./skills/engineering/statistical-power/SKILL.md)**: Calculates sample sizes and statistical power for study planning.
- **[statsmodels](./skills/engineering/statsmodels/SKILL.md)**: Fits and diagnoses Python statistical models including OLS, GLM, discrete and mixed models, ARIMA and SARIMAX.
- **[sympy](./skills/engineering/sympy/SKILL.md)**: Performs exact symbolic mathematics with SymPy for algebra, calculus, equation solving, symbolic linear algebra, physics, and lambdify or LaTeX code generation.
- **[tamarind](./skills/engineering/tamarind/SKILL.md)**: Provides access to a collection of open-source molecular design and structural biology tools on the Tamarind Bio platform, via its REST API or MCP server: no local GPUs required.
- **[tellurium](./skills/engineering/tellurium/SKILL.md)**: Simulates biochemical kinetic models from SBML or Antimony with Tellurium and libRoadRunner, checks model units, compares deterministic parameter perturbations, and exports and
- **[tiledbvcf](./skills/engineering/tiledbvcf/SKILL.md)**: Stores and retrieves genomic variant calls with TileDB-VCF.
- **[torch-geometric](./skills/engineering/torch-geometric/SKILL.md)**: Supports PyTorch Geometric (PyG) graph neural networks: node/link/graph classification, message passing (GCN, GAT, GraphSAGE, GIN), heterogeneous graphs, neighbor sampling, and custom datasets.
- **[torchdrug](./skills/engineering/torchdrug/SKILL.md)**: Builds and troubleshoots TorchDrug 0.2.1 workflows for molecular graphs, property prediction, self-supervised pretraining, molecule generation, retrosynthesis, protein
- **[treatment-plans](./skills/engineering/treatment-plans/SKILL.md)**: Formats and structurally validates local treatment-plan documentation after clinical decisions have already been supplied and verified by authorized licensed professionals.
- **[umap-learn](./skills/engineering/umap-learn/SKILL.md)**: Applies UMAP-learn to nonlinear dimensionality reduction, 2D/3D embeddings, clustering preprocessing, supervised or semi-supervised UMAP, DensMAP, AlignedUMAP, and Parametric UMAP workflows.
- **[uncertainty-and-units](./skills/engineering/uncertainty-and-units/SKILL.md)**: Tracks physical units and propagates measurement uncertainty in scientific calculations using pint and uncertainties.
- **[usfiscaldata](./skills/engineering/usfiscaldata/SKILL.md)**: Queries the U.S. Treasury Fiscal Data REST API for federal financial data.
- **[vaex](./skills/engineering/vaex/SKILL.md)**: Processes large tabular scientific datasets with Vaex expressions, filtered views, streamed statistics, binned visualizations, and file conversion.
- **[venue-templates](./skills/engineering/venue-templates/SKILL.md)**: Prepares journal manuscripts, conference papers, research posters, and grant documents using venue-specific formatting guidance and bundled LaTeX scaffolds.
- **[waypoint-bio](./skills/engineering/waypoint-bio/SKILL.md)**: Supports work with Outpost Bio's open microbiome foundation models - the Waypoint checkpoints (Waypoint-6m, Waypoint-45m, Waypoint-170m), the Atlas pretraining corpus, the Compass
- **[zarr-python](./skills/engineering/zarr-python/SKILL.md)**: Stores and queries chunked N-D scientific arrays with Zarr-Python 3, including codecs, sharding, S3/GCS storage, and NumPy/Dask/Xarray integration.

### Productivity

General workflow tools, not code-specific.

**User-invoked**

- **[grill-me](./skills/productivity/grill-me/SKILL.md)**: Get relentlessly interviewed about a plan or design until every branch of the design tree is resolved.
- **[handoff](./skills/productivity/handoff/SKILL.md)**: Compact the current conversation into a handoff document so another agent can continue the work.
- **[teach](./skills/productivity/teach/SKILL.md)**: Teach the user a new skill or concept over multiple sessions, using the current directory as a stateful teaching workspace.
- **[to-questionnaire](./skills/productivity/to-questionnaire/SKILL.md)**: Turn a decision you can't answer alone into a Markdown questionnaire for the one person who can, filled in async, or together over a meeting. It grills you about the send (who it's for, what you need back), not the subject.
- **[wait-what](./skills/productivity/wait-what/SKILL.md)**: Fire this the moment a message doesn't land. The agent re-pitches it with the context you're missing, in plain English, using your `GLOSSARY.md` vocabulary.

**Model-invoked**

- **[grilling](./skills/productivity/grilling/SKILL.md)**: Interview the user relentlessly about a plan, decision, or idea until every branch of the design tree is resolved. The reusable interview primitive behind `grill-me`, `grill-with-docs`, `triage`, `wayfinder` and `improve-codebase-architecture`.
- **[writing-for-agents](./skills/productivity/writing-for-agents/SKILL.md)**: Writing documents for agents: skills, AGENTS.md/CLAUDE.md, and any doc an agent reaches by a pointer.
