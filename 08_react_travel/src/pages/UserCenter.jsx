import React from "react";
import { Link } from "react-router-dom"; // 引入 Link 组件
import styles from "../styles/UserCenter.module.css";

const mockData = [
  {
    id: 1,
    flight_number: "MU2811",
    airline: "China Eastern Airlines",
    departure_time: "2025-6-12-08:20",
    arrival_time: "2025-6-12-10:20",
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
    time: "2025-6-12-18:30",
  },
];
const mockTravelPlans = [
  {
    id: 1,
    destination: "北京",
    image:
      "https://bpic.588ku.com/back_origin_min_pic/20/08/03/94b22bf4fa664c8d56ced698da13dec0.jpg",
    startDate: "2025-04-15",
    endDate: "2025-04-20",
    activities: ["参观故宫", "游览长城", "品尝北京烤鸭"],
    budget: "¥5000",
  },
  {
    id: 2,
    destination: "上海",
    image:
      "https://ts1.tc.mm.bing.net/th/id/R-C.314b829a490013d9d1ea707d3148258b?rik=I8OpCvkLz00smg&riu=http%3a%2f%2fseopic.699pic.com%2fphoto%2f50008%2f0493.jpg_wh1200.jpg&ehk=%2bKN%2f7RjSaeGGp%2fdP7XsYMsf4xeTrHs9OFIMAWGd4pTU%3d&risl=&pid=ImgRaw&r=0",
    startDate: "2025-05-01",
    endDate: "2025-05-05",
    activities: ["外滩夜景", "迪士尼乐园", "南京路步行街"],
    budget: "¥6000",
  },
  {
    id: 3,
    destination: "成都",
    image:
      "https://ts1.tc.mm.bing.net/th/id/R-C.9c81f4ded4af8fa7adfc28b75521e036?rik=HGplw24dD0L%2bhw&riu=http%3a%2f%2fseopic.699pic.com%2fphoto%2f50105%2f1755.jpg_wh1200.jpg&ehk=QFHIPHxY98ndgQExth5mdO1aWM59HtlA7Hs10KRYbZY%3d&risl=&pid=ImgRaw&r=0",
    startDate: "2025-06-10",
    endDate: "2025-06-15",
    activities: ["品尝火锅", "参观熊猫基地", "锦里古街"],
    budget: "¥4500",
  },
];

const UserCenter = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>个人中心</h1>
      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>
          <Link to="/order" className={styles.link}>
            订单管理
          </Link>
        </h2>
        <div className={styles.content}>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              <strong>订单1：</strong>
              <p>航班号：{mockData[0].flight_number}</p>
              <p>航空公司：{mockData[0].airline}</p>
              <p>起飞时间：{mockData[0].departure_time}</p>
            </li>
            <li className={styles.listItem}>
              <strong>订单2：</strong>
              <p>酒店名称：{mockData[1].name}</p>
              <p>酒店地址：{mockData[1].address}</p>
              <p>入住时间：{mockData[1].time}</p>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>
          <Link to="/travel" className={styles.link}>
            旅行计划
          </Link>
        </h2>
        <div className={styles.content}>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              <strong>计划1：</strong>
              <p>旅游城市：{mockTravelPlans[0].destination}</p>
            </li>
            <li className={styles.listItem}>
              <strong>计划2：</strong>
              <p>旅游城市：{mockTravelPlans[1].destination}</p>
            </li>
            <li className={styles.listItem}>
              <strong>计划3：</strong>
              <p>旅游城市：{mockTravelPlans[2].destination}</p>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>
          <Link to="/favorites" className={styles.link}>
            收藏中心
          </Link>
        </h2>
        <div className={styles.content}>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              <strong>收藏的酒店：</strong>
              <p>{mockData[1].name}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default UserCenter;
