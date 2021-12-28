import { BasicCategoryType, BasicReactEditorType } from 'src/lib/basic-types';
import { CardMultiType, OptionType } from 'src/lib/element/card';

export enum PATTERNS_PRODUCT_ACTION_TYPE {
  PENDING = 'PENDING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR',
}
export type PatternsProductStateType = {
  pending: boolean;
  product: PatternType;
  error?: string;
};
export type PatternsProductActionType = {
  type: PATTERNS_PRODUCT_ACTION_TYPE;
  error?: string;
  data?: any;
};
export type PatternsProductComponentProps = {
  state: PatternsProductStateType;
};
export type PatternType = {
  id: string;
  type: 1 | 2;
  isCount: boolean;
  optionType: 0 | 2;
  name: string;
  modifier: string | undefined;
  complexity: number;
  price: number | undefined;
  discount: number | undefined;
  count: number | undefined;
  like: boolean | undefined;
  vendorCode: string;

  description: string | undefined;
  descriptionOld: string | undefined;

  materials: BasicReactEditorType | undefined;
  materialOld: string | undefined;

  images: string[];
  categories: BasicCategoryType[];
  recommendations: CardMultiType[];
  sizes: OptionType[] | undefined;
};
