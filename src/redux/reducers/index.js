import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { menuReducer } from "./menuReducer";
import { userReducer } from "./userReducer";
import { loginReducer } from "./loginReducer";

// combine many reducers into one reducer
export const rootReducer = combineReducers({
  authReducer,
  menuReducer,
  userReducer,
  loginReducer,
});
