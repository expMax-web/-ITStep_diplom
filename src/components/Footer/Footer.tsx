import React from "react";
import { useLocation } from "react-router";
import cn from "classnames";

import { PhoneIcon } from "./icons/";

import styles from "./Footer.module.scss";

export const Footer: React.FC = () => {
  let location = useLocation();

  console.log(location);
  return (
    <div
      className={cn(styles.Footer, {
        [styles.Footer_Animation]: location.pathname !== "/",
      })}
    >
      <div>
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
      <img src={PhoneIcon} alt="" />
    </div>
  );
};
