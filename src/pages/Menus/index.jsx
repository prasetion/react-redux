import { useSelector } from "react-redux";

const Menus = () => {
  const { menuReducer } = useSelector((state) => state);
  console.log(menuReducer);
  return (
    <div>
      <h1>Menus</h1>
      {menuReducer.list.map((item, id) => (
        <div>{item.name}</div>
      ))}
    </div>
  );
};

export default Menus;
