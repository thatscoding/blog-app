import React from "react";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";
// import Footer from "../components/Footer";

const Layout = () => {
  return (
    <>
      <Header />
      <main className=" container xl:max-w-6xl mx-auto">
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
