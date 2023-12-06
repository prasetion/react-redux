import { useSelector } from "react-redux";

const Home = () => {
  //   const state = useSelector((state) => state.authReducer);
  const { authReducer } = useSelector((state) => state);
  console.log(authReducer);
  return (
    <div>
      <h1>Home</h1>
      {authReducer.isAuth ? "sudah login" : "belum login"}
    </div>
  );
};

export default Home;
