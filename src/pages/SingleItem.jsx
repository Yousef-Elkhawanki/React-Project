import React from "react";
import { PagesBanner } from "../components/common/PagesBanner";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { displaySingleProduct } from "../utils/axiosConfig";

export const SingleItem = () => {
  const { id } = useParams();
  console.log(id);
  const x = useQuery("", async () => {});
  console.log(x);
  return (
    <>
      <PagesBanner
        img={"/assets/images/pageBanner.jpeg"}
        header={"test"}
        page={"test"}
        path={"/shop"}
      />
    </>
  );
};
