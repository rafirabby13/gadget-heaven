import { useEffect, useState } from "react";
import Product from "../Product/Product.jsx";

const Products = ({category}) => {
    // console.log(category);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("./gadgets.json")
      .then((res) => res.json())
      .then((data) => {
                setProducts(data);
           
        }
    )
  }, []);
  return (
    <div className="col-span-5 border-2">
      <div className="grid grid-cols-3 gap-6">
      {
        products.map(product=> <Product
        key={product.product_id}
        product={product}
        ></Product>)
      }
      </div>
    </div>
  );
};

export default Products;
