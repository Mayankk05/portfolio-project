# Mayank Kashyap — Portfolio

A modern, responsive developer portfolio built with **React** and **Tailwind CSS**, featuring smooth UI animations with **Framer Motion**, dark mode support, and sections for projects, skills, certifications, education, and contact.

**Live Demo:** https://mk-dev-portfolio.netlify.app/

![Portfolio Screenshot](<img width="1899" height="941" alt="Screenshot 2026-03-23 082557" src="https://github.com/user-attachments/assets/96632069-6fc8-4463-bf71-4c0ca064f874" />
)

---

## Features

- Modern landing page with animated hero section
- Smooth scrolling navigation + mobile menu
- Dark mode toggle (default enabled)
- Scroll progress indicator
- Responsive layout (mobile → desktop)
- Sections included:
  - Hero
  - About
  - Skills
  - Projects
  - Certifications
  - Education
  - Contact
  - Footer

---

## Tech Stack

- **React**
- **Tailwind CSS**
- **Framer Motion**
- **React Icons**

---

## Project Structure

```bash
src/
  components/
    Navbar.jsx
    ScrollProgress.jsx
    SectionHeading.jsx
    SectionWrapper.jsx
  sections/
    Hero.jsx
    About.jsx
    Skills.jsx
    Projects.jsx
    Certifications.jsx
    Education.jsx
    Contact.jsx
    Footer.jsx
  App.jsx
  main.jsx
public/
  profile.jpg
  projects/
```

---

## Getting Started

### 1) Clone the repo

```bash
git clone https://github.com/Mayankk05/portfolio-project.git
cd portfolio-project
```

### 2) Install dependencies

```bash
npm install
```

### 3) Run locally

```bash
npm run dev
```

Open the URL shown in the terminal (commonly `http://localhost:5173`).

---

## Customization

### Update profile picture
Place your image here:

```bash
public/profile.jpg
```

### Update projects
Edit:

- `src/sections/Projects.jsx`

Project images can be stored in:

- `public/projects/`

### Update certifications
Edit:

- `src/sections/Certifications.jsx`

---

## Contact Form (Web3Forms)

The contact form posts to Web3Forms:

- Endpoint: `https://api.web3forms.com/submit`
- The `access_key` is currently present inside `src/sections/Contact.jsx`

### Recommended improvement (security)
Move the key to an environment variable (so it isn’t committed).

Example (Vite):

1. Create `.env`:
   ```bash
   VITE_WEB3FORMS_KEY=your_key_here
   ```

2. Use it in code:
   ```js
   access_key: import.meta.env.VITE_WEB3FORMS_KEY
   ```

---

## Links

- **Live:** https://mk-dev-portfolio.netlify.app/
- **GitHub:** https://github.com/Mayankk05
- **LinkedIn:** https://www.linkedin.com/in/mayank-kashyap-a6a03630a/
- **Email:** kashyap05mayank@gmail.com

---

## License

This project is available for personal use and customization.
(If you want, add an official `LICENSE` file like **MIT**.)
