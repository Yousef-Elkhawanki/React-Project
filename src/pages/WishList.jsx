import React from "react";
import { PagesBanner } from "../components/common/PagesBanner";
import { CartEmpty } from "../components/common/CartEmpty";
import { Card } from "../components/common/Card";
export const WishList = () => {
  let wishListData;
  function getWishListDataFromLocalStorage() {
    if (localStorage.getItem("wishList")) {
      wishListData = JSON.parse(localStorage.getItem("wishList"));
      console.log(wishListData);
    } else {
      wishListData = [];
    }
  }
  getWishListDataFromLocalStorage();
  return (
    <>
      <PagesBanner
        img={"/assets/images/pageBanner.jpeg"}
        header={"WishList"}
        page={"Home"}
        path={"/"}
      />
      <div className="wishList-container">
        {wishListData.length > 0 ? (
          wishListData.map((data) => (
            <Card
              img={data.image}
              description={data.description}
              productName={data.productName}
              id={data.id}
            />
          ))
        ) : (
          <CartEmpty />
        )}
      </div>
    </>
  );
};
