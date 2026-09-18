import React from "react";
import Layout from "../components/Layout";
const Future = () => {

  return (
    <div>
     <Layout>
     <div>
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

export default Future;
