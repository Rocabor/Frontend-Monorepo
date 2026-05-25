# Frontend Mentor - Loopstudios landing page solution

This is a solution to the [Loopstudios landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/loopstudios-landing-page-N88J5Onjw). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

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

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

![](https://snipboard.io/PxSZDn.jpg)



### Links

[![Static Badge](https://img.shields.io/badge/Live_Site-%23fff?style=flat&logo=githubpages&logoSize=auto&labelColor=%23000)](https://rocabor.github.io/Frontend-Monorepo/junior/loopstudios-landing-page/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [Vue 3](https://vuejs.org/) - Composition API with `<script setup>`
- [Vite 6](https://vitejs.dev/) - Build tool with dynamic base path for monorepo
- [Tailwind CSS v4](https://tailwindcss.com/) - Utility-first CSS with `@theme` directives
- [pnpm](https://pnpm.io/) - Package manager with workspaces
- [TurboRepo](https://turbo.build/repo) - Monorepo orchestration

### What I learned

Working on this project reinforced several concepts and introduced new ones:

**Monorepo asset resolution with Vite:** The project lives in a monorepo with a dynamic `base` path (`/Frontend-Monorepo/junior/loopstudios-landing-page/`). I learned that Vite does not transform dynamic `:src` bindings in Vue templates — static strings like `:src="'/images/foo.jpg'"` stay as-is, so I had to use `import.meta.env.BASE_URL` to construct correct paths at runtime.

**Tailwind v4 changes:** The gradient utility was renamed from `bg-gradient-to-*` to `bg-linear-to-*`. When the utility didn't work as expected, I learned to fall back to arbitrary values with `bg-[...]` for reliable CSS output.

**Semantic HTML & accessibility patterns:** Implementing proper landmarks (`<nav aria-label>`, `<main>`, `<section aria-labelledby>`), a skip-to-content link for keyboard users, and managing `aria-expanded` / `aria-controls` for the mobile menu toggle.

**Image optimization for responsive design:** Creation card images come in two aspect ratios — mobile (654×240, wide) and desktop (256×450, tall). Using `<picture>` with `<source>` media queries at the correct breakpoints (1440px for 4-column grid) ensures the right image ratio for the current layout.

**Vue transitions:** Added a slide-down animation for the mobile menu using `<transition>` with enter/leave classes, avoiding JavaScript animation libraries.

### Continued development

- Deepen understanding of Vue's Composition API and component extraction (refactor navbar, cards, footer into separate `.vue` files)
- Improve Tailwind v4 proficiency with custom `@utility` and `@theme` patterns
- Practice more advanced responsive image patterns with `srcset` and `sizes` attributes
- Explore Vue Router for multi-page projects
- Add end-to-end testing with Playwright or Cypress

### Useful resources

- [Vite public path docs](https://vitejs.dev/guide/build.html#public-base-path) — Understanding how `base` affects asset resolution in dev and production
- [Tailwind CSS v4 docs](https://tailwindcss.com/docs) — Reference for the updated utility syntax in v4
- [Vue Transitions](https://vuejs.org/guide/built-ins/transition.html) — Official guide for enter/leave animations
- [ARIA Authoring Practices Guide](https://www.w3.org/WAI/ARIA/apg/patterns/menubutton/) — Patterns for accessible menu buttons and navigation

### AI Collaboration

I used **opencode** (VS Code agent mode) throughout this project as a pair-programming assistant.

- **Debugging:** Diagnosed image loading issues caused by Vite's dynamic base path in a monorepo setup
- **Code generation:** Helped scaffold the Vue component structure, data-driven v-for rendering, and CSS utilities
- **Accessibility review:** Analyzed the component for semantic HTML and WCAG compliance, then suggested targeted fixes (skip link, aria attributes, focus management)
- **Refactoring:** Guided the transition from repetitive static markup to data-driven patterns

The collaboration worked well — opencode handled boilerplate and debugging direction while I made design decisions and validated output. The main challenge was ensuring the AI stayed consistent with the existing code style and Tailwind v4 conventions.

## Author

- Frontend Mentor - [@Rocabor](https://www.frontendmentor.io/profile/Rocabor)

## Acknowledgments

I'm grateful to Frontend Mentor for providing such well-designed challenges that allow me to practice real-world skills.