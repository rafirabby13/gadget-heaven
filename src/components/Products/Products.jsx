/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import Product from "../Product/Product.jsx";

const Products = ({category}) => {
    // console.log(category);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("../gadgets.json")
      .then((res) => res.json())
      .then((data) => {
                setProducts(data);
           
        }
    )
  }, []);
  return (
   
    
    <div className="lg:col-span-5 xl:col-span-5  pb-20">
      
      <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-2
         lg:gap-6">
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
