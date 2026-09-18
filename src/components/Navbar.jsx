import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";

const SECCIONES = [
  { to: "/#que-es", texto: "Sobre TSpeak" },
  { to: "/#caracteristicas", texto: "Características" },
  { to: "/#contacto", texto: "Contacto" },
];

const enlaceEscritorio =
  "text-white hover:underline hover:decoration-white hover:decoration-2 " +
  "focus:underline focus:decoration-white focus:decoration-2 transition-all";

const Navbar = () => {
  const [abierto, setAbierto] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-primary shadow z-50 text-white">
      <nav className="container mx-auto flex items-center justify-between py-4 px-6 md:px-10 w-full font-rammetto md:w-9/12">
        <Link to="/" aria-label="Ir a la portada de TSpeak">
          <Logo color="text-white" />
        </Link>

        <ul className="hidden md:flex space-x-6 font-wellfleet">
          {SECCIONES.map((seccion) => (
            <li key={seccion.to}>
              <Link to={seccion.to} className={enlaceEscritorio}>
                {seccion.texto}
              </Link>
            </li>
          ))}
        </ul>

        <button
          className="md:hidden text-white focus:outline-none focus:ring-2 focus:ring-white rounded"
          aria-label={abierto ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={abierto}
          onClick={() => setAbierto((estaba) => !estaba)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
            {abierto ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {abierto && (
        <ul className="md:hidden bg-primary px-6 pb-4 space-y-3 font-wellfleet border-t border-white/20">
          {SECCIONES.map((seccion) => (
            <li key={seccion.to}>
              <Link to={seccion.to} className="block py-1" onClick={() => setAbierto(false)}>
                {seccion.texto}
              </Link>
            </li>
          ))}
          <li>
            <Link to="/privacy-policy" className="block py-1" onClick={() => setAbierto(false)}>
              Política de Privacidad
            </Link>
          </li>
          <li>
            <Link to="/delete-account" className="block py-1" onClick={() => setAbierto(false)}>
              Eliminar mi cuenta
            </Link>
          </li>
        </ul>
      )}
    </header>
  );
};

export default Navbar;
