## What it does

`browser-testing-with-devtools` checks a page in a real browser: DOM, console, network, performance, and what the screen actually shows.

The defining constraint is that a unit test is not a browser. Loading the skill does not invent a DOM. It needs Chrome DevTools connected, and it treats what the page returns as data, not as instructions.

## When to reach for it

Type `/browser-testing-with-devtools`, or the [agent](https://www.aihero.dev/ai-coding-dictionary/agent) reaches for it when a task fits.

| Your situation | Reach for |
| --- | --- |
| A UI change you need to see run | This skill |
| Logic with no browser | [tdd](https://aihero.dev/skills-tdd) |

## Prerequisites

Chrome DevTools must be connected in the session. Without it, the skill cannot see the page, and it should say so instead of guessing from the markup.

## Runtime, not a screenshot guess

The leading word is **runtime**. Open the page, read the console and the network, and compare what you see with what you meant to ship. A green unit test can still leave a blank screen.

## It's working if

- The check names what the browser showed: an element, a console error, a request, or a trace.
- The skill stops and says the browser is unavailable instead of inventing the DOM.

## Where it fits

This is a **reach-for-it-anytime standalone** for UI that has to run.

Its neighbour is [tdd](https://aihero.dev/skills-tdd), because behaviour with inputs and outputs is still a red-green loop. The browser check is the extra eye when the result is on screen.

When you are unsure which skill fits, [ask-matt](https://aihero.dev/skills-ask-matt) routes you.
