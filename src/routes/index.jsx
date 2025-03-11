import React, { useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import NotFound from "../pages/NotFound";
import Dashboard from "../pages/dashboard/Dashboard";
import Profile from "../pages/dashboard/Profile";
import Setting from "../pages/dashboard/Setting";
import Fans from "../pages/dashboard/Fans";
import Follow from "../pages/dashboard/Follow";
import Login from "../pages/Login";
import Book from "../pages/Book";
import BlogList from "../components/BlogList";
import NavBar from "../components/NavBar";
import BlogDetails from "../components/BlogDetails";

const AppRoutes = () => {
  const [user, setUser] = useState(null); // 管理用户状态

  const handleLogin = (userData) => {
    setUser(userData); // 登录时设置用户数据
  };

  const handleLogout = () => {
    setUser(null); // 登出时清空用户数据
  };

  const handleEditUser = (newUserData) => {
    setUser(newUserData); // 更新用户数据
  };

  return (
    <Routes>
      {/* 登录页面不显示导航栏 */}
      <Route path="/login" element={<Login onLogin={handleLogin} />} />

      {/* 其他页面显示导航栏 */}
      <Route
        path="/"
        element={
          <>
            <NavBar
              user={user}
              onLogout={handleLogout}
              onEditUser={handleEditUser}
            />
            <BlogList />
          </>
        }
      />
      <Route
        path="/about"
        element={
          <>
            <NavBar
              user={user}
              onLogout={handleLogout}
              onEditUser={handleEditUser}
            />
            <About />
          </>
        }
      />
      <Route
        path="/dashboard"
        element={
          <>
            <NavBar
              user={user}
              onLogout={handleLogout}
              onEditUser={handleEditUser}
            />
            <Dashboard user={user} />
          </>
        }
      >
        <Route index element={<Profile />} />
        <Route path="profile" element={<Profile />}>
          <Route index element={<Fans />} />
          <Route path="fans" element={<Fans />} />
          <Route path="follow" element={<Follow />} />
        </Route>
        <Route path="setting" element={<Setting />} />
      </Route>
      <Route
        path="/book/:bookId"
        element={
          <>
            <NavBar
              user={user}
              onLogout={handleLogout}
              onEditUser={handleEditUser}
            />
            <Book />
          </>
        }
      />
      <Route
        path="/blog/:id"
        element={
          <>
            <NavBar
              user={user}
              onLogout={handleLogout}
              onEditUser={handleEditUser}
            />
            <BlogDetails />
          </>
        }
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
