import { act } from "react-dom/test-utils";

const products = (state, action) => {
  switch (action.type) {
    case "GET_PRODUCTS":
      return {
        ...state,
        products: action.payload,
      };
      case "GET_PRODUCT":
      return {
        ...state,
        product: action.payload,
      };
      case "ADD_CART":
        return {
          ...state,
          cart: [action.payload, ...state.cart],
        };
        case "ADD_WISHLIST":
        return {
          ...state,
          cart: [action.payload, ...state.wishlist],
        }
        case "CLEAR_CART":
          return {
            ...state,
            cart: [],
          };
    default:
      return state;
  }
};
export default products;
