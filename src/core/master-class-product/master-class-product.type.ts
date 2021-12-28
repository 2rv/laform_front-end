import { BasicCategoryType, BasicReactEditorType } from 'src/lib/basic-types';
import { CardMultiType } from 'src/lib/element/card';

export enum MASTER_CLASS_PRODUCT_ACTION_TYPE {
  PENDING = 'PENDING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR',
}
export type MasterClassProductStateType = {
  pending: boolean;
  product: MasterClassType;
  error?: string;
};
export type MasterClassProductActionType = {
  type: MASTER_CLASS_PRODUCT_ACTION_TYPE;
  error?: string;
  data?: any;
};
export type MasterClassProductComponentProps = {
  state: MasterClassProductStateType;
};
export type MasterClassType = {
  id: string;
  type: 0;

  name: string;
  modifier: string | undefined;

  price: number | undefined;
  discount: number | undefined;

  like: boolean | undefined;
  vendorCode: string;

  description: string | undefined;

  materials: BasicReactEditorType | undefined;

  images: string[];
  categories: BasicCategoryType[];
  recommendations: CardMultiType[];
};
