import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { resolve } from 'node:path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],

  // Base relativa a proposito. Con una base absoluta ('/' o
  // '/tspeak-web/') el build solo sirve para una de las dos URLs del
  // sitio y habria que recompilar el dia que tspeak.app apunte aqui.
  // Con './' el navegador resuelve los assets contra el documento, asi
  // que el mismo dist funciona en las dos. Vite ademas emite los assets
  // importados desde JS como new URL(..., import.meta.url), que se
  // resuelve contra el chunk y no contra la ruta de la pagina.
  base: './',

  build: {
    outDir: 'dist',
    rollupOptions: {
      // Una entrada HTML real por cada pagina que Google va a abrir
      // directo. GitHub Pages sirve /privacy-policy desde
      // privacy-policy.html y responde 200; si solo existiera index.html
      // devolveria 404 y recien despues el JS de public/404.html
      // rescataria la ruta. El 404 sigue ahi como red de seguridad para
      // el resto de rutas de la SPA.
      input: {
        index: resolve(__dirname, 'index.html'),
        'privacy-policy': resolve(__dirname, 'privacy-policy.html'),
        'delete-account': resolve(__dirname, 'delete-account.html'),
      },
    },
  },
})
