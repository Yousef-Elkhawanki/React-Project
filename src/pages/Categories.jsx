import React from "react";
import { PagesBanner } from "../components/common/PagesBanner";

export const Categories = () => {
  return (
    <>
      <PagesBanner
        img={"/assets/images/pageBanner.jpeg"}
        header={"categories"}
        page={"home"}
        path={"/"}
      />
    </>
  );
};
