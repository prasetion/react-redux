import axios from "axios";
import { TYPES } from "../types";

export const handleGetMenus = () => async (dispatch) => {
  try {
    const res = await axios.get("https://api.mudoapi.tech/menus");
    dispatch({
      type: TYPES.MENUS,
      payload: {
        menuList: res.data.data.Data,
      },
    });
  } catch (error) {
    console.log(error);
  }
};
