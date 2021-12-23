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
  deleted?: boolean;
  isCreateList?: boolean;
  discount?: number;
  path: string | Function;
  modifierColor?: string;
  pathConfig: object;
}
export interface CardActionProps {
  id: string;
  type: 0 | 1 | 2 | 3 | 4;
  admin?: boolean;
  deleted?: boolean;
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
export interface RemoveButtonProps {
  id: string;
  onRemove?: Function;
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
  type: 4;
  image: string;
  name?: string;
  modifier?: string;
  modifierColor?: string;
  createdDate: Date;
  like: boolean | undefined;
  deleted?: boolean;
  admin?: boolean;
  onSelect?: Function;
  onDelete?: Function;
  onRemove?: Function;
  isCreateList?: boolean;
}
export interface CardSewingGoodType {
  id: string;
  like: boolean | undefined;
  deleted?: boolean;
  admin?: boolean;
  type: 3;
  image: string;
  name?: string;
  modifier?: string;
  modifierColor?: string;
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
  onRemove?: Function;
  isCreateList?: boolean;
}
export interface CardPatternType {
  id: string;
  like: boolean | undefined;
  deleted?: boolean;
  admin?: boolean;
  type: 1 | 2;
  image: string;
  name: string | undefined;
  modifier?: string;
  modifierColor?: string;
  price?: number;
  discount?: number;
  count?: number;
  isCount: boolean;
  complexity: number;
  sizes?: OptionType[];
  onSelect?: Function;
  onDelete?: Function;
  onRemove?: Function;
  isCreateList?: boolean;
}
export interface CardMasterClassType {
  id: string;
  type: 0;
  image: string;
  name: string | undefined;
  modifier?: string;
  modifierColor?: string;
  discount?: number;
  price: number;
  vendorCode: string;
  like: boolean | undefined;
  deleted?: boolean;
  admin?: boolean;
  onSelect?: Function;
  onDelete?: Function;
  onRemove?: Function;
  isCreateList?: boolean;
}
export type CardMultiType =
  | CardSewingGoodType
  | CardPatternType
  | CardMasterClassType
  | CardArticleType
  | undefined;
