import React from "react";
import { BrowserRouter, Link } from "react-router-dom";
import AppRoutes from "./routes";
import styles from "./styles/App.module.css";

const App = () => {
  return (
    <BrowserRouter>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li>
            <Link to="/movie" className={styles.navLink}>
              影视列表
            </Link>
          </li>
          <li>
            <Link to="/" className={styles.navLink}>
              文章列表
            </Link>
          </li>
          <li>
            <Link to="/create" className={styles.navLink}>
              新建文章
            </Link>
          </li>
        </ul>
      </nav>
      <hr className={styles.hr} />
      <AppRoutes />
    </BrowserRouter>
  );
};

export default App;
