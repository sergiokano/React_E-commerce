const products = (state, action) => {
  switch (action.type) {
    case "GET_PRODUCTS":
      return {
        ...state,
        tasks: action.payload,
      };
    default:
      return state;
  }
};
export default tasks;
