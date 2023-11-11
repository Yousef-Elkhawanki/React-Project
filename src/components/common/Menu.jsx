import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";

export const Menu = () => {
  const links = [
    { path: "/", label: "Home" },
    { path: "/categories", label: "categories" },
    { path: "/shop", label: "shop" },
    { path: "/contact", label: "contact us" },
  ];
  return (
    <Fragment>
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
    </Fragment>
  );
};
