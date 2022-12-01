import React, { createContext, useReducer } from "react";
import ProductReducer from "./ProductsReducer";
import axios from "axios";

const API_URL = "http://localhost:8080";
const cart = JSON.parse(localStorage.getItem('cart'));
const initialState = {
  products: [],
  cart: cart? cart:[]
};

export const ProductsContext = createContext(initialState);

export const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ProductReducer, initialState);

  const getProducts = async () => {
    const res = await axios.get(API_URL + "/products/getAll");
    dispatch({
      type: "GET_PRODUCTS",
      payload: res.data.products,
    });
    return res;
  };
  const addCart = (product) => {
    dispatch({
      type: "ADD_CART",
      payload: product,
    });
  };
  return (
    <ProductsContext.Provider
      value={{
        products: state.products,
        getProducts,
        addCart,
        cart:state.cart
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
