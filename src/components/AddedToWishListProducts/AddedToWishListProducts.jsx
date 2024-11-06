/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import { RxCross2 } from 'react-icons/rx';
import { CartContext } from '../Root/Root.jsx';

const AddedToWishListProducts = ({product}) => {
    const { wishList, setWishList, handleAddToCart ,cart, setCart, handleRemoveItemFromWishList,wishlistDisabled,setCartDisabled, cartDisabled,setWishlistDisabled} = useContext(CartContext);
    

  const { product_title, product_image, description, price } = product;

 

const isTrueCart = !!cart.find(item=>item.product_id==product.product_id)
 

    return (
        <div className="">
      <div className="border-2 border-[#13131338] rounded-xl p-3 lg:p-6 lg:w-3/5 mx-auto bg-slate-100  ">
        <div className="flex flex-col-reverse lg:flex-row justify-between gap-2 lg:gap-8 items-start">
          <div className="flex flex-col lg:flex-row  items-center gap-8 justify-start ">
            <img
              className="h-36 w-full lg:w-52 rounded-xl border-2 p-3"
              src={product_image}
              alt=""
            />
            <div className="space-y-2">
              <h1 className="text-lg lg:text-2xl text-[#09080F] font-bold">{product_title}</h1>
              <p className="text-sm lg:text-lg text-[#09080fd1] font-normal">{description}</p>
              <p className="text-xl text-[#09080F] font-bold">Price: {price}k</p>
              <button 
                onClick={() =>{ 
                  
                  handleAddToCart(product)}}
                className={`${isTrueCart ? 'bg-[#cceadb]' : 'bg-[#9538E2]'} text-white font-bold text-sm lg:text-lg flex items-center gap-3 py-2 px-6 rounded-3xl`} disabled={cart.find(item=>item.product_id==product.product_id)}
              >
                Add To Cart
                {/* <div className="font-bold text-sm lg:text-xl">
                  <IoCartOutline />
                </div> */}
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