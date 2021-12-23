import {
  FormikConfig,
  FormikErrors,
  FormikHandlers,
  FormikHelpers,
  FormikState,
} from 'formik';
import { FileType } from 'src/lib/basic-types';
import { CategoryType } from 'src/lib/common/block-categories/categories.type';
import { RecommendationType } from 'src/lib/common/block-select-recomendation';

export enum SEWING_GOODS_CREATE_FIELD_NAME {
  VENDOR_CODE = 'vendorCode',

  NAME = 'titleRu',
  MODIFIER = 'modifierRu',

  DESCRIPTION = 'descriptionRu',

  IMAGES = 'images',
  RECOMMENDATIONS = 'recommendation',
  CATEGORIES = 'categories',

  PRICE = 'price',
  DISCOUNT = 'discount',
  COUNT = 'count',
  LENGTH = 'length',

  OPTIONS = 'options',

  OPTION_TYPE = 'optionType',

  IS_COUNT = 'isCount',
  IS_LENGTH = 'isLength',
  IS_PUBLIC = 'isPublic',
  IN_ENGLISH = 'inEnglish',
}
export enum SEWING_GOODS_CREATE_OPTIONS_FIELD_NAME {
  OPTION_SIZE = 'size',
  OPTION_COLOR = 'colorRu',
  OPTION_PRICE = 'price',
  OPTION_DISCOUNT = 'discount',
  OPTION_COUNT = 'count',
  OPTION_LENGTH = 'length',
  OPTION_VISIBILITY = 'optionVisibility',
}
export type SewingGoodsOptionValues = {
  [SEWING_GOODS_CREATE_OPTIONS_FIELD_NAME.OPTION_SIZE]?: string;
  [SEWING_GOODS_CREATE_OPTIONS_FIELD_NAME.OPTION_COLOR]?: string;
  [SEWING_GOODS_CREATE_OPTIONS_FIELD_NAME.OPTION_PRICE]?: number;
  [SEWING_GOODS_CREATE_OPTIONS_FIELD_NAME.OPTION_DISCOUNT]?: number;
  [SEWING_GOODS_CREATE_OPTIONS_FIELD_NAME.OPTION_COUNT]?: number;
  [SEWING_GOODS_CREATE_OPTIONS_FIELD_NAME.OPTION_LENGTH]?: number;
  [SEWING_GOODS_CREATE_OPTIONS_FIELD_NAME.OPTION_VISIBILITY]: boolean;
};
export type SewingGoodsValues = {
  [SEWING_GOODS_CREATE_FIELD_NAME.VENDOR_CODE]: string;

  [SEWING_GOODS_CREATE_FIELD_NAME.NAME]: string;
  [SEWING_GOODS_CREATE_FIELD_NAME.MODIFIER]: string;

  [SEWING_GOODS_CREATE_FIELD_NAME.DESCRIPTION]: string;

  [SEWING_GOODS_CREATE_FIELD_NAME.IMAGES]: FileType[];
  [SEWING_GOODS_CREATE_FIELD_NAME.RECOMMENDATIONS]: RecommendationType;
  [SEWING_GOODS_CREATE_FIELD_NAME.CATEGORIES]: CategoryType[];

  [SEWING_GOODS_CREATE_FIELD_NAME.PRICE]: number;
  [SEWING_GOODS_CREATE_FIELD_NAME.DISCOUNT]: number;
  [SEWING_GOODS_CREATE_FIELD_NAME.COUNT]: number | undefined;
  [SEWING_GOODS_CREATE_FIELD_NAME.LENGTH]: number | undefined;

  [SEWING_GOODS_CREATE_FIELD_NAME.OPTIONS]: SewingGoodsOptionValues[];

  [SEWING_GOODS_CREATE_FIELD_NAME.OPTION_TYPE]: 0 | 1 | 2 | 3;

  [SEWING_GOODS_CREATE_FIELD_NAME.IS_COUNT]: boolean;
  [SEWING_GOODS_CREATE_FIELD_NAME.IS_LENGTH]: boolean;
  [SEWING_GOODS_CREATE_FIELD_NAME.IS_PUBLIC]: boolean;
  [SEWING_GOODS_CREATE_FIELD_NAME.IN_ENGLISH]: boolean;
};
export enum SEWING_GOODS_CREATE_ACTION_TYPE {
  CREATE_PENDING = 'CREATE_PENDING',
  CREATE_SUCCESS = 'CREATE_SUCCESS',
  CREATE_ERROR = 'CREATE_ERROR',

  GET_PENDING = 'GET_PENDING',
  GET_SUCCESS = 'GET_SUCCESS',
  GET_ERROR = 'GET_ERROR',

  UPDATE_PENDING = 'UPDATE_PENDING',
  UPDATE_SUCCESS = 'UPDATE_SUCCESS',
  UPDATE_ERROR = 'UPDATE_ERROR',

  REMOVE_PENDING = 'REMOVE_PENDING',
  REMOVE_SUCCESS = 'REMOVE_SUCCESS',
  REMOVE_ERROR = 'REMOVE_ERROR',
}
export type SewingGoodsCreateStateType = {
  createPending: boolean;
  createSuccess: boolean;
  createError?: string;

  getPending: boolean;
  initialValues?: SewingGoodsValues;
  getError?: string;

  removePending: boolean;
  removeSuccess: boolean;
  removeError?: string;

  updatePending: boolean;
  updateSuccess: boolean;
  updateError?: string;
};
export type SewingGoodsCreateActionType = {
  type: SEWING_GOODS_CREATE_ACTION_TYPE;
  error?: string;
  data?: SewingGoodsValues;
};
export interface SewingGoodsCreateComponentProps
  extends FormikConfig<SewingGoodsValues> {
  isEdit: boolean;
  onRemove: () => void;
  state: SewingGoodsCreateStateType;
}
type FormikType = FormikHandlers &
  FormikHelpers<SewingGoodsValues> &
  FormikState<SewingGoodsValues> &
  FormikErrors<SewingGoodsValues>;
export type SewingGoodsCreateFormProps = {
  formik: FormikType;
  isEdit: boolean;
  state: SewingGoodsCreateStateType;
  onRemove: () => void;
};

export type SewingGoodsCreateOptionsProps = {
  formik: FormikType;
};
export type SewingGoodsCreateOptionItemProps = {
  formik: FormikType;
  value: SewingGoodsOptionValues;
  prefix: string;
  onRemove: () => void;
};
