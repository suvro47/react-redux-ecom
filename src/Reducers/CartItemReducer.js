const initialSate = [];

const ProductReducer = (state = initialSate, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const updatedItem = { ...action.payload, quantity: 1 };
      const stateCopied = [...state];
      stateCopied.push(updatedItem);
      return stateCopied;
    case "INCREMENT_QUANTITY_IN_CART_ITEM":
      const _item = { ...action.payload };
      const _temp = [...state];
      _temp.find((p) => p.id === _item.id).quantity++;
      return _temp;
    case "DECREMENT_QUANTITY_IN_CART_ITEM":
      const item = { ...action.payload };
      if (item.quantity > 0) {
        const temp = [...state];
        temp.find((p) => p.id === item.id).quantity--;
        if (temp.find((p) => p.id === item.id).quantity === 0) {
          const index = temp.findIndex((itr) => itr.id === item.id);
          temp.splice(index, 1);
        }
        return temp;
      }
      return state;
    default:
      return state;
  }
};

export default ProductReducer;
