# Frontend Mentor - Product list with cart solution

This is a solution to the [Product list with cart challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/product-list-with-cart-5MmqLVAp_d). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

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

- Add items to the cart and remove them
- Increase/decrease the number of items in the cart
- See an order confirmation modal when they click "Confirm Order"
- Reset their selections when they click "Start New Order"
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![](https://snipboard.io/sDjL2G.jpg)



### Links

[![Static Badge](https://img.shields.io/badge/Live_Site-%23fff?style=flat&logo=githubpages&logoSize=auto&labelColor=%23000)](https://rocabor.github.io/Frontend-Monorepo/junior/product-list-with-cart/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties & Native `color-mix()` function
- Mobile-first workflow
- [Vue 3](https://vuejs.org/) - Composition API (`<script setup>`)
- [Tailwind CSS v4.0](https://tailwindcss.com/) - Next-generation CSS framework
- [Vite](https://vite.dev/) - Next-generation frontend tooling



### What I learned

I learned several key concepts while building this project:

1. **State Management in Vue**: How to use `ref()` for reactive state, `computed()` for derived values, and `watch()` for side effects when state changes.

2. **Component Communication**: Using props to pass data between components and custom events (`@emit`) for parent-child communication.

3. **Dynamic Image Loading**: Using Vite's `new URL()` function to dynamically resolve image paths at runtime, which is essential for handling assets in modern build tools.

4. **Responsive Design with CSS Grid**: Creating complex layouts that adapt to different screen sizes using CSS Grid's `repeat()` function and breakpoints.

5. **Accessibility**: Implementing proper ARIA attributes, semantic HTML elements, and focus management for better user experience.

6. **Modal Implementation**: Building a modal component with proper focus trapping and scroll locking using Headless UI.

7. **Event Handling**: Managing complex user interactions like adding/removing items from cart, updating quantities, and form validation.

### Continued development

I plan to continue developing the following areas:

1. **Advanced Vue.js Patterns**: I'm still learning about composition API patterns, custom hooks, and more advanced state management solutions like Pinia.

2. **Performance Optimization**: I'll focus on optimizing bundle size, implementing code splitting, and using performance profiling tools to make the application faster.

3. **Testing**: I want to learn how to write unit tests for Vue components using tools like Vitest and component testing with Testing Library.

4. **TypeScript**: While I can work with JavaScript, I plan to learn TypeScript to add type safety to my Vue applications.

5. **Backend Integration**: I'll work on connecting the frontend to a real API and handling server-side state management.

6. **Advanced CSS**: I want to master CSS custom properties, CSS-in-JS solutions, and more advanced Tailwind CSS features.

7. **Animation and Transitions**: I'll focus on adding smooth animations and transitions to improve the user experience.

8. **Internationalization**: Learning how to make applications support multiple languages and locales.

### Useful resources

- Vite Guide on Static Asset Handling - This documentation was critical to understanding why production builds on platforms like GitHub Pages can experience broken image paths and how to build deterministic URLs programmatically.

- MDN Web Docs: color-mix() - A wonderful reference for applying real-time, mathematical color adjustments directly via modern CSS instead of manually calculating static color palette variants.



### AI Collaboration

The AI assistant was particularly helpful in:

- Refactoring & State Design: Planning out a clean, lightweight state-lifting pattern in App.vue to share reactive shopping cart states seamlessly across components.
- Modernizing CSS Rules: Suggesting performance optimizations to substitute heavy, layered CSS linear-gradient hover overlays in Tailwind with native inline utility functions.
- Accessibility (A11y) Auditing: Identifying semantic improvements such as changing raw list containers to proper / structures, integrating aria-live="polite" for state tracking updates, and applying descriptive aria-label attributes for screen readers.


## Author

- Frontend Mentor - [@Rocabor](https://www.frontendmentor.io/profile/Rocabor)

## Acknowledgments

I'm grateful to Frontend Mentor for providing such well-designed challenges that allow me to practice real-world skills.
