import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Standard Vite HTML-entry build. base:'/' (absolute) is required for
// client-side routes like /paintpro — relative asset URLs would resolve
// against the route path and 404. Local preview: `npm run preview`.
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
})
