// El sitio tiene que funcionar en dos URLs sin recompilar:
//
//   hoy      https://inmersi.github.io/tspeak-web/   (GitHub Pages de proyecto)
//   despues  https://tspeak.app/                     (dominio propio via CNAME)
//
// La diferencia es solo el prefijo de ruta. Lo deducimos del hostname:
// en un dominio propio no hay prefijo, y en *.github.io el prefijo es
// siempre el primer segmento (el nombre del repositorio). No lo dejamos
// escrito a mano para que renombrar el repo no rompa el sitio.
//
// Los assets no dependen de esto: vite.config.ts usa base relativa, asi
// que el navegador los resuelve solos. Este valor es solo para el router.
export function detectarBase(loc: Location | URL = window.location): string {
  if (!loc.hostname.endsWith(".github.io")) return "";
  const repo = loc.pathname.split("/")[1] ?? "";
  return repo ? `/${repo}` : "";
}

export const BASE = detectarBase();
