import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/lumid_ai/',        // ✅ REQUIRED for GitHub Pages
  plugins: [react()],
  publicDir: 'resources',   // ✅ for images/static files
})
