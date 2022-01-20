export type InfoItemsArrayType = InfoItemType[];

export type InfoItemType = {
  title: string;
  decription: string;
  logo: any;
  icon: any;
  isSpider?: boolean;
  type: TypeEnum;
};

export enum TypeEnum {
  PS = "PS",
  XBOX = "XBOX",
  PC = "PC",
  SQUAD = "SQOAD",
}
