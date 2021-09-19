const QuantityReducer = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT_IN_TOTAL":
      return state + 1;
    case "DECREMENT_IN_TOTAL":
      return state - 1;
    case "DECREMENT_FIXED_QUANTITY_IN_TOTAL":
      return state - action.payload;
    default:
      return state;
  }
};

export default QuantityReducer;
