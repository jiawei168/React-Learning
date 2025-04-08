import React from "react";
import styles from "../styles/CityList.module.css";

const CityList = ({ cities }) => {
  return (
    <div className={styles.container}>
      {cities.map((city) => (
        <div key={city.id} className={styles.cityItem}>
          <img src={city.image} alt={city.name} className={styles.cityImage} />
          <h3 className={styles.cityName}>{city.name}</h3>
          <p className={styles.cityDescription}>{city.description}</p>
        </div>
      ))}
    </div>
  );
};

export default CityList;
