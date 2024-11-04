import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer.jsx";
import Navbar from "../Navbar/Navbar.jsx";
import { createContext, useState } from "react";
export const CartContext = createContext()

const Root = () => {
    const [cart, setCart] = useState([])
    const [wishList, setWishList] = useState([])

    const handleAddToCart=(product)=>{
        const checkingProductIsOrNot = cart.find(cart=> cart.product_id == product.product_id)
        if (!checkingProductIsOrNot) {
            setCart([...cart, product])
        }
        else{
            alert('product exixts..')
        }
    
      }
    const handleAddToWishList=(product)=>{
        const checkingProductIsOrNot = wishList.find(wishList=> wishList.product_id == product.product_id)
        if (!checkingProductIsOrNot) {
            setWishList([...wishList, product])
        }
        else{
            alert('product exixts.. in wishlist')
        }
    
      }
    // console.log(cart);

    return (
        <CartContext.Provider value={{cart,wishList, handleAddToCart, handleAddToWishList}}>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </CartContext.Provider>
    );
};

export default Root;