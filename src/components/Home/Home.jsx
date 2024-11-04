/* eslint-disable no-unused-vars */
import { useState } from "react";
import Banner from "../Banner/Banner.jsx";
import ExploreSection from "../ExploreSection/ExploreSection.jsx";
import Sidebar from "../Sidebar/Sidebar.jsx";
import Products from "../Products/Products.jsx";
import { Outlet } from "react-router-dom";

const Home = () => {
  const [category, setCategory] = useState("");
  const handleCategory = (clickedCategory) => {
    setCategory(clickedCategory);
  };
  return (
    <div className="min-h-screen">
      <Banner />
      <div className="-mt-40">
      <h1 className="text-[#OBOBOB] font-bold text-4xl text-center pb-12">Explore Cutting-Edge Gadgets</h1>
      <div className="border-2 grid grid-cols-6 px-32 gap-5 min-h-screen pb-20">
        <Sidebar handleCategory={handleCategory} />
        <Outlet />
      </div>
      </div>
    </div>
  );
};

export default Home;
