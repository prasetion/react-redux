import { useSelector, useDispatch } from "react-redux";
// import axios from "axios";
// import { TYPES } from "../../redux/types";
import { useEffect } from "react";
import { handleGetMenus } from "../../redux/actions/menuAction";

const Menus = () => {
  useEffect(() => {
    // handleGetMenus();
    dispatch(handleGetMenus());
  }, []);

  const { menuReducer } = useSelector((state) => state);
  const dispatch = useDispatch();

  console.log(menuReducer);
  return (
    <div>
      <h1>Menus</h1>
      {menuReducer.menuList.map((item, id) => (
        <div key={id}>{item.name}</div>
      ))}
    </div>
  );
};

export default Menus;
