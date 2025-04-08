import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import "../../app.css";

const Dashboard = ({ user }) => {
  return (
    <div>
      <h2>Dashboard</h2>
      {/* 检查 user 是否存在，避免渲染未定义的值 */}
      {user ? (
        <h3>
          Welcome: 姓名 {user.username}, 年龄 {user.age}
        </h3>
      ) : (
        <h3>Welcome: 未登录用户</h3>
      )}
      <nav>
        <NavLink to="profile">Profile</NavLink>
        <NavLink to="setting">Setting</NavLink>
      </nav>
      <Outlet />
    </div>
  );
};

export default Dashboard;
