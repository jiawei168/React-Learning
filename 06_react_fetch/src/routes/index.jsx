import React from "react";
import { Routes, Route } from "react-router-dom";
import PostList from "../pages/PostList";
import CreatePost from "../pages/CreatePost";
import PostDetail from "../pages/PostDetail";
import EditPost from "../pages/EditPost";
import MovieNews from "../pages/MovieNews";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<PostList />} />
      <Route path="/create" element={<CreatePost />} />
      <Route path="/post/:id" element={<PostDetail />} />
      <Route path="/edit/:id" element={<EditPost />} />
      <Route path="/movie" element={<MovieNews />} />
    </Routes>
  );
};

export default AppRoutes;
