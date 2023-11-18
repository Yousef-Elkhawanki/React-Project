import { ErrorMessage, Field } from "formik";
import React from "react";
import { TextError } from "./TextError";

export const Input = (props) => {
  const { label, name, type, ...rest } = props;
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <Field type={type} name={name} {...rest}></Field>
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
};
