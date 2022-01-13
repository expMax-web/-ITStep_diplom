import React from "react";

import styles from "./InfoItem.module.css";

interface InfoItemProps {
  title: string;
  description: string;
}

export const InfoItem: React.FC<InfoItemProps> = ({ title, description }) => {
  return (
    <div className={styles.Container}>
      <button></button>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};
