import { Link, NavLink, useLocation } from "react-router-dom";
import logo from '../../assets/logo.jpg'
import { IoCartOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { useContext } from "react";
import { CartContext } from "../Root/Root.jsx";
const Navbar = () => {
  const { cart, wishList } = useContext(CartContext);
  // console.log(cart);

  const location = useLocation();
  let currentLoc = location.pathname;
  const id = currentLoc.split("/")[2];
  // console.log(currentLoc.split('/')[2]);

  return (
    <div
      className={`navbar  ${
        currentLoc != "/statistics" &&
        currentLoc != "/dashboard" &&
        currentLoc != "/new" &&
        currentLoc != "/dashboard/wishDetail" &&
        currentLoc != `/product/${id}`
          ? "bg-[rgb(149,56,226)]  text-[#FFFFFF]"
          : "bg-white"
      }  rounded-t-xl py-8 lg:max-w-[90%] lg:px-10 mx-auto `}
    >
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className=" lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
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
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? ` underline font-bold text-black bg-[rgb(149,56,226)]`
                    : `text-black`
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/statistics"
                className={({ isActive }) =>
                  isActive
                    ? ` underline font-bold bg-[rgb(149,56,226)] text-black`
                    : `text-black`
                }
              >
                Statistics
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dashboard"
                className={({ isActive }) =>
                  isActive
                    ? `font-bold underline bg-[rgb(149,56,226)] text-black`
                    : `text-black`
                }
              >
                Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/new"
                className={({ isActive }) =>
                  isActive
                    ? `font-bold underline bg-[rgb(149,56,226)] text-white`
                    : `text-black`
                }
              >
                New Arrival
              </NavLink>
            </li>
          </ul>
        </div>
       <div className="flex items-center gap-1 lg:gap-3 pl-3 lg:pl-0">
        <img className="h-8 w-8 lg:h-12 lg:w-12 rounded-full" src={logo} alt="" />
       <Link to='/' className="text-xs lg:text-3xl font-bold">Gadget Heaven</Link>
       </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? ` underline font-bold text-white` : ``
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/statistics"
              className={({ isActive }) =>
                isActive
                  ? ` underline font-bold bg-[rgb(149,56,226)] text-white`
                  : ``
              }
            >
              Statistics
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                isActive
                  ? `font-bold underline bg-[rgb(149,56,226)] text-white`
                  : ``
              }
            >
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/new"
              className={({ isActive }) =>
                isActive
                  ? `font-bold underline bg-[rgb(149,56,226)] text-white`
                  : ``
              }
            >
              New Arrival
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end gap-4  text-[#3A3A3A]">
        <Link to={`/dashboard`}>
          <div className="bg-[#dbf7df] p-3 rounded-full border-none text-xl font-bold relative">
            <IoCartOutline />
            <div className="absolute -top-3 left-7 bg-red-600 text-white px-1 rounded-lg ">
              {cart.length}
            </div>
          </div>
        </Link>
        <Link to="/dashboard/wishDetail">
          <div className="bg-[#dbf7df] p-3 rounded-full border-none text-xl font-bold relative">
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
