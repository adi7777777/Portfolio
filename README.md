# Ashrith Rao — Portfolio

A React + plain CSS portfolio for a Frontend Developer profile (~3 years experience,
currently deepening React/MERN skills). Built with Vite. No jQuery, Tailwind, or UI
kits — React handles all interaction, and `lucide-react` supplies icons.

## Run it locally

```bash
npm install
npm run dev
```

Then open the printed local URL (usually `http://localhost:5173`).

To build for production:

```bash
npm run build
npm run preview   # preview the production build locally
```

## Folder structure

```
src/
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Skills.jsx
│   ├── Experience.jsx
│   ├── Projects.jsx
│   ├── ProjectCard.jsx
│   ├── ProjectModal.jsx
│   ├── Education.jsx
│   ├── Contact.jsx
│   └── Footer.jsx
├── data/
│   ├── projects.js
│   └── skills.js
├── hooks/
│   └── useReveal.js   (scroll-reveal animation hook)
├── App.jsx
├── main.jsx
└── index.css
public/
└── favicon.svg
```

## Where to plug in your real details

- **Resume**: add your PDF at `public/resume.pdf`. The "Download Resume" buttons in
  `Navbar.jsx` and `Hero.jsx` already point to `/resume.pdf`.
- **GitHub / LinkedIn / Email**: search for `ashrith-rao` and `raoashrith16601@gmail.com`
  across `Hero.jsx`, `Contact.jsx`, and `Footer.jsx`, and replace with your real links.
- **Experience**: edit the `EXPERIENCE` array in `Experience.jsx` — company name, dates,
  and bullet points.
- **Education**: edit the `EDUCATION` array in `Education.jsx`.
- **Projects**: edit `src/data/projects.js` — each project's description, tech stack,
  features, GitHub link, and demo link. The "problem / solution / challenges / learned"
  fields power the details modal.
- **Certifications**: no section is rendered right now (kept out rather than filled
  with placeholders). Once you have real certifications, add a `Certifications.jsx`
  modeled on `Education.jsx` and include it in `App.jsx`.

## A note on jQuery

The brief mentioned jQuery as a skill, and it's listed under **Skills → Frontend** since
it's part of your real professional experience. It isn't used *in* this portfolio's own
code, though — React already owns all DOM updates here (the mobile menu, scroll
highlighting, form validation, the modal, etc.), and mixing jQuery's direct DOM
manipulation into a React app fights the framework rather than complementing it. That
matches the brief's own instruction to avoid unnecessary libraries.

## Deploying

Any static host works, since this builds to plain static files in `dist/`:

- **Vercel**: `npm i -g vercel` → `vercel` (or connect the GitHub repo in the Vercel
  dashboard for auto-deploys).
- **Netlify**: drag-and-drop the `dist/` folder after `npm run build` in the Netlify
  dashboard, or connect the repo with build command `npm run build` and publish
  directory `dist`.
- **GitHub Pages**: `npm run build`, then deploy the `dist/` folder using the
  `gh-pages` package or a GitHub Actions workflow.
