import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { TYPES } from "../../redux/types";
import { useEffect } from "react";

const Menus = () => {
  useEffect(() => {
    handleGetMenus();
  }, []);
  const { menuReducer } = useSelector((state) => state);
  const dispatch = useDispatch();

  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyRGF0YSI6eyJ1c2VybmFtZSI6InJpZGhvIiwidXNlcklkIjoxLCJicmFuY2hJZCI6MCwiZW1haWwiOiIiLCJyb2xlTmFtZSI6ImFkbWluIn0sImlzcyI6Im11ZG8tYXBwIn0.zpjyvvq-NpRrtmVBxiC1w1VMTx4yHbJEyoGQu0cIzk4";
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  const handleGetMenus = async () => {
    try {
      const res = await axios.get("https://api.mudoapi.tech/menus", config);
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

  console.log(menuReducer);
  return (
    <div>
      <h1>Menus</h1>
      {menuReducer.menuList.map((item, id) => (
        <div>{item.name}</div>
      ))}
    </div>
  );
};

export default Menus;
