import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// ⚙️ reemplazá "react-ecommerce" por el nombre de tu repo
export default defineConfig({
  plugins: [react()],
  base: '/react-ecommerce/',
})

