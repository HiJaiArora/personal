import { combineReducers } from "redux";
import LoginReducer from "./login/reducers/loginReducer";
import WomenReducer from "./womenTop/reducers/womenReducer";
import backdropAction from "./spinner/reducers/spinnerReducer";

const rootReducers = combineReducers({
  login: LoginReducer,
  womenTop: WomenReducer,
  backDropStatus: backdropAction,
});

export default rootReducers;
