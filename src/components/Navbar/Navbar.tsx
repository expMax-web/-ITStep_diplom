import React from "react";

import { NavbarButton } from "../NavbarButton/NavbarButton";
import { NavbarButtonsType, NavbarButtonType } from "./types/types";
import styles from "./Navbar.module.scss";
import { Link } from "react-router-dom";

export const Navbar: React.FC = () => {
  const NavbarButtons: NavbarButtonsType = [
    {
      link: "/info",
      description: "О нас",
    },
    {
      link: "/games",
      description: "Игры",
    },
    {
      link: "/photo",
      description: "Фото",
    },
    {
      link: "/videos",
      description: "Видео",
    },
    {
      link: "/prices",
      description: "Цены",
    },
    {
      link: "/contacts",
      description: "Контакты",
    },
  ];

  return (
    <div className={styles.Navbar}>
      {NavbarButtons.map((item: NavbarButtonType) => {
        return (
          <Link to={item.link} key={item.description}>
            <NavbarButton title={item.description} />
          </Link>
        );
      })}
    </div>
  );
};
