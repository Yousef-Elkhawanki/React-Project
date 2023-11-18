import React from "react";
import { FormContainer } from "../components/form/FormContainer";

export const Register = () => {
  return (
    <div className="login">
      <div className="container">
        <FormContainer
          header={"Register"}
          account={"I have Account"}
          accountPath={"/login"}
          navigateProp={"/login"}
        />
      </div>
    </div>
  );
};
