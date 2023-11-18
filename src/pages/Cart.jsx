import React from "react";
import { PagesBanner } from "../components/common/PagesBanner";

export const Cart = () => {
  return (
    <>
      <PagesBanner
        img={"/assets/images/pageBanner.jpeg"}
        header={"Cart"}
        page={"Home"}
        path={"/"}
      />
    </>
  );
};
