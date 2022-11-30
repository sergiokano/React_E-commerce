import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
import axios from "axios";

const initialState = {
  tasks: [],
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const getProducts = async () => {
    const res = await axios.get("http://localhost:3000/products");
    dispatch({
      type: "GET_PRODUCTS",
      payload: res.data,
    });
  };
  return (
    <GlobalContext.Provider
      value={{
        task: state.tasks,
        getTasks,
      }}
    ></GlobalContext.Provider>
  );
};
