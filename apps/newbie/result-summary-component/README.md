# Frontend Mentor - Results summary component solution

This is a solution to the [Results summary component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/results-summary-component-CE_K6s0maV). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

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
- [Author](#author)
- [Acknowledgments](#acknowledgments)


## Overview

### The challenge

![Static Badge](https://img.shields.io/badge/NEWBIE-%23ffffff?style=for-the-badge&label=1&labelColor=%2306B6D4&color=%23ffffff)
![Static Badge](https://img.shields.io/badge/html5-%23E34F26?style=for-the-badge&logo=html5&logoColor=%23ffffff)
![Static Badge](https://img.shields.io/badge/tailwind%20css-%2306B6D4?style=for-the-badge&logo=tailwindcss&logoColor=%23fff)
![Static Badge](https://img.shields.io/badge/javascript-%23F7DF1E?style=for-the-badge&logo=javascript&logoColor=%23000)

Users should be able to:

- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- **Bonus**: Use the local JSON data to dynamically populate the content

### Screenshot

![](https://snipboard.io/6ZNc3C.jpg)


### Links

 [![Static Badge](https://img.shields.io/badge/Github-%23fff?style=for-the-badge&logo=github&logoColor=%23fff&labelColor=%23000)](https://github.com/Rocabor/Results-Summary-Component)

[![Static Badge](https://img.shields.io/badge/Live%20Site%20URL-%23303b59?style=for-the-badge&logo=vitepress&logoColor=%23fff&labelColor=%23303b59)
](https://rocabor.github.io/Results-Summary-Component/)



## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- Tailwind CSS for styling


### What I learned

In this project, I learned how to create a fully responsive component with dynamic content loading:

**Accessibility improvements:**

```html
<div role="status" aria-live="polite" aria-label="Score: 76 out of 100">
  <p class="text-preset-2 md:text-preset-1">
    <span id="average-score" aria-hidden="true">76</span>
    <span id="average-score-sr" class="sr-only">76</span>
  </p>
</div>
```
**Responsive design with Tailwind:**

```html
<section class="flex flex-col w-full gap-6 bg-white shadow-shadow md:flex-row md:w-[686px] md:items-center md:rounded-4xl md:gap-0 xl:w-[738px]">
```

**Dynamic content loading with JavaScript:**

```js
async function loadData() {
  try {
    const response = await fetch('./data.json');
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    return await response.json();
  } catch (error) {
    console.error('Error loading data:', error);
    return null;
  }
}
```

**Dynamic category generation::**

```js
data.forEach(item => {
  const categoryElement = document.createElement('div');
  categoryElement.className = `flex items-center justify-center h-[56px] rounded-xl ${style.bgColor}`;
  categoryElement.setAttribute('role', 'listitem');  
});
```

### Continued development

- Areas I want to continue focusing on in future projects:

    - Advanced accessibility patterns for complex components
    - Performance optimization for JavaScript-heavy applications
    - Advanced Tailwind CSS techniques and custom configurations
    - State management for more complex interactive components
    - Testing methodologies for dynamic content


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
