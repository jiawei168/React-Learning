import React from "react";
import styles from "../styles/PostDetail.module.css";

const HotelDetail = ({ hotel }) => {
  return (
    <div className={styles.container}>
      <img src={hotel.image} alt={hotel.name} />
      <h2 className={styles.title}>{hotel.name}</h2>
      <p>价格: {hotel.price}</p>
      <p>地址: {hotel.address}</p>
      <p>评分: {hotel.rating}</p>
      <p>评论数: {hotel.reviewCount}</p>
      <p>服务: {hotel.serve}</p>
    </div>
  );
};

export default HotelDetail;
