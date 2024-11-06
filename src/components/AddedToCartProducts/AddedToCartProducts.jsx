/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import { CartContext } from '../Root/Root.jsx';
import { RxCross2 } from 'react-icons/rx';

const AddedToCartProducts = ({product}) => {



    const { cart, setCart,setCartDisabled } = useContext(CartContext);
  const { product_title, product_image, description, price } = product;

  const handleRemoveItemFromCart = (produc) => {
    // console.log(product);
    const reminingData = [...cart].filter(
      (cartData) => cartData.product_id != produc.product_id
    );
    setCart(reminingData);
    setCartDisabled(false)

  };




    return (
        <div className="">
      <div className="border-2 border-[#13131338] rounded-xl p-3 lg:p-6 lg:w-3/5 mx-auto bg-slate-100 ">
        <div className="flex flex-col-reverse lg:flex-row justify-between gap-2 lg:gap-8 items-start">
          <div className="flex flex-col lg:flex-row  items-center gap-8 justify-start ">
            <img
              className="h-36 w-60 md:w-52 rounded-xl border-2 p-3"
              src={product_image}
              alt=""
            />
            <div className="space-y-2">
              <h1 className="text-lg lg:text-2xl text-[#09080F] font-bold">{product_title}</h1>
              <p className="text-sm lg:text-lg text-[#09080fd1] font-normal">{description}</p>
              <p className="text-xl text-[#09080F] font-bold">Price: {price}k</p>
            </div>
          </div>
          <div
            onClick={() => handleRemoveItemFromCart(product)}
            className="border-2 border-red-600  p-3 rounded-full text-red-600"
          >
            <RxCross2 />
          </div>
        </div>
      </div>
    </div>
    );
};

export default AddedToCartProducts;