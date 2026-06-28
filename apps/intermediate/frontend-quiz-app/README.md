# Frontend Mentor - Frontend quiz app solution

This is a solution to the [Frontend quiz app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/frontend-quiz-app-BE7xkzXQnU). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

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

Users should be able to:

- Select a quiz subject
- Select a single answer from each question from a choice of four
- See an error message when trying to submit an answer without making a selection
- See if they have made a correct or incorrect choice when they submit an answer
- Move on to the next question after seeing the question result
- See a completed state with the score after the final question
- Play again to choose another subject
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- Navigate the entire app only using their keyboard
- **Bonus**: Change the app's theme between light and dark

### Screenshot

![](https://snipboard.io/jkUmFl.jpg)


### Links

[![Static Badge](https://img.shields.io/badge/Live_Site-%23fff?style=flat&logo=githubpages&logoSize=auto&labelColor=%23000)](https://rocabor.github.io/Frontend-Monorepo/intermediate/frontend-quiz-app/)

## My process

### Built with

- Vue.js 3 with Composition API
- Tailwind CSS
- Vite for bundling
- Swiper.js for carousel (if applicable)
- Responsive design with md, xl breakpoints
- System-based dark mode detection
- Component architecture with QuizHome, QuizQuestion, QuizScore components

### What I learned

Use this section to recap over some of your major learnings while working through this project. Writing these out and providing code samples of areas you want to highlight is a great way to reinforce your own knowledge.

Here are the key learnings from this frontend quiz application project:

**Component Architecture:** Developed reusable component patterns (QuizHome, QuizQuestion, QuizScore) using Vue.js Composition API, implementing proper state management and props validation.

**Responsive Design:** Created fluid typography with Tailwind CSS using `clamp()` utilities, designed layouts for mobile, tablet, and desktop breakpoints using responsive classes.

**Accessibility:** Implemented ARIA attributes for screen reader navigation, ensured keyboard accessibility with proper focus handling, and maintained semantic HTML structure.

**Dark Mode:** Implemented system-based dark mode detection using `window.matchMedia('(prefers-color-scheme: dark)')` with responsive color schemes and smooth transitions.

**State Management:** Managed complex quiz flow states including current quiz, question progress, score tracking, and completion status using Vue reactive variables.

**Vite Integration:** Configured Vite for optimal development experience with module federation support and static asset optimization.


### Continued development

Areas for continued development and refinement:

- **Performance Optimization:** Implement lazy loading for quiz images, code splitting for components, and optimize re-renders using Vue's optimized reactivity system.

- **Accessibility Enhancement:** Further improve keyboard navigation, add screen reader announcements for quiz feedback, and ensure color contrast meets WCAG AA standards.

- **Advanced Reactivity:** Explore Vue 3's new reactivity features, particularly `EffectScope` and `Watchable` utilities for more granular state management.

- **Testing Strategy:** Implement comprehensive unit and integration tests using Vue Test Utils, establishing test coverage for all quiz components and edge cases.

- **Type Safety:** Add TypeScript types for all props, emits, and component interfaces to improve developer experience and catch errors early.

- **Animation Library:** Integrate a lightweight animation library (like Animate.css) for smoother transitions between quiz states and question progress.

- **Error Handling:** Implement robust error boundaries and user-friendly error messages for API failures or invalid quiz data.



### Useful resources

The following resources were invaluable during this project's development:

- **Vite Documentation** ([vitejs.dev](https://vitejs.dev/)) - Provided comprehensive guidance on modern frontend tooling, module federation, and optimized development workflows for Vue.js applications.

- **Tailwind CSS Documentation** ([tailwindui.com/docs](https://tailwindcss.com/docs)) - Offered detailed documentation on utility-first CSS framework implementation, responsive design patterns, and responsive breakpoint utilities.

- **Vue.js Composition API Guide** ([vuejs.org/guide/reactivity.html](https://vuejs.org/guide/reactivity.html)) - Provided thorough understanding of reactive state management, component composition, and custom hook patterns for complex applications.

- **MDN Web Docs for Accessibility** ([developer.mozilla.org](https://developer.mozilla.org/)) - Delivered detailed guidance on ARIA attributes, keyboard navigation, and semantic HTML5 implementation for inclusive web applications.

- **CSS-Tricks Flexbox Guide** ([css-tricks.com/flexbox](https://css-tricks.com/flexbox/)) - Explained complex flexbox layout concepts and responsive design strategies used extensively throughout the quiz interface.

- **Frontend Mentor Challenges** ([frontendmentor.io](https://www.frontendmentor.io/)) - Provided structured project requirements, responsive design challenges, and community solutions that inspired various implementation approaches.



## AI Collaboration

During development of this comprehensive quiz application, I collaborated extensively with AI systems to:

- **Learn and implement advanced Vue.js patterns:** AI guided me through Vue.js 3 Composition API best practices, reactive state management, and component composition techniques for complex quiz applications.

- **Design and optimize responsive layouts:** AI assisted in creating responsive designs using Tailwind CSS utilities, implementing fluid typography with `clamp()`, and developing mobile-first breakpoints for quiz components.

- **Implement system-based features:** AI helped integrate sophisticated features like system-based dark mode detection, responsive image handling, and performance optimization strategies.

- **Enhance accessibility:** AI provided guidance on ARIA implementation, keyboard navigation, and semantic HTML structuring to ensure an inclusive user experience.

- **Develop component architecture:** AI helped design and refine component patterns (QuizHome, QuizQuestion, QuizScore) following Vue.js best practices and clean code principles.

- **Iterative refinement:** AI provided feedback on code quality, suggested improvements for performance and maintainability, and helped debug complex state management scenarios.

This collaboration accelerated development while ensuring the final application adheres to modern web development best practices.

## Author

- Frontend Mentor - [@Rocabor](https://www.frontendmentor.io/profile/Rocabor)

## Acknowledgments

I'm grateful to Frontend Mentor for providing such well-designed challenges that allow me to practice real-world skills.
