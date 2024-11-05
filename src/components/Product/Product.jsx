/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../Root/Root.jsx";

const Product = ({ product }) => {
  const { product_id, product_title, product_image, price } = product;
  const {
    wishList,
    wishlistDisabled,
    setWishlistDisabled,
    setCartDisabled,
    cart,
  } = useContext(CartContext);

  const handleWishlistDisabledButton = (pro) => {
    // console.log(pro);
    const isExistsInWishList = wishList.find(
      (wish) => wish.product_id == pro.product_id
    );
    const isExistsInCart = cart.find(
      (cart) => cart.product_id == pro.product_id
    );
    if (isExistsInWishList) {
      setWishlistDisabled(true);
    } else {
      setWishlistDisabled(false);
    }
    if (isExistsInCart) {
      setCartDisabled(true);
    } else {
      setCartDisabled(false);
    }
  };

  return (
    <div className="bg-slate-100 rounded-xl ">
      <div className="py-3 px-2 lg:p-6 space-x-1 lg:space-y-3 space-y-2 flex flex-col justify-between  h-full">
        <img
          className="h-24 lg:h-48 rounded-xl w-full"
          src={product_image}
          alt=""
        />

        <h1 className="text-[#09080F] text-sm lg:text-2xl font-semibold">
          {product_title}
        </h1>

        <p className="text-[#09080f76] text-xs lg:text-lg font-medium">
          Price: {price}k
        </p>
        <Link to={`/product/${product_id}`}>
          <button
            onClick={() => handleWishlistDisabledButton(product)}
            className="py-1 px-3 lg:py-3 lg:px-5 rounded-full border-2 text-[#9538E2] border-[#9538E2] text-xs lg:text-lg"
          >
            View Details
          </button>
        </Link>

      
      </div>
    </div>
  );
};

export default Product;
