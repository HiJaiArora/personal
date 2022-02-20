import { combineReducers } from "redux";
import LoginReducer from "./login/reducers/loginReducer";
import backdropAction from "./spinner/reducers/spinnerReducer";

const rootReducers = combineReducers({
  login: LoginReducer,
  backDropStatus: backdropAction,
});

export default rootReducers;
