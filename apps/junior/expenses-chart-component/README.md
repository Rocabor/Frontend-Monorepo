# Frontend Mentor - Expenses chart component solution

This is a solution to the [Expenses chart component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/expenses-chart-component-e7yJBUdjwt). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

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

- View the bar chart and hover over the individual bars to see the correct amounts for each day
- See the current day’s bar highlighted in a different colour to the other bars
- View the optimal layout for the content depending on their device’s screen size
- See hover states for all interactive elements on the page
- **Bonus**: Use the JSON data file provided to dynamically size the bars on the chart

### Screenshot

![](https://snipboard.io/Gxdzva.jpg)



### Links

[![Static Badge](https://img.shields.io/badge/Live_Site-%23fff?style=flat&logo=githubpages&logoSize=auto&labelColor=%23000)](https://rocabor.github.io/Frontend-Monorepo/junior/expenses-chart-component/)

## My process

### Built with

- Vue.js 3 (Composition API)
- Tailwind CSS
- Vite
- JSON para datos dinámicos

### What I learned

In this project, I learned how to implement a dynamic bar chart using Vue.js and JSON:

- Using `v-for` to iterate over JSON data and dynamically render elements
- Calculating max values with `Math.max()` to scale bars proportionally
- Implementing hover and active states with Tailwind CSS classes
- Using groups (`group`) to sync states between parent and child elements

```js
const maxAmount = Math.max(...chartData.map((item) => item.amount));
```

### Continued development

I want to keep improving in:

- Deepening accessibility knowledge (ARIA roles and attributes)
- Implementing more projects with Vue.js Composition API
- Improving responsive design patterns

### Useful resources

- [Vue.js Documentation](https://vuejs.org/guide/) - To learn about Composition API
- [Tailwind CSS Docs](https://tailwindcss.com/docs) - For utility class references

### AI Collaboration

I used **opencode** as an AI tool to develop this project:

- HTML semantics and accessibility review
- Code generation for dynamic iterations with Vue.js
- Implementation of hover/active states and tooltips
- Cleanup of unused CSS code
- Guidance on accessibility best practices

Working with AI was very effective for understanding accessibility concepts and improving code structure.

## Author

- Frontend Mentor - [@Rocabor](https://www.frontendmentor.io/profile/Rocabor)

## Acknowledgments

I'm grateful to Frontend Mentor for providing such well-designed challenges that allow me to practice real-world skills.
