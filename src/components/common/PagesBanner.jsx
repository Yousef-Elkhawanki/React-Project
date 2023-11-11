import React from "react";
import { Link } from "react-router-dom";

export const PagesBanner = ({ img, header, page, path }) => {
  return (
    <section className="pages-banner">
      <img src={img} alt="" />
      <div className="overlay">
        <div className="text">
          <h4>{header}</h4>
          <Link to={path}>{page} -</Link>
          <span> {header}</span>
        </div>
      </div>
    </section>
  );
};
