/* eslint-disable no-unused-vars */
import { Link, Outlet, useLocation } from "react-router-dom";
import CartDetail from "../CartDetail/CartDetail.jsx";
import SortSection from "../SortSection/SortSection.jsx";
import { useContext } from "react";
import { CartContext } from "../Root/Root.jsx";
import { Helmet } from "react-helmet";

const ProductAddedDetail = () => {
  const location = useLocation()
  const currentLoc = location.pathname;
  const {wishlistDisabled} = useContext(CartContext)
 
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Dashboard | Gadget Genius</title>
      </Helmet>
      <div className="bg-[#9538E2] pt-12 pb-12 lg:pb-12  lg:relative  lg:max-w-[90%] mx-auto">
        <div className="text-center text-white space-y-2 lg:space-y-7 lg:w-2/3 mx-auto">
          <h1 className="text-xl lg:text-6xl font-bold ">Dashboard</h1>
          <p className="text-sm lg:text-lg font-normal ">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to the coolest accessories, we have
            it all!
          </p>
          <div className="flex items-center gap-5 justify-center">
            <Link to="/dashboard">
              <button className={`text-sm lg:text-xl border-2 font-bold  py-2 lg:py-4 px-7  lg:px-12 rounded-full ${currentLoc=='/dashboard'? 'bg-white text-[#9538E2]' : 'bg-[#9538E2] text-white'} `}>
                Cart
              </button>
            </Link>
            <Link  to='/dashboard/wishDetail'>
              <button className={`text-sm lg:text-xl border-2 font-bold  py-2 lg:py-4 px-7  lg:px-12 rounded-full  ${currentLoc!='/dashboard'? 'bg-white text-[#9538E2]' : 'bg-[#9538E2] text-white'}`}>
                Wishlist
              </button>
            </Link>
          </div>
        </div>
      </div>
      
      <Outlet />
    </div>
  );
};

export default ProductAddedDetail;
