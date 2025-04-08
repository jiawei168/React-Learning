import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "../styles/HotelList.module.css";
import { Link } from "react-router-dom"; // 使用 React Router 的 Link 组件

const HotelList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    const fetchHotels = async () => {
      try {
        let url;
        if (searchTerm.trim() === "") {
          url = "http://localhost:3002/Hotes";
        } else {
          url = `http://localhost:3002/${searchTerm}`;
        }

        const response = await axios.get(url);
        setHotels(response.data);
      } catch (error) {
        console.error("获取酒店数据出错:", error);
        setHotels([]); // 如果请求失败，清空酒店列表
      }
    };

    fetchHotels();
  }, [searchTerm]);

  return (
    <div className={styles["hotel-list-container"]}>
      <h1>酒店列表</h1>
      <p>按目的地、价格、星级等筛选酒店</p>
      <div className={styles["search-bar"]}>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="输入搜索内容"
        />
        <button onClick={() => fetchHotels()}>搜索</button>
      </div>
      <ul className={styles["hotel-list"]}>
        {hotels.length > 0 ? (
          hotels.map((hotel) => (
            <li key={hotel.id} className={styles["hotel-item"]}>
              <div className={styles["hotel-image"]}>
                <img src={hotel.image} alt={hotel.name} />
              </div>
              <div className={styles["hotel-info"]}>
                <h3>{hotel.name}</h3>
                <p>
                  <strong>地址：</strong>
                  {hotel.address}
                </p>
                <p>
                  <strong>评分：</strong>
                  {hotel.rating} 星
                </p>
                <p>
                  <strong>点评数：</strong>
                  {hotel.reviewCount} 条
                </p>
                <p>
                  <strong>免费停车：</strong>
                  {hotel.freeParking ? "是" : "否"}
                </p>
                <Link
                  to={`/hotel/${hotel.id}`}
                  className={styles["view-details"]}
                >
                  查看详情
                </Link>
              </div>
            </li>
          ))
        ) : (
          <p className={styles["no-results"]}>没有找到相关酒店。</p>
        )}
      </ul>
    </div>
  );
};

export default HotelList;
