import { useState } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { TYPES } from "../../redux/types";

const Login = () => {
  //   useEffect(() => {
  //     handleLogin();
  //   }, []);

  const { loginReducer } = useSelector((state) => state);
  const dispatch = useDispatch();

  const [loginPayload, setLoginPayload] = useState({
    username: "",
    password: "",
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setLoginPayload({
      ...loginPayload,
      [name]: value,
    });
  };

  const handleLogin = async () => {
    try {
      const res = await axios.post(
        "https://api.mudoapi.tech/login",
        loginPayload
      );

      console.log(res.data.success);
      console.log(loginPayload.username);

      localStorage.setItem("token", res.data.data.token);

      dispatch({
        type: TYPES.LOGIN,
        payload: {
          username: loginPayload.username,
          success: res.data.success,
        },
      });
    } catch (error) {
      console.log("login error: ", error);
    }
  };

  console.log("state", loginReducer);

  return (
    <div>
      <h1>Login</h1>
      <label>username: </label>
      <input type="text" name="username" onChange={handleOnChange} />
      <br />
      <label>password: </label>
      <input type="password" name="password" onChange={handleOnChange} />
      <br />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
