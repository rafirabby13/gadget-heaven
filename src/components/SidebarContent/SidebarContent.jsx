import React from "react";
import { Link } from "react-router-dom";

const SidebarContent = ({ category, handleCategory }) => {
  return (
    <div>
      <Link to={`/${category}`}>
        <div
          onClick={() => handleCategory(category)}
          className="py-5 px-5 bg-[#09080f1e] rounded-3xl text-start"
        >
          <p className="text-[#09080F] font-medium text-lg">{category}</p>
        </div>
      </Link>
    </div>
  );
};

export default SidebarContent;
