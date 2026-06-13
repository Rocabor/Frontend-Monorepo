# Frontend Mentor - Character counter solution

This is a solution to the [Character counter challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/character-counter-znSgeWs_i6). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

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

- Analyze the character, word, and sentence counts for their text
- Exclude/Include spaces in their character count
- Set a character limit
- Receive a warning message if their text exceeds their character limit
- See the approximate reading time of their text
- Analyze the letter density of their text
- Select their color theme
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![](https://snipboard.io/l0y17k.jpg)

![](https://snipboard.io/KEOwXY.jpg)



### Links

[![Static Badge](https://img.shields.io/badge/Live_Site-%23fff?style=flat&logo=githubpages&logoSize=auto&labelColor=%23000)](https://rocabor.github.io/Frontend-Monorepo/junior/character-counter/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [Vue 3](https://vuejs.org/) - Composition API with `<script setup>`
- [Tailwind CSS v4](https://tailwindcss.com/) - Utility-first styling
- [Vite](https://vitejs.dev/) - Build tool

### What I learned

Building this project helped me reinforce several Vue 3 concepts:

- **Computed properties** for reactive data transformations — calculating character, word, and sentence counts from user input.
- **Props** to pass data from parent to child components (Main → Stats, Main → Density).
- **Template syntax** including `v-model`, `v-if`, `v-for`, and dynamic class bindings.
- **Dark mode** implementation using Tailwind's `dark:` variant with a toggle that persists to `localStorage`.
- **Responsive design** with Tailwind breakpoints (`md:`, `xl:`) to adapt layouts across devices.

```js
const letterDensity = computed(() => {
  const cleanText = effectiveText.value.toLowerCase();
  const counts = {};
  for (const char of cleanText) {
    if (/[a-z0-9áéíóúñ]/i.test(char)) {
      counts[char] = (counts[char] || 0) + 1;
    }
  }
  const total = Object.values(counts).reduce((sum, c) => sum + c, 0);
  if (total === 0) return [];
  return Object.entries(counts)
    .map(([letter, count]) => ({
      letter: letter.toUpperCase(),
      count,
      percentage: ((count / total) * 100).toFixed(2),
    }))
    .sort((a, b) => b.count - a.count);
});
```

### Continued development

I want to keep improving my Vue 3 skills, especially:

- **Component composition** — building more complex component trees with slots and provide/inject.
- **Accessibility** — deepening my understanding of ARIA attributes and screen reader testing.
- **Performance optimization** — exploring `computed` caching behaviors and when to use `watch` vs `computed`.
- **Tailwind CSS** — mastering custom theme configuration and utility composition.

### Useful resources

- [Vue 3 Composition API Docs](https://vuejs.org/guide/extras/composition-api-faq.html) — Helped me understand the `<script setup>` syntax and `computed` reactivity.
- [Tailwind CSS v4 Docs](https://tailwindcss.com/docs) — Great reference for utility classes, dark mode, and responsive design.
- [MDN Web Docs: ARIA live regions](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Live_Regions) — Useful for making dynamic content accessible with `aria-live`.

### AI Collaboration

I used an AI assistant (Claude via opencode) during this project:

- **What for:** Debugging computed property logic, clarifying Vue concepts like props and reactivity, and generating code snippets for the Stats and Density components.
- **What worked well:** The AI helped break down problems into smaller steps and explained the reasoning behind each solution, which helped me understand the "why" rather than just getting a copy-paste answer.
- **What didn't:** Sometimes I had to rephrase questions to get the right guidance, and I still needed to test everything myself to make sure it worked.

## Author

- Frontend Mentor - [@Rocabor](https://www.frontendmentor.io/profile/Rocabor)

## Acknowledgments

I'm grateful to Frontend Mentor for providing such well-designed challenges that allow me to practice real-world skills.
