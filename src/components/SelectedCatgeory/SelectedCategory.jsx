import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Product from "../Product/Product.jsx";

const SelectedCategory = () => {
  const { category } = useParams();
  //   console.log(category);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("./gadgets.json")
      .then((res) => res.json())
      .then((data) => {
        if (category == "All Products") {
          setProducts(data);
        } else if (category == "tablet") {
          setProducts(data);
        } else {
          const filteredData = data.filter((data) => data.category == category);
          //   console.log(filteredData);
          setProducts(filteredData);
        }
      });
  }, [category]);
  return (
    <div className="col-span-5">
      <h1 className="text-4xl font-bold text-[#0B0B0B] text-center py-12">
        Explore Cutting-Edge Gadgets
      </h1>

      {products.length > 0 ? (
        <div className="grid grid-cols-3 gap-6">
          {products.map((product) => (
            <Product key={product.product_id} product={product}></Product>
          ))}
        </div>
      ) : (
        <h1>No data available for this category</h1>
      )}
    </div>
  );
};

export default SelectedCategory;
