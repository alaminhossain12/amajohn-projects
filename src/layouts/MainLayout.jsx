/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React from "react";
import { Outlet, useNavigation } from "react-router-dom";
import Footer from "../pages/Footer/Footer";

const MainLayout = () => {
  const navigation = useNavigation();
  console.log(navigation.state === "loading");
  return (
    <div>
      <section className="flex justify-between px-10 shadow-md py-7">
        <div>
          <h2 className="text-xl font-bold">Ama John</h2>
        </div>
        <nav>
          <ul className="flex gap-5">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/products">Products</a>
            </li>
          </ul>
        </nav>
      </section>
      <div className="min-h-screen">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
