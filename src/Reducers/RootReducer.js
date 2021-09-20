import CartItemReducer from "./CartItemReducer";
import QuantityReducer from "./QuantityReducer";
import ModalControllReducer from "./ModalControllReducer";
import FetchReducer from "./FetchReducer";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cartItems", "totalQuantity", "isModalOpen", "fetchInfo"],
};

const RootReducer = combineReducers({
  cartItems: CartItemReducer,
  totalQuantity: QuantityReducer,
  isModalOpen: ModalControllReducer,
  fetchInfo: FetchReducer,
});

export default persistReducer(persistConfig, RootReducer);
