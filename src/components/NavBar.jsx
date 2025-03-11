import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

const NavBar = ({ user, onLogout, onEditUser }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [username, setUsername] = useState(user?.username || "");
  const [age, setAge] = useState(user?.age || "");
  const [bio, setBio] = useState(user?.bio || "");

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    onEditUser({ username, age, bio }); // 调用父组件的 onEditUser 回调函数
    setIsEditing(false);
  };

  const handleLogout = () => {
    // 清空用户信息
    setUsername("");
    setAge("");
    setBio("");
    setIsEditing(false); // 退出编辑模式
    onLogout(); // 调用父组件的 onLogout 回调函数
  };

  return (
    <div className="navbar-container">
      <nav className="nav-links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about?name=zhangsan&age=6">About</NavLink>
        <NavLink to="/dashboard">Dashboard</NavLink>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/book/123">Book</NavLink>
      </nav>
      <div className="user-profile">
        <img
          src="https://img.ixintu.com/download/jpg/20200910/f9256155491e54bf5e99bf29eece0156_512_512.jpg!ys"
          alt="头像"
          className="profile-pic"
        />
        {isEditing ? (
          <div className="user-profile-edit">
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
            />
            <input
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              placeholder="Age"
            />
            <textarea
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              placeholder="简介"
              rows="3"
            />
            <div className="button-group">
              <button onClick={handleSaveClick}>Save</button>
              <button onClick={() => setIsEditing(false)}>Cancel</button>
            </div>
          </div>
        ) : (
          <div className="user-profile-display">
            <p>Username: {username}</p>
            <p>Age: {age}</p>
            <p>Bio: {bio}</p>
            <div className="button-group">
              <button onClick={handleEditClick}>Edit</button>
              <button onClick={handleLogout}>Logout</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
