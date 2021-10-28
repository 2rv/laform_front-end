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
  count?: number;
  length?: number;
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
  price?: number;
  discount?: number;
  count?: number;
  length?: number;
  options?: OptionType[];
  colors?: OptionType[];
  sizes?: OptionType[];
  onSelect?: Function;
  onDelete?: Function;
}
export interface CardPriceProps {
  price?: number;
  discount?: number;
}
export interface CardCountProps {
  count?: number;
}
export interface CardLengthProps {
  length?: number;
}
export interface ProductVendorCodeProps {
  vendorCode?: string;
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
  like?: boolean;
  admin?: boolean;
  type: number;
  image: string;
  name?: string;
  modifier?: string;
  price?: number;
  discount?: number;
  count?: number;
  length?: number;
  isCount: boolean;
  isLength: boolean;
  options?: OptionType[];
  colors?: OptionType[];
  sizes?: OptionType[];
  onSelect?: Function;
  onDelete?: Function;
}
export interface CardPatternType {
  id: string;
  like?: boolean;
  admin?: boolean;
  type: number;
  image: string;
  name: string | undefined;
  modifier?: string;
  price?: number;
  discount?: number;
  count?: number;
  isCount: boolean;
  complexity: number;
  sizes?: OptionType[];
  onSelect?: Function;
  onDelete?: Function;
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
}
