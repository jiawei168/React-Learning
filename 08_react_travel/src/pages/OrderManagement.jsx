import React, { useState } from "react";
import styles from "../styles/OrderManagement.module.css";

// 模拟数据
const mockData = [
  {
    id: 1,
    flight_number: "MU2811",
    airline: "China Eastern Airlines",
    departure_time: "08:20",
    arrival_time: "10:20",
    destination_airport: "Beijing Daxing International Airport",
    schedule: "Daily",
    price: "418",
  },
  {
    id: 2,
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
];

const OrderManagement = () => {
  const [orders, setOrders] = useState(mockData);

  const handleDelete = (id) => {
    setOrders(orders.filter((order) => order.id !== id));
  };

  return (
    <div className={styles.container}>
      <h1>订单管理</h1>
      <div className={styles.orders}>
        {orders.map((item) => (
          <div key={item.id} className={styles.order}>
            {item.flight_number ? (
              <div>
                <h2>航班信息</h2>
                <p>航班号: {item.flight_number}</p>
                <p>航空公司: {item.airline}</p>
                <p>出发时间: {item.departure_time}</p>
                <p>到达时间: {item.arrival_time}</p>
                <p>目的地机场: {item.destination_airport}</p>
                <p>航班频率: {item.schedule}</p>
                <p>价格: ¥{item.price}</p>
              </div>
            ) : (
              <div>
                <h2>酒店信息</h2>
                <img
                  src={item.image}
                  alt={item.name}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://via.placeholder.com/300x200"; // 默认占位图
                  }}
                />
                <p>酒店名称: {item.name}</p>
                <p>价格: {item.price}</p>
                <p>地址: {item.address}</p>
                <p>评分: {item.rating} 星</p>
                <p>评论数: {item.reviewCount}</p>
                <p>服务: {item.serve}</p>
              </div>
            )}
            <button
              className={styles.deleteButton}
              onClick={() => handleDelete(item.id)}
            >
              删除
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderManagement;
