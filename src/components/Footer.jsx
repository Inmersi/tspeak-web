import React from "react";
import { FaFacebook, FaWhatsapp, FaYoutube } from "react-icons/fa";

import Logo from "../components/Logo";
const Footer = () => {
  return (
    <footer className="bg-gray-100 py-8 ">
      <div className="container mx-auto px-4 md:w-9/12 mx-auto" style={{ fontSize: "16px"}}>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-start">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-4">
              <Logo></Logo>
            </div>
            {/* Botones de descarga */}
            <div className="mt-6 flex space-x-4">
            <a className="bg-primary text-white px-6 py-2 rounded-full  hover:opacity-80 transition-all duration-300">
            Descargar
            </a>
            </div>
          </div>

          {/* Columna 2: Recursos */}
          <div>
            <h3 className="mb-4">Recursos</h3>
            <ul className="space-y-2 text-gray-600">
              <li><a href="future" className="hover:text-black">Academia para Padres</a></li>
              <li><a href="future" className="hover:text-black">Evaluación</a></li>
              <li><a href="future" className="hover:text-black">Pruebas de Juego</a></li> 
            </ul>
          </div>

          {/* Columna 3: Comunidad */}
          <div>
            <h3 className="mb-4">Comunidad</h3>
            <ul className="space-y-2 text-gray-600">
              <li><a href="future" className="hover:text-black">Embajadores</a></li>
              <li><a href="future" className="hover:text-black">Testimonios</a></li>
            </ul>
          </div>

          {/* Columna 4: Soporte */}
          <div>
            <h3 className="mb-4">Soporte</h3>
            <ul className="space-y-2 text-gray-600">
              <li><a href="future" className="hover:text-black">Política de Privacidad</a></li>
              <li><a href="future" className="hover:text-black">Preguntas Frecuentes</a></li>
              <li><a href="future" className="hover:text-black">Contáctanos</a></li>
            </ul>
          </div>

        </div>

        {/* Parte inferior */}
        <div className="mt-8 border-t flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
        
            <p className="mt-4 text-gray-600">
            Copyright © inmersi 2024. Todos los derechos reservados.          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="https://www.facebook.com/profile.php?id=61567675665448" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="text-blue-600 hover:text-blue-800 text-3xl" />
            </a>
            <a href="https://api.whatsapp.com/send/?phone=916809060&text=tspeak&type=phone_number&app_absent=0https://api.whatsapp.com/send?phone=51916809060&text=Bienvenido%20a%20Tspeak" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp className="text-green-500 hover:text-green-800 text-3xl" />
            </a>
            <a href="https://www.youtube.com/@Tspeak-inmersi" target="_blank" rel="noopener noreferrer">
              <FaYoutube className="text-red-600 hover:text-red-800 text-3xl" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
