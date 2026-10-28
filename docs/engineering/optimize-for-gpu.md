## What it does

`optimize-for-gpu` gPU-accelerates scientific Python on NVIDIA hardware and verifies that the result is correct and faster

The result has to name its inputs and the assumption that would change it. Ordinary software work stays with the house skills.

## When to reach for it

Type `/optimize-for-gpu`, or the [agent](https://www.aihero.dev/ai-coding-dictionary/agent) reaches for it when a task fits.

Use for CUDA/GPU optimization; CPU-bound NumPy, SciPy, pandas, scikit-learn, NetworkX, scikit-image, vector-search, image-processing, graph, simulation, or file-I/O workloads; CuPy, cuDF, cuML, cuGraph, cuVS, cuCIM, KvikIO, Warp, Newton, Numba-CUDA, or RAFT questions; and profiling, memory-transfer, kernel, or multi-GPU bottlenecks. Also use when large data-parallel Python code is slow and GPU acceleration is a plausible option, even if the user does not name CUDA.

## Optimize for GPU

The leading word is **Optimize for GPU**. Stay on that workflow, and write down the input that the result depends on.


## It's working if

- You can name the input and the tool the result came from.
- An assumption that would change the result is written down.

## Where it fits

This is a **reach-for-it-anytime standalone** for this scientific workflow.

When you are unsure which skill fits, [ask-matt](https://aihero.dev/skills-ask-matt) routes you.
