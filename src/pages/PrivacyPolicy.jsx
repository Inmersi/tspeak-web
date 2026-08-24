import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import ReactMarkdown from "react-markdown";
import { Link } from "react-router-dom";

// La política vive en public/privacy_policy.md, que es lo que el equipo
// mantiene. Esta página la sirve como HTML en una URL propia: Play
// Console rechaza una URL que devuelve texto plano desde un repositorio.
const PrivacyPolicy = () => {
  const [contenido, setContenido] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch("/privacy_policy.md")
      .then((res) => {
        if (!res.ok) throw new Error(String(res.status));
        return res.text();
      })
      // El .md tiene secciones comentadas en HTML. react-markdown no
      // interpreta HTML crudo, así que las mostraría como texto suelto
      // en medio de la política.
      .then((texto) => setContenido(texto.replace(/<!--[\s\S]*?-->/g, "")))
      .catch(() => setError(true));
  }, []);

  return (
    <Layout>
      <div className="container mx-auto px-6 md:w-9/12 pt-32 pb-20 font-wellfleet">
        {error && (
          <div>
            <h1 className="font-rammetto text-3xl text-gray-900">
              Política de Privacidad
            </h1>
            <p className="mt-4 text-gray-700">
              No pudimos cargar la política en este momento. Escríbenos a{" "}
              <a className="underline" href="mailto:privacidad@tspeak.app">
                privacidad@tspeak.app
              </a>{" "}
              y te la enviamos.
            </p>
          </div>
        )}

        {!error && !contenido && (
          <p className="text-gray-600">Cargando la política…</p>
        )}

        {contenido && (
          <article className="prose prose-slate max-w-none prose-headings:font-rammetto">
            <ReactMarkdown>{contenido}</ReactMarkdown>
          </article>
        )}

        <p className="mt-10 text-gray-700">
          ¿Quieres eliminar tu cuenta y tus datos?{" "}
          <Link className="underline" to="/delete-account">
            Aquí te explicamos cómo
          </Link>
          .
        </p>
      </div>
    </Layout>
  );
};

export default PrivacyPolicy;
