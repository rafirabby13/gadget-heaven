/* eslint-disable no-unused-vars */
import { useContext } from "react";
import { CartContext } from "../Root/Root.jsx";
import AddedDetail from "../AddedDetail/AddedDetail.jsx";
import AddedToWishListProducts from "../AddedToWishListProducts/AddedToWishListProducts.jsx";

const WishListDetails = () => {
  const { wishList } = useContext(CartContext);
//   console.log(wishList);
  return (
    <div className="min-h-screen pb-20">
      <h2 className=" px-20 py-10  text-[#0B0B0B] font-bold text-2xl">wish list</h2>
      <div className="grid gap-6">
        {wishList?.map((wishList, index) => (
          <AddedToWishListProducts
            key={index}
            product={wishList}
          ></AddedToWishListProducts>
        ))}
      </div>
    </div>
  );
};

export default WishListDetails;
