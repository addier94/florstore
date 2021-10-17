import { combineReducers } from "redux";
import auth from "./authReducer";
import alert from "./alertReducer";
import modal from "./modalReducer";

export default combineReducers({
  auth,
  alert,
  modal,
});
