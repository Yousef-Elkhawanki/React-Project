import React from "react";

export const TextError = ({ children }) => {
  return (
    <div className="error-message">
      <span>{children}</span>
    </div>
  );
};
