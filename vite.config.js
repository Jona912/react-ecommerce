import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Detecta automáticamente si estás en GitHub Pages
 // <-- poné tu repo acá

export default defineConfig(({ command }) => ({
  plugins: [react()],
  base: '/react-ecommerce/',
}))
