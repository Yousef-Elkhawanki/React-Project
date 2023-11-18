import React, { useContext } from "react";
import { AiFillStar, AiOutlineEye, AiOutlineHeart } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

export const Card = ({
  productName,
  description,
  price,
  img,
  oldPrice,
  discount,
  id,
  customeOnClick,
  addCart,
}) => {
  const navigate = useNavigate();

  return (
    <div className="card">
      <div className="card-container">
        <h5>{productName}</h5>
        <p>{description}</p>
        <div className="image-card">
          <img src={img} alt="" />
          <div className="icons">
            <div className="icon" onClick={customeOnClick}>
              <AiOutlineHeart />
            </div>
            <div
              className="icon"
              onClick={() => navigate(`/Shop/singleItem/${id}`)}
            >
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
      <div className="btn" onClick={addCart}>
        <button>Add To Cart</button>
      </div>
    </div>
  );
};
