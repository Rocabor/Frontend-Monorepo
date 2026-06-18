# Frontend Mentor - Conference ticket generator solution

This is a solution to the [Conference ticket generator challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/conference-ticket-generator-oq5gFIU12w). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

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

- Complete the form with their details
- Receive form validation messages if:
  - Any field is missed
  - The email address is not formatted correctly
  - The avatar upload is too big or the wrong image format
- Complete the form only using their keyboard
- Have inputs, form field hints, and error messages announced on their screen reader
- See the generated conference ticket when they successfully submit the form
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![](https://snipboard.io/o4cVOa.jpg)



### Links

[![Static Badge](https://img.shields.io/badge/Live_Site-%23fff?style=flat&logo=githubpages&logoSize=auto&labelColor=%23000)](https://rocabor.github.io/Frontend-Monorepo/junior/conference-ticket-generator/)

## My process

### Built with

- [Vue.js 3](https://vuejs.org/) - JavaScript framework (Composition API)
- [Tailwind CSS v4](https://tailwindcss.com/) - Utility-first CSS framework with dynamic theme configs
- [Vite](https://vite.dev/) - Frontend Build tool
- [BigDataCloud Reverse Geocoding API](https://www.bigdatacloud.com/) - Rest API for dynamic location tracking
- Semantic HTML5 & WAI-ARIA Markup
- Mobile-first responsive workflow
- @packages/ui - Monorepo UI shared architecture

### What I learned

During this project, I deepened my knowledge in web accessibility (A11y), clean input manipulation, and browser API integrations:

**Advanced Accessibility & Screen Reader Semantics**
- I learned how to turn abstract interactive `div` containers into custom accessible components by leveraging explicit keyboard triggers (`tabindex="0"`, `keydown.enter`, `keydown.space`) and robust ARIA labeling hooks (`aria-labelledby`, `aria-describedby`).
- I implemented asynchronous structural announcements with `aria-live="polite"` so screen readers seamlessly catch when the view mutates from the form layout over to the ticket visualization.
- I corrected heading levels across the DOM structure, swapping non-hierarchical headings into strong semantic text elements to comply with strict semantic guidelines.

```html
<div
  tabindex="0"
  role="button"
  aria-labelledby="avatar-label"
  :aria-describedby="isError ? 'avatar-error' : 'avatar-instructions'"
  @click="!avatarPreview && openFilePicker()"
  @keydown.enter="openFilePicker"
  @keydown.space.prevent="openFilePicker"
>
```
**Asynchronous Data & Geocoding Manipulations**
- I integrated the Geolocation browser API to query coordinates on mount, processing international ISO subdivision strings (principalSubdivisionCode) through array splitting to consistently extract tidy state or region abbreviations (e.g., turning US-TX into a clean "TX" output).

```js
if (data.principalSubdivisionCode) {
  const partes = data.principalSubdivisionCode.split('-');
  regionAbreviada = partes[1] || data.countryCode; // Extracts standard abbreviations like "TX"
}
location.value = `${data.city}, ${regionAbreviada}`;
```
**State Form Formatting & Defensive Engineering**
- I added active programmatic sanitization handlers (blur, submit) to mutate real underlying Vue state, mapping names cleanly into Title Case formats while enforcing a defensive reset against pointer exceptions on hidden native input file values.


### Continued development

After completing this project, I want to focus on:

1. **Automated Accessibility Testing Audit workflows**
   - Incorporating tools like Axe-core or Cypress-A11y into the deployment pipeline to ensure zero interactive barriers across diverse device trees.

2. **Defensive API State Caching & Edge Failure Management**
   - Learning how to build custom visual loaders or transitions when geocoding calls experience high latency, expanding graceful fallback workflows.

3. **Tailwind CSS v4 Advanced Design-Token Systems**
   - Further mastering the new @theme configuration directives to build fully reusable monorepo theme layers across scale.



### Useful resources

- [WAI-ARIA Authoring Practices Guide (APG)](https://www.w3.org/WAI/ARIA/apg/) - Essential reference patterns for handling accessible custom buttons and drag regions.
- [BigDataCloud Reverse Geocoding API Documentation](https://www.google.com/search?q=https://www.bigdatacloud.com/docs/api/reverse-geocode) - Helped me understand the structure of locality and regional subdivision responses.
- [Vue.js Composition API Docs](https://www.google.com/search?q=https://vuejs.org/api/composition-api-core.html) - Provided deep insights into component lifecycle tracking (onMounted) and precise template ref referencing.


### AI Collaboration

This project benefited from an active pairing collaboration with an AI assistant. The AI tool was utilized strategically to audit the structural implementation, refactor interactive nodes to meet rigorous WCAG accessibility guidelines, and eliminate string formatting bugs (such as resolving state tracking string leaks and optimizing standard ISO code parsing routines). This manual interaction loop accelerated learning regarding screen reader compliance while keeping complete control over the application's layout choices.

## Author

- Frontend Mentor - [@Rocabor](https://www.frontendmentor.io/profile/Rocabor)

## Acknowledgments

I'm grateful to Frontend Mentor for providing such well-designed challenges that allow me to practice real-world skills.
