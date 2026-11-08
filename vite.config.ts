import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// O site é publicado em mauriciomanuelfinda.github.io/portfolio
export default defineConfig({
  plugins: [react()],
  base: '/portfolio/',
})
