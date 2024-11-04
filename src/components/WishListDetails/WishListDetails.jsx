import { useContext } from "react";
import { CartContext } from "../Root/Root.jsx";
import AddedDetail from "../AddedDetail/AddedDetail.jsx";

const WishListDetails = () => {
  const { wishList } = useContext(CartContext);
//   console.log(wishList);
  return (
    <div>
      <h2>wish list</h2>
      <div className="grid gap-6">
        {wishList?.map((wishList, index) => (
          <AddedDetail
            key={index}
            product={wishList}
          ></AddedDetail>
        ))}
      </div>
    </div>
  );
};

export default WishListDetails;
