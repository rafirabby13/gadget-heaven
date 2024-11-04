/* eslint-disable no-unused-vars */
import { createContext, useContext, useEffect, useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { useLoaderData, useParams } from "react-router-dom";
import { CartContext } from "../Root/Root.jsx";

const ProductDetail = () => {
  const { productId } = useParams();
  //   console.log(productId);
  const { handleAddToCart , handleAddToWishList} = useContext(CartContext);

  

      const data = useLoaderData();
      const foundProduct = data.find((product) => product.product_id === productId);
  


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

 

  return (
    <div className="min-h-screen ">
      
      <div className="bg-[#9538E2] pt-12 pb-72 lg:max-w-[90%] mx-auto">
        <div className="text-center text-white space-y-7 w-2/3 mx-auto">
          <h1 className="text-6xl font-bold ">Product Details</h1>
          <p className="text-lg font-normal ">
          Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
          </p>
          
        
      </div>
      
      
    </div>
      <div className="border-2 bg-[#ffffff] rounded-2xl w-3/4 mx-auto p-6 relative -top-60">
        <div
          className="grid grid-cols-2 items-center gap-8
        "
        >
          <img
            className="rounded-xl lg:h-[500px] w-full bg-slate-100"
            src={product_image}
            alt=""
          />
          <div className="space-y-3">
            <h1 className="text-[#09080F] text-3xl font-semibold">
              {product_title}
            </h1>
            <h1 className="text-[#09080F] text-lg font-semibold">
              Price: {price}k
            </h1>
            <div className="text-[#309C08] border-2 border-[#309C08] rounded-3xl py-2 px-3 font-bold bg-[#2f9c0830] w-fit">
              In Stock
            </div>
            <h1 className="text-[#09080f7b] text-lg font-normal">
              {description}
            </h1>
            <ol className="space-y-2">
              {specification.map((specs, index) => (
                <li key={index}>
                  {index + 1}. {specs}
                </li>
              ))}
            </ol>
            <h1 className="text-[#09080fe5] text-lg font-bold">Rating</h1>
            <div className="flex items-center gap-3">
              <div className="rating">
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />

                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
              </div>
              <h1 className="text-[#09080fe9] bg-slate-100 px-3 py-1 font-bold rounded-2xl text-sm ">
                {rating}
              </h1>
            </div>
            <div className="flex items-center gap-5">
              <button
                onClick={() => handleAddToCart(foundProduct)}
                className="bg-[#9538E2] text-white font-bold text-lg flex items-center gap-3 py-2 px-6 rounded-3xl"
              >
                Add To Cart
                <div className="font-bold text-xl">
                  <IoCartOutline />
                </div>
              </button>
              
              <div onClick={()=>handleAddToWishList(foundProduct)} className="bg-slate-100 px-3 py-3 rounded-3xl text-2xl font-bold">
                <FaRegHeart />
              </div>
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
