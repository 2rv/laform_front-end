import { BasicCategoryType } from 'src/lib/basic-types';
import { CardMultiType, OptionType } from 'src/lib/element/card';

export enum SEWING_GOODS_PRODUCT_ACTION_TYPE {
  PENDING = 'PENDING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR',
}
export type SewingGoodsProductStateType = {
  pending: boolean;
  product: SewingProductType;
  error?: string;
};
export type SewingGoodsProductActionType = {
  type: SEWING_GOODS_PRODUCT_ACTION_TYPE;
  error?: string;
  data?: any;
};
export type SewingGoodsProductComponentProps = {
  state: SewingGoodsProductStateType;
};
export type SewingProductType = {
  id: string;
  type: 3;
  isCount: boolean;
  isLength: boolean;
  optionType: 0 | 1 | 2 | 3;
  name: string;
  modifier: string | undefined;
  price: number | undefined;
  discount: number | undefined;
  count: number | undefined;
  length: number | undefined;
  vendorCode: string;
  categories: BasicCategoryType[];
  description: string | undefined;
  images: string[];
  options: OptionType[] | undefined;
  sizes: OptionType[] | undefined;
  colors: OptionType[] | undefined;
  like: boolean | undefined;
  recommendations: CardMultiType[];
};
