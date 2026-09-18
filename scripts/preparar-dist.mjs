// Guarda de despliegue para el CNAME.
//
// El problema: en cuanto un CNAME llega a la rama gh-pages, GitHub Pages
// configura el dominio propio y empieza a redirigir
// inmersi.github.io/tspeak-web -> tspeak.app. Si el DNS de tspeak.app
// todavia no apunta a GitHub, esa redireccion no resuelve y el sitio
// queda inaccesible, justo cuando Google tiene que poder abrirlo.
//
// Por eso public/CNAME existe y esta listo, pero no viaja en el
// despliegue normal. El dia del cambio de dominio:
//
//   TSPEAK_CNAME=1 npm run deploy     (macOS / Linux)
//   set TSPEAK_CNAME=1 && npm run deploy   (Windows cmd)
//
// Antes de eso, comprueba que el DNS ya resuelve:  dig +short tspeak.app

import { existsSync, rmSync } from 'node:fs'
import { resolve } from 'node:path'

const cname = resolve(import.meta.dirname, '..', 'dist', 'CNAME')

if (process.env.TSPEAK_CNAME === '1') {
  console.log('CNAME incluido: el despliegue activara el dominio tspeak.app.')
} else if (existsSync(cname)) {
  rmSync(cname)
  console.log(
    'CNAME excluido del build (usa TSPEAK_CNAME=1 para activar tspeak.app).'
  )
}
