# Frontend Mentor - Fylo dark theme landing page solution

This is a solution to the [Fylo dark theme landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/fylo-dark-theme-landing-page-5ca5f2d21e82137ec91a50fd). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

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

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

![](https://snipboard.io/SZylvq.jpg)



### Links

[![Static Badge](https://img.shields.io/badge/Live_Site-%23fff?style=flat&logo=githubpages&logoSize=auto&labelColor=%23000)](https://rocabor.github.io/Frontend-Monorepo/junior/fylo-dark-theme-landing-page/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [Vue](https://vuejs.org/) - JS library
- [Vite](https://vitejs.dev/) - Build tool
- [Tailwind CSS v4](https://tailwindcss.com/) - Utility-first CSS framework

### What I learned

I deepened my understanding of **Tailwind CSS v4's theming system** by defining custom design tokens using the `@theme` directive, which allowed me to centralize colors, fonts, and spacing presets.

Using **Vue's component-based architecture** helped me break the landing page into reusable pieces like `FeatureCard`, `TestimonialCard`, and `BaseButton`, making the code more maintainable.

I also practiced **SVG masking** to create an icon cutout effect for the "See how Fylo works" arrow, ensuring proper color inheritance with `currentColor` and smooth hover transitions.

```html
<svg width="16" height="16" viewBox="0 0 16 16">
  <defs>
    <mask id="arrowMask">
      <rect width="16" height="16" fill="white" />
      <path d="..." fill="black" />
    </mask>
  </defs>
  <circle cx="8" cy="8" r="6" fill="currentColor" mask="url(#arrowMask)" />
</svg>
```

I also focused on **keyboard accessibility**, adding `focus-visible` styles to all interactive elements and improving form semantics with proper labels and ARIA attributes.

### Continued development

I want to keep improving my **accessibility knowledge**, especially in form validation patterns and ARIA live regions. I also plan to explore **Vue transitions and animations** to add more polished micro-interactions, and dig deeper into **Tailwind CSS v4's new features** like the `@theme` directive and dynamic utilities.

### Useful resources

- [Tailwind CSS v4 Documentation](https://tailwindcss.com/docs) - Helped me understand the new `@theme` directive and custom utility patterns.
- [Vue SFC Documentation](https://vuejs.org/guide/scaling-up/sfc.html) - Great reference for single-file component structure.
- [SVG Masking on MDN](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/mask) - Essential for understanding how to create cutout effects in SVGs.
- [A Complete Guide to Links and Buttons](https://css-tricks.com/a-complete-guide-to-links-and-buttons/) - Helpful for focus management and accessible interactive elements.

### AI Collaboration

I used **opencode (Claude)** as my AI coding assistant throughout this project.

- **Debugging layout issues** — Helped diagnose why the container wasn't expanding to full width (flex parent shrinking to content).
- **Styling guidance** — Suggested responsive padding patterns and hover effects using Tailwind utilities.
- **SVG techniques** — Guided me through implementing an SVG mask for the arrow icon cutout effect.
- **Accessibility improvements** — Identified missing `focus-visible` styles, form labels, ARIA labels, and semantic HTML improvements.
- **Commit suggestions** — Provided conventional commit messages for each logical change.

What worked well: The iterative approach of asking for specific fixes and getting immediate, contextual suggestions. What I'd do differently: Plan the component structure and theming system earlier to avoid rework.

## Author

- Frontend Mentor - [@Rocabor](https://www.frontendmentor.io/profile/Rocabor)

## Acknowledgments

I'm grateful to Frontend Mentor for providing such well-designed challenges that allow me to practice real-world skills.
