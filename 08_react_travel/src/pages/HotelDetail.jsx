import React from "react";
import styles from "../styles/HotelDetails.module.css";

const HotelDetail = ({ hotel }) => {
  // 如果没有传递 hotel 数据，则使用默认的模拟数据
  const defaultHotel = {
    id: 1,
    name: "北京王府半岛酒店",
    image:
      "https://ts1.tc.mm.bing.net/th/id/R-C.baaf347f684f1bf8f8bfd86697ccebdc?rik=7Humh8h5effYzw&riu=http%3a%2f%2fseopic.699pic.com%2fphoto%2f50042%2f0407.jpg_wh1200.jpg&ehk=59TPndFfk2McSuLzCzd8pXkS2NUNOWY9KFNFJaN6ocM%3d&risl=&pid=ImgRaw&r=0", // 图片地址为空，可以替换为实际图片链接
    likes: 1200,
    price: "¥1500",
    address: "北京市朝阳区建国门外大街2号",
    rating: 5,
    reviewCount: 1200,
    serve: "免费停车",
  };

  // 使用传入的 hotel 数据，如果没有则使用默认数据
  const currentHotel = hotel || defaultHotel;

  return (
    <div className={styles.container}>
      {/* 如果图片地址为空，则显示默认占位图 */}
      <img
        src={currentHotel.image || "https://via.placeholder.com/300x200"}
        alt={currentHotel.name}
        className={styles.image}
      />
      <h2 className={styles.title}>{currentHotel.name}</h2>
      <p>价格: {currentHotel.price}</p>
      <p>地址: {currentHotel.address}</p>
      <p>评分: {currentHotel.rating} 星</p>
      <p>评论数: {currentHotel.reviewCount}</p>
      <p>服务: {currentHotel.serve}</p>
    </div>
  );
};

export default HotelDetail;
