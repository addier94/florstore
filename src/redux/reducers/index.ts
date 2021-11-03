import { combineReducers } from "redux";
import auth from "./authReducer";
import alert from "./alertReducer";
import modal from "./modalReducer";
import productsUser from "./productsUserReducer";
import productDetailReducer from "./productDetailState";

export default combineReducers({
  auth,
  alert,
  modal,
  productsUser,
  productDetailReducer,
});
