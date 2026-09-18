import React from "react";
import { Link } from "react-router-dom";

const Contacto = () => (
  <section id="contacto" className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
    <div className="mx-auto w-full md:w-9/12 text-center">
      <h2 className="font-rammetto text-3xl text-gray-900">
        ¿Conversamos?
      </h2>
      <p className="mt-4 text-lg text-gray-600">
        Escríbenos si tienes dudas sobre TSpeak, si trabajas con niños y quieres
        usarla en tu consulta, o si necesitas ayuda con tu cuenta.
      </p>

      <a
        href="mailto:soporte@tspeak.app"
        className="mt-6 inline-block text-xl text-primary-dark underline"
      >
        soporte@tspeak.app
      </a>

      <p className="mt-8 text-gray-600">
        Para temas de privacidad y datos personales:{" "}
        <a href="mailto:privacidad@tspeak.app" className="text-primary-dark underline">
          privacidad@tspeak.app
        </a>
        . Puedes leer nuestra{" "}
        <Link to="/privacy-policy" className="text-primary-dark underline">
          Política de Privacidad
        </Link>{" "}
        o{" "}
        <Link to="/delete-account" className="text-primary-dark underline">
          eliminar tu cuenta
        </Link>{" "}
        cuando quieras.
      </p>
    </div>
  </section>
);

export default Contacto;
