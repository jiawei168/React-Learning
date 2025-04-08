import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/Movie.css";

// 定义 MovieNews 组件
const MovieNews = () => {
  // 定义状态变量
  const [newsList, setNewsList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(3);
  const [totalItems, setTotalItems] = useState(100); // 设置获取数据的总条数
  const pageSize = 10; // 每页显示10条数据

  // 定义获取新闻数据的异步函数
  const fetchNews = async () => {
    const apiKey = "f61d0945b5587b4f57ea338d6e1f1ea5"; // 替换为你的API密钥
    const url = `https://apis.tianapi.com/film/index?key=${apiKey}&num=${pageSize}&page=${currentPage}&total=${totalItems}`;

    try {
      const response = await axios.get(url);
      console.log("API Response:", response.data); // 打印API返回的数据，方便调试

      if (
        response.data &&
        response.data.result &&
        response.data.result.newslist
      ) {
        const { newslist, allnum } = response.data.result.newslist;
        setNewsList(newslist || []);
        // 根据总数据量计算总页数
        setTotalPages(Math.ceil(allnum / pageSize));
      } else {
        console.error("Invalid data structure:", response.data);
        setNewsList([]);
        setTotalPages(1);
      }
    } catch (error) {
      console.error("Error fetching news:", error);
      setNewsList([]);
      setTotalPages(1);
    }
  };

  // 使用 useEffect 钩子，在 currentPage 或 totalItems 变化时触发数据获取
  useEffect(() => {
    fetchNews();
  }, [currentPage, totalItems]);

  // 定义上一页函数
  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // 定义下一页函数
  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="movie-news-container">
      <h1 className="movie-news-title">影视资讯</h1>
      <div className="movie-news-list">
        {newsList.length > 0 ? (
          newsList.map((news) => (
            <div key={news.id} className="movie-news-item">
              <div className="movie-news-item-header">
                <h2 className="movie-news-item-title">{news.title}</h2>
              </div>
              <div className="movie-news-item-image">
                <img
                  src={news.picUrl}
                  alt={news.title}
                  className="movie-news-item-image"
                />
              </div>
              <div className="movie-news-item-content">
                <p className="movie-news-item-description">
                  {news.description}
                </p>
                <div className="movie-news-item-meta">
                  <span className="movie-news-item-time">{news.time}</span>
                  <span className="movie-news-item-likes">{news.ctime}</span>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="movie-news-no-data">暂无数据</p>
        )}
      </div>
      <div className="movie-news-pagination">
        <button
          onClick={prevPage}
          disabled={currentPage === 1}
          className="movie-news-pagination-button"
        >
          上一页
        </button>
        <span className="movie-news-pagination-info">
          第 {currentPage} 页 / 共 {totalPages} 页
        </span>
        <button
          onClick={nextPage}
          disabled={currentPage === totalPages}
          className="movie-news-pagination-button"
        >
          下一页
        </button>
      </div>
      <div className="movie-news-total-items">
        <label htmlFor="total-items">总条数：</label>
        <input
          type="number"
          id="total-items"
          value={totalItems}
          onChange={(e) => setTotalItems(parseInt(e.target.value))}
          min="10"
          max="1000"
          step="10"
        />
      </div>
    </div>
  );
};

export default MovieNews;
