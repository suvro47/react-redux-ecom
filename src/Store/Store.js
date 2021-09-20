import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";
import RootReducer from "../Reducers/RootReducer";
import { persistStore } from "redux-persist";

const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware));
export const store = createStore(RootReducer, composedEnhancer);
export const persistor = persistStore(store);
