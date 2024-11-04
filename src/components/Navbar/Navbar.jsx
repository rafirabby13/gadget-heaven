import { Link, NavLink } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { useContext } from "react";
import { CartContext } from "../Root/Root.jsx";
const Navbar = () => {
  const { cart, wishList } = useContext(CartContext);
  // console.log(cart);
  return (
    <div className="navbar bg-[rgb(149,56,226)] text-[#FFFFFF] rounded-t-3xl pt-8 lg:max-w-[90%] mx-auto px-20">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <NavLink>Home</NavLink>
            </li>
          </ul>
        </div>
        <a className=" text-xl font-bold">Gadget Heaven</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink>Home</NavLink>
          </li>
          <li>
            <NavLink>Statistics</NavLink>
          </li>
          <li>
            <NavLink to='/dashboard'>Dashboard</NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end gap-4  text-[#3A3A3A]">
        <Link to={`/dashboard`}>
          <div className="bg-[#ffffff] p-3 rounded-full border-none text-xl font-bold relative">
            <IoCartOutline />
            <div className="absolute -top-3 left-7 bg-red-600 text-white px-1 rounded-lg ">
              {cart.length}
            </div>
          </div>
        </Link>
        <Link to="/dashboard/wishDetail">
          <div className="bg-[#ffffff] p-3 rounded-full border-none text-xl font-bold relative">
            <CiHeart />
            <div className="absolute -top-3 left-7 bg-red-600 text-white px-1 rounded-lg ">
              {wishList.length}
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
