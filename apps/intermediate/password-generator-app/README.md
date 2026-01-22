# Frontend Mentor - Password generator app solution

This is a solution to the [Password generator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/password-generator-app-Mr8CLycqjh). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents 📋

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge   

![Static Badge](https://img.shields.io/badge/intermediate-%23fff?style=for-the-badge&label=3&labelColor=fbbf24)
![Static Badge](https://img.shields.io/badge/html5-%23E34F26?style=for-the-badge&logo=html5&logoColor=%23ffffff)
![Static Badge](https://img.shields.io/badge/css-%23663399?style=for-the-badge&logo=css)
![Static Badge](https://img.shields.io/badge/javascript-%23F7DF1E?style=for-the-badge&logo=javascript&logoColor=%23000)

Users should be able to:

- Generate a password based on the selected inclusion options
- Copy the generated password to the computer's clipboard
- See a strength rating for their generated password
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot  

![](https://snipboard.io/t1hwQZ.jpg)
![](https://snipboard.io/GcWdv9.jpg)

### Links

- Solution URL: [Repository URL](https://github.com/Rocabor/14.-Password-generator-app?tab=readme-ov-file)
- Live Site URL: [Password generator app solution](https://rocabor.github.io/14.-Password-generator-app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- Vanilla JavaScript

### What I learned

During this project, I delved deeper into several important web development concepts:

**Accessibility and ARIA:** I implemented ARIA attributes to improve the accessibility of the strength bars component.

```html
<div class="strength-bars" role="meter" aria-valuemin="0" aria-valuemax="4">
  <div class="bar"></div>
  <div class="bar"></div>
  <div class="bar"></div>
  <div class="bar"></div>
</div>
```
**Advanced CSS:** I created a custom slider with dynamic gradients and accessible hover/focus states.
```css
.range-input {
  -webkit-appearance: none;
  background: linear-gradient(
    to right,
    var(--neon-green) 0%,
    var(--neon-green) 50%,
    var(--very-dark-grey) 50%,
    var(--very-dark-grey) 100%
  );
  background-size: var(--percentage, 50%) 100%;
  background-repeat: no-repeat;
}

.range-input::-webkit-slider-thumb {
  -webkit-appearance: none;
  background-color: var(--almost-white);
  border: 2px solid var(--almost-white);
  transition: all 0.2s ease;
}

.range-input::-webkit-slider-thumb:hover {
  background-color: var(--very-dark-grey);
  border-color: var(--neon-green);
}
```
**Password strength calculation:** I developed a scoring system that evaluates multiple factors to determine the strength of a password.
```js
function calculateStrength(password) {
  let score = 0;
  const length = password.length;

  if (length >= 12) score += 2;
  else if (length >= 8) score += 1;

  if (/[A-Z]/.test(password)) score += 1;
  if (/[a-z]/.test(password)) score += 1;
  if (/[0-9]/.test(password)) score += 1;
  if (/[^A-Za-z0-9]/.test(password)) score += 1;

  return score;
}
```

If you want more help with writing markdown, we'd recommend checking out [The Markdown Guide](https://www.markdownguide.org/) to learn more.

**Note: Delete this note and the content within this section and replace with your own learnings.**

### Continued development

- [React](https://reactjs.org/) - JS library to restructure the project into components
- [Next.js](https://nextjs.org/) - React framework for better performance and SSR
- [TypeScript](https://www.typescriptlang.org/) - For static typing and improved maintainability
- [Tailwind CSS](https://tailwindcss.com/) - For more consistent and faster styles
- [Framer Motion](https://www.framer.com/motion/) - For more advanced animations
- [Jest](https://jestjs.io/) - For unit testing of JavaScript code
- [Cypress](https://www.cypress.io/) - For end-to-end testing of the application
- [Web Workers](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API) - For background statistics processing

### Useful resources

- [MDN Web Docs](https://developer.mozilla.org/es/) - A very comprehensive resource with tutorials, explanations, and references for HTML, CSS, and JavaScript. I found it very useful for completing this challenge and will continue to use it.

- [W3Schools](https://www.w3schools.com/) - Another great resource for learning to program, and I used it to complete this challenge. I recommend it to anyone still learning this concept.

- [Web Dev](https://web.dev/) - Guidance to build modern web experiences that work on any browser.

- [Javascript Info](https://javascript.info/) - From the basics to advanced topics with simple, but detailed explanations.

- [ARIA Authoring Practices](https://www.w3.org/WAI/ARIA/apg/) Recommended ARIA Implementation Patterns.

- [CSS-Tricks](https://css-tricks.com/) - For advanced CSS techniques and responsive design.

- [Frontend Mentor Community](https://www.frontendmentor.io/community) - For helpful discussions and sharing of your work.

## ​​Author

- Frontend Mentor - 👨‍💻[@ Rocabor](https://www.frontendmentor.io/profile/Rocabor)

## Acknowledgments

I'm grateful to Frontend Mentor for providing such well-designed challenges that allow me to practice real-world skills. I'm also grateful to all the developers who share their knowledge online through tutorials, documentation, and educational resources that enable others to learn and grow in this industry.