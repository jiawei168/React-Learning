import React from "react";
import BlogList from "../components/BlogList";
import { NavLink } from "react-router-dom";
const Home = () => {
  return (
    <div>
      <h2>Home页面</h2>
      <BlogList></BlogList>
    </div>
  );
};

export default Home;
