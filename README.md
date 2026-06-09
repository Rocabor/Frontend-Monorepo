# Frontend Mentor - Body Mass Index Calculator solution

This is a solution to the [Body Mass Index Calculator challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/body-mass-index-calculator-brrBkfSz1T). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

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

- Select whether they want to use metric or imperial units
- Enter their height and weight
- See their BMI result, with their weight classification and healthy weight range
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![](https://snipboard.io/iwgnXS.jpg)



### Links

[![Static Badge](https://img.shields.io/badge/Live_Site-%23fff?style=flat&logo=githubpages&logoSize=auto&labelColor=%23000)](https://rocabor.github.io/Frontend-Monorepo/junior/bmi-calculator/)

## My process

### Built with

- Semantic HTML5 markup
- Vue 3 (Composition API with `<script setup>`)
- Tailwind CSS v4
- Vite
- CSS Grid & Flexbox
- Mobile-first workflow
- pnpm monorepo with Turborepo

### What I learned

Working on this project reinforced several key concepts:

- **Tailwind CSS v4** — Using the new `@import 'tailwindcss'` syntax without a config file, defining custom theme variables (`@theme`), and creating utility text presets for consistent typography.
- **Vue 3 Composition API** — Using `ref`, `reactive`, `computed`, and `watch` to manage form state and derive BMI calculations reactively without class-based components.
- **CSS Grid for complex layouts** — Building the Limitations section with explicit grid rows and auto-height cards using `grid-rows-[...]` and `flex grow` on inner elements for consistent card sizing.
- **Accessibility patterns** — Implementing `aria-labelledby` with `sr-only` headings for sections without visible titles, proper `<main>` landmark, radio grouping with `name` attribute, and decorative images with `alt=""`.
- **Monorepo workflow** — Using pnpm workspaces with Turborepo for caching and orchestrating builds across multiple apps.

### Continued development

I want to keep improving my skills in:

- **CSS Grid** — Building more complex two-dimensional layouts with explicit row/column tracks.
- **Accessibility** — Deepening my understanding of ARIA roles and advanced screen reader testing patterns.
- **Vue** — Exploring more advanced patterns like composables, slots, and provide/inject.
- **Tailwind CSS** — Customizing themes further and learning about the new v4 plugin API.

### Useful resources

- [Tailwind CSS v4 Documentation](https://tailwindcss.com/docs) — Essential reference for the new v4 syntax, theme configuration, and utility classes.
- [Vue 3 Composition API Docs](https://vuejs.org/guide/extras/composition-api-faq) — Helped solidify the reactive patterns used in the form logic.
- [MDN ARIA Guide](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA) — Reliable reference for accessible markup patterns.
- [Frontend Mentor Community](https://www.frontendmentor.io/community) — Great place to see how others approached the same challenge.

### AI Collaboration

I used **opencode** (a Claude-based CLI agent) throughout this project:

- **Component scaffolding** — Generated initial Vue component templates and Tailwind layout structure.
- **Accessibility audit** — Identified and fixed issues like missing `lang`, missing `<main>` landmark, decorative images with non-empty alt text, ungrouped radio inputs, and missing `min` attributes.
- **Refactoring** — Helped restructure components for better semantics and accessibility (e.g., converting Results wrapper from `<div>` to `<section>` with `aria-labelledby`).
- **Dependency management** — Resolved peer dependency conflicts in the monorepo and ran safe version updates.

The AI was especially helpful for catching accessibility issues and suggesting semantic HTML patterns I hadn't considered. I learned the most when I reviewed each suggestion and understood the reasoning before applying it.

## Author

- Frontend Mentor - [@Rocabor](https://www.frontendmentor.io/profile/Rocabor)

## Acknowledgments

I'm grateful to Frontend Mentor for providing such well-designed challenges that allow me to practice real-world skills.
