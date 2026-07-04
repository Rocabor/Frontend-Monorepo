# Frontend Mentor - Launch countdown timer solution

This is a solution to the [Launch countdown timer challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/launch-countdown-timer-N0XkGfyz-). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
  - [AI Collaboration](#ai-collaboration)
- [Author](#author)
- [Acknowledgments](#acknowledgments)



## Overview

### The challenge

Users should be able to:

- See hover states for all interactive elements on the page
- See a live countdown timer that ticks down every second (start the count at 14 days)
- **Bonus**: When a number changes, make the card flip from the middle

### Screenshot

![](https://snipboard.io/x5LCuy.jpg)



### Links

[![Static Badge](https://img.shields.io/badge/Live_Site-%23fff?style=flat&logo=githubpages&logoSize=auto&labelColor=%23000)](https://rocabor.github.io/Frontend-Monorepo/intermediate/launch-countdown-timer/)

## My process

### Built with

- Semantic HTML5 markup
- CSS Flexbox
- CSS custom properties and `clamp()` for fluid typography
- CSS 3D transforms and `@keyframes` animations
- Mobile-first workflow
- [Vue 3](https://vuejs.org/) — Composition API with `<script setup>`
- [Vite](https://vitejs.dev/) — Build tool
- Accessible ARIA patterns (`aria-expanded`, `aria-controls`, `aria-live`, `role="timer"`)



### What I learned

This project reinforced several important concepts:

**Reactive state management with Vue 3 Composables**
Creating the `useCountdown` composable taught me how to encapsulate timer logic in a reusable, reactive way. Passing a `ref` with `{ days, hours, minutes, seconds }` and using `watch` with `immediate: true` allowed the countdown to react instantly to configuration changes without polling.

**The `Math.ceil` vs `Math.floor` subtlety in timers**
I discovered that using `Math.floor` to calculate the remaining seconds caused a 1-second skip because the few milliseconds of execution time made `floor((target - now) / 1000)` round down immediately. Switching to `Math.ceil` at the diff level eliminated the visual jump.

**CSS flip-card animation with 3D transforms**
Building the flip animation required coordinating `rotateX`, `transform-origin`, `backface-visibility`, and staggered `@keyframes` — the top half folds down, then the bottom half unfolds, all within 300ms. Managing the `z-index` layers (static faces, flipping flaps, divider, decorative circles) was key to avoiding visual glitches.

**Accessible configuration panel**
Adding a hamburger button with `aria-expanded`, `aria-controls`, `aria-label`, `role="timer"`, and `aria-live="polite"` taught me how to make dynamic UI elements usable by screen readers.

**Preventing premature timer resets**
Using a `tempConfig` buffer that only syncs to the active `config` on "Apply" prevented the countdown from resetting on every keystroke inside the input fields.



### Continued development

I'd like to explore:
- **Web Workers** for the countdown interval to prevent background tab throttling
- **LocalStorage persistence** so the countdown survives page refreshes
- **Unit tests** for the `useCountdown` composable edge cases (very large durations, zero values, rapid re-configuration)
- A **dark/light theme toggle** using CSS custom properties
- Using the **VueUse** `useIntervalFn` composable as a more robust alternative to raw `setInterval`



### Useful resources

- [Vue 3 Composition API Docs](https://vuejs.org/guide/extras/composition-api-faq) — The official guide for `ref`, `watch`, and composable patterns.
- [CSS `clamp()`](https://developer.mozilla.org/en-US/docs/Web/CSS/clamp) — Fluid typography and spacing without media queries.
- [MDN `aria-expanded`](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-expanded) — Reference for accessible disclosure patterns.
- [CSS-Tricks: 3D Card Flip](https://css-tricks.com/useful-uses-of-css-3d-transforms/) — Practical examples of `rotateX`, `backface-visibility`, and `perspective`.



### AI Collaboration

I used **Claude (opencode.ai)** as a coding assistant throughout this project.

**How I used it:**
- **Debugging the 1-second timer jump** — Claude helped identify that `Math.floor` on the millisecond diff was losing the first tick, and proposed `Math.ceil` as the fix.
- **Accessibility audit** — Claude reviewed the template for ARIA compliance and suggested `role="timer"`, `aria-live="polite"`, and `aria-hidden` on decorative elements.
- **Code simplification** — After implementation, Claude identified redundant patterns (duplicated `padStart` calls, repeated default objects, CSS selector duplication) and helped consolidate them.
- **CSS flip-card animation** — Claude helped structure the staggered `@keyframes` animation with correct `z-index` layering.

**What worked well:** The conversational debugging — being able to describe the visual bug ("shows 10 then jumps to 8") and have Claude trace through the execution to find the `Math.floor` root cause was very efficient.

**What I'd do differently:** For larger projects, I'd want to establish coding conventions upfront (naming, file structure) so the AI-generated code is more consistent from the start.



## Author

- Frontend Mentor - [@Rocabor](https://www.frontendmentor.io/profile/Rocabor)

## Acknowledgments

I'm grateful to Frontend Mentor for providing such well-designed challenges that allow me to practice real-world skills.


