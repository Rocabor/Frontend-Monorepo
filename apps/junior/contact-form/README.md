# Frontend Mentor - Contact form solution

This is a solution to the [Contact form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/contact-form--G-hYlqKJj). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

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
![Static Badge](https://img.shields.io/badge/Javascript-%23F7DF1E?style=flat&logo=javascript&logoColor=black)

Users should be able to:

- Complete the form and see a success toast message upon successful submission
- Receive form validation messages if:
  - A required field has been missed
  - The email address is not formatted correctly
- Complete the form only using their keyboard
- Have inputs, error messages, and the success message announced on their screen reader
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![](https://snipboard.io/1VkSoW.jpg)


### Links

[![Static Badge](https://img.shields.io/badge/Live_Site-%23fff?style=flat&logo=githubpages&logoSize=auto&labelColor=%23000)](https://rocabor.github.io/Frontend-Monorepo/apps/junior/contact-form/dist/index.html)

## My process

### Built with

- Semantic HTML5 markup adhering to accessibility guidelines
- Vanilla JavaScript for client-side validation and state management
- Tailwind CSS v4, utilizing the CSS-first engine for theme customization
- Mobile-first workflow for responsive design
- Custom logic implemented for real-time error feedback and accessible toast messages

### What I learned

I reinforced my knowledge on creating robust, accessible client-side form handling without relying on frameworks like React. Key learnings include:

- **Accessible Form Validation:** Implementing dynamic error announcements using `aria-live="polite"` on error spans and ensuring all required fields have `aria-required` and `aria-describedby`.
- **Custom Radios/Checkboxes:** Developing custom styling for radio buttons and checkboxes using `appearance-none` combined with Tailwind's `has-checked:` and custom utility classes, while ensuring keyboard focus remains visible via `focus-visible:ring`.
- **Accessible Toasts:** Creating a non-blocking success notification using `role="status"` and `aria-live="assertive"` to guarantee screen readers announce submission success.

```html
<!-- Example of dynamic error handling logic in JS -->
function showElementError(input, errorSpan) {
  if (errorSpan) errorSpan.classList.remove('hidden');
  input.classList.add('error');
}
```

### Continued development

Future work will focus on improving the interactivity and visual polish:

1.  **Refining Toast Animation:** Implement a cleaner animation for the success toast message (currently using a simple fade/scale).
2.  **Server-Side Simulation:** Replace the `console.log` submission with an asynchronous function to better simulate a real API interaction.
3.  **Input Grouping:** Review how errors are grouped visually and programmatically, especially for radio buttons, to ensure better proximity for screen readers.

### Useful resources

- [MDN Web Docs on ARIA Live Regions](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Live_Regions) - Critical for implementing the accessible toast notification.

### AI Collaboration

I utilized the AI agent extensively throughout this task:

- **Initial Guidance:** The agent helped define the required modifications based on the "Senior Frontend Mentor" rules (`AGENTS.md`).
- **Code Generation:** The agent generated the complete JavaScript logic for form validation, error handling, and the toast notification, ensuring accessibility attributes were included in the HTML placeholders first.
- **Refinement:** The agent assisted in drafting the commit messages based on the technical changes applied to the code.

## Author

- Frontend Mentor - [@Rocabor](https://www.frontendmentor.io/profile/Rocabor)


## Acknowledgments

I'm grateful to Frontend Mentor for providing such well-designed challenges that allow me to practice real-world skills.

