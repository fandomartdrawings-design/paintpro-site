import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'path'

// Same deploy pattern as the PaintPro app: build in place, Apache serves the
// folder, index.html at the root hand-references ./assets/index.js?v=…
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: './',
  build: {
    outDir: 'assets',
    emptyOutDir: false,
    rollupOptions: {
      input: resolve(__dirname, 'src/main.jsx'),
      output: {
        entryFileNames: 'index.js',
        chunkFileNames: 'chunk-[hash].js',
        assetFileNames: (info) => {
          if (info.name && info.name.endsWith('.css')) return 'index.css'
          return '[name]-[hash][extname]'
        }
      }
    }
  }
})
