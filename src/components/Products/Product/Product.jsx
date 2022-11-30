import React, { useEffect } from "react";
import { useContext } from "react";
import { GlobalContext } from "../../../context/GlobalState";

const Product = () => {
  const { products, getProducts } = useContext(GlobalContext);
  useEffect(()=> {
    getProducts();
  }, [])
  return <div>
    {products.map(task => console.log("products: ", products))}
    </div>;
};

export default Product;
