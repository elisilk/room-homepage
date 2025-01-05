# Frontend Mentor - Room homepage solution

This is a solution to the [Room homepage challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/room-homepage-BtdBY_ENq). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshots](#screenshots)
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

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Navigate the slider using either their mouse/trackpad or keyboard

### Screenshots

|        Mobile designed at 375px:         | Desktop designed at 1440px:               |
| :--------------------------------------: | ----------------------------------------- |
| ![](./screenshots/screenshot-mobile.png) | ![](./screenshots/screenshot-desktop.png) |

### Links

- Solution URL: [https://github.com/elisilk/room-homepage](https://github.com/elisilk/room-homepage)
- Live Site URL: [https://elisilk.github.io/room-homepage/](https://elisilk.github.io/room-homepage/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- Fluid typography and spacing
- Accessibility
- CUBE CSS
- Sass

### What I learned

Resources I used:

- [Fluid typography and spacing](https://royalfig.github.io/fluid-typography-calculator/)
- [transfonter](https://transfonter.org/) - to convert [Google Font of League Spartan](https://fonts.google.com/specimen/League+Spartan) into a woff2 compressed form.
- [`cwebp` command-line tool](https://web.dev/articles/serve-images-webp) - to convert JPEG images to the more modern, compressed WebP format.
- [Contrast Checker](https://webaim.org/resources/contrastchecker/) - The color constrast between the Dark Gray (#A0A0A0 / hsl(0, 0%, 63%)) text color (used in the main text areas) and the white background was not sufficient to pass the Web Content Accessibility Guidelines (WCAG). So I decided to go against the design and change the text color to the lightest gray color that does pass, which is #595959 / hsl(0,
  0%,
  35%).
- PageSpeed Insights and Lighthouse Scores
  - Current solution - [PageSpeed Insights Report from Jan 5, 2025, 1:41:52 PM](https://pagespeed.web.dev/analysis/https-elisilk-github-io-room-homepage/zbvq0hpzy0)
  - Initial solution - [PageSpeed Insights Report from Jan 5, 2025, 1:41:52 PM](https://pagespeed.web.dev/analysis/https-elisilk-github-io-room-homepage/zbvq0hpzy0)

So many cool 😎 things:

### Continued development

Specific areas that the solution should be improved (known issues):

- Prevent the slider from moving to a new slide when the tab button is pressed from one of the "Shop now" links to the next?
- Hide the horizontal scrollbars on the slider?
  - [Using CSS to hide scrollbars without impacting scrolling](https://blog.logrocket.com/hide-scrollbar-without-impacting-scrolling-css/)

More general ideas I want to consider:

Hmm 🤔 ...

### Useful resources

- [Kevin Powell on YouTube](https://www.youtube.com/@KevinPowell) - He's the best.
- [Accessibility Developer Guide](https://www.accessibility-developer-guide.com/)
- [MDN Web Docs for CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) - Went here a lot to reference the different CSS properties and the shorthands, and all the great explanations about best practices.
- [The Clamp Calculator](https://royalfig.github.io/fluid-typography-calculator/) - Used for all of fluid typography and fluid spacing calculations.

## Author

- Website - [Eli Silk](https://github.com/elisilk)
- Frontend Mentor - [@elisilk](https://www.frontendmentor.io/profile/elisilk)
