import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base './' makes the build work on GitHub Pages (project site or custom domain), Vercel and Netlify.
// PREVIEW=1 inlines fonts into the CSS so the site can be shown as a single self-contained page.
export default defineConfig({
  base: './',
  plugins: [react()],
  build: { assetsInlineLimit: process.env.PREVIEW ? 100_000_000 : 4096 },
})
