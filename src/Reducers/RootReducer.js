import CartItemReducer from "./CartItemReducer";
import QuantityReducer from "./QuantityReducer";
import ModalControllReducer from "./ModalControllReducer";
import { combineReducers } from "redux";

const RootReducer = combineReducers({
  cartItems: CartItemReducer,
  totalQuantity: QuantityReducer,
  isModalOpen: ModalControllReducer,
});

export default RootReducer;
