import React from "react";
import ConfirmEmail from "../components/ConfirmEmail";
import Layout from "../components/Layout";
import { useSearchParams } from "react-router-dom";
const ConfirmSignup = () => {

  const [searchParams] = useSearchParams();

  // Obtén valores específicos
  const email = searchParams.get("email");

  
  return (
    <div>
     <Layout>
     <div className="bg-cover bg-center" style={{ backgroundImage: "url('/path-to-your-background-image.jpg')" }}>
      <div className="mx-auto  justify-center items-center mt-44">
    <div style={{ padding: "20px", textAlign: "center", minHeight: "50vh" }}>
      <div
        style={{
          backgroundColor: "#fff",
          padding: "40px",
          margin: "0 auto",
          maxWidth: "600px",
          borderRadius: "8px",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        }}
      >
        <p style={{ fontSize: "16px", color: "#333", marginBottom: "20px" }}>
          Próximamente disponible
        </p>
        </div>
        </div>
      </div>
    </div>
      </Layout>
    </div>
  );
};

export default ConfirmSignup;
