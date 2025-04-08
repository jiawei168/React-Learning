import { useContext } from "react";
import UserContext from "../context/UserContext";

function UserProfile() {
  const { user, setUser } = useContext(UserContext);
  return (
    <div>
      <h2>个人资料</h2>
      <p>姓名：{user.name}</p>
      <p>年龄：{user.age}</p>
      <button onClick={() => setUser({ ...user, age: user.age + 1 })}>
        增加年龄
      </button>
    </div>
  );
}

export default UserProfile;
