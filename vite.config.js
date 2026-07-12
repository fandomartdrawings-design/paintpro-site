import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Standard Vite HTML-entry build. index.html is the entry point; Vite rewrites
// the <script>/<link> tags to hashed files in dist/ at build time. This is what
// Vercel expects (a clean dist/ with a complete index.html). base:'./' keeps
// asset URLs relative so the same dist/ can also be served from a subpath.
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: './',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
})
