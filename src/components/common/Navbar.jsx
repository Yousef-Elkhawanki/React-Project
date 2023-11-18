import React, { useContext, useState } from "react";
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
import { Link } from "react-router-dom";
import { addToWishListContext } from "../../context/addToWishListContext";
import { SearchContext } from "../../context/searchContext";
export const Navbar = () => {
  const { wishListItem } = useContext(addToWishListContext);
  const { setSearchValue } = useContext(SearchContext);
  console.log(wishListItem);
  const [search, setSearch] = useState(false);
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
          <Link to={"/wishlist"}>
            <div className="wishList">
              <AiFillHeart />
              <span>{wishListItem}</span>
            </div>
          </Link>
          <Link to={"cart"}>
            <div className="cart">
              <AiOutlineShoppingCart />
              <span>0</span>
            </div>
          </Link>
          <Link to={"/login"}>
            <div className="user-profile">
              <img src="" alt="" />
            </div>
          </Link>
        </div>
      </div>
      <div className="container-menu">
        <div className="search">
          <BiSearch onClick={() => setSearch(!search)} />
          <input
            type="text"
            name=""
            id=""
            placeholder="Search...!"
            className={search ? "input-active" : ""}
            onInput={(e) => setSearchValue(e.target.value)}
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
