import { useContext } from "react";
import { CartContext } from "../Root/Root.jsx";

const CartDetail = () => {
    const { cart } = useContext(CartContext);
    console.log(cart);
    return (
        <div>
           {
            cart?.map(cart=> <h1 key={cart.product_id}>{cart.product_title}</h1>)
           }
        </div>
    );
};

export default CartDetail;