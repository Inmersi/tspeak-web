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
        <ConfirmEmail email={email} />
      </Layout>
    </div>
  );
};

export default ConfirmSignup;
