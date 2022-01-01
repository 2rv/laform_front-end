export type OptionType = {
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
};

export interface CardImageProps {
  image: string;
  modifier?: string;
  deleted?: boolean;
  isCreateList?: boolean;
  discount?: number;
  path: string | Function;
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
  onSelect?: (id: string, type: 0 | 1 | 2 | 3 | 4, status: boolean) => boolean;
  onDelete?: (id: string, deleted: boolean) => void;
}
export interface RemoveButtonProps {
  id: string;
  onRemove?: (id: string) => void;
}
export interface CardPriceProps {
  price?: number;
  discount?: number;
}
export interface CardCountProps {
  count: number;
}
export interface CardLengthProps {
  length: number;
}
export interface ProductVendorCodeProps {
  vendorCode: string;
}

type CardOtherProps = {
  admin?: boolean;
  onSelect?: (id: string, type: 0 | 1 | 2 | 3 | 4, status: boolean) => boolean;
  onDelete?: (id: string, deleted: boolean) => void;
  onRemove?: (id: string) => void;
  onRemoveLike?: (id: string) => void;
  isCreateList?: boolean;
};
export interface CardMasterClassType extends CardOtherProps {
  id: string;
  type: 0;
  deleted?: boolean;
  like: boolean | undefined;

  image: string;
  name?: string;
  modifier?: string;

  price?: number;
  discount?: number;
}
export interface CardPatternType extends CardOtherProps {
  id: string;
  type: 1 | 2;
  deleted?: boolean;
  like: boolean | undefined;

  image: string;
  name?: string;
  modifier?: string;

  price?: number;
  discount?: number;

  optionType: 0 | 2;
  count?: number;
  isCount: boolean;
  complexity: number;
  sizes?: OptionType[];
}
export interface CardSewingGoodType extends CardOtherProps {
  id: string;
  type: 3;
  deleted?: boolean;
  like: boolean | undefined;

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
  optionType: 0 | 1 | 2 | 3;
  colors?: OptionType[];
  sizes?: OptionType[];
}

export interface CardArticleType extends CardOtherProps {
  id: string;
  type: 4;
  deleted?: boolean;
  like: boolean | undefined;

  image: string;
  name?: string;
  modifier?: string;

  createdDate: Date;
}

export type CardMultiType =
  | CardSewingGoodType
  | CardPatternType
  | CardMasterClassType
  | CardArticleType;

export type CardProductLinkType = {
  id?: string;
  masterClassId?: CardMasterClassType;
  patternProductId?: CardPatternType;
  sewingProductId?: CardSewingGoodType;
  postId?: CardArticleType;
};
