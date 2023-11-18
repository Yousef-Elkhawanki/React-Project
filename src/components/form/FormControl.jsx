import React from "react";
import { Input } from "./Input";

export const FormControl = (props) => {
  const { control, ...rest } = props;
  switch (control) {
    case "input":
      return <Input {...rest} />;
  }
};
