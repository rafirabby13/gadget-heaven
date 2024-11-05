/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import ArrivalProduct from "../ArrivalProduct/ArrivalProduct.jsx";

const ArrivalProducts = () => {
    const [newProducts, setNewProducts] = useState([])

    useEffect(()=>{
        fetch('./new.json')
        .then(res=> res.json())
        .then(data=>{
            // console.log(data);
            setNewProducts(data)
        })

    },[])
    return (
        <div className="pb-40">
              <h1 className="text-xl lg:text-6xl font-bold  text-center py-4 lg:py-12 underline">New Arrival Products</h1>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {
                    newProducts.map((product)=> <ArrivalProduct
                    key={product.product_id}
                    product={product}
                    ></ArrivalProduct>)
                }
              </div>
        </div>
    );
};

export default ArrivalProducts;