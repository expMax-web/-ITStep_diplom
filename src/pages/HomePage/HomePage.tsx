import React, { FC } from "react";

import { HomePageLogo } from "../../components/HomePageLogo/HomePageLogo";

import styles from "./styles.module.scss";

export const HomePage: FC = () => {
  return (
    <div className={styles.Wrapper}>
      <HomePageLogo />
    </div>
  );
};
