import { useSelector, useDispatch } from "react-redux";

const Home = () => {
  //   const state = useSelector((state) => state.authReducer);
  const { authReducer, userReducer } = useSelector((state) => state);
  const dispatch = useDispatch();

  console.log(authReducer);
  console.log(userReducer);

  const handleLogin = () => {
    dispatch({
      type: "LOGIN",
      payload: {
        isAuth: true,
      },
    });
  };

  const handleLogout = () => {
    dispatch({
      type: "LOGOUT",
      payload: {
        isAuth: false,
      },
    });
  };

  return (
    <div>
      <h1>Home</h1>
      {authReducer.isAuth ? "sudah login" : "belum login"}
      {userReducer.list.map((user) => (
        <div>
          <p>{user.name}</p>
        </div>
      ))}

      {authReducer.isAuth ? (
        <button onClick={handleLogout}>Logout</button>
      ) : (
        <button onClick={handleLogin}>Login</button>
      )}
    </div>
  );
};

export default Home;
