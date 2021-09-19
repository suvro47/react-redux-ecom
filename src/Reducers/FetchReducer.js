const initState = [];
const FetchReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_PRODUCTS":
      return action.payload;
    default:
      return state;
  }
};
export default FetchReducer;
