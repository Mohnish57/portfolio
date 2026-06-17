# Mohnish Sawlani — Portfolio

An animated, dark + neon developer portfolio built with **React + Vite**, **Tailwind CSS**, **Framer Motion**, **GSAP**, and **Lenis** smooth scroll.

## Features
- Custom two-part cursor with hover states
- Lenis smooth scrolling synced to GSAP ScrollTrigger
- Animated gradient-orb + parallax-grid background
- Hero with word-by-word text reveal, rotating role, magnetic buttons, and animated stat counters
- Tech marquee, About pillars, Skills grid, animated Experience timeline, 3D-tilt Project cards
- Fully responsive + `prefers-reduced-motion` aware

## Run it
```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build → dist/
npm run preview  # preview the build
```

## Edit your content
**Everything is in one file:** [`src/data/content.js`](src/data/content.js)
- `profile` — name, roles, tagline, summary, email, phone, **github / linkedin URLs (add yours!)**
- `stats`, `skillGroups`, `marqueeTech`, `experience`, `projects`

> 👉 Two placeholders to fill in: your **GitHub** and **LinkedIn** URLs in `profile`.

## Deploy
Push to GitHub and import into **Vercel** (or Netlify). Build command `npm run build`, output dir `dist`.
```bash
npm i -g vercel && vercel
```

## Tweak the look
- Colors / fonts / animations: [`tailwind.config.js`](tailwind.config.js)
- Global styles & cursor: [`src/index.css`](src/index.css)
- Background orbs/grid: [`src/components/Background.jsx`](src/components/Background.jsx)
