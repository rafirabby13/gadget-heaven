/* eslint-disable no-unused-vars */
import { useContext, useEffect, useRef, useState } from "react";
import { BsSortDown } from "react-icons/bs";
import { CartContext, TotalContext } from "../Root/Root.jsx";
import { MdOutlineVerified } from "react-icons/md";

const SortSection = () => {
    const { cart, handleSortByPrice, setWishList, setCart } =
    useContext(CartContext);
    
   const { total, setTotal} = useContext(TotalContext)



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
  };

  return (
    <div className="flex items-center gap-5 justify-between px-20 py-10">
      <div>
        <h1>Cart</h1>
      </div>
      <div className="flex items-center gap-5">
        <h1>Total Cost: {total}k</h1>
        <div onClick={handleSortByPrice} className="flex items-center gap-5">
          <h1>Sort by Price</h1>
          <div>
            <BsSortDown />
          </div>
        </div>
        <button onClick={handlePurchase}>Purchase</button>
      </div>
      {/* Open the modal using document.getElementById('ID').showModal() method */}

      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        
        <div className="modal-box text-center space-y-4  py-12">
        <div className="text-center text-7xl flex justify-center ">
        <MdOutlineVerified className="text-[#3EB655]"></MdOutlineVerified>
        </div>
          <h3 className="font-bold text-2xl text-[#09080F]">Payment Successfully</h3>
          <p className="font-medium text-lg text-[#09080fa5]">Thanks for purchasing</p>
          <p className="font-medium text-xl text-[#09080fd0]">Total : {total}k</p>
          
          <div className="modal-actio w-full">
            <form method="dialog w-full">
              {/* if there is a button in form, it will close the modal */}
              <button onClick={handleClose} className="btn w-full text-xl font-bold">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default SortSection;
