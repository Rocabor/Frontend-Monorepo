# Frontend Mentor - Interactive card details form solution

This is a solution to the [Interactive card details form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-card-details-form-XpS8cKZDWw). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

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

## Overview

### The challenge

Users should be able to:

- Fill in the form and see the card details update in real-time
- Receive error messages when the form is submitted if:
  - Any input field is empty
  - The card number, expiry date, or CVC fields are in the wrong format
- View the optimal layout depending on their device's screen size
- See hover, active, and focus states for interactive elements on the page

### Screenshot

![](https://snipboard.io/EAUPuC.jpg)

### Links

[![Static Badge](https://img.shields.io/badge/Live_Site-%23fff?style=flat&logo=githubpages&logoSize=auto&labelColor=%23000)](https://rocabor.github.io/Frontend-Monorepo/junior/interactive-card-details-form/)

## My process

### Built with

- Semantic HTML5 markup
- Vue 3 (Composition API)
- Vite
- Tailwind CSS v4
- CSS custom properties
- Flexbox
- Mobile-first workflow
- Form validation with reactive state

### What I learned

This project helped me strengthen several skills:

**Vue 3 Composition API**
```js
const handleSubmit = () => {
  const isNameValid = /^[a-zA-Z\s]+$/.test(props.cardData.name)
  const isNumberValid = /^\d{16}$/.test(props.cardData.number)
  // ...
}
```

**Form Validation**
- Real-time input validation using regex patterns
- Reactive state for tracking touched fields
- Conditional error display based on validation rules

**Accessibility**
- Proper use of `aria-label`, `role="alert"`, `aria-describedby`
- Semantic HTML with `<fieldset>` and `<legend>` for form groups
- Input association with labels using `for` and `id` attributes

**CSS Best Practices**
- Converting px to rem for better accessibility
- Custom properties for theming
- Responsive design with mobile-first approach

### Continued development

Future improvements to consider:
- Add more complex validation (Luhn algorithm for card numbers)
- Improve error message display with animations
- Add visual feedback for valid inputs
- Implement password strength indicator

### Useful resources

- [Vue 3 Documentation](https://vuejs.org/guide/) - Official Vue 3 documentation
- [Tailwind CSS v4](https://tailwindcss.com/) - Latest Tailwind CSS
- [MDN - HTML Input types](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input) - Reference for input validation
- [Regex for form validation](https://www.regular-expressions.info/) - Pattern matching reference

## Author

- Frontend Mentor - [@Rocabor](https://www.frontendmentor.io/profile/Rocabor)


