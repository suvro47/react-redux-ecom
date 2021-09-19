import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from "redux-thunk";
import RootReducer from "../Reducers/RootReducer";

const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware));
const store = createStore(RootReducer, composedEnhancer);

export default store;
