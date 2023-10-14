import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";
import Topbar from "../Components/Topbar";

const MainLayout = () => {
  return (
    <>
      <Topbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;
