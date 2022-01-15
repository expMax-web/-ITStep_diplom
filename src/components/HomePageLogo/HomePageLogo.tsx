import React from "react";

import { Logo } from "./Logo";

import styles from "./HomePageLogo.module.css";

export const HomePageLogo: React.FC = () => {
  return (
    <div className={styles.LogoContainer}>
      <div className={styles.LogoImgContainer}>
        <img
          src={Logo}
          alt=""
          aria-hidden="true"
          width="665px"
          height="572px"
          className={styles.LogoImg}
        />
      </div>
      <h1 className={styles.LogoTitle}>Voltron</h1>
    </div>
  );
};
