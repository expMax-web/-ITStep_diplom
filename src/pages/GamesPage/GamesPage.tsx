import React, { FC } from "react";

import styles from "./styles.module.scss";

export const GamesPage: FC = () => {
  return (
    <div className={styles.Wrapper}>
      <div
        style={{
          width: "500px",
          height: "600px",
          textAlign: "center",
          fontSize: "50px",
          backgroundColor: "black",
          color: "white",
        }}
      >
        Раздел в разработке
      </div>
    </div>
  );
};
