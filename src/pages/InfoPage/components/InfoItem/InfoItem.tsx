import React from "react";
import cn from "classnames";

import { TypeEnum } from "../../types/types";

import styles from "./InfoItem.module.scss";

interface InfoItemProps {
  title: string;
  description: string;
  logo: any;
  isSpider?: boolean;
  icon: any;
  type: TypeEnum;
}

export const InfoItem: React.FC<InfoItemProps> = ({
  title,
  description,
  logo,
  isSpider,
  icon,
  type,
}) => {
  return (
    <div className={styles.InfoItemContainer}>
      <div
        className={cn("", {
          [styles.InfoItemLogo_SpiderWrapper]: isSpider,
        })}
      >
        <img
          src={logo}
          alt=""
          aria-hidden="true"
          width="300px"
          height="570px"
          className={cn(styles.InfoItemLogo, {
            [styles.InfoItemLogo_Spider]: isSpider,
          })}
        />
      </div>
      <button
        className={cn(
          styles.InfoItemButton,
          {
            [styles.InfoItemButton_PS]: type === TypeEnum.PS,
          },
          {
            [styles.InfoItemButton_XBOX]: type === TypeEnum.XBOX,
          },
          {
            [styles.InfoItemButton_PC]: type === TypeEnum.PC,
          },
          {
            [styles.InfoItemButton_SQUAD]: type === TypeEnum.SQUAD,
          }
        )}
      >
        <img src={icon} alt="" className={styles.InfoItemIcon} />
      </button>

      <div>
        <h3 className={styles.InfoItemTitle}>{title}</h3>
        <p className={styles.InfoItemDescription}>{description}</p>
      </div>
    </div>
  );
};
