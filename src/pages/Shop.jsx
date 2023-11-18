import React, { useContext, useEffect, useState } from "react";
import { PagesBanner } from "../components/common/PagesBanner";
import { Card } from "../components/common/Card";
import {
  addToCartConfig,
  addToWishListConfig,
  getAllProduct,
  request,
  searchConfig,
} from "../utils/axiosConfig";
import { useMutation, useQuery } from "react-query";
import { addToWishListContext } from "../context/addToWishListContext";
import { SearchContext } from "../context/searchContext";

export const Shop = () => {
  const { searchValue } = useContext(SearchContext);
  const [searchData, setSearchData] = useState();
  const { data } = useQuery("products", getAllProduct);

  useEffect(() => {
    fetch(`http://localhost:3000/products?brand=${searchValue}`)
      .then((res) => res.json())
      .then((res) => setSearchData(res));
  }, [searchValue]);
  console.log(searchData);
  const addToCart = (data) => {
    addToCartConfig(data);
    console.log(data);
  };

  const addToWishList = (data) => {
    addToWishListConfig(data);
  };
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
          <div className="filtretion">
            <div className="Filteration-header">
              <h4>Filteration by</h4>
            </div>
          </div>
          <div className="cards">
            {searchData === undefined || []
              ? data?.data.map((data) => (
                  <Card
                    key={data.id}
                    description={data.description}
                    productName={data.productName}
                    img={data.image}
                    price={
                      data.onSale ? data.newPrice + "$" : data.oldPrice + "$"
                    }
                    oldPrice={data.onSale ? data.oldPrice + "$" : ""}
                    discount={data.onSale ? "discount" : ""}
                    id={data.id}
                    customeOnClick={(e) => addToWishList(data)}
                    addCart={() => addToCart(data)}
                  />
                ))
              : (data =
                  [] &&
                  searchData?.map((data) => (
                    <Card
                      key={data.id}
                      description={data.description}
                      productName={data.productName}
                      img={data.image}
                      price={
                        data.onSale ? data.newPrice + "$" : data.oldPrice + "$"
                      }
                      oldPrice={data.onSale ? data.oldPrice + "$" : ""}
                      discount={data.onSale ? "discount" : ""}
                      id={data.id}
                      customeOnClick={(e) => addToWishList(data)}
                      addCart={() => addToCart(data)}
                    />
                  )))}
          </div>
        </div>
      </div>
    </>
  );
};
