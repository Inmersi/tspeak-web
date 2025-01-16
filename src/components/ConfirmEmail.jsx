import React from "react";

const ConfirmEmail = ({ email }) => {
  return (
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
          Gracias por confirmar el siguiente correo electrónico: <strong>{email}</strong>. Ahora puedes iniciar sesión.
        </p>
        </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmEmail;
