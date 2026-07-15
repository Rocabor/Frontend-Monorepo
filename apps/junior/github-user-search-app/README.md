# Frontend Mentor - GitHub user search app solution

This is a solution to the [GitHub user search app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/github-user-search-app-Q09YOgaH6). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

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

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Search for GitHub users by their username
- See relevant user information based on their search
- Switch between light and dark themes
- **Bonus**: Have the correct color scheme chosen for them based on their computer preferences. _Hint_: Research `prefers-color-scheme` in CSS.

### Screenshot

![](https://snipboard.io/dbYE2G.jpg)


### Links

[![Static Badge](https://img.shields.io/badge/Live_Site-%23fff?style=flat&logo=githubpages&logoSize=auto&labelColor=%23000)](https://rocabor.github.io/Frontend-Monorepo/junior/github-user-search-app/)

## My process

### Built with

- [Vue 3](https://vuejs.org/) - Composition API with `<script setup>`
- [Vite](https://vite.dev/) - build tool and dev server
- [Tailwind CSS v4](https://tailwindcss.com/) - utility-first styling with `@theme` tokens and `@custom-variant dark`
- Semantic HTML5 & ARIA (`sr-only` labels, `role="search"`)
- Native View Transitions API for the theme switch (circular reveal)
- Canvas 2D API for the animated day/night background
- Mobile-first, responsive with `clamp()` for fluid spacing and typography

### What I learned

This project was my deepest dive into Vue 3 + Vite and into bridging app state with the DOM and the Canvas API. A few things stood out:

- **Component composition:** splitting the app into `UserSearch`, `AppHeader`, `SearchBar` and `ProfileSection`, communicating with `props` + `emit` instead of one giant component.
- **Tailwind v4 theming:** defining design tokens in `@theme`, driving fluid responsiveness with `clamp()`, and handling dark mode through a `.dark` class via `@custom-variant dark (&:where(.dark, .dark *))`. I also learned the specificity trap: `dark:` utilities can lose to scoped styles, so I used CSS variables (e.g. `var(--color-icon)`) to keep themes consistent.
- **View Transitions API:** animating the theme switch with a clip-path circle from the click point, with a graceful fallback to a color transition when the API is unavailable.
- **Canvas animation:** a `requestAnimationFrame` loop drawing an interpolated day/night sky, a sun (with rotating rays) and moon, drifting clouds, twinkling stars and occasional shooting stars. Key lessons: scale the canvas with `devicePixelRatio`, generate the scene once (not on every `resize`, or mobile scroll resets the animation), and watch the `.dark` class with a `MutationObserver` to keep the canvas in sync with the toggle.
- **Accessibility:** visible focus with `focus-visible` rings, using `focus-within` on the search form, and `:has(button:focus)` to avoid a double ring when the button is focused.

```js
// Syncing the canvas to the theme without lifting state
const observer = new MutationObserver(() => {
  targetDark = document.documentElement.classList.contains('dark');
});
observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
```

### Continued development

The frontend is in good shape, so the next step is expanding it into a full-stack project in a separate repository:

- **Backend proxy + cache:** move the GitHub API calls to a small Node server (Express/Fastify) that holds the token in an env var and caches responses to avoid GitHub's rate limits. The frontend would call `/api/users/:username` instead of `api.github.com` directly.
- **Persistence:** add a database (Prisma + SQLite is a great junior-friendly start) to save search history and favorite users.
- **TypeScript end-to-end:** bring the type safety I used on the frontend into the backend too.
- **Polish:** more refined canvas scenes, better loading/empty states, and automated tests.

### Useful resources

- [Vue 3 Documentation](https://vuejs.org/guide/introduction.html) - the Composition API and `<script setup>` basics.
- [Tailwind CSS v4 Docs](https://tailwindcss.com/docs) - `@theme`, `@custom-variant` and the new engine.
- [MDN Canvas API](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API) - 2D drawing, `requestAnimationFrame` and `devicePixelRatio`.
- [View Transitions API](https://developer.mozilla.org/en-US/docs/Web/API/View_Transitions_API) - the circular theme reveal.
- [Frontend Mentor](https://www.frontendmentor.io/) - the challenge itself and the community solutions.
- [The Markdown Guide](https://www.markdownguide.org/) - for writing this README.

### AI Collaboration

I used an AI coding assistant ([opencode](https://opencode.ai)) as a mentor throughout the project:

- **Tools:** opencode, used as a guided mentor rather than a code generator.
- **How:** for debugging (e.g. the `dark:` specificity issue, the broken Twitter link, the mobile scroll resetting the canvas), for code review of each component, and for brainstorming approaches (sticky footer, canvas day/night design, focus management). I wrote the actual code myself based on the guidance.
- **What worked well:** the Socratic, step-by-step guidance helped me understand the *why* behind each fix instead of just copying a solution. The review feedback (unused vars, dead CSS, broken links) caught real issues.
- **What didn't:** occasionally I had to clarify when a suggestion was too close to a full solution, since the goal was learning. Also, pasting an image from the clipboard didn't work — describing the problem in text was more effective.

## Author

- Frontend Mentor - [@Rocabor](https://www.frontendmentor.io/profile/Rocabor)

## Acknowledgments

I'm grateful to Frontend Mentor for providing such well-designed challenges that allow me to practice real-world skills.
