import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Main.css"; // 引入登录页面的样式文件

const Login = ({ onLogin }) => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // 模拟的用户数据
  const users = [
    { username: "zhangsan", password: "123456", age: 12 },
    { username: "lisi", password: "654321", age: 20 },
  ];

  const handleLogin = () => {
    const user = users.find(
      (u) => u.username === username && u.password === password
    );
    if (user) {
      onLogin(user); // 调用父组件的 onLogin 回调函数
      navigate("/dashboard"); // 跳转到 Dashboard 页面
    } else {
      setError("用户名或密码错误");
    }
  };

  return (
    <div className="login-container">
      <h2 className="login-title">登录界面</h2>
      <div className="login-form">
        <div className="form-group">
          <label>用户名：</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="请输入用户名"
          />
        </div>
        <div className="form-group">
          <label>密码：</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="请输入密码"
          />
        </div>
        {error && <p className="error-message">{error}</p>}
        <button onClick={handleLogin}>登录</button>
      </div>
    </div>
  );
};

export default Login;
