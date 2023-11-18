import React from "react";
import { Link } from "react-router-dom";

export const CartEmpty = () => {
  return (
    <div className="cartEmpty">
      <h4>Cart Is Empty ...</h4>
      <Link to={"/shop"}>Shop now</Link>
    </div>
  );
};
