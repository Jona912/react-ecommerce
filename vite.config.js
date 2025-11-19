import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Detecta automáticamente si estás en GitHub Pages
const repo = '/'; // <-- poné tu repo acá

export default defineConfig(({ command }) => ({
  plugins: [react()],
  base: command === 'build' ? `/${repo}/` : '/',
}))
