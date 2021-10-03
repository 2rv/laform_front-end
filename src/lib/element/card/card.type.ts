export interface BasketType {
  id: string;
  color?: string;
  size?: string;
  count?: number;
  program?: string;
}
export interface ParamsType {
  id: string;
  tid: string;
  price?: number;
  vendorCode?: string;
}
export interface CardImageTypeProps {
  image: string;
  modifier?: string;
  discount?: number;
  path: string | Function;
  pathConfig: object;
}
export interface CardActionTypeProps {
  id: string;
  type: number;
  like?: boolean;
  cart?: BasketType[];
  admin?: boolean;
  sizes?: ParamsType[];
  colors?: ParamsType[];
  programs?: ParamsType[];
  onSelect?: Function;
  onCart?: Function;
  onDelete?: Function;
}
export interface CardPriceTypeProps {
  price?: number;
  discount?: number;
}

export interface CardArticleTypeProps {
  id: string;
  type: number;
  image: string;
  name: string | undefined;
  modifier?: string;
  createdDate: string;
  like?: boolean;
  admin?: boolean;
  onSelect?: Function;
  onDelete?: Function;
}
export interface CardSewingGoodTypeProps {
  id: string;
  type: number;
  image: string;
  name: string | undefined;
  modifier?: string;
  discount?: number;
  price: number;
  like?: boolean;
  cart?: BasketType[];
  admin?: boolean;
  sizes?: ParamsType[];
  colors?: ParamsType[];
  onSelect?: Function;
  onDelete?: Function;
  onCart?: Function;
}
export interface CardPatternTypeProps {
  id: string;
  type: number;
  image: string;
  name: string | undefined;
  complexity: number;
  modifier?: string;
  discount?: number;
  price: number;
  like?: boolean;
  cart?: BasketType[];
  admin?: boolean;
  sizes?: ParamsType[];
  onSelect?: Function;
  onDelete?: Function;
  onCart?: Function;
}
export interface CardMasterClassTypeProps {
  id: string;
  type: number;
  image: string;
  name: string | undefined;
  modifier?: string;
  discount?: number;
  price: number;
  like?: boolean;
  cart?: BasketType[];
  admin?: boolean;
  programs?: ParamsType[];
  onSelect?: Function;
  onDelete?: Function;
  onCart?: Function;
}
