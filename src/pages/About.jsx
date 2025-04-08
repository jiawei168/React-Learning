import React from "react";
import { useLocation } from "react-router-dom";

const About = () => {
  const location = useLocation();
  const queryPasrams = new URLSearchParams(location.search);
  const name = queryPasrams.get("name");
  const age = queryPasrams.get("age");
  return (
    <div>
      <h2>About页面</h2>
      <h3>name:{name}</h3>
      <h3>age:{age}</h3>
    </div>
  );
};

export default About;
