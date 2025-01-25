# AlphaArchitects Website

Website-ul oficial AlphaArchitects - o companie de design interior și arhitectură din Timișoara, România.

## Tehnologii Utilizate

- Next.js 14
- React
- Tailwind CSS
- shadcn/ui
- TypeScript

## Cerințe Sistem

- Node.js 18.17 sau mai recent
- npm sau yarn

## Instalare

1. Clonează repository-ul:
```bash
git clone https://github.com/alphaarchitects/website.git
cd website
\```

2. Instalează dependențele:
```bash
npm install
# sau
yarn install
\```

3. Pornește serverul de dezvoltare:
```bash
npm run dev
# sau
yarn dev
\```

4. Deschide [http://localhost:3000](http://localhost:3000) în browser.

## Deployment pe Cloudflare Pages

1. Creează un cont pe Cloudflare și conectează-te la dashboard

2. În Cloudflare Pages, click pe "Create a project"

3. Conectează repository-ul GitHub

4. Configurează build settings:
   - Framework preset: Next.js
   - Build command: `npm run build`
   - Build output directory: `.next`
   - Node.js version: 18.x

5. Click pe "Save and Deploy"

## Structura Proiectului

