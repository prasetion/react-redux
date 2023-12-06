import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { menuReducer } from "./menuReducer";

// combine many reducers into one reducer
export const rootReducer = combineReducers({ authReducer, menuReducer });
