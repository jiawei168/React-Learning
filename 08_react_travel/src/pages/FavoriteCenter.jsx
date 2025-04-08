import React, { useState } from "react";
import styles from "../styles/FavoriteCenter.module.css";

// 模拟收藏的酒店数据
const mockFavorites = [
  {
    id: 1,
    name: "北京王府半岛酒店",
    image:
      "https://ts1.tc.mm.bing.net/th/id/R-C.baaf347f684f1bf8f8bfd86697ccebdc?rik=7Humh8h5effYzw&riu=http%3a%2f%2fseopic.699pic.com%2fphoto%2f50042%2f0407.jpg_wh1200.jpg&ehk=59TPndFfk2McSuLzCzd8pXkS2NUNOWY9KFNFJaN6ocM%3d&risl=&pid=ImgRaw&r=0",
    likes: 1200,
    price: "¥1500",
    address: "北京市朝阳区建国门外大街2号",
    rating: 5,
    reviewCount: 1200,
    serve: "免费停车",
  },
  {
    id: 2,
    name: "上海外滩茂悦大酒店",
    image:
      "https://ts1.tc.mm.bing.net/th/id/R-C.6981fd266e138bfbe464aad2ddaff7c1?rik=2T4%2fTvtEDh%2faow&riu=http%3a%2f%2fseopic.699pic.com%2fphoto%2f50053%2f0786.jpg_wh1200.jpg&ehk=YTh%2bMiz99CUM%2b9KkcgH6d8Jngat9ULatv1xE6FIxzxE%3d&risl=&pid=ImgRaw&r=0",
    likes: 1400,
    price: "¥1600",
    address: "上海市黄浦区中山东二路600号",
    rating: 4.5,
    reviewCount: 850,
    serve: "免费停车",
  },
];

const FavoriteCenter = () => {
  const [favorites, setFavorites] = useState(mockFavorites);

  // 删除收藏项的函数
  const handleDeleteFavorite = (id) => {
    const updatedFavorites = favorites.filter((favorite) => favorite.id !== id);
    setFavorites(updatedFavorites);
  };

  return (
    <div className={styles.container}>
      <h1>收藏中心</h1>
      {favorites.length > 0 ? (
        <div className={styles.favoriteList}>
          {favorites.map((favorite) => (
            <div key={favorite.id} className={styles.favoriteCard}>
              <img
                src={favorite.image}
                alt={favorite.name}
                className={styles.favoriteImage}
              />
              <h2>{favorite.name}</h2>
              <p>
                <strong>价格：</strong> {favorite.price}
              </p>
              <p>
                <strong>地址：</strong> {favorite.address}
              </p>
              <p>
                <strong>评分：</strong> {favorite.rating} 星
              </p>
              <p>
                <strong>评论数：</strong> {favorite.reviewCount}
              </p>
              <p>
                <strong>服务：</strong> {favorite.serve}
              </p>
              <button
                className={styles.deleteButton}
                onClick={() => handleDeleteFavorite(favorite.id)}
              >
                删除收藏
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p className={styles.noContent}>暂无收藏内容</p>
      )}
    </div>
  );
};

export default FavoriteCenter;
