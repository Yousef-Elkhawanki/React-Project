import React from "react";
import { FormContainer } from "../components/form/FormContainer";

export const Login = () => {
  return (
    <div className="login">
      <div className="container">
        <FormContainer
          header={"login"}
          account={"don't Have Account"}
          accountPath={"/register"}
          navigateProp={"/"}
        />
      </div>
    </div>
  );
};
