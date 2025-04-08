import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import styles from "../styles/CreatePost.module.css";
const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // 发送 POST 请求创建新文章
      const response = await axios.post("http://localhost:30001/posts", {
        title,
        body,
      });
      // 创建成功后跳转到文章列表页面
      navigate("/");
      console.log("创建成功", response);
    } catch (error) {
      console.error("创建文章时出错:", error);
    }
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>新建文章</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label>
          标题:
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className={styles.input}
          />
        </label>
        <br />
        <label>
          内容:
          <textarea
            value={body}
            onChange={(e) => setBody(e.target.value)}
            required
            className={styles.textarea}
          />
        </label>
        <br />
        <button type="submit">提交</button>
      </form>
    </div>
  );
};

export default CreatePost;
