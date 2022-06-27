import React from "react";
import Header from "./Header";
import Carousel from "./Carousel";

const Layout = ({ children }) => {
  return (
    <>
      <Header></Header>
      <Carousel />
      <main>{children}
      </main>
      <footer></footer>
    </>
  );
};

export default Layout;
