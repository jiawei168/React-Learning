import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './AxiosDataFetch.module.css';

const AxiosDataFetch = () => {
    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
                const firstFivePosts = response.data.slice(0, 5);
                setPosts(firstFivePosts);
            } catch (error) {
                console.error('获取数据时出错:', error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchPosts();
    }, []);

    if (isLoading) {
        return <p>正在加载文章数据...</p>;
    }

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>文章列表（前 5 条）</h2>
            <ul className={styles.postList}>
                {posts.map((post) => (
                    <li key={post.id} className={styles.postItem}>
                        <h3 className={styles.postTitle}>{post.title}</h3>
                        <p className={styles.postBody}>{post.body}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AxiosDataFetch;
