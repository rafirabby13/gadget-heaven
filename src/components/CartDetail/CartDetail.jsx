/* eslint-disable no-unused-vars */
import { useContext } from "react";
import { CartContext } from "../Root/Root.jsx";
import ProductAddedDetail from "../ProductAddedDetail/ProductAddedDetail.jsx";
import AddedDetail from "../AddedDetail/AddedDetail.jsx";
import SortSection from "../SortSection/SortSection.jsx";
import AddedToCartProducts from "../AddedToCartProducts/AddedToCartProducts.jsx";

const CartDetail = () => {
  const { cart } = useContext(CartContext);
  // console.log(cart);

  
  return (
    <div className="min-h-screen pb-20">
      <SortSection />
     
         
            <div className="grid gap-6">
            {cart?.map((cart, index) => (
              <AddedToCartProducts key={index} product={cart}></AddedToCartProducts>
            ))}
          </div>
        
     
    </div>
  );
};

export default CartDetail;
