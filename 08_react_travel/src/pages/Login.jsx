import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "../styles/Login.module.css";

// 模拟的用户数据
const mockUsers = [
  {
    username: "admin",
    password: "admin123",
  },
  {
    username: "user",
    password: "user123",
  },
];

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    // 检查用户名和密码是否匹配模拟数据
    const user = mockUsers.find(
      (u) => u.username === username && u.password === password
    );

    if (user) {
      // 登录成功，跳转到首页
      navigate("/");
    } else {
      // 登录失败，显示错误信息
      setError("用户名或密码错误！");
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>登录</h1>
      <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
        <div className={styles.formGroup}>
          <label htmlFor="username">用户名</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="password">密码</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <p className={styles.error}>{error}</p>}
        <button
          type="button"
          className={styles.loginButton}
          onClick={handleLogin}
        >
          登录
        </button>
        <p className={styles.registerLink}>
          没有账号？<Link to="/register">注册</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
