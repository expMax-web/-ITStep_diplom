import React from "react";

import styles from "./NavbarButton.module.scss";

interface NavbarButtonProps {
  title: string;
}

export const NavbarButton: React.FC<NavbarButtonProps> = ({ title }) => {
  return <button className={styles.NavbarButton}>{title}</button>;
};
