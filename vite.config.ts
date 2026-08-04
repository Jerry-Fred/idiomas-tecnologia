import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Configuracao do Vite: adiciona o plugin do React (JSX/Fast Refresh) e o
// plugin oficial do Tailwind CSS v4 (nao e preciso ficheiro tailwind.config.js
// separado -- a configuracao do tema vive em src/index.css, ver esse ficheiro).
export default defineConfig({
  plugins: [react(), tailwindcss()],
  // Base "/" funciona tanto na Vercel como em dominio proprio. Para publicar
  // em GitHub Pages num subdiretorio (ex.: username.github.io/repo), troque
  // para base: "/nome-do-repositorio/" antes do build -- ver README.md.
  base: '/',
})
