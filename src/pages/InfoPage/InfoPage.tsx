import React, { FC } from "react";

import {
  PSLogo,
  XboxLogo,
  PCLogo,
  VIPLogo,
  PSIcon,
  XBOXIcon,
  PCIcon,
  PCVipIcon,
} from "./components/icons";

import { PageDescription } from "../../components/PageDescription/PageDescription";
import { InfoItem } from "./components/InfoItem/InfoItem";
import { InfoItemType, InfoItemsArrayType, TypeEnum } from "./types/types";

import styles from "./styles.module.scss";

const InfoItemsArray: InfoItemsArrayType = [
  {
    title: "playstation 5",
    decription: "4 консоли",
    logo: PSLogo,
    isSpider: true,
    icon: PSIcon,
    type: TypeEnum.PS,
  },
  {
    title: "xbox series x",
    decription: "3 консоли",
    logo: XboxLogo,
    icon: XBOXIcon,
    type: TypeEnum.XBOX,
  },
  {
    title: "Общий зал",
    decription: "на 30 самураев",
    logo: PCLogo,
    icon: PCIcon,
    type: TypeEnum.PC,
  },
  {
    title: "4 VIP комнаты",
    decription: "для вашей команды",
    logo: VIPLogo,
    icon: PCVipIcon,
    type: TypeEnum.SQUAD,
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
            logo={item.logo}
            isSpider={item.isSpider}
            icon={item.icon}
            type={item.type}
          />
        ))}
      </div>
    </div>
  );
};
