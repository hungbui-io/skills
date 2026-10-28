## What it does

`api-and-interface-design` designs the contract callers are allowed to rely on: resources, errors, compatibility, and the line between frontend and backend.

The defining constraint is that the contract is the product. A handler that works in one demo and leaks its storage shape is not an interface yet. Deep-module vocabulary (a lot of behaviour behind a small interface) lives in the house design skill. This skill decides what a caller may assume.

## When to reach for it

Type `/api-and-interface-design`, or the [agent](https://www.aihero.dev/ai-coding-dictionary/agent) reaches for it when a task fits.

| Your situation | Reach for |
| --- | --- |
| A new endpoint, type contract, or module boundary | This skill |
| Naming a deep module and the seam you test through | [codebase-design](https://aihero.dev/skills-codebase-design) |

## The contract

The leading word is **contract**. Write the resources, the errors, the compatibility promise, and what a caller must not depend on. If you cannot name those, the interface is still a function that happens to be public.

## Common questions

**How is this different from codebase-design?**

[codebase-design](https://aihero.dev/skills-codebase-design) is the shared vocabulary for deep modules: small interface, a lot of behaviour, testable at the seam. This skill designs a specific API or module contract, including REST or GraphQL shape, error cases, and compatibility.

## It's working if

- A caller can tell what is safe to depend on without reading the implementation.
- Errors and compatibility are written down beside the happy path.

## Where it fits

This is a **reach-for-it-anytime standalone** inside the vendored lifecycle, on the API branch of implementation.

Its neighbour is [codebase-design](https://aihero.dev/skills-codebase-design), because the shape of a deep module and the contract of an endpoint are easy to mix up.

When you are unsure which skill fits, [ask-matt](https://aihero.dev/skills-ask-matt) routes you.
