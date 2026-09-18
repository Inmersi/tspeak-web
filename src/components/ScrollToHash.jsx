import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// El router no hace scroll al ancla por su cuenta. Con esto un enlace
// como /#contacto funciona igual desde la portada que desde la politica
// de privacidad.
const ScrollToHash = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
      return;
    }
    // La seccion puede no existir todavia en el primer render tras
    // cambiar de pagina, asi que esperamos al siguiente frame.
    const id = decodeURIComponent(hash.slice(1));
    const frame = requestAnimationFrame(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    });
    return () => cancelAnimationFrame(frame);
  }, [pathname, hash]);

  return null;
};

export default ScrollToHash;
