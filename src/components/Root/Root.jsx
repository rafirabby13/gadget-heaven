import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer.jsx";
import Navbar from "../Navbar/Navbar.jsx";
import { createContext, useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
export const CartContext = createContext();
export const TotalContext = createContext();

const Root = () => {
  const [cart, setCart] = useState([]);
  const [wishList, setWishList] = useState([]);

  const [total, setTotal] = useState(0);
  const [cartDisabled, setCartDisabled] = useState(false);
  const [wishlistDisabled, setWishlistDisabled] = useState(null);
  //   const [loading, setLoading] = useState(true);

  const handleAddToCart = (product) => {
    const checkingProductIsOrNot = cart.find(
      (cart) => cart.product_id == product.product_id
    );
    if (!checkingProductIsOrNot) {
      setCart([...cart, product]);
      toast.success(`${product.product_title} is added to the cart`)
    } else {
      
      setCartDisabled(true)
    }
  };
  const handleAddToWishList = (product) => {
    const checkingProductIsOrNot = wishList.find(
      (wishList) => wishList.product_id == product.product_id
    );
    if (!checkingProductIsOrNot) {
     
      setWishList([...wishList, product]);
      toast.success(`Your desired product ${product.product_title} is added to the Wishlist..`)

    } else {
      setWishlistDisabled(true)
    }
  };
  const handleRemoveItemFromWishList = (produc) => {
    // console.log(product);
    const reminingData = [...wishList].filter(
      (cartData) => cartData.product_id != produc.product_id
    );
    setWishList(reminingData);
    setWishlistDisabled(false)
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
        handleRemoveItemFromWishList,
        wishlistDisabled,
        setWishlistDisabled,
        setCartDisabled,
        total, setTotal
      }}
    >
      <TotalContext.Provider value={{ total, setTotal }}>
        <Navbar />
        <Outlet />

        <Footer />
        <ToastContainer
          position="top-center"
          autoClose={1000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          
          transition:Flip
        />
      </TotalContext.Provider>
    </CartContext.Provider>
  );
};

export default Root;
