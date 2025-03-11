import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import "./Profile.css";
const Profile = () => {
  return (
    <div className="profile-container">
      <nav className="profile-nav">
        <NavLink to="fans" className="nav-link">
          我的粉丝
        </NavLink>
        <NavLink to="follow" className="nav-link">
          我的关注
        </NavLink>
      </nav>
      <div className="profile-content">
        <Outlet />
      </div>
    </div>
  );
};

export default Profile;
