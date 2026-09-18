import React from "react";
import Layout from "../components/Layout";
import ReactMarkdown from "react-markdown";
import { Link } from "react-router-dom";

// La politica la mantiene el equipo en public/privacy_policy.md, que
// ademas se sigue sirviendo como markdown crudo para quien ya dependa de
// esa URL. Aqui la importamos en tiempo de build en vez de pedirla con
// fetch: asi la pagina no depende de una segunda peticion que puede
// fallar, no necesita estados de carga y no tiene que saber bajo que
// prefijo esta desplegado el sitio.
import textoPolitica from "../../public/privacy_policy.md?raw";

// Por si vuelve a haber secciones comentadas en el .md: react-markdown
// no interpreta HTML crudo y las mostraria como texto suelto.
const contenido = textoPolitica.replace(/<!--[\s\S]*?-->/g, "");

// El .md enlaza con URLs absolutas de tspeak.app para que tambien sirvan
// leido como markdown. Dentro del sitio las convertimos en navegacion
// del router, que ya sabe resolver el prefijo de GitHub Pages.
const RUTAS_INTERNAS = /^(?:https?:\/\/(?:www\.)?tspeak\.app)?(\/[^\s]*)$/;

const Enlace = ({ href = "", children }) => {
  const interna = RUTAS_INTERNAS.exec(href);
  if (interna) {
    return (
      <Link to={interna[1]} className="text-primary-dark underline">
        {children}
      </Link>
    );
  }
  return (
    <a
      href={href}
      className="text-primary-dark underline"
      {...(href.startsWith("http")
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {})}
    >
      {children}
    </a>
  );
};

const PrivacyPolicy = () => (
  <Layout>
    <div className="container mx-auto px-6 max-w-3xl pt-32 pb-20 font-wellfleet">
      <article
        className="prose prose-slate max-w-none
                   prose-headings:font-rammetto
                   prose-h1:text-3xl md:prose-h1:text-4xl prose-h1:text-gray-900
                   prose-h2:text-xl prose-h2:mt-10 prose-h2:text-gray-900
                   prose-h3:text-lg prose-h3:text-gray-800
                   prose-p:text-gray-700 prose-li:text-gray-700
                   prose-strong:text-gray-900"
      >
        <ReactMarkdown components={{ a: Enlace }}>{contenido}</ReactMarkdown>
      </article>

      <p className="mt-12 border-t pt-6 text-gray-700">
        ¿Quieres eliminar tu cuenta y tus datos?{" "}
        <Link className="text-primary-dark underline" to="/delete-account">
          Aquí te explicamos cómo
        </Link>
        .
      </p>
    </div>
  </Layout>
);

export default PrivacyPolicy;
