# Frontend Mentor - Clipboard landing page solution

This is a solution to the [Clipboard landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/clipboard-landing-page-5cc9bccd6c4c91111378ecb9). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

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

![Static Badge](https://img.shields.io/badge/JUNIOR-%23ffffff?style=flat&label=2&labelColor=%2334d399&color=%23ffffff)
![Static Badge](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![Static Badge](https://img.shields.io/badge/TailwindCSS-06B6D4?style=flat&logo=tailwindcss&logoColor=white)

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

<p align="center">
  <img src="https://snipboard.io/I0mZvj.jpg" width="200" alt="Clipboard Landing Page">
</p>




### Links

[![Static Badge](https://img.shields.io/badge/Live_Site-%23fff?style=flat&logo=githubpages&logoSize=auto&labelColor=%23000)](https://rocabor.github.io/Frontend-Monorepo/apps/junior/clipboard-landing-page/dist/index.html)

## My process

### Built with

- Semantic HTML5 markup
- Tailwind CSS v4
- Vite (build tool)
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- JavaScript (Vanilla)


### What I learned

This project was an excellent opportunity to learn and practice several key concepts:

#### 1. Tailwind CSS v4 Features
```css
@theme {
  --color-gray500: #9eabb2;
  --color-green500: #26bba4;
}

@layer components {
  .btn {
    @apply preset-7;
  }
}
```

#### 2. CSS Grid Layout with col-span
Creating complex layouts with responsive grids:
```html
<section class="md:grid md:grid-cols-6 md:gap-x-20">
  <img class="md:col-span-2" />
  <img class="md:col-span-2 md:col-start-2" />
</section>
```

#### 3. CSS Mask for Colored Icons
Using mask-image to change SVG icon colors on hover:
```css
.social-icon {
  mask-image: url('/images/icon-facebook.svg');
  mask-repeat: no-repeat;
  mask-position: center;
  background-color: var(--color-gray700);
}

.social-icon:hover {
  background-color: var(--color-green500);
}
```

#### 4. Semantic HTML & Accessibility
- Using `<main>`, `<header>`, `<nav>`, `<footer>` correctly
- Adding `aria-hidden="true"` for decorative elements
- Improving `aria-label` for better screen reader support
- Replacing `<br>` with proper `<span>` elements for better accessibility


### Continued development

Areas I want to continue focusing on:

1. **JavaScript Interactivity** - Add more interactive features beyond the year blink animation
2. **CSS Animations** - Implement smoother transitions and hover effects
3. **Performance Optimization** - Learn lazy loading techniques for images
4. **Testing** - Add automated tests for accessibility and functionality


### Useful resources

- [Tailwind CSS v4 Documentation](https://tailwindcss.com/docs) - Official documentation, essential for understanding new features.
- [MDN Web Docs - ARIA](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA) - Comprehensive guide for implementing accessible ARIA attributes.
- [CSS-Tricks: A Complete Guide to Grid](https://css-tricks.com/snippets/css/complete-guide-grid/) - Excellent reference for CSS Grid layouts.


### AI Collaboration

For this project, I worked with Claude (AI assistant) as my coding mentor:

- **How I used it:**
  - Code review and bug identification
  - Explaining CSS concepts (Grid, Flexbox, mask-image)
  - Suggesting semantic HTML and accessibility improvements
  - Refactoring redundant code

- **What worked well:**
  - Quick identification of memory leaks in JavaScript
  - Explaining complex CSS concepts in simple terms
  - Suggesting cleaner, more maintainable code structures
  - Providing accessibility recommendations

- **What didn't work as well:**
  - Sometimes suggested code that needed adjustments for Tailwind v4 syntax
  - Had to verify all suggestions against current project setup

## ​​Author

- Frontend Mentor - 👨‍💻[@ Rocabor](https://www.frontendmentor.io/profile/Rocabor)

## Acknowledgments

I'm grateful to Frontend Mentor for providing such well-designed challenges that allow me to practice real-world skills. 
