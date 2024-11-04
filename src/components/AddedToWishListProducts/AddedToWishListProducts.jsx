/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import { RxCross2 } from 'react-icons/rx';
import { CartContext } from '../Root/Root.jsx';

const AddedToWishListProducts = ({product}) => {
    const { wishList, setWishList, handleAddToCart ,cart, setCart, handleRemoveItemFromWishList} = useContext(CartContext);
    

  const { product_title, product_image, description, price } = product;

 

 

    return (
        <div className="">
      <div className="border-2 border-[#13131338] rounded-xl p-6 w-3/5 mx-auto bg-slate-100 ">
        <div className="flex justify-between gap-8 items-start">
          <div className="flex items-center gap-8 justify-start ">
            <img
              className="h-36 w-52 rounded-xl border-2 p-3"
              src={product_image}
              alt=""
            />
            <div className="space-y-2">
              <h1 className="text-2xl text-[#09080F] font-bold">{product_title}</h1>
              <p className="text-lg text-[#09080fd1] font-normal">{description}</p>
              <p className="text-xl text-[#09080F] font-bold">Price: {price}k</p>
              <button
                onClick={()=>handleAddToCart(product)}
                className="bg-[#9538E2] text-white font-bold text-lg flex items-center gap-3 py-2 px-6 rounded-3xl"
              >
                Add To Cart
                
              </button>
            </div>
          </div>
          <div
            onClick={() => handleRemoveItemFromWishList(product)}
            className="border-2 border-red-600  p-3 rounded-full text-red-600"
          >
            <RxCross2 />
          </div>
        </div>
      </div>
    </div>
    );
};

export default AddedToWishListProducts;