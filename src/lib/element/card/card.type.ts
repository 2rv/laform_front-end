export interface OptionType {
  id: number;
  optionId: string;
  tid: string;
  tvalue: {
    color?: string;
    size?: string;
    price?: number;
  };
  size?: string;
  color?: string;
  price?: number;
  discount?: number;
  vendorCode: string;
}
export interface CardImageProps {
  image: string;
  modifier?: string;
  discount?: number;
  path: string | Function;
  pathConfig: object;
}
export interface CardActionProps {
  id: string;
  type: number;
  like?: boolean;
  admin?: boolean;
  options?: OptionType[];
  onSelect?: Function;
  onCart?: Function;
  onDelete?: Function;
}
export interface CardPriceProps {
  price?: number;
  discount?: number;
}

export interface CardArticleType {
  id: string;
  type: number;
  image: string;
  name?: string;
  modifier?: string;
  createdDate: string;
  like?: boolean;
  admin?: boolean;
  onSelect?: Function;
  onDelete?: Function;
}
export interface CardSewingGoodType {
  id: string;
  type: number;
  image: string;
  name: string | undefined;
  modifier?: string;
  discount?: number;
  price?: number;
  like?: boolean;
  admin?: boolean;
  options?: OptionType[];
  onSelect?: Function;
  onDelete?: Function;
  onCart?: Function;
}
export interface CardPatternType {
  id: string;
  type: number;
  image: string;
  name: string | undefined;
  complexity: number;
  modifier?: string;
  discount?: number;
  price?: number;
  like?: boolean;
  admin?: boolean;
  options?: OptionType[];
  onSelect?: Function;
  onDelete?: Function;
  onCart?: Function;
}
export interface CardMasterClassType {
  id: string;
  type: number;
  image: string;
  name: string | undefined;
  modifier?: string;
  discount?: number;
  price: number;
  vendorCode: string;
  like?: boolean;
  admin?: boolean;
  onSelect?: Function;
  onDelete?: Function;
  onCart?: Function;
}
