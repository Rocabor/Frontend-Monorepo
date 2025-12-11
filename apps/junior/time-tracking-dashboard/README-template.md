# Frontend Mentor - Time tracking dashboard solution

This is a solution to the [Time tracking dashboard challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/time-tracking-dashboard-UIQ7167Jw). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

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

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Switch between viewing Daily, Weekly, and Monthly stats

### 📸 Screenshot

![](https://snipboard.io/goATd9.jpg)



### 🌎 Links

- Solution URL: [Repository URL](https://github.com/Rocabor/11.-Time_tracking_dashboard)
- Live Site URL: [Time tracking dashboard solution](https://rocabor.github.io/11.-Time_tracking_dashboard/)

## My process

### 🛠️ Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow


### 💡 What I learned

**Fetch** in JavaScript is a modern API for making HTTP requests (such as getting data from a server) asynchronously, using a promise-based approach to handle responses in a cleaner and more powerful way, allowing you to retrieve resources (JSON, images, files) and manipulate requests/responses easily with global fetch() functions and Request/Response objects.

To see how you can add code snippets, see below:

```js
fetch('/data.json').then((response) => {  
  if(!response.ok) return console.log('Oops! Something went wrong.');
  
  return response.json();
}).then((data) => {
  console.log(data);
});
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