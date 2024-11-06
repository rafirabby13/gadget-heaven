/* eslint-disable no-unused-vars */
import grp from "../../assets/Group.png";
import { useContext, useEffect, useRef, useState } from "react";
import { BsSortDown } from "react-icons/bs";
import { CartContext, TotalContext } from "../Root/Root.jsx";
import { MdOutlineVerified } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const SortSection = () => {
  const { cart, handleSortByPrice, setWishList, setCart, total, setTotal } =
    useContext(CartContext);
  const [isDisabled, setIsDisabled] = useState(false);
  //  const { total, setTotal} = useContext(TotalContext)
  const navigate = useNavigate();
useEffect(()=>{
  if (cart.length == 0) {
    setIsDisabled(true);
  } else {
    setIsDisabled(false);
  }
},[cart])

  const handlePurchase = () => {
    document.getElementById("my_modal_5").showModal();
    // setCart([]);

    // setWishList([]);
    // setTotal(0);
  };
  const handleClose = () => {
    setCart([]);

    setWishList([]);
    setTotal(0);
    navigate("/");
  };

  return (
    <div className="flex flex-col lg:flex-row items-center gap-5 justify-between px-20 py-10">
      <div>
        <h1 className="text-[#0B0B0B] font-bold text-sm lg:text-2xl">Cart</h1>
      </div>
      <div className="flex flex-wrap justify-center lg:flex-nowrap items-center gap-5">
        <h1 className="text-[#0B0B0B] font-bold text-sm lg:text-2xl">
          Total Cost: {total} k
        </h1>
        <button
          disabled={cart.length == 0}
          onClick={handleSortByPrice}
          className={`flex items-center gap-2 lg:gap-5  text-xs  lg:text-xl font-bold ${isDisabled ? 'btn':'btnGradient'} `}
        >
          <h1>Sort by Price</h1>
          <div className=" text-2xl font-bold">
            <BsSortDown />
          </div>
        </button>
        <button
          disabled={cart.length == 0}
          className={`${isDisabled ? 'btn opacity-50 cursor-not-allowed' : 'bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-8 py-4 rounded-3xl text-white text-xl font-bold'}`}

          onClick={handlePurchase}
        >
          Purchase
        </button>
      </div>
      {/* Open the modal using document.getElementById('ID').showModal() method */}

      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box text-center space-y-4  py-12">
          <div className="text-center text-7xl flex justify-center ">
            <img src={grp} alt="" />
          </div>
          <h3 className="font-bold text-2xl text-[#09080F]">
            Payment Successfully
          </h3>
          <p className="font-medium text-lg text-[#09080fa5]">
            Thanks for purchasing
          </p>
          <p className="font-medium text-xl text-[#09080fd0]">
            Total : {total}k
          </p>

          <div className="modal-actio w-full">
            <form method="dialog w-full">
              {/* if there is a button in form, it will close the modal */}
              <button
                onClick={handleClose}
                className="btn w-full text-xl font-bold"
              >
                Close
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default SortSection;
