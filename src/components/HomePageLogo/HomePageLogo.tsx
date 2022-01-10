import React from "react";

import { NavbarButton } from "../NavbarButton/NavbarButton";

import styles from "./HomePageLogo.module.css";

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
    <div className={styles.LogoContainer}>
      <h1 className={styles.LogoTitle}>Voltron</h1>
    </div>
  );
};
