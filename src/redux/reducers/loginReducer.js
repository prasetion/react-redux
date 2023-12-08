import { TYPES } from "../types";

// menu state and menuReducer
const loginState = {
  username: "",
  success: false,
};

export const loginReducer = (state = loginState, action) => {
  switch (action.type) {
    case TYPES.LOGIN:
      return {
        ...state,
        username: action.payload.username,
        success: action.payload.success,
      };
    case TYPES.LOGOUT:
      return {
        ...state,
        username: action.payload.username,
        success: action.payload.success,
      };

    default:
      return state;
  }
};
