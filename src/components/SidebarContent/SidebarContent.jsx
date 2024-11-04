/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { Link, NavLink } from "react-router-dom";
import './Sidebarcontent.css'

const SidebarContent = ({ category, handleCategory }) => {
  return (
    <div>
      <NavLink to={`/${category}`} >
        <div
          onClick={() => handleCategory(category)}
          className="py-5 px-5 bg-[#09080f1e] rounded-3xl text-start "
        >
          <p className="text-[#09080F] font-medium text-lg " >{category}</p>
        </div>
      </NavLink>
    </div>
  );
};

export default SidebarContent;
