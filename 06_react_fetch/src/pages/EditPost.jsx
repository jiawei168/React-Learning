import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import styles from "../styles/EditPost.module.css";
const EditPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState({ title: "", body: "" });

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(`http://localhost:30001/posts/${id}`);
        setPost(response.data);
      } catch (error) {
        console.error("获取文章详情出错:", error);
      }
    };

    fetchPost();
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPost((prevPost) => ({
      ...prevPost,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:30001/posts/${id}`, post);
      navigate("/");
    } catch (error) {
      console.error("修改文章出错:", error);
    }
  };

  return (
    <div className={styles.editPostContainer}>
      <h2 className={styles.editPostTitle}>修改文章</h2>
      <form className={styles.editPostForm} onSubmit={handleSubmit}>
        <label className={styles.editPostLabel} htmlFor="title">
          标题:
          <input
            type="text"
            name="title"
            value={post.title}
            onChange={handleInputChange}
            className={styles.editPostInput}
            placeholder="请输入文章标题"
          />
        </label>
        <br />
        <label className={styles.editPostLabel} htmlFor="content">
          内容:
          <textarea
            name="body"
            value={post.body}
            onChange={handleInputChange}
            className={styles.editPostTextarea}
            id="content"
            placeholder="请输入文章内容"
            rows="10"
          />
        </label>
        <br />
        <button className={styles.editPostButton} type="submit">
          保存修改
        </button>
      </form>
    </div>
  );
};

export default EditPost;
