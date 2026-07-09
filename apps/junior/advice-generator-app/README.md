# Frontend Mentor - Advice generator app solution

This is a solution to the [Advice generator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

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

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Generate a new piece of advice by clicking the dice icon

### Screenshot

![](https://snipboard.io/ZuTyz0.jpg)



### Links

[![Static Badge](https://img.shields.io/badge/Live_Site-%23fff?style=flat&logo=githubpages&logoSize=auto&labelColor=%23000)](https://rocabor.github.io/Frontend-Monorepo/junior/advice-generator-app/)

## My process

### Built with

- Semantic HTML5 markup
- [Vue 3](https://vuejs.org/) - JS library (Composition API with `<script setup>`)
- [Vite](https://vitejs.dev/) - Build tool and dev server
- [Tailwind CSS v4](https://tailwindcss.com/) - For styles
- CSS custom properties (`@theme` tokens)
- Canvas API - For the animated particle background
- Mobile-first workflow
- Monorepo managed with pnpm + Turborepo (shared `@packages/ui` component)

### What I learned

- How to fetch data from a public API (Advice Slip) with `fetch` and the Composition API, keeping loading/error states in `ref`s.
- The `<script setup>` pattern in Vue 3, including exposing child methods to the parent via `defineExpose` (`Dice3D.vue`) and calling them through a template `ref`.
- Integrating a `canvas` particle system with `requestAnimationFrame`, collision detection against the card, and an explosion effect triggered by a custom `window` event.
- Using `fetch` to a translation API (MyMemory) to show the same advice in English, Spanish and French, switching without re-fetching from the source.
- Tailwind v4's `@theme` block to define design tokens and `clamp()` for fluid responsive sizing.

```js
const fetchAdvice = async () => {
  const response = await fetch(`https://api.adviceslip.com/advice?timestamp=${new Date().getTime()}`);
  const data = await response.json();
  adviceText.value = await traducirTexto(data.slip.advice, idiomaActual.value);
}
```

### Continued development

- Improve accessibility around the canvas animation (respect `prefers-reduced-motion`).
- Cache translations to avoid hitting the MyMemory API on every language switch.
- Add unit tests for the `AdviceCont` logic (loading states, language switching).
- Refactor the particle system into a reusable composable.

### Useful resources

- [Advice Slip API](https://api.adviceslip.com/) - Free API used to fetch random advice.
- [MyMemory Translation API](https://mymemory.translated.net/doc/spec.php) - Used to translate the advice into multiple languages.
- [Vue 3 Composition API docs](https://vuejs.org/guide/extras/composition-api-faq.html) - Helped understand `<script setup>` and `defineExpose`.
- [Tailwind CSS v4 docs](https://tailwindcss.com/docs) - Reference for the `@theme` syntax and v4 setup with Vite.
- [MDN Canvas API](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API) - For the particle background and animation loop.

### AI Collaboration

- Used AI assistance (ChatGPT/Claude) for brainstorming the particle canvas animation, debugging `ref`/`defineExpose` wiring between `AdviceCont` and `Dice3D`, and refining the fluid `clamp()` sizing.
- AI was helpful for generating the initial boilerplate and explaining the translation-fetch flow; manual review was needed to keep the code aligned with Vue 3 idioms and the design tokens.

## Author

- Frontend Mentor - [@Rocabor](https://www.frontendmentor.io/profile/Rocabor)

## Acknowledgments

I'm grateful to Frontend Mentor for providing such well-designed challenges that allow me to practice real-world skills.
