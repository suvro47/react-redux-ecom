const QuantityReducer = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT_IN_TOTAL":
      return state + 1;
    case "DECREMENT_IN_TOTAL":
      return state - 1;
    default:
      return state;
  }
};

export default QuantityReducer;
