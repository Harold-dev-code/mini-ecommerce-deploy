import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const repoName ='mini-ecommerce-deploy';

// https://vite.dev/config/
export default defineConfig({
  // Configura la ruta base para el despliegue
  base: `/${repoName}/`,
  plugins: [react()],
})
