import React from "react";
import { FaFacebook, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

import Logo from "../components/Logo";
import GooglePlayButton from "./GooglePlayButton";

// Link y no <a href>: en GitHub Pages el sitio cuelga de /tspeak-web y
// un href absoluto como "/privacy-policy" se saldria del prefijo.
const Footer = () => {
  return (
    <footer className="bg-gray-100 py-8">
      <div className="container mx-auto px-4 md:w-9/12" style={{ fontSize: "16px" }}>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-start">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-4">
              <Logo></Logo>
            </div>
            <div className="mt-6">
              <GooglePlayButton />
            </div>
          </div>

          {/* Columna 2: Recursos */}
          <div>
            <h3 className="mb-4">Recursos</h3>
            <ul className="space-y-2 text-gray-600">
              <li><Link to="/future" className="hover:text-black">Academia para Padres</Link></li>
              <li><Link to="/future" className="hover:text-black">Evaluación</Link></li>
              <li><Link to="/future" className="hover:text-black">Pruebas de Juego</Link></li>
            </ul>
          </div>

          {/* Columna 3: Comunidad */}
          <div>
            <h3 className="mb-4">Comunidad</h3>
            <ul className="space-y-2 text-gray-600">
              <li><Link to="/future" className="hover:text-black">Embajadores</Link></li>
              <li><Link to="/future" className="hover:text-black">Testimonios</Link></li>
            </ul>
          </div>

          {/* Columna 4: Soporte */}
          <div>
            <h3 className="mb-4">Soporte</h3>
            <ul className="space-y-2 text-gray-600">
              <li><Link to="/privacy-policy" className="hover:text-black">Política de Privacidad</Link></li>
              <li><Link to="/delete-account" className="hover:text-black">Eliminar mi cuenta</Link></li>
              <li>
                <a href="mailto:soporte@tspeak.app" className="hover:text-black">
                  soporte@tspeak.app
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Cofinanciamiento: va en el pie de todas las paginas porque es
            una obligacion del convenio, no solo un dato de la portada. */}
        <p className="mt-8 border-t pt-6 text-sm text-gray-600">
          Proyecto cofinanciado por ProInnóvate – Ministerio de la Producción.
        </p>

        {/* Parte inferior */}
        <div className="mt-4 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
          <p className="mt-4 text-gray-600">
            Copyright © TSPEAK S.A.C.S. 2026. Todos los derechos reservados.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="https://www.facebook.com/profile.php?id=61567675665448" target="_blank" rel="noopener noreferrer" aria-label="Facebook de TSpeak">
              <FaFacebook className="text-blue-600 hover:text-blue-800 text-3xl" />
            </a>
            <a href="https://api.whatsapp.com/send?phone=51916809060&text=Bienvenido%20a%20Tspeak" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp de TSpeak">
              <FaWhatsapp className="text-green-500 hover:text-green-800 text-3xl" />
            </a>
            <a href="https://www.youtube.com/@Tspeak-inmersi" target="_blank" rel="noopener noreferrer" aria-label="YouTube de TSpeak">
              <FaYoutube className="text-red-600 hover:text-red-800 text-3xl" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
