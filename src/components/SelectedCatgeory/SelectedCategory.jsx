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
    <div className="lg:col-span-6 xl:col-span-6">
      

      {
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-2
         lg:gap-6">
          {products.map((product) => (
            <Product key={product.product_id} product={product}></Product>
          ))}
        </div>
       }
    </div>
  );
};

export default SelectedCategory;
