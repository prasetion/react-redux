import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { menuReducer } from "./menuReducer";
import { userReducer } from "./userReducer";

// combine many reducers into one reducer
export const rootReducer = combineReducers({
  authReducer,
  menuReducer,
  userReducer,
});
