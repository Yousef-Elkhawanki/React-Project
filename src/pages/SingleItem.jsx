import React, { useState } from "react";
import { PagesBanner } from "../components/common/PagesBanner";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { displaySingleProduct } from "../utils/axiosConfig";
import { SingleItemDetails } from "../components/common/SingleItemDetails";

export const SingleItem = () => {
  const { id } = useParams();
  const { data } = useQuery("singleItem", () => {
    return displaySingleProduct(id);
  });
  const [quantity, setQuantity] = useState(1);
  function addToCart() {
    localStorage.setItem("addToCart", JSON.stringify(data?.data));
  }
  function inCreaseItem() {
    const getData = JSON.parse(localStorage.getItem("addToCart"));
    setQuantity(getData.quantity += 1);
    console.log(quantity);
  }
  return (
    <>
      <PagesBanner
        img={"/assets/images/pageBanner.jpeg"}
        header={data?.data.productName}
        page={"home"}
        path={"/"}
        page2={" shop -"}
        path2={"/shop"}
      />
      <div className="singleItemDetails">
        <div className="container">
          <SingleItemDetails
            productImage={data?.data.image}
            Productname={data?.data.productName}
            stock={data?.data.stock}
            description={data?.data.description}
            discount={data?.data.onSale ? "discount" : ""}
            price={
              data?.data.onSale
                ? data?.data.newPrice + "$"
                : data?.data.oldPrice + "$"
            }
            oldPrice={data?.data.onSale ? data?.data.oldPrice + "$" : ""}
            customeOnClick={addToCart}
            quantity={data?.data.quantity}
            inCreaseItem={inCreaseItem}
          />
        </div>
      </div>
    </>
  );
};
