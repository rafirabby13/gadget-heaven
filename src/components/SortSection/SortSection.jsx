import { useContext, useEffect, useRef, useState } from "react";
import { BsSortDown } from "react-icons/bs";
import { CartContext } from "../Root/Root.jsx";

const SortSection = () => {
  const { cart, handleSortByPrice,setWishList, setCart } = useContext(CartContext);

  const [loading, setIsLoading] = useState(true);
  const count = useRef(0);

  //    console.log(cart);
  useEffect(() => {
    if (loading) {
      cart.forEach((element) => {
        console.log(count.current);
        count.current = count.current + element.price;
        console.log(count.current);
      });
    }
    setIsLoading(false);
  }, [loading]);

  //    for (const element of cart) {
  //     console.log(element.price);
  //     const totalprice = element.price + total
  //     console.log(totalprice);
  //     setSum( totalprice)
  // }

  // for (const element of totalprie) {
  //     setTotal(element+total)

  // };


  const handlePurchase=()=>{
    document.getElementById('my_modal_5').showModal()
    setCart([])

    setWishList([])
  }










  return (
    <div className="flex items-center gap-5 justify-between px-20 py-10">
      <div>
        <h1>Cart</h1>
      </div>
      <div className="flex items-center gap-5">
        <h1>Total Cost: {count.current}k</h1>
        <div onClick={handleSortByPrice} className="flex items-center gap-5">
          <h1>Sort by Price</h1>
          <div>
            <BsSortDown />
          </div>
        </div>
        <button onClick={handlePurchase}>Purchase</button>
      </div>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      
   
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">
            Press ESC key or click the button below to close
          </p>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default SortSection;
