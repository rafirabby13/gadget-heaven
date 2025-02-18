/* eslint-disable no-unused-vars */
import { createContext, useContext, useEffect, useState } from "react";
import ReactStars from "react-rating-stars-component";

import { FaRegHeart } from "react-icons/fa";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { useLoaderData, useParams } from "react-router-dom";
import { CartContext } from "../Root/Root.jsx";
import { Helmet } from "react-helmet";

const ProductDetail = () => {
  const { productId } = useParams();
    console.log(productId);
  
  
  const data = useLoaderData();
  const foundProduct = data.find((product) => product.product_id === productId);
  const { handleAddToCart,cart, handleAddToWishList, wishlistDisabled,setCartDisabled, cartDisabled,wishList,setWishlistDisabled } =
  useContext(CartContext);
  console.log(cart);
  const {
    product_title,
    product_image,
    category,
    price,
    description,
    specification,
    availability,
    rating,
  } = foundProduct;
const isTrueCart = !!cart.find(item=>item.product_id==productId)
const isTrueWishList = !!wishList.find(item=>item.product_id==productId)
  return (
    <div className="min-h-screen ">
   
      <div className="bg-[#9538E2] pt-12 pb-72 lg:max-w-[90%] mx-auto">
        <div className="text-center text-white space-y-3 lg:space-y-7 lg:w-2/3 mx-auto">
          <h1 className="text-xl lg:text-6xl font-bold ">Product Details</h1>
          <p className="text-sm lg:text-lg font-normal ">
          Explore top-rated gadgets and essentials, handpicked for quality and performance. Unbeatable deals on the latest tech await you!
          </p>
        </div>
      </div>
      <div className="border-2 bg-[#ffffff] rounded-2xl lg:w-3/4 mx-auto lg:p-6 relative -top-60">
        <div
          className="grid lg:grid-cols-2 items-center gap-8
        "
        >
          <img
            className="rounded-xl lg:h-[500px] w-full bg-slate-100"
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
            <div className="text-[#309C08] border-2 border-[#309C08] rounded-3xl py-1 lg:py-2 px-3 font-bold bg-[#2f9c0830] w-fit text-xs lg:text-lg">
              {availability}
            </div>
            <h1 className="text-[#09080f7b] text-xs lg:text-lg font-normal">
              {description}
            </h1>
            <ol className=" lg:space-y-2 text-xs lg:text-lg">
              {specification.map((specs, index) => (
                <li key={index}>
                  {index + 1}. {specs}
                </li>
              ))}
            </ol>
            <h1 className="text-[#09080fe5] text-xs lg:text-lg font-bold">
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
            <div className="flex items-center gap-5">
              <button 
                onClick={() =>{ 
                  
                  handleAddToCart(foundProduct)}}
                className={`${isTrueCart ? 'bg-[#cceadb]' : 'bg-[#9538E2]'} text-white font-bold text-sm lg:text-lg flex items-center gap-3 py-2 px-6 rounded-3xl`} disabled={!!cart.find(item=>item.product_id==productId)}
              >
                Add To Cart
                <div className="font-bold text-sm lg:text-xl">
                  <IoCartOutline />
                </div>
              </button>

              <button
               
                onClick={() => {
                 
                  handleAddToWishList(foundProduct)
                }}
                className={`${isTrueWishList ? 'bg-slate-50 text-gray-300': 'bg-slate-300'} px-3 py-3 rounded-3xl text-2xl font-bold`}
                disabled={wishList.find(item=>item.product_id==productId)}
              >
                <FaRegHeart />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
