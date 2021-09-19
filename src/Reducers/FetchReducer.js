const initState = {
  loading: true,
  products: [],
  error: "",
};

const FetchReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return {
        loading: false,
        products: action.payload,
        error: "",
      };
    case "FETCH_FAILURE":
      return {
        products: [],
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
export default FetchReducer;
