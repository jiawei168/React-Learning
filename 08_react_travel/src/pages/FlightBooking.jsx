import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "../styles/FlightBooking.module.css";

const FlightBooking = () => {
  const [formData, setFormData] = useState({
    departure: "",
    destination: "",
    date: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const [flights, setFlights] = useState([]);

  useEffect(() => {
    const fetchFlights = async () => {
      try {
        let url;
        if (formData.destination.trim() === "") {
          // 如果输入框为空，获取所有机票信息
          url = "http://localhost:3001/ticket";
        } else {
          // 如果输入框有内容，根据内容获取特定目的地的机票信息
          url = `http://localhost:3001/${formData.destination}`;
        }

        const response = await axios.get(url);
        setFlights(response.data);
      } catch (error) {
        console.error("获取机票信息出错:", error);
        setFlights([]); // 如果请求失败，清空机票列表
      }
    };

    fetchFlights();
  }, [formData.destination]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("表单数据：", formData);
  };

  const handlePurchase = (flight) => {
    console.log("购买机票：", flight);
    // 可以在这里实现跳转到支付页面或弹出支付窗口
    // 例如：window.location.href = `/payment/${flight.id}`;
  };

  return (
    <div className={styles["flight-booking"]}>
      <h1>机票预订</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>目的地：</label>
          <input
            type="text"
            name="destination"
            value={formData.destination}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">搜索</button>
      </form>
      <div>
        <h2>机票列表</h2>
        <ul>
          {flights.length > 0 ? (
            flights.map((flight) => (
              <li key={flight.id} className={styles["flight-item"]}>
                <p>航班号: {flight.flight_number}</p>
                <p>出发时间: {flight.departure_time}</p>
                <p>到达时间: {flight.arrival_time}</p>
                <p>价格: ¥{flight.price}</p>
                <button
                  className={styles["purchase-button"]}
                  onClick={() => handlePurchase(flight)}
                >
                  购买
                </button>
              </li>
            ))
          ) : (
            <p>没有找到相关机票。</p>
          )}
        </ul>
      </div>
    </div>
  );
};

export default FlightBooking;
