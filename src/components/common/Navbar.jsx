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
export const Navbar = () => {
  const [search, setSearch] = useState(false);
  console.log(search);
  return (
    <nav>
      <div className="container">
        <div className="social-media">
          <BsFacebook />
          <AiOutlineYoutube />
          <AiOutlineInstagram />
          <AiOutlineTwitter />
        </div>
        <div className="logo">
          <h1>Sport Shop</h1>
        </div>
        <div className="profile">
          <div className="wishList">
            <AiFillHeart />
            <span>0</span>
          </div>
          <div className="cart">
            <AiOutlineShoppingCart />
            <span>0</span>
          </div>
          <div className="user-profile">
            <img src="" alt="" />
          </div>
        </div>
      </div>
      <div className="container-menu">
        <div className="search" onClick={() => setSearch(!search)}>
          <BiSearch />
          <input
            type="text"
            name=""
            id=""
            placeholder="Search...!"
            className={search ? "input-active" : ""}
          />
        </div>
        <div className="menu">
          <Menu />
        </div>
        <div></div>
      </div>
    </nav>
  );
};
