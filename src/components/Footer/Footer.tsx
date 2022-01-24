import React from "react";
import { useLocation } from "react-router";
import cn from "classnames";

import { PhoneIcon } from "./icons/";

import styles from "./Footer.module.scss";

export const Footer: React.FC = () => {
  let location = useLocation();

  console.log(location);
  return (
    <div className={styles.Footer}>
      <div className={styles.ReservationContent}>
        <p
          className={cn(styles.Content, {
            [styles.Content_Hide]: location.pathname !== "/",
          })}
        >
          game club
        </p>
        <p
          className={cn(styles.Logo, {
            [styles.Logo_Wiew]: location.pathname !== "/",
          })}
        >
          VOLTRON
        </p>
        <button className={styles.ReservationButton}>Бронь</button>
      </div>
      <div className={styles.ReservationPhoneWrapper}>
        <img
          className={styles.ReservationPhoneIcon}
          src={PhoneIcon}
          alt=""
          aria-hidden="true"
        />
      </div>
    </div>
  );
};
