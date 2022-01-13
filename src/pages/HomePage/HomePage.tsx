import React, { FC } from "react";

import { Navbar } from "../../components/Navbar/Navbar";
import { HomePageLogo } from "../../components/HomePageLogo/HomePageLogo";

import styles from "./styles.module.scss";
import { Footer } from "../../components/Footer/Footer";

export const HomePage: FC = () => {
  return (
    <div className={styles.Wrapper}>
      <HomePageLogo />
    </div>
  );
};
