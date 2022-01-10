import React, { FC } from "react";

import { Navbar } from "../../components/Navbar/Navbar";

import styles from "./styles.module.scss";

export const HomePage: FC = () => {
  return (
    <div className={styles.Wrapper}>
      <Navbar />
    </div>
  );
};
