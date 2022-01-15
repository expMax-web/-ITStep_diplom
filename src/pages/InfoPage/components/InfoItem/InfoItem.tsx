import React from "react";
import cn from "classnames";

import styles from "./InfoItem.module.scss";

interface InfoItemProps {
  title: string;
  description: string;
  img: any;
  isSpider?: boolean;
}

export const InfoItem: React.FC<InfoItemProps> = ({
  title,
  description,
  img,
  isSpider,
}) => {
  return (
    <div className={styles.InfoItemContainer}>
      {/* <button></button> */}
      <div>
        <img
          src={img}
          alt=""
          aria-hidden="true"
          width="300px"
          height="570px"
          className={cn(styles.InfoItemIcon, {
            [styles.InfoItemIcon_Spider]: isSpider,
          })}
        />
      </div>
      <div>
        <h3 className={styles.InfoItemTitle}>{title}</h3>
        <p className={styles.InfoItemDescription}>{description}</p>
      </div>
    </div>
  );
};
