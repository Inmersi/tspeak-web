import React from "react";
import Logo from "./Logo";

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-primary shadow z-50 text-white">
      <nav className="container mx-auto flex items-center justify-between py-4 px-6 md:px-10 w-full font-rammetto md:w-9/12">
        <Logo color="text-white" />
        <ul className="hidden md:flex space-x-6 font-wellfleet">
          <li>
            <a
              href="#about"
              className="text-white hover:underline hover:decoration-white focus:underline focus:decoration-white hover:decoration-2 hover:decoration-2px focus:decoration-2 focus:decoration-2px mb-2 transition-all"
            >
              Sobre nosotros
            </a>
          </li>
          <li>
            <a
              href="#features"
              className="text-white hover:underline hover:decoration-white focus:underline focus:decoration-white hover:decoration-2 hover:decoration-2px focus:decoration-2 focus:decoration-2px mb-2 transition-all"
            >
              Características
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="text-white hover:underline hover:decoration-white focus:underline focus:decoration-white hover:decoration-2 hover:decoration-2px focus:decoration-2 focus:decoration-2px mb-2 transition-all"
            >
              Contacto
            </a>
          </li>
        </ul>

        <button
          className="md:hidden text-gray-700 focus:outline-none"
          aria-label="Toggle Menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
