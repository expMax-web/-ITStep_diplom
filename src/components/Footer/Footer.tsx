import React from "react";

import styles from "./Footer.module.css";

export const Footer: React.FC = () => {
  return (
    <div className={styles.Footer}>
      <p className={styles.Content}>game club</p>
      <button className={styles.ReservationButton}>Бронь</button>
    </div>
  );
};
