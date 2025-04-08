import React, { useState, useEffect } from 'react';

/**
 * DataFetcher 组件用于从 API 获取文章数据并渲染到页面
 * @returns {JSX.Element} 包含文章列表的 JSX 元素
 */
const DataFetcher = () => {
    // 使用 useState 初始化文章数据状态，初始值为空数组
    const [posts, setPosts] = useState([]);
    // 使用 useState 初始化加载状态，初始值为 true
    const [isLoading, setIsLoading] = useState(true);

    // 使用 useEffect 钩子，在组件挂载时执行副作用操作
    useEffect(() => {
        // 定义异步函数来获取数据
        const fetchPosts = async () => {
            try {
                // 使用 fetch 发起异步请求获取文章数据
                const response = await fetch('https://jsonplaceholder.typicode.com/posts');
                // 检查响应是否成功
                if (!response.ok) {
                    throw new Error('网络请求失败');
                }
                // 将响应数据解析为 JSON 格式
                const data = await response.json();
                // 更新文章数据状态
                setPosts(data);
            } catch (error) {
                // 打印错误信息
                console.error('获取数据时出错:', error);
            } finally {
                // 请求完成后，将加载状态设置为 false
                setIsLoading(false);
            }
        };

        // 调用异步函数
        fetchPosts();
    }, []);

    // 如果处于加载状态，显示加载提示
    if (isLoading) {
        return <p>正在加载文章数据...</p>;
    }

    // 渲染文章列表
    return (
        <div>
            <h2>文章列表</h2>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>
                        <h3>{post.title}</h3>
                        <p>{post.body}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default DataFetcher;