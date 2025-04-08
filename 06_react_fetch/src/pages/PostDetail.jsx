import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import styles from "../styles/PostDetail.module.css";

const PostDetail = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

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

  if (!post) {
    return <p>正在加载文章详情...</p>;
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{post.title}</h2>
      <p className={styles.content}>{post.body}</p>
    </div>
  );
};

export default PostDetail;
