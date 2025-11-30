# Frontend Mentor - Article preview component solution

This is a solution to the [Article preview component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/article-preview-component-dYBN_pYFT). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

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

![Static Badge](https://img.shields.io/badge/NEWBIE-%23ffffff?style=for-the-badge&label=1&labelColor=%2306B6D4)
![Static Badge](https://img.shields.io/badge/html5-%23E34F26?style=for-the-badge&logo=html5&logoColor=%23ffffff)
![Static Badge](https://img.shields.io/badge/css-%23663399?style=for-the-badge&logo=css)
![Static Badge](https://img.shields.io/badge/javascript-%23F7DF1E?style=for-the-badge&logo=javascript&logoColor=%23000)


Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- See the social media share links when they click the share icon

### 📸 Screenshot

![](https://snipboard.io/MoLhQ0.jpg)



### 🌎 Links

- Solution URL: [Repository URL](https://github.com/Rocabor/9.-Article_preview_component)
- Live Site URL: [Article preview component solution](https://rocabor.github.io/9.-Article_preview_component/)

## My process

### 🛠️ Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow


### 💡 What I learned

- **Edit SVG elements using CSS:** allowing you to modify properties such as color.

- **The CSS ::after pseudo-element:** inserts some content after the content of the specified element.Use the content property to specify the content to insert. The content value can be:

  - A string: content: "Hello world!";
  - An image: content: url(myimage.jpg);
  - Nothing: content: none;
  - A counter: content: counter(li);
  - A quote: content: close-quote;
  - An attribute value: content: " (" attr(href) ")";

Tip: Notice that the inserted content is still inside the specified element. The inserted content is added after the other content inside.

- **The addEventListener():**  method attaches an event handler to an element.


To see how you can add code snippets, see below:

```html
<svg xmlns="http://www.w3.org/2000/svg" width="15" height="13"><path class="icono-share"/></svg>
```
```css
 .menu-share::after {
    content: "";
}
```
```js
botonMenu.addEventListener("click", function () {
})
```



### 🧗‍♂️Continued development

- [React](https://reactjs.org/) - JS library
- [Next.js](https://nextjs.org/) - React framework
- [Styled Components](https://styled-components.com/) - For styles

### 📖 Useful resources

- [MDN Web Docs](https://developer.mozilla.org/es/) - A very comprehensive resource with tutorials, explanations, and references for HTML, CSS, and JavaScript. I found it very useful for completing this challenge and will continue to use it.

- [W3Schools](https://www.w3schools.com/) - Another great resource for learning to program, and I used it to complete this challenge. I recommend it to anyone still learning this concept.


## ​​Author

- Frontend Mentor - 👨‍💻[@ Rocabor](https://www.frontendmentor.io/profile/Rocabor)

## Acknowledgments

I thank FrontendMentor for offering a platform with a practical, real-world problem-solving approach to developing programming skills, enabling us to become confident and competent developers who stand out in the job market.