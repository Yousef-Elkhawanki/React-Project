import React from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
export const ToggleMenu = ({ isActive, setIsActive }) => {
  const deactiveToggleMenu = () => {
    setIsActive(false);
  };
  const links = [
    { path: "/", label: "Home" },
    { path: "/categories", label: "categories" },
    { path: "/shop", label: "shop" },
    { path: "/contact", label: "contact us" },
  ];
  return (
    <ul className={`mobile-menu ${isActive ? "active-menu" : ""}`}>
      <div className="close" onClick={deactiveToggleMenu}>
        <AiOutlineClose />
      </div>
      {links.map((link) => (
        <NavLink
          to={link.path}
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          {link.label}
        </NavLink>
      ))}
    </ul>
  );
};
