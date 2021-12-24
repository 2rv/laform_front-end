import {
  FormikConfig,
  FormikErrors,
  FormikHandlers,
  FormikHelpers,
  FormikState,
} from 'formik';
import { BasicReactEditorType, FileType } from 'src/lib/basic-types';
import { CategoryType } from 'src/lib/common/block-categories/categories.type';
import { RecommendationType } from 'src/lib/common/block-select-recomendation';

type FormikType = FormikHandlers &
  FormikHelpers<MasterClassValues> &
  FormikState<MasterClassValues> &
  FormikErrors<MasterClassValues>;

export enum MASTER_CLASS_CREATE_ACTION_TYPE {
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
export enum MASTER_CLASS_FIELD_NAME {
  NAME = 'titleRu',
  VENDOR_CODE = 'vendorCode',
  DESCRIPTION = 'descriptionRu',
  MODIFIER = 'modifierRu',
  DISCOUNT = 'discount',
  PRICE = 'price',
  IMAGES = 'images',

  RECOMMENDATIONS = 'recommendation',
  CATEGORIES = 'categories',

  ARTICLE = 'articleRu',
  MATERIAL = 'materialRu',
  IS_PUBLIC = 'isPublic',
  IN_ENGLISH = 'inEnglish',
}
export type MasterClassValues = {
  [MASTER_CLASS_FIELD_NAME.NAME]: string;
  [MASTER_CLASS_FIELD_NAME.VENDOR_CODE]: string;
  [MASTER_CLASS_FIELD_NAME.DESCRIPTION]: string;
  [MASTER_CLASS_FIELD_NAME.MODIFIER]: string;
  [MASTER_CLASS_FIELD_NAME.DISCOUNT]: number;
  [MASTER_CLASS_FIELD_NAME.PRICE]: number;
  [MASTER_CLASS_FIELD_NAME.IMAGES]: FileType[];

  [MASTER_CLASS_FIELD_NAME.CATEGORIES]: CategoryType[];
  [MASTER_CLASS_FIELD_NAME.RECOMMENDATIONS]: RecommendationType;

  [MASTER_CLASS_FIELD_NAME.ARTICLE]?: BasicReactEditorType;
  [MASTER_CLASS_FIELD_NAME.MATERIAL]?: BasicReactEditorType;
  [MASTER_CLASS_FIELD_NAME.IS_PUBLIC]: boolean;
  [MASTER_CLASS_FIELD_NAME.IN_ENGLISH]: boolean;
};
export type MasterClassCreateStateType = {
  createPending: boolean;
  createSuccess: boolean;
  createError?: string;

  getPending: boolean;
  initialValues?: MasterClassValues;
  getError?: string;

  removePending: boolean;
  removeSuccess: boolean;
  removeError?: string;

  updatePending: boolean;
  updateSuccess: boolean;
  updateError?: string;
};
export type MasterClassCreateActionType = {
  type: MASTER_CLASS_CREATE_ACTION_TYPE;
  error?: string;
  data?: MasterClassValues;
};
export interface MasterClassCreateComponentProps
  extends FormikConfig<MasterClassValues> {
  isEdit: boolean;
  onRemove: () => void;
  state: MasterClassCreateStateType;
}

export type MasterClassCreateFormProps = {
  formik: FormikType;
  isEdit: boolean;
  state: MasterClassCreateStateType;
  onRemove: () => void;
};
