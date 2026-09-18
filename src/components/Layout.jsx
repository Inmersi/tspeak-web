import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    // min-h-screen y no h-screen: con altura fija la fila del contenido
    // se queda del alto de la ventana y en paginas largas (la politica
    // de privacidad) el footer se monta encima del texto.
    <div className="grid grid-rows-[auto,1fr,auto] min-h-screen">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
