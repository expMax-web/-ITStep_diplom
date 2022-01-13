import React from "react";

import styles from "./PageDescription.module.scss";

interface PageDescriptionProps {
  title: string;
  description: string;
}

export const PageDescription: React.FC<PageDescriptionProps> = ({
  title,
  description,
}) => {
  return (
    <div className={styles.Container}>
      <h2 className={styles.Title}>{title.toUpperCase()}</h2>
      <p className={styles.Description}>{description}</p>
    </div>
  );
};
