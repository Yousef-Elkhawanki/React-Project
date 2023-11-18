import React, { useState } from "react";
import { AiFillHeart, AiFillStar } from "react-icons/ai";

export const SingleItemDetails = ({
  discount,
  oldPrice,
  price,
  Productname,
  description,
  stock,
  productImage,
  customeOnClick,
  quantity,
  inCreaseItem,
}) => {
  const [productId, setProductId] = useState(0);

  return (
    <div className="item">
      <div className="image">
        <img src={productImage} alt="" />
      </div>
      <div className="item-details">
        <h4>{Productname}</h4>
        <p>{description}</p>
        <span>
          Left <span>{stock}</span> items stock
        </span>
        <div className="price">
          <div>
            <span className={discount}>{price}</span>
            <del> {oldPrice}</del>
          </div>
          <div className="rate">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
          </div>
        </div>
        <div className="quantity">
          <button className="increse" onClick={inCreaseItem}>
            +
          </button>
          <input type="number" name="quantity" id="quantity" value={quantity} />
          <button className="decrese">-</button>
        </div>
        <div className="btns">
          <div className="btn" onClick={customeOnClick}>
            <button>Add To Cart</button>
          </div>
          <div className="addWishList">
            <AiFillHeart />
            <h6>Add To Wish List</h6>
          </div>
        </div>
      </div>
    </div>
  );
};
