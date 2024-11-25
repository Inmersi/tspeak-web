import React from "react";
import MainSection from "../components/MainSection";
import Layout from "../components/Layout";
import ClinicSection from "../components/ClinicSection";
import ItemsGrid from "../components/ItemsGrid";
import PricingPlans from "../components/Pricingplans";
import Information from "../components/Information";
import Support from "../components/Support";
import Services from "../components/Services";

const Home = () => {
  return (
    <div>
      <Layout>
        <MainSection />
        <Support />
        <div className="flex justify-center items-center my-10">
          <div className="w-full border-t border-gray-300"></div>
        </div>
        <div className="flex justify-center items-center my-10">
          <div className="w-full border-t border-gray-300"></div>
        </div>
        <ItemsGrid />
        <div className="flex justify-center items-center my-10">
          <div className="w-full border-t border-gray-800"></div>
        </div>
        <Information />
        <div className="flex justify-center items-center my-10">
          <div className="w-full border-t border-gray-300"></div>
        </div>
        <PricingPlans />
      </Layout>
    </div>
  );
};

export default Home;
