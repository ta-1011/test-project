import React from "react";
import Header from "../components/Header";
import { Outlet } from "react-router";

const BaseLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet /> {/*  // この中にコンテンツが描画される */}
      </main>
      {/* <Footer /> */}
    </>
  );
};

export default BaseLayout;
