import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/app.scss";
import { App } from "./App";
import IsMobileProvider from "./context/isMobileContext";
import AddToWishListProvider from "./context/addToWishListContext";
import SearchContextPrvider from "./context/searchContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AddToWishListProvider>
    <IsMobileProvider>
      <SearchContextPrvider>
        <App />
      </SearchContextPrvider>
    </IsMobileProvider>
  </AddToWishListProvider>
);
