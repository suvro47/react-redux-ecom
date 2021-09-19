import CartItemReducer from "./CartItemReducer";
import QuantityReducer from "./QuantityReducer";
import ModalControllReducer from "./ModalControllReducer";
import FetchReducer from "./FetchReducer";
import { combineReducers } from "redux";

const RootReducer = combineReducers({
  cartItems: CartItemReducer,
  totalQuantity: QuantityReducer,
  isModalOpen: ModalControllReducer,
  fetchInfo: FetchReducer,
});

export default RootReducer;
