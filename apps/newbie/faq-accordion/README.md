# Frontend Mentor - FAQ accordion solution

This is a solution to the [FAQ accordion challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/faq-accordion-wyfFdeBwBz). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

![Static Badge](https://img.shields.io/badge/NEWBIE-%23ffffff?style=flat&label=1&labelColor=%2306B6D4&color=%23ffffff)
![Static Badge](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![Static Badge](https://img.shields.io/badge/TailwindCSS-06B6D4?style=flat&logo=tailwindcss&logoColor=white)
![Static Badge](https://img.shields.io/badge/Javascript-%23F7DF1E?style=flat&logo=javascript&logoColor=black)

Users should be able to:

- Hide/Show the answer to a question when the question is clicked
- Navigate the questions and hide/show answers using keyboard navigation alone
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![](https://snipboard.io/dF3ZEu.jpg)

### Links

[![Static Badge](https://img.shields.io/badge/Live_Site-%23fff?style=flat&logo=githubpages&logoSize=auto&labelColor=%23000)](https://rocabor.github.io/Frontend-Monorepo/apps/newbie/faq-accordion/dist/index.html)

## My process

### Built with

- Semantic HTML5 markup
- Vanilla JavaScript
- Tailwind CSS v4
- Vite (build tool)
- CSS custom properties
- Flexbox
- Mobile-first workflow

### What I learned

Built a fully accessible FAQ accordion component:

- **Semantic HTML**: Used proper structure with `<header>`, `<main>`, `<section>`, `<footer>`, and heading hierarchy (`h1`, `h2`)
- **Accessibility (a11y)**: Implemented ARIA attributes (`aria-expanded`, `aria-controls`, `aria-labelledby`, `aria-label`, `hidden`) for screen reader support
- **Keyboard navigation**: Used `<button>` elements instead of `<div>` to enable native keyboard support with Enter/Space activation
- **Focus states**: Added `:focus-visible` for clear visual feedback when navigating with keyboard

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

### Continued development

Future improvements to consider:
- Add animations for smooth expand/collapse transitions
- Implement "mark all as read" feature
- Add ARIA live regions for announcing state changes to screen readers

## Author

- Frontend Mentor - [@Rocabor](https://www.frontendmentor.io/profile/Rocabor)


## Acknowledgments

I'm grateful to Frontend Mentor for providing such well-designed challenges that allow me to practice real-world skills. 