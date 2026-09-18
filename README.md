# tspeak-web

Sitio web de **TSpeak**, la aplicación de TSPEAK S.A.C.S. React + Vite + Tailwind,
desplegado en GitHub Pages.

## Páginas

| Ruta               | Para qué sirve                                                        |
| ------------------ | --------------------------------------------------------------------- |
| `/`                | Portada: qué es TSpeak, aviso de alcance, características y contacto. |
| `/privacy-policy`  | Política de privacidad. **La exige Google Play.**                     |
| `/delete-account`  | Cómo eliminar la cuenta y los datos. **La exige Google Play.**        |
| `/confirm-signup`  | Confirmación de correo tras el registro.                              |
| `/future`          | Marcador para secciones que aún no existen.                           |

Las dos páginas que pide Google son públicas y no requieren iniciar sesión.

## Desarrollo

```bash
npm install
npm run dev      # http://localhost:5173
```

El contenido de la política de privacidad **no se edita en el componente**: vive en
`public/privacy_policy.md` y se incrusta en la página en tiempo de compilación. Edita
ese archivo y actualiza la línea de «Última actualización» al hacerlo.

## Probar el sitio como lo verá Google

`npm run dev` sirve todo desde la raíz, así que no reproduce cómo se comporta
GitHub Pages. Para probar el build real:

```bash
npm run build
npm run preview   # http://localhost:4173
```

Y para reproducir la URL de GitHub Pages con su prefijo `/tspeak-web`, hace falta
un servidor que resuelva como Pages (`/privacy-policy` → `privacy-policy.html`).
`npm run preview` no lo hace; la comprobación de verdad es abrir la URL desplegada
después de un `npm run deploy`.

Revisa siempre estas cuatro cosas antes de dar una URL a Google:

1. `https://<dominio>/privacy-policy` abre sin iniciar sesión y responde **200**.
2. `https://<dominio>/delete-account` abre sin iniciar sesión y responde **200**.
3. Los estilos cargan (si no, el prefijo de las rutas está mal).
4. La fecha de «Última actualización» es la correcta.

## Desplegar

```bash
npm run deploy
```

`predeploy` limpia, compila y quita el `CNAME` del build. Publica en la rama
`gh-pages`, que es lo que sirve <https://inmersi.github.io/tspeak-web/>.

### El día que tspeak.app apunte aquí

`public/CNAME` ya contiene `tspeak.app`, pero **el despliegue normal no lo
publica a propósito**: en cuanto ese archivo llega a `gh-pages`, GitHub Pages
activa el dominio propio y redirige `inmersi.github.io/tspeak-web` →
`tspeak.app`. Si el DNS todavía no resuelve, el sitio queda inaccesible.

Cuando el DNS ya esté configurado y `dig +short tspeak.app` responda:

```bash
TSPEAK_CNAME=1 npm run deploy          # macOS / Linux
set TSPEAK_CNAME=1 && npm run deploy   # Windows (cmd)
```

No hay que tocar ni recompilar nada más: el sitio detecta el prefijo en tiempo
de ejecución (`src/lib/base.ts`) y los assets usan rutas relativas, así que el
mismo build sirve para las dos URLs.

## Cómo funcionan las rutas

GitHub Pages no conoce las rutas de una SPA. Aquí se resuelve en dos capas:

- **Páginas con HTML propio.** `vite.config.ts` compila `index.html`,
  `privacy-policy.html` y `delete-account.html` por separado, así que Pages
  sirve `/privacy-policy` con un **200** de verdad y con su propio `<title>`,
  `description` y Open Graph.
- **El resto.** `public/404.html` guarda la ruta pedida en `?redirect=`, salta a
  la raíz del sitio y `src/main.tsx` devuelve la URL a su forma original antes
  de montar el router.

Si añades una ruta que Google o un buscador deba abrir directamente, dale su
propio HTML en `rollupOptions.input` en vez de dejarla en el 404.
