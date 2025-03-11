import React from "react";
import { useParams } from "react-router-dom";
import blogs from "../data/blog";

const BlogDetails = () => {
  const { blogIndex } = useParams();
  const blog = blogs[blogIndex];

  if (!blog) {
    return <div className="blog-details-container">Blog not found</div>;
  }

  return (
    <div className="blog-details-container">
      {/* 添加图片部分 */}

      <h2 className="blog-details-title">{blog.title}</h2>
      <div className="blog-details-content">
        <p>{blog.content}</p>
      </div>
      <div className="blog-details-meta">
        <p>Author: {blog.author}</p>
        <div className="blog-details-image">
          <p>头像</p>
          <img src={blog.image} alt={blog.title} />
        </div>
        <p>Likes: {blog.likes}</p>
        <p>Views: {blog.views}</p>
        <p>Collections: {blog.collections}</p>
      </div>
    </div>
  );
};

export default BlogDetails;
