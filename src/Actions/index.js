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
