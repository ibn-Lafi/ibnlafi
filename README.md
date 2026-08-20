# Ali Al-Jahdali — Personal Portfolio

A bilingual (Arabic / English) personal portfolio site — no backend, no
database. Built with Next.js (App Router), TypeScript, and Tailwind CSS.

## Features

- **Sections**: Hero, About, Experience, Skills, Achievements, Education, Courses, Contact.
- **Bilingual**: Arabic (default, RTL) and English (LTR), routed at `/ar` and `/en`.
  Language preference is remembered via a cookie; browser language is detected
  on first visit.
- **Light / dark mode**: follows the system preference by default, with a
  manual toggle.
- **Responsive**: mobile-first layout, tested from 390px phones up.
- **Strict black & white design system**: no color palette beyond
  grayscale — accents come from contrast and spacing, not color.
- **Security hardened**: nonce-based Content-Security-Policy, HSTS,
  `X-Frame-Options`, `X-Content-Type-Options`, `Referrer-Policy`,
  `Permissions-Policy`, no inline scripts, self-hosted fonts (no third-party
  font requests).

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) — you'll be redirected to
`/ar` or `/en` based on your browser language.

## Editing content

All page copy lives in two typed files, one per language:

- `src/content/ar.ts`
- `src/content/en.ts`

Both implement the same `PortfolioContent` shape defined in
`src/content/types.ts`, so editing a section (experience, skills, education,
etc.) in one language will show a TypeScript error if the other language's
file is left out of sync in shape.

## Project structure

```
src/
  app/[locale]/       Route segment for "ar" and "en", layout + page
  components/          Navbar, theme/language toggles, section components
  content/              Typed bilingual content (ar.ts / en.ts / types.ts)
  i18n/                  Locale list, default locale, RTL/LTR mapping
  proxy.ts               Locale detection/redirect + CSP nonce generation
```

## Scripts

```bash
npm run dev      # start the dev server
npm run build    # production build
npm run start    # run the production build (respects $PORT)
npm run lint     # eslint
```

## Deploying on Railway

1. Push this repository to GitHub (or connect it directly) and create a new
   Railway project from it.
2. Railway auto-detects the Node/Next.js app via Nixpacks. The included
   `railway.json` pins the build/start commands explicitly:
   - Build: `npm run build`
   - Start: `npm run start` (binds to Railway's `$PORT` automatically)
3. No database or extra services are required — this is a static-content
   site rendered by a single Next.js Node process.
4. Set a custom domain in Railway's settings once deployed, and consider
   submitting it to [hstspreload.org](https://hstspreload.org) since HSTS
   `preload` is already enabled in `next.config.ts`.

No environment variables are required for a default deployment.

## Before going live

- Replace the placeholder copy in `src/content/ar.ts` and `src/content/en.ts`
  (experience, skills, achievements, education, courses, contact email,
  social links).
- Update `metadataBase` in `src/app/[locale]/layout.tsx` to the real
  production domain (used for absolute Open Graph URLs).
- The "Download CV" button currently links to the About section as a
  placeholder — point it at a real PDF once one exists (e.g. `/cv.pdf` in
  `public/`), and add it to `img-src`/`default-src` in `src/proxy.ts` if it's
  served from a different origin.
