import React, { Fragment, useContext } from "react";
import { Navbar } from "./common/Navbar";
import { Footer } from "./common/Footer";
import { Outlet } from "react-router-dom";
import { MobileNabar } from "./common/MobileNavbar";
import { isMobileContext } from "../context/isMobileContext";
export const Layout = () => {
  const { isMobile } = useContext(isMobileContext);
  return (
    <>
      {isMobile ? <MobileNabar /> : <Navbar />}
      <Outlet />
      <Footer />
    </>
  );
};
