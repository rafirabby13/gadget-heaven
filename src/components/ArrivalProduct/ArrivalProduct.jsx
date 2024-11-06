/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { useContext, useEffect, useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import ReactStars from "react-rating-stars-component";
import { CartContext } from "../Root/Root.jsx";
import { IoCartOutline } from "react-icons/io5";

const ArrivalProduct = ({ product }) => {
//   console.log(product);
  const { handleAddToCart, handleAddToWishList, wishlistDisabled ,setCartDisabled, cartDisabled, setWishlistDisabled, wishList} =
    useContext(CartContext);
    const [isDisabled, setIsDisabled] = useState(false);
  const {
    product_title,
    product_image,
    category,
    price,
    discount,
    warranty,
    highlighted_features,
    description,
    specification,
    availability,
    rating,
    product_id
  } = product;
  

const isTrueWishList = !!wishList.find(item=>item.product_id==product_id)


  

  return (
    <div className="">
      <div className="border-2 bg-[#ffffff] rounded-2xl  gap-6  h-full  mx-auto lg:p-2 xl:p-6 py-2 lg:py-5 ">
        <div
          className="flex flex-col h-full justify-between gap-8
        "
        >
          <img
            className="rounded-xl h-40 lg:h-[500px] w-full bg-slate-100 "
            src={product_image}
            alt=""
          />
          <div className="space-y-1 lg:space-y-3 px-4 lg:px-0">
            <h1 className="text-[#09080F] text-lg lg:text-3xl font-semibold">
              {product_title}
            </h1>
            <h1 className="text-[#09080F] text-sm lg:text-lg font-semibold">
              Price: {price}k
            </h1>
            <div className="flex items-center justify-between">
              <div className="text-[#309C08] border-2 border-[#309C08] rounded-3xl py-1 lg:py-2 px-2 xl:px-3 font-bold bg-[#2f9c0830] w-fit text-xs lg:text-sm">
                {availability}
              </div>
              <div className="flex flex-col lg:flex-row items-center justify-between gap-2">
                <div className="badge py-2 lg:py-5 px-2 xl:px-3  badge-secondary lg:text-lg text-xs font-bold">Warranty: {warranty}</div>
               
              </div>
            </div>

            <h1 className="text-[#09080f7b] text-xs lg:text-lg font-normal">
              {description}
            </h1>
            <div className="flex items-start gap-3 lg:gap-10 border-t-2 pt-5">
              <ol className=" lg:space-y-2 text-xs lg:text-lg">
                {specification.map((specs, index) => (
                  <li key={index}>
                    {index + 1}. {specs}
                  </li>
                ))}
              </ol>
              <ol className=" lg:space-y-2 text-xs lg:text-xl ">
                <h1 className="underline lg:text-xl font-semibold uppercase">
                  Highlighted Features
                </h1>
                {highlighted_features.map((specs, index) => (
                  <li key={index}>
                    {index + 1}. {specs}
                  </li>
                ))}
              </ol>
            </div>
            <h1 className="text-[#09080fe5] text-xs lg:text-lg font-bold border-t-2 pt-5">
              Rating
            </h1>
            <div className="flex items-center gap-3">
              <ReactStars
                count={5}
                value={rating}
                size={30}
                isHalf={true}
                emptyIcon={<i className="far fa-star"></i>}
                halfIcon={<i className="fa fa-star-half-alt"></i>}
                fullIcon={<i className="fa fa-star"></i>}
                activeColor="#ffd700"
              />

              <h1 className="text-[#09080fe9] bg-slate-100 px-3 py-1 font-bold rounded-2xl text-sm ">
                {rating}
              </h1>
            </div>
            <button
               
                onClick={() => {
                 
                  handleAddToWishList(product)
                }}
                className={`${isTrueWishList ? 'bg-slate-50 text-gray-300': 'bg-[#9538E2] text-white'} px-6 py-3 rounded-3xl text-2xl font-bold flex items-center gap-3 hover:bg-[#9538e2e6]`}
                disabled={wishList.find(item=>item.product_id==product_id)}
              >
               Add to Wishlist <FaRegHeart />
              </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArrivalProduct;
