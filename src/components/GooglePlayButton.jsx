import React from "react";

// Espacio reservado para el boton de Google Play.
//
// Cuando la app este publicada, pega aqui la URL de la ficha y el boton
// se activa en todos los sitios donde aparece (portada y pie). Google
// pide que el boton use su imagen oficial ("Disponible en Google Play"),
// que puedes descargar de play.google.com/intl/es/badges y dejar en
// public/ para no depender de un servidor de terceros.
export const URL_GOOGLE_PLAY = "";

const GooglePlayButton = ({ className = "" }) => {
  if (!URL_GOOGLE_PLAY) {
    return (
      <span
        className={`inline-block rounded-full border-2 border-dashed border-gray-400 px-8 py-3 text-gray-600 ${className}`}
      >
        Próximamente en Google Play
      </span>
    );
  }

  return (
    <a
      href={URL_GOOGLE_PLAY}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-block rounded-full bg-primary-dark px-8 py-3 text-white transition-all duration-300 hover:opacity-80 ${className}`}
    >
      Descargar en Google Play
    </a>
  );
};

export default GooglePlayButton;
