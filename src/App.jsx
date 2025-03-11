import React from "react";

import { BrowserRouter, Route, Routes, Link, NavLink } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import AppRoutes from "./routes";
import "./App.css"; // 引入CSS文件
const App = () => {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
};

export default App;
