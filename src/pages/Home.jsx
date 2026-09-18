import React from "react";
import MainSection from "../components/MainSection";
import Layout from "../components/Layout";
import ItemsGrid from "../components/ItemsGrid";
import PricingPlans from "../components/Pricingplans";
import Information from "../components/Information";
import Support from "../components/Support";
import AvisoImportante from "../components/AvisoImportante";
import Contacto from "../components/Contacto";

const Separador = ({ fuerte = false }) => (
  <div className="flex justify-center items-center my-10">
    <div className={`w-full border-t ${fuerte ? "border-gray-800" : "border-gray-300"}`} />
  </div>
);

const Home = () => {
  return (
    <div>
      <Layout>
        <MainSection />
        {/* El aviso va arriba, antes de las secciones de venta: quien
            llega desde la ficha de Google Play tiene que leer que esto
            no diagnostica ni reemplaza a un profesional. */}
        <AvisoImportante />
        <Separador />
        <Support />
        <Separador />
        <ItemsGrid />
        <Separador fuerte />
        <Information />
        <Separador />
        <PricingPlans />
        <Separador />
        <Contacto />
      </Layout>
    </div>
  );
};

export default Home;
