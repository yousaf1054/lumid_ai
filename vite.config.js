import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/lumid_ai/',        // 👈 ADD THIS LINE
  plugins: [react()],
  publicDir: 'resources',
})
