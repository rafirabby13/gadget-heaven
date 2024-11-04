import { useContext } from "react";
import { CartContext } from "../Root/Root.jsx";
import ProductAddedDetail from "../ProductAddedDetail/ProductAddedDetail.jsx";
import AddedDetail from "../AddedDetail/AddedDetail.jsx";
import SortSection from "../SortSection/SortSection.jsx";

const CartDetail = () => {
  const { cart } = useContext(CartContext);
  // console.log(cart);

  
  return (
    <div>
      <SortSection />
     
         
            <div className="grid gap-6">
            {cart?.map((cart, index) => (
              <AddedDetail key={index} product={cart}></AddedDetail>
            ))}
          </div>
        
     
    </div>
  );
};

export default CartDetail;
