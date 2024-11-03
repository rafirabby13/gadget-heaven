import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer.jsx";
import Navbar from "../Navbar/Navbar.jsx";
import { createContext, useState } from "react";
export const CartContext = createContext()

const Root = () => {
    const [cart, setCart] = useState([])

    const handleAddToCart=(product)=>{
        setCart([...cart, product])
    
      }
    console.log(cart);

    return (
        <CartContext.Provider value={{cart, handleAddToCart}}>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </CartContext.Provider>
    );
};

export default Root;