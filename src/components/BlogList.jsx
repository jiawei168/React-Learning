import React from "react";
import blogs from "../data/blog";
import { NavLink } from "react-router-dom";
import "./Main.css";

const BlogList = () => {
  return (
    <div className="blog-list-container">
      <h2 className="blog-list-title">Blog List</h2>
      <ul className="blog-list">
        {blogs.map((blog, index) => (
          <li key={index} className="blog-list-item">
            <NavLink to={`/blog/${index}`} className="blog-list-link">
              <div className="blog-list-content">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="blog-list-image"
                />
                <div className="blog-list-info">
                  <h3 className="blog-list-title">{blog.title}</h3>
                  <p className="blog-list-author">Author: {blog.author}</p>
                  <p className="blog-list-views">Views: {blog.views}</p>
                </div>
              </div>
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogList;
