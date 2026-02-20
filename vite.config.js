import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/lumid_ai/',
  plugins: [react()],
  publicDir: 'resources',
  base: '/lumid_ai/',
})
