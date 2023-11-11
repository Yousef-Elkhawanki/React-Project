import React from "react";
import { PagesBanner } from "../components/common/PagesBanner";
import { Card } from "../components/common/Card";
import { getAllProduct } from "../utils/axiosConfig";
import { useQuery } from "react-query";
import { Outlet } from "react-router-dom";

export const Shop = () => {
  const { data } = useQuery("products", getAllProduct);
  console.log(data?.data);
  return (
    <>
      <PagesBanner
        header={"shop"}
        path={"/"}
        img={"/assets/images/pageBanner.jpeg"}
        page={"home"}
      />
      <div className="shop-container">
        <div className="container">
          {data?.data.map((data) => (
            <Card
              description={data.description}
              productName={data.productName}
              img={data.image}
              price={data.onSale ? data.newPrice + "$" : data.oldPrice + "$"}
              oldPrice={data.onSale ? data.oldPrice + "$" : ""}
              discount={data.onSale ? "discount" : ""}
              id={data.id}
            />
          ))}
        </div>
      </div>
    </>
  );
};
