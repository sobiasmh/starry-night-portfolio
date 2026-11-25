# Sobia Zulfiqar — Portfolio

Dark, minimal React site (Vite + React + TypeScript + Framer Motion).

## Run locally
```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build in dist/
```

## Edit content
All text lives in `src/data.ts` (about, numbers, experience, selected work, skills, art). No component changes needed.

## Add your art
1. Put image files in `public/art/` (JPG/WebP, ideally under 500 KB each).
2. Add them to the `art` list in `src/data.ts`:
```ts
export const art: ArtPiece[] = [
  { src: 'art/moon.jpg', title: 'Moon study', medium: 'Digital', year: '2025' },
]
```
The placeholder frames disappear automatically once the list has items.

## Push to GitHub
```bash
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/sobiasmh/sobiasmh.github.io.git   # create this empty repo first
git push -u origin main
```
Naming the repo `sobiasmh.github.io` gives you the root address `https://sobiasmh.github.io`.

## Deploy (GitHub Pages)
1. On GitHub: repo **Settings → Pages → Build and deployment → Source: GitHub Actions**.
2. Every push to `main` runs `.github/workflows/deploy.yml` and publishes the site.

## Custom domain (e.g. sobiazulfiqar.com)
1. Buy the domain from a registrar (nothing here registers it for you).
2. Repo **Settings → Pages → Custom domain**, enter the domain and save (GitHub creates a `CNAME` file).
3. At your registrar add DNS records as GitHub's Pages docs describe (A records / CNAME to `sobiasmh.github.io`), then tick **Enforce HTTPS**.

## Other hosts
Vercel / Netlify / Cloudflare Pages: import the repo, build command `npm run build`, output directory `dist`.
