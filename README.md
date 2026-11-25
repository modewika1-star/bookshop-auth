<div align="center">

# 🔐 Bookshop Account UI

### A multi-screen sign-in and password-recovery experience.

A React frontend exercise focused on common account flows, from login and registration to reset-code entry and password updates.

[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=20232A)](https://react.dev/) [![Vite](https://img.shields.io/badge/Vite-8-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vite.dev/) [![React Router](https://img.shields.io/badge/React_Router-7-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white)](https://reactrouter.com/)

</div>

## ✨ Screens and routes

| Route | Screen |
| --- | --- |
| `/` | Login |
| `/signup` | Sign up |
| `/forget-password` | Forgot password |
| `/reset-code` | Reset code |
| `/create-password` | Create a new password |
| `/password-changed` | Password changed confirmation |

## 🧩 What this project practices

- Building separate screens for account-related user journeys.
- Navigating between screens with React Router.
- Managing form input with React state.
- Basic required-field checks and user feedback.
- Reusing shared hero and footer components.

## 🛠️ Technology

- React 19, JavaScript, Vite
- React Router DOM
- Tailwind CSS and Bootstrap
- Animate.css

## ⚙️ Run locally

~~~bash
git clone https://github.com/modewika1-star/t15-bookshop.git
cd t15-bookshop
npm install
npm run dev
~~~

For a production build:

~~~bash
npm run build
npm run preview
~~~

## 🔒 Authentication note

This repository is a frontend account-flow exercise. The inspected login handler uses local form checks and browser alerts. No production authentication backend, email delivery, or real password-reset service is configured in the inspected application code.

---

**Repository:** [modewika1-star/t15-bookshop](https://github.com/modewika1-star/t15-bookshop)
