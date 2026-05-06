# Frontend Mentor - Interactive pricing component solution

This is a solution to the [Interactive pricing component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-pricing-component-t0m8PIyY8). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

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
- Use the slider and toggle to see prices for different page view numbers

### Screenshot

![](https://snipboard.io/rI5Nbz.jpg)

### Links

[![Static Badge](https://img.shields.io/badge/Live_Site-%23fff?style=flat&logo=githubpages&logoSize=auto&labelColor=%23000)](https://rocabor.github.io/Frontend-Monorepo/junior/interactive-pricing-component/)

## My process

### Built with

- Vue 3 with Composition API
- Vite as build tool
- Tailwind CSS v4 for styling
- CSS custom properties for design tokens
- Flexbox and CSS Grid for responsive layouts
- Mobile-first workflow

### What I learned

Learned to implement custom pricing logic with Vue's `computed` properties to handle dynamic price calculations based on slider position and billing type toggle. Also practiced creating responsive layouts with Tailwind CSS v4 and managing state for interactive UI components.

```js
const finalPrice = computed(() => {
  let price = currentPricing.value.price;
  if (isYearlyBilling.value) price = price * 0.75;
  return price.toFixed(2);
});
```

Key takeaways: Vue 3 Composition API provides clean state management, computed properties are perfect for derived values, and Tailwind v4's `@theme` directive makes design tokens easy to maintain.

### Continued development

Want to deepen knowledge in Vue 3 reactivity system and learn more about accessibility best practices. Also interested in exploring state management patterns with Pinia for more complex pricing logic scenarios.

### Useful resources

- [Vue 3 Composition API Docs](https://vuejs.org/guide/introduction.html) - Official documentation for Vue 3
- [Tailwind CSS v4 Docs](https://tailwindcss.com/docs/upgrade-to-v4) - New features and migration guide
- [MDN: Accessible Rich Internet Applications](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA) - ARIA roles and attributes reference

### AI Collaboration

Used opencode (AI assistant) throughout the development process:

- **Debugging**: Helped identify and fix issues like missing workspace dependencies and accessibility gaps
- **Code review**: Provided suggestions for semantic HTML improvements and ARIA attributes
- **Learning**: Explained Vue 3 concepts like computed properties and reactivity

This collaboration helped improve code quality and accessibility while accelerating the development workflow.

## Author

- Frontend Mentor - [@Rocabor](https://www.frontendmentor.io/profile/Rocabor)

## Acknowledgments

I'm grateful to Frontend Mentor for providing such well-designed challenges that allow me to practice real-world skills.