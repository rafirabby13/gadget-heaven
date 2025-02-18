/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Sidebarcontent.css";
import { Helmet } from "react-helmet";

const SidebarContent = ({ category, handleCategory }) => {
  // console.log(category);
  const [actv, setActive] = useState(false);

  return (
    <div>
      
      <NavLink
        to={`/${category.category}`}
        className={({ isActive }) =>
          isActive ? ` ${setActive(true)}` : `${setActive(false)}`
        }
      >
        <div
          onClick={() => handleCategory(category)}
          className={`py-4 lg:py-5 px-5 rounded-3xl text-start ${
            actv ? "bg-[#9538E2] text-white exact" : "bg-[#47464d1e] "
          }`}
        >
          <p className=" font-medium text-xs  lg:text-lg ">{category.name}</p>
        </div>
      </NavLink>
    </div>
  );
};

export default SidebarContent;
