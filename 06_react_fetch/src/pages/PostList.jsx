import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import styles from "../styles/PostList.module.css";

// 定义 PostList 组件
const PostList = () => {
  // 初始化文章数据状态
  const [posts, setPosts] = useState([]);
  // 获取路由导航函数
  const navigate = useNavigate();

  // 使用 useEffect 在组件挂载时发起数据请求
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        // 修改请求地址为新的端口
        const response = await axios.get("http://localhost:30001/posts");
        // 更新文章数据状态
        setPosts(response.data);
      } catch (error) {
        // 打印错误信息
        console.error("获取文章列表出错:", error);
      }
    };

    // 调用异步函数发起请求
    fetchPosts();
  }, []);

  // 处理文章点击事件
  const handlePostClick = (id) => {
    // 点击文章时，使用 navigate 跳转到对应的详情页面
    navigate(`/post/${id}`);
  };

  // 处理删除文章事件
  const handleDeletePost = async (id) => {
    try {
      // 发起删除请求
      await axios.delete(`http://localhost:30001/posts/${id}`);
      // 更新文章列表，过滤掉已删除的文章
      setPosts(posts.filter((post) => post.id !== id));
    } catch (error) {
      console.error("删除文章出错:", error);
    }
  };

  // 处理修改文章事件
  const handleEditPost = (id) => {
    // 跳转到修改文章页面
    navigate(`/edit/${id}`);
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>文章列表</h2>
      <ul className={styles.list}>
        {posts.map((post) => (
          <li
            className={styles.listItem}
            key={post.id}
            style={{ cursor: "pointer" }}
          >
            <h3 onClick={() => handlePostClick(post.id)}>{post.title}</h3>
            <p onClick={() => handlePostClick(post.id)}>{post.body}</p>
            <button
              className="deleteButton"
              onClick={() => handleDeletePost(post.id)}
            >
              删除
            </button>
            <button
              className="editButton"
              onClick={() => handleEditPost(post.id)}
            >
              编辑
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

// 导出 PostList 组件
export default PostList;
