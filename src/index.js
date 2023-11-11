import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/app.scss";
import { App } from "./App";
import IsMobileProvider from "./context/isMobileContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <IsMobileProvider>
      <App />
    </IsMobileProvider>
  </React.StrictMode>
);
