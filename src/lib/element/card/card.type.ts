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
  cart?: boolean;
  admin?: boolean;
  sizes?: [];
  colors?: [];
  programs?: [];
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
  name: string;
  modifier?: string;
  createdDate: string;
  like: boolean;
  admin?: boolean;
  onSelect?: Function;
  onDelete?: Function;
}
export interface CardSewingGoodTypeProps {
  id: string;
  type: number;
  image: string;
  name: string;
  modifier?: string;
  discount?: number;
  price: number;
  like: boolean;
  cart?: boolean;
  admin?: boolean;
  sizes?: [];
  colors?: [];
  onSelect?: Function;
  onDelete?: Function;
  onCart?: Function;
}
export interface CardPatternTypeProps {
  id: string;
  type: number;
  image: string;
  name: string;
  complexity: number;
  modifier?: string;
  discount?: number;
  price: number;
  like: boolean;
  cart?: boolean;
  admin?: boolean;
  sizes?: [];
  onSelect?: Function;
  onDelete?: Function;
  onCart?: Function;
}
export interface CardMasterClassTypeProps {
  id: string;
  type: number;
  image: string;
  name: string;
  modifier?: string;
  discount?: number;
  price: number;
  like: boolean;
  cart?: boolean;
  admin?: boolean;
  programs?: [];
  onSelect?: Function;
  onDelete?: Function;
  onCart?: Function;
}
