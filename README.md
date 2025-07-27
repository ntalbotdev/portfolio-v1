
# Portfolio

This portfolio is a showcase of my work as a front-end developer, featuring a selection of projects that highlight my skills in Vue.js, HTML, SCSS, and JavaScript. Each project includes a brief description, screenshots, and a link to the live demo or code repository.

#### [LIVE DEMO](https://ntalbot.com)

## 📷 Screenshot

![Screenshot](https://i.imgur.com/9i1bCoz.png)


## 💻 Technologies

- Vue.js
- JavaScript
- SCSS

## ✨ Features

- Mobile first (always!)
- EmailJS integration (API)
- Form validation (vuelidate)
- Internationalization (en/fr)

## 📂 Repository Contents

This repository contains the following:

- `src/`: The source code for the portfolio, built with Vue.js
- `public/`: The public assets for the portfolio, including images and index.html
- `src/data/projects.js`: A JavaScript file containing data for my projects, used to populate the portfolio
- `src/assets/`: The SCSS files for styling the portfolio
- `src/i18n/`: The files for internationalization using `vue-i18n`, including English and French translations

## 💾 Environment Variables

To run this project, you will need to add the following environment variables to your `.env` file (create it in the root directory).

`VITE_EMAILJS_SERVICE`

`VITE_EMAILJS_TEMPLATE_ID`

`VITE_EMAILJS_PUBLIC_KEY`

`VITE_RECAPTCHA_SITE_KEY`

`VITE_EMAIL_ADDRESS`


## 🚀 Getting Started
### Installing Dependencies
Make sure you have `Node.js` and `npm` installed.

```bash
  cd portfolio-v1
  npm install
```

### Development
```bash
  npm run dev
```

### Build
```bash
  npm run build
```