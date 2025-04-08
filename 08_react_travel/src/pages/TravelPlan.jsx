import React, { useState } from "react";
import styles from "../styles/TravelPlan.module.css";

// 模拟旅行计划数据
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

const TravelPlan = () => {
  // 使用 state 管理旅行计划数据
  const [travelPlans, setTravelPlans] = useState(mockTravelPlans);

  // 删除旅行计划的函数
  const handleDeletePlan = (id) => {
    // 使用 filter 方法过滤掉需要删除的计划
    const updatedPlans = travelPlans.filter((plan) => plan.id !== id);
    setTravelPlans(updatedPlans);
  };

  return (
    <div className={styles.container}>
      <h1>旅行计划</h1>
      {travelPlans.length > 0 ? (
        <div className={styles.planList}>
          {travelPlans.map((plan) => (
            <div key={plan.id} className={styles.planCard}>
              <img
                src={plan.image}
                alt={plan.destination}
                className={styles.planImage}
              />
              <h2>{plan.destination}</h2>
              <p>
                <strong>出发日期：</strong> {plan.startDate}
              </p>
              <p>
                <strong>结束日期：</strong> {plan.endDate}
              </p>
              <p>
                <strong>预算：</strong> {plan.budget}
              </p>
              <p>
                <strong>活动：</strong>
                <ul className={styles.activitiesList}>
                  {plan.activities.map((activity, index) => (
                    <li key={index}>{activity}</li>
                  ))}
                </ul>
              </p>
              <button
                className={styles.deleteButton}
                onClick={() => handleDeletePlan(plan.id)}
              >
                删除
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p className={styles.noContent}>暂无旅行计划</p>
      )}
    </div>
  );
};

export default TravelPlan;
