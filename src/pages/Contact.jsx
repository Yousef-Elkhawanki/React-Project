import React from "react";
import { PagesBanner } from "../components/common/PagesBanner";

export const Contact = () => {
  return (
    <>
      <PagesBanner
        img={"/assets/images/pageBanner.jpeg"}
        header={"contact"}
        page={"home"}
        path={"/"}
      />
    </>
  );
};
