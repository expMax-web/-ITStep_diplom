import React from "react";

import { NavbarButton } from "../NavbarButton/NavbarButton";

import styles from "./Navbar.module.scss";

export const Navbar: React.FC = () => {
  const NavbarButtonArray = [
    "О нас",
    "Игры",
    "Фото",
    "Видео",
    "Цены",
    "Контакты",
  ];

  return (
    <div className={styles.Navbar}>
      {NavbarButtonArray.map((item: string) => {
        return <NavbarButton title={item} />;
      })}
    </div>
  );
};
