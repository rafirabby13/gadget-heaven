import { useContext } from "react";
import { CartContext } from "../Root/Root.jsx";
import ProductAddedDetail from "../ProductAddedDetail/ProductAddedDetail.jsx";
import AddedDetail from "../AddedDetail/AddedDetail.jsx";

const CartDetail = () => {
    const { cart } = useContext(CartContext);
    // console.log(cart);
    return (
        <div>
            <h2>cart detail</h2>
          <div className="grid gap-6">
          {
            cart?.map(cart=> <AddedDetail key={cart.product_id}
            product={cart}
            ></AddedDetail>)
           }
          </div>
        </div>
    );
};

export default CartDetail;