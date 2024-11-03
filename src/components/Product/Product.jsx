import { Link } from "react-router-dom";

const Product = ({ product }) => {
  const {product_id, product_title, product_image, price } = product;

  return (
    <div className="bg-slate-100 rounded-xl">
      <div className="p-6 space-y-5 ">
        <img className="h-48 rounded-xl w-full" src={product_image} alt="" />
        <h1 className="text-[#09080F] text-2xl font-semibold">
          {product_title}
        </h1>
        <p className="text-[#09080f76] text-lg font-medium">Price: {price}k</p>
        
        <Link to={`/product/${product_id}`}>
          <button className="py-3 px-5 rounded-full border-2 text-[#9538E2] border-[#9538E2]   ">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Product;
