import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer.jsx";
import Navbar from "../Navbar/Navbar.jsx";
import { createContext, useEffect, useState } from "react";
export const CartContext = createContext();
export const TotalContext = createContext();

const Root = () => {
  const [cart, setCart] = useState([]);
  const [wishList, setWishList] = useState([]);

  const [total, setTotal] = useState(0);
  //   const [loading, setLoading] = useState(true);

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

  const handleSortByPrice = () => {
    const sortedDat = [...cart].sort(function (a, b) {
      return b.price - a.price;
    });

    setCart(sortedDat);
  };

  useEffect(() => {
    const cartTotalFunc = () => {
      // console.log(cart);
      const totalValue = [...cart].reduce(
        (accumulator, currentValue) => accumulator + currentValue.price,
        0
      );
      //   console.log(totalValue);
      setTotal(totalValue);
    };

    cartTotalFunc();
  }, [cart]);

  return (
    <CartContext.Provider
      value={{
        cart,
        wishList,
        handleAddToCart,
        handleAddToWishList,
        handleSortByPrice,
        setCart,
        setWishList,
      }}
    >
      <TotalContext.Provider value={{ total, setTotal }}>
        <Navbar />
        <Outlet />

        <Footer />
      </TotalContext.Provider>
    </CartContext.Provider>
  );
};

export default Root;
