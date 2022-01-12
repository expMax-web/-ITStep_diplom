import React from "react";

import styles from "./HomePageLogo.module.css";

export const HomePageLogo: React.FC = () => {
  return (
    <div className={styles.LogoContainer}>
      <div className={styles.LogoImgContainer}></div>
      <h1 className={styles.LogoTitle}>Voltron</h1>
    </div>
  );
};
