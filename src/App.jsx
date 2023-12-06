import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Menus from "./pages/Menus";
import CreateMenu from "./pages/CreateMenu";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/menus" element={<Menus />}></Route>
        <Route path="/create-menu" element={<CreateMenu />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
