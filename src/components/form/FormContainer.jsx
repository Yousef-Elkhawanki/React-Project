import { Form, Formik } from "formik";
import React, { useState } from "react";
import { FormControl } from "./FormControl";
import * as Yup from "yup";
import { loginAuth, registerAuth } from "../../utils/axiosConfig";
import { Link, useNavigate } from "react-router-dom";
import { FaSpinner } from "react-icons/fa";

export const FormContainer = ({
  header,
  navigateProp,
  accountPath,
  account,
}) => {
  const [loading, setLoading] = useState(false);
  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().email().required("Email Required..."),
    password: Yup.string()
      .required("No password provided.")
      .min(8, "Password is too short - should be 8 chars minimum.")
      .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
  });
  const navigate = useNavigate();
  const onSubmit = (value) => {
    console.log(value);
    setLoading(true);
    setTimeout(() => {
      navigate(`${navigateProp}`);
    }, 1500);
  };
  return (
    <div className="form-container">
      <div className="form-container-Header">
        <h3>{header}</h3>
        <div className="form">
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            {(formik) => (
              <Form>
                <FormControl
                  control="input"
                  type="email"
                  name="email"
                  label={"Enter Your Email"}
                />
                <FormControl
                  control="input"
                  type="password"
                  name="password"
                  label={"Enter Your password"}
                />

                <div className="btns">
                  <button type="submit">
                    {loading ? <FaSpinner className="loader" /> : header}
                  </button>
                  <Link to={`${accountPath}`}>{account}</Link>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};
