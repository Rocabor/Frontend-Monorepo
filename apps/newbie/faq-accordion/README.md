# Frontend Mentor - FAQ Accordion

![Preview](./preview.jpg)

Solución al [FAQ accordion challenge](https://www.frontendmentor.io/challenges/faq-accordion-wyfFdeBwBz) de Frontend Mentor.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- ✅ Hide/Show the answer to a question when the question is clicked
- ✅ Navigate the questions and hide/show answers using keyboard navigation alone
- ✅ View the optimal layout for the interface depending on their device's screen size
- ✅ See hover and focus states for all interactive elements on the page

### Links

- [Live Demo](https://rocabor.github.io/Frontend-Monorepo/apps/newbie/faq-accordion/dist/index.html)
- [Frontend Mentor Profile](https://www.frontendmentor.io/profile/Rocabor)

## My process

### Built with

- Semantic HTML5 markup
- Vanilla JavaScript
- Tailwind CSS v4
- Vite (build tool)
- Mobile-first workflow
- CSS custom properties (variables)
- Flexbox

### What I learned

- **Semantic HTML**: Used proper structure with `<header>`, `<main>`, `<section>`, `<footer>`, and heading hierarchy (`h1`, `h2`)
- **Accessibility (a11y)**: Implemented ARIA attributes (`aria-expanded`, `aria-controls`, `aria-labelledby`, `aria-label`, `hidden`) for screen reader support
- **Keyboard navigation**: Used `<button>` elements instead of `<div>` to enable native keyboard support
- **CSS Focus states**: Added `:focus-visible` for clear visual feedback when navigating with keyboard
- **JavaScript accordion logic**: Implemented toggle functionality with state management (open/close)
- **CSS transitions**: Added visual feedback for viewed questions

Key accessibility features implemented:

```html
<button 
  type="button" 
  aria-expanded="false" 
  aria-controls="answer-1" 
  aria-labelledby="question-1">
</button>
```

```css
button:focus-visible {
  outline: 2px solid var(--color-violet600);
  outline-offset: 2px;
}
```

## Author

- Frontend Mentor - [@Rocabor](https://www.frontendmentor.io/profile/Rocabor)