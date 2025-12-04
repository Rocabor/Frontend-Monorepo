# Frontend Mentor - Newsletter sign-up form with success message solution

This is a solution to the [Newsletter sign-up form with success message challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/newsletter-signup-form-with-success-message-3FC1AZbNrv). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

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

### 🏋️‍♂️The challenge

![Static Badge](https://img.shields.io/badge/JUNIOR-%23ffffff?style=for-the-badge&label=2&labelColor=%2334D399)
![Static Badge](https://img.shields.io/badge/html5-%23E34F26?style=for-the-badge&logo=html5&logoColor=%23ffffff)
![Static Badge](https://img.shields.io/badge/css-%23663399?style=for-the-badge&logo=css)
![Static Badge](https://img.shields.io/badge/javascript-%23F7DF1E?style=for-the-badge&logo=javascript&logoColor=%23000)

Users should be able to:

- Add their email and submit the form
- See a success message with their email after successfully submitting the form
- See form validation messages if:
  - The field is left empty
  - The email address is not formatted correctly
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### 📸 Screenshot

![](https://snipboard.io/BP6Oc4.jpg)


### 🌎 Links

- Solution URL: [Repository URL](https://github.com/Rocabor/10.-Newsletter_sign_up_with_success_message)
- Live Site URL: [Newsletter sign-up form with success message solution](https://rocabor.github.io/10.-Newsletter_sign_up_with_success_message/)

## My process

### 🛠️ Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow


### 💡 What I learned

- **The onsubmit event:** When a form is submitted, the onsubmit event is fired, and the browser is reloaded. This is because the browser attempts to send the form data to a server. Unfortunately, a page reload effectively clears the form, re-initializes our JavaScript, and clears the console logs.

  If we want to manage the form with JavaScript, we first need to prevent the default behavior of the onsubmit event.

```html
<form id="form" novalidate>
  
  <div>
    <label for="email">Email address</label>
    <input id="email" name="email" type="email" />
    <span aria-live="polite" id="email-error"></span>
  </div>
  
  <button>Submit</button>
</form>
```

```js
const form = document.getElementById('form');

function handleSubmit(e) {
  e.preventDefault() // prevent the default behaviour
}

form.addEventListener('submit', handleSubmit);
```


### 🧗‍♂️Continued development

- [React](https://reactjs.org/) - JS library
- [Next.js](https://nextjs.org/) - React framework
- [Styled Components](https://styled-components.com/) - For styles


### 📖 Useful resources

- [MDN Web Docs](https://developer.mozilla.org/es/) - A very comprehensive resource with tutorials, explanations, and references for HTML, CSS, and JavaScript. I found it very useful for completing this challenge and will continue to use it.

- [W3Schools](https://www.w3schools.com/) - Another great resource for learning to program, and I used it to complete this challenge. I recommend it to anyone still learning this concept.

- [Web Dev](https://web.dev/) - Guidance to build modern web experiences that work on any browser.

- [Javascript Info](https://javascript.info/) - From the basics to advanced topics with simple, but detailed explanations.


## ​​Author

- Frontend Mentor - 👨‍💻[@ Rocabor](https://www.frontendmentor.io/profile/Rocabor)

## Acknowledgments

I thank FrontendMentor for offering a platform with a practical, real-world problem-solving approach to developing programming skills, enabling us to become confident and competent developers who stand out in the job market.
