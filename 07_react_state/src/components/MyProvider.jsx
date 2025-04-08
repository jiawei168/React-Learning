import React, { useState } from "react";

// 创建 Context
const MyContext = React.createContext();

function MyProvider({ children }) {
  const [user, setUser] = useState({ name: "John", age: 30 });

  return (
    <MyContext.Provider value={{ user, setUser }}>
      {children}
    </MyContext.Provider>
  );
}
export default MyProvider;
