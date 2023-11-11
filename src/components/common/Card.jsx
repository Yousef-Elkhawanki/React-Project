import React from "react";
import { AiFillStar, AiOutlineEye, AiOutlineHeart } from "react-icons/ai";
import { Link } from "react-router-dom";
export const Card = ({
  productName,
  description,
  price,
  img,
  oldPrice,
  discount,
  id,
}) => {
  return (
    <Link to={`/Shop/singleItem/${id}`} className="card">
      <div className="card-container">
        <h5>{productName}</h5>
        <p>{description}</p>
        <div className="image-card">
          <img src={img} alt="" />
          <div className="icons">
            <div className="icon">
              <AiOutlineHeart />
            </div>
            <div className="icon">
              <AiOutlineEye />
            </div>
          </div>
        </div>
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
      </div>
      <div className="btn">
        <button>Add To Cart</button>
      </div>
    </Link>
  );
};
