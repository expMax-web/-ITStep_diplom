import React, { FC } from "react";

import { PageDescription } from "../../components/PageDescription/PageDescription";

import styles from "./styles.module.scss";

export const InfoPage: FC = () => {
  return (
    <div className={styles.Wrapper}>
      <PageDescription
        title="Voltron"
        description={`Мы действуем во тьме, чтобы служить свету. We are Gamers.\nНичто не истинно - у нас дозволено...`}
      />
    </div>
  );
};
