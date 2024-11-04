import { Link, Outlet } from "react-router-dom";
import CartDetail from "../CartDetail/CartDetail.jsx";
import SortSection from "../SortSection/SortSection.jsx";

const ProductAddedDetail = () => {
  return (
    <div className="">
      <div className="bg-[#9538E2] pt-12 pb-12 lg:pb-12  lg:relative  lg:max-w-[90%] mx-auto">
        <div className="text-center text-white space-y-7 w-2/3 mx-auto">
          <h1 className="text-6xl font-bold ">Dashboard</h1>
          <p className="text-lg font-normal ">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to the coolest accessories, we have
            it all!
          </p>
          <div className="flex items-center gap-5 justify-center">
            <Link to="/dashboard">
              <button className="text-[#9538E2] text-xl font-bold bg-white py-4 px-8 rounded-full">
                Cart
              </button>
            </Link>
            <Link to='/dashboard/wishDetail'>
              <button className="text-[#9538E2] text-xl font-bold bg-white py-4 px-8 rounded-full">
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
