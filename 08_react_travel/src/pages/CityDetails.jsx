import React from "react";

import styles from "../styles/CityDetails.module.css";

const CityDetail = () => {
  // 模拟数据
  const cityData = {
    id: 1,
    name: "北京",
    image:
      "https://bpic.588ku.com/back_origin_min_pic/20/08/03/94b22bf4fa664c8d56ced698da13dec0.jpg",
    description: "中国的首都，拥有丰富的历史文化遗产。",
  };

  // 如果 id 不匹配，可以返回一个错误提示

  return (
    <div className={styles["city-detail-container"]}>
      <h1>{cityData.name}</h1>
      <img src={cityData.image} alt={cityData.name} />
      <p>{cityData.description}</p>
    </div>
  );
};

export default CityDetail;
