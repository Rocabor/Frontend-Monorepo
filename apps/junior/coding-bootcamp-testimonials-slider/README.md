# Frontend Mentor - Coding bootcamp testimonials slider solution

This is a solution to the [Coding bootcamp testimonials slider challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/coding-bootcamp-testimonials-slider-4FNyLA8JL). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

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

- View the optimal layout for the component depending on their device's screen size
- Navigate the slider using either their mouse/trackpad or keyboard

### Screenshot

![](https://snipboard.io/pqQKLg.jpg)



### Links

[![Static Badge](https://img.shields.io/badge/Live_Site-%23fff?style=flat&logo=githubpages&logoSize=auto&labelColor=%23000)](https://rocabor.github.io/Frontend-Monorepo/junior/coding-bootcamp-testimonials-slider/)

## My process

### Built with

- Vue.js 3 (Composition API)
- Vite
- Tailwind CSS
- CSS Custom Properties
- Mobile-first workflow
- Semantic HTML5
- WCAG Accessibility

### What I learned

I learned how to implement a testimonials slider with Vue.js 3 using the Composition API. I implemented keyboard navigation and improved accessibility using ARIA attributes like `aria-label`, `aria-live`, and `role="region"` to make the component accessible for screen reader users.

```js
const handleKeydown = (e) => {
  if (e.key === 'ArrowLeft') prev();
  if (e.key === 'ArrowRight') next();
};
```

### Continued development

I want to focus more on:
- Smooth animations and transitions between testimonials
- Touch/swipe support for mobile devices
- Accessibility testing with automated tools

### Useful resources

- [Vue.js Documentation](https://vuejs.org/guide/) - Official Vue 3 docs
- [MDN Web Docs - ARIA](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA) - Guide on accessible rich internet applications
- [WCAG Guidelines](https://www.w3.org/WAI/WCAG21/quickref/) - Quick reference for WCAG 2.1

### AI Collaboration

I used OpenCode as a development assistant during this project.

- **Debugging**: Identified and fixed bugs like duplicate `alt` values on images
- **Accessibility**: Implemented WCAG best practices including keyboard navigation, aria-labels, and live regions
- **Code Review**: Received suggestions to improve HTML semantic structure
- **What worked well**: Collaboration was helpful for understanding accessibility concepts and applying specific fixes
- **What didn't work**: I preferred making fixes manually to learn, using suggestions as guidance

## Author

- Frontend Mentor - [@Rocabor](https://www.frontendmentor.io/profile/Rocabor)

## Acknowledgments

I'm grateful to Frontend Mentor for providing such well-designed challenges that allow me to practice real-world skills.
