import React, { FC } from "react";

import {
  PlaystationIcon,
  XboxIcon,
  PCIcon,
  PCVipIcon,
} from "./components/icons";

import { PageDescription } from "../../components/PageDescription/PageDescription";
import { InfoItem } from "./components/InfoItem/InfoItem";
import { InfoItemType, InfoItemsArrayType } from "./types/types";

import styles from "./styles.module.scss";

const InfoItemsArray: InfoItemsArrayType = [
  {
    title: "playstation 5",
    decription: "4 консоли",
    img: PlaystationIcon,
    isSpider: true,
  },
  { title: "xbox series x", decription: "3 консоли", img: XboxIcon },
  {
    title: "Общий зал",
    decription: "на 30 самураев",
    img: PCIcon,
  },
  {
    title: "4 VIP комнаты",
    decription: "для вашей команды",
    img: PCVipIcon,
  },
];

export const InfoPage: FC = () => {
  return (
    <div className={styles.Wrapper}>
      <PageDescription
        title="Voltron"
        description={`Мы действуем во тьме, чтобы служить свету. We are Gamers.\nНичто не истинно - у нас дозволено...`}
      />
      <div className={styles.InfoItemsWrapper}>
        {InfoItemsArray.map((item: InfoItemType) => (
          <InfoItem
            key={item.title}
            title={item.title}
            description={item.decription}
            img={item.img}
            isSpider={item.isSpider}
          />
        ))}
      </div>
    </div>
  );
};
