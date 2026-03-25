# Frontend Mentor - NFT preview card component solution

This is a solution to the [NFT preview card component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/nft-preview-card-component-SbdUL_w0U). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

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

![Static Badge](https://img.shields.io/badge/NEWBIE-%23ffffff?style=flat&label=1&labelColor=%2306B6D4&color=%23ffffff)
![Static Badge](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![Static Badge](https://img.shields.io/badge/TailwindCSS-06B6D4?style=flat&logo=tailwindcss&logoColor=white)

Users should be able to:

- View the optimal layout depending on their device's screen size
- See hover states for interactive elements

### Screenshot

![](https://snipboard.io/tSRZUA.jpg)



### Links

[![Static Badge](https://img.shields.io/badge/Live_Site-%23fff?style=flat&logo=githubpages&logoSize=auto&labelColor=%23000)](https://rocabor.github.io/Frontend-Monorepo/apps/newbie/nft-preview-card-component/dist/index.html)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow



### What I learned

This project was a great opportunity to practice Tailwind CSS with a custom configuration. Instead of using a traditional `tailwind.config.js`, I leveraged the `@theme` layer to define custom colors and utilities, keeping the setup simple and self-contained.

Key learnings:

- **Tailwind CSS with `@import`**: Using `@import 'tailwindcss'` in the main CSS file allows for a streamlined integration without additional build tools.
- **Custom theme extension**: Defining colors like `--color-cyan-400`, `--color-blue-500`, etc., directly in the `@theme` layer made the color palette consistent with the design system.
- **Custom utilities with `@utility`**: Creating reusable typography utilities (`preset-1`, `preset-2`, etc.) helped maintain design consistency across the component.
- **Interactive overlay effect**: The card image overlay effect uses `:active` on the figure element to show a cyan overlay and the view icon, providing visual feedback on click.

Here's how the overlay effect was implemented:

```css
.card-img:active .card-overlay {
  background-color: var(--color-cyan-400);
  opacity: 0.4;
}
.card-img:active .icon-view {
  background-image: url('/images/icon-view.svg');
  background-repeat: no-repeat;
  background-position: center;
}
```

### Continued development

In future projects, I want to explore:

- **Implementing proper `:hover` states alongside `:active`** — Currently, the interactive overlay only responds to `:active` events. Adding `:hover` states would provide better desktop interactivity and a more polished user experience across devices.

- **Using Tailwind's `@apply` directive more extensively** — While custom utilities (`preset-1`, `preset-2`, etc.) helped maintain consistency, leveraging `@apply` within component layers could further reduce repetitive utility classes and improve maintainability.

- **Adding responsive typography adjustments** — The current typography uses fixed font sizes (16px, 18px, 22px). Implementing responsive typography with `clamp()` or viewport-based units would ensure optimal readability across different screen sizes.

- **Enhancing accessibility** — Adding proper `:focus` states and ensuring interactive elements are fully keyboard-navigable would make the component more inclusive.

### Useful resources


The **Useful resources** section now includes:
- [Tailwind CSS v4 Docs](https://tailwindcss.com/docs/installation/using-vite) - Because you used the latest version features




## ​​Author

- Frontend Mentor - 👨‍💻[@ Rocabor](https://www.frontendmentor.io/profile/Rocabor)

## Acknowledgments

I'm grateful to Frontend Mentor for providing such well-designed challenges that allow me to practice real-world skills. 
