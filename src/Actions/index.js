import axios from "axios";

export const addToCart = (item) => {
  return {
    type: "ADD_TO_CART",
    payload: item,
  };
};

export const incrementQuantityInCartItem = (item) => {
  return {
    type: "INCREMENT_QUANTITY_IN_CART_ITEM",
    payload: item,
  };
};

export const decrementQuantityInCartItem = (item) => {
  return {
    type: "DECREMENT_QUANTITY_IN_CART_ITEM",
    payload: item,
  };
};

export const removeItemFromCart = (item) => {
  return {
    type: "REMOVE_FROM_CART",
    payload: item,
  };
};

export const clearCart = () => {
  return {
    type: "CLEAR_CART",
  };
};

export const incrementInTotalQuantity = () => {
  return {
    type: "INCREMENT_IN_TOTAL",
  };
};

export const decrementInTotalQuantity = () => {
  return {
    type: "DECREMENT_IN_TOTAL",
  };
};

export const decrementFixedQuantityInTotalQuantity = (quantity) => {
  return {
    type: "DECREMENT_FIXED_QUANTITY_IN_TOTAL",
    payload: quantity,
  };
};

export const clearTotalQuantity = () => {
  return {
    type: "CLEAR_TOTAL_QUANTITY",
  };
};

export const modalOpen = () => {
  return {
    type: "OPEN",
  };
};

export const modalClose = () => {
  return {
    type: "CLOSE",
  };
};

export const fetchSuccess = (items) => {
  return {
    type: "FETCH_SUCCESS",
    payload: items,
  };
};

export const fetchFailure = (message) => {
  return {
    type: "FETCH_FAILURE",
    payload: message,
  };
};

export const fetchProducts = async (dispatch) => {
  await axios
    .get("https://fakestoreapi.com/products")
    .then((res) => {
      // success
      dispatch(fetchSuccess(res.data));
    })
    .catch((err) => {
      // error
      dispatch(fetchFailure(err.message));
    });
};
