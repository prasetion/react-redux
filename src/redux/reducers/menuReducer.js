import { TYPES } from "../types";

// menu state and menuReducer
const menuState = {
  list: [
    { id: 1, name: "soto" },
    { id: 2, name: "dino" },
  ],
  menuList: [],
};

export const menuReducer = (state = menuState, action) => {
  switch (action.type) {
    case TYPES.MENUS:
      return {
        ...state,
        menuList: action.payload.menuList,
      };
    default:
      return state;
  }
};
