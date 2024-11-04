import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer.jsx";
import Navbar from "../Navbar/Navbar.jsx";
import { createContext, useEffect, useState } from "react";
export const CartContext = createContext();

const Root = () => {
  const [cart, setCart] = useState([]);
  const [wishList, setWishList] = useState([]);
  let [total, setTotal] = useState(0);

  const handleAddToCart = (product) => {
    const checkingProductIsOrNot = cart.find(
      (cart) => cart.product_id == product.product_id
    );
    if (!checkingProductIsOrNot) {
      setCart([...cart, product]);
      
    } else {
      alert("product exixts..");
    }

  };
  const handleAddToWishList = (product) => {
    const checkingProductIsOrNot = wishList.find(
      (wishList) => wishList.product_id == product.product_id
    );
    if (!checkingProductIsOrNot) {
      setWishList([...wishList, product]);
    } else {
      alert("product exixts.. in wishlist");
    }
  };

  const handleSortByPrice=()=>{
   
    const sortedDat = [...cart].sort(function(a,b){
        return b.price - a.price;
    })
    

    setCart(sortedDat)
  }
  

//   console.log(cart);
  // console.log(cart);
//   const handleTotalPrice = () => {
//     for (const element of cart) {
//       console.log(element);
//       const grandTotal = element.price + total;
//       setTotal(grandTotal);
//     }
//     // console.log(grandTotal);
//   };

  return (
    <CartContext.Provider
      value={{ cart, wishList, handleAddToCart, handleAddToWishList, total, handleSortByPrice,setCart,setWishList }}
    >
      <Navbar />
      <Outlet />

      <Footer />
    </CartContext.Provider>
  );
};

export default Root;
