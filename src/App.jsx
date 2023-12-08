import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Menus from "./pages/Menus";
import CreateMenu from "./pages/CreateMenu";
import Login from "./pages/Login";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/menus" element={<Menus />}></Route>
        <Route path="/create-menu" element={<CreateMenu />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
