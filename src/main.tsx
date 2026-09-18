import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BASE } from './lib/base'

// public/404.html deja aqui la ruta original en ?redirect=. La
// restauramos ahora y no en el <head> del HTML: los assets se
// referencian de forma relativa, asi que cambiar la URL mientras el
// navegador todavia parsea el documento haria que resolviera /assets
// contra la ruta profunda. En este punto el bundle ya cargo.
//
// Tiene que correr antes de montar el router, que lee window.location
// una sola vez al montarse.
const redirect = new URLSearchParams(window.location.search).get('redirect')
// Solo rutas internas: "//otro-sitio" tambien empieza con "/" y dejaria
// la barra de direcciones mostrando un origen que no es el nuestro.
if (redirect && redirect.startsWith('/') && !redirect.startsWith('//')) {
  window.history.replaceState(null, '', BASE + redirect)
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
