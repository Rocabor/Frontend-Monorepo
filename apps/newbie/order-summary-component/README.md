# Frontend Mentor - Order summary card solution

This is a solution to the [Order summary card challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/order-summary-component-QlPmajDUj). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## 📋 Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
  - [Screenshot](#screenshot)  
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
  - [AI Collaboration](#ai-collaboration)
- [Author](#author)
- [Acknowledgments](#acknowledgments)



## 📌 Overview

### The challenge

![Static Badge](https://img.shields.io/badge/NEWBIE-%23ffffff?style=flat&label=1&labelColor=%2306B6D4&color=%23ffffff)
![Static Badge](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![Static Badge](https://img.shields.io/badge/TailwindCSS-06B6D4?style=flat&logo=tailwindcss&logoColor=white)

### Links

[![Static Badge](https://img.shields.io/badge/Repository-%23000?style=for-the-badge&logo=github&labelColor=%23000)](https://github.com/Rocabor/Order-summary-component)
[![Static Badge](https://img.shields.io/badge/Live%20Site-303b59?style=for-the-badge&logo=vitepress&logoColor=fff)](https://rocabor.github.io/Order-summary-component/)



Users should be able to:

- See hover states for interactive elements

### Screenshot

![](https://snipboard.io/Edh72S.jpg)


## ⚙️ My process

### Built with

- **Semantic HTML5 markup** 
- **Tailwind CSS v4** 
- **Flexbox** 
- **Mobile-first workflow** 



### What I learned

During this project, I reinforced key concepts of Tailwind CSS and custom CSS:

**Advanced configuration with `@theme`:** I learned to extend Tailwind's theme to include custom colors and shadows cleanly:

   ```css
   @theme {
     --color-blue-700: #382ae1;
     --shadow-button: 0 20px 20px rgba(56, 42, 225, 0.1903);
   }
   ```

**Custom utilities with @utility :** I created reusable utilities for the challenge's typography styles, simplifying the HTML:

```css
@utility text-preset-1 {
  @apply text-[28px] font-black leading-[1.35];
}
```

**Adaptive background:** I implemented a background change based on the device using media queries directly in CSS:

```css
body {
  background-image: url("/images/pattern-background-mobile.svg");
}
@media (min-width: 768px) {
  body {
    background-image: url("/images/pattern-background-desktop.svg");
  }
}
```


### Continued development

In future projects, I want to dive deeper into:

 - Image optimization – Using modern formats (WebP, AVIF) and lazy loading.

 - Accessibility – Ensuring all components are keyboard-navigable and screen-reader friendly.

 - Subtle animations – Adding micro-interactions with transition to enhance the visual experience.


### Useful resources

 - [Tailwind CSS v4 Documentation](https://tailwindcss.com/docs/installation/using-vite) – Helped me understand new features like @theme and @utility.

 - [A Complete Guide to Flexbox (CSS Tricks)](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) – A go-to resource for alignment refreshers.

 - [Frontend Mentor Community](https://www.frontendmentor.io/community) – For inspiration from other solutions and best practices.


## ​​Author

- Frontend Mentor - 👨‍💻[@ Rocabor](https://www.frontendmentor.io/profile/Rocabor)

## Acknowledgments

I'm grateful to Frontend Mentor for providing such well-designed challenges that allow me to practice real-world skills. I'm also grateful to all the developers who share their knowledge online through tutorials, documentation, and educational resources that enable others to learn and grow in this industry.