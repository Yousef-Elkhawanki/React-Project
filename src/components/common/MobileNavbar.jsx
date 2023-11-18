import React, { useState } from "react";
import { BsFacebook } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";
import {
  AiOutlineInstagram,
  AiOutlineYoutube,
  AiOutlineTwitter,
  AiFillHeart,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { Menu } from "./Menu";
import { ToggleMenu } from "./ToggleMenu";
export const MobileNabar = () => {
  const [isActive, setIsActive] = useState(false);
  const toggleMenu = () => {
    setIsActive(true);
  };
  return (
    <>
      <ToggleMenu isActive={isActive} setIsActive={setIsActive} />
      <nav>
        <div className="container">
          <div className="logo">
            <h1>Sport Shop</h1>
          </div>
        </div>
        <div className="container-menu">
          <div className="search">
            <BiSearch />
          </div>
          <div className="menu">
            <div className="toogle-menu" onClick={toggleMenu}>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
