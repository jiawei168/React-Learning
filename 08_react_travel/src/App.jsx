import "./App.css";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes";
import { Link } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to="/city">热门城市</Link>
          </li>
          <li>
            <Link to="/flight">机票预订</Link>
          </li>
          <li>
            <Link to="/hote">酒店预订</Link>
          </li>
          <li>
            <Link to="/user">个人中心</Link>
          </li>
          <li>
            <Link to="/login">登录</Link>
          </li>
        </ul>
      </nav>
      <hr />
      <AppRoutes />
    </BrowserRouter>
  );
};

export default App;
