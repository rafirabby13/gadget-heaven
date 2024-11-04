import { Link } from "react-router-dom";

const Product = ({ product }) => {
  const { product_id, product_title, product_image, price } = product;

  return (
    <div className="bg-slate-100 rounded-xl ">
      <div className="p-1 lg:p-6 space-x-1 lg:space-y-5 flex flex-col justify-between">
        <img className="h-24 lg:h-48 rounded-xl w-full" src={product_image} alt="" />
        <h1 className="text-[#09080F] text-sm lg:text-2xl font-semibold">
          {product_title}
        </h1>
        <div className=" space-y-5 flex flex-col justify-between items-stretch">
          <p className="text-[#09080f76] text-xs lg:text-lg font-medium">
            Price: {price}k
          </p>

          <Link to={`/product/${product_id}`}>
            <button className="py-1 px-3 lg:py-3 lg:px-5 rounded-full border-2 text-[#9538E2] border-[#9538E2] text-xs lg:text-lg  ">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Product;
