import {
  FormikConfig,
  FormikErrors,
  FormikHandlers,
  FormikHelpers,
  FormikState,
} from 'formik';
import { BasicReactEditorType, FileType } from 'src/lib/basic-types';
import { RecommendationType } from 'src/lib/common/block-select-recomendation';
import { CategoryOptionType } from 'src/lib/common/block-categories/categories.type';

export enum PATTERN_CREATE_FIELD_NAME {
  TYPE = 'type',
  VENDOR_CODE = 'vendorCode',

  NAME = 'titleRu',
  MODIFIER = 'modifierRu',

  DESCRIPTION = 'descriptionRu',
  DESCRIPTION_OLD = 'descriptionOld',

  MATERIAL = 'materialRu',
  MATERIAL_OLD = 'materialOld',

  FILES = 'filesPdf',
  IMAGES = 'images',
  RECOMMENDATIONS = 'recommendation',
  CATEGORIES = 'categories',

  COMPLEXITY = 'complexity',

  PRICE = 'price',
  DISCOUNT = 'discount',
  COUNT = 'count',

  OPTION_TYPE = 'optionType',

  IS_COUNT = 'isCount',
  IS_PUBLIC = 'isPublic',
  IN_ENGLISH = 'inEnglish',

  OPTIONS = 'options',
}
export enum PATTERN_CREATE_OPTIONS_FIELD_NAME {
  OPTION_SIZE = 'size',
  OPTION_PRICE = 'price',
  OPTION_DISCOUNT = 'discount',
  OPTION_COUNT = 'count',
  OPTION_VISIBILITY = 'optionVisibility',
  OPTION_FILES = 'filesPdf',
}
export type PatternOptionValues = {
  id?: string;
  [PATTERN_CREATE_OPTIONS_FIELD_NAME.OPTION_SIZE]?: string;
  [PATTERN_CREATE_OPTIONS_FIELD_NAME.OPTION_PRICE]?: number;
  [PATTERN_CREATE_OPTIONS_FIELD_NAME.OPTION_FILES]?: FileType[];
  [PATTERN_CREATE_OPTIONS_FIELD_NAME.OPTION_DISCOUNT]?: number;
  [PATTERN_CREATE_OPTIONS_FIELD_NAME.OPTION_COUNT]?: number;
  [PATTERN_CREATE_OPTIONS_FIELD_NAME.OPTION_VISIBILITY]: boolean;
};
export type PatternValues = {
  [PATTERN_CREATE_FIELD_NAME.NAME]: string;
  [PATTERN_CREATE_FIELD_NAME.VENDOR_CODE]: string;
  [PATTERN_CREATE_FIELD_NAME.MODIFIER]: string;

  [PATTERN_CREATE_FIELD_NAME.DESCRIPTION]: string;
  [PATTERN_CREATE_FIELD_NAME.DESCRIPTION_OLD]?: string;

  [PATTERN_CREATE_FIELD_NAME.MATERIAL]: BasicReactEditorType | undefined;
  [PATTERN_CREATE_FIELD_NAME.MATERIAL_OLD]?: string;

  [PATTERN_CREATE_FIELD_NAME.COMPLEXITY]: 0 | 1 | 2 | 3 | 4 | 5;
  [PATTERN_CREATE_FIELD_NAME.IMAGES]: FileType[];
  [PATTERN_CREATE_FIELD_NAME.RECOMMENDATIONS]: RecommendationType;
  [PATTERN_CREATE_FIELD_NAME.CATEGORIES]: CategoryOptionType[];

  [PATTERN_CREATE_FIELD_NAME.TYPE]: boolean;
  [PATTERN_CREATE_FIELD_NAME.IS_COUNT]: boolean;
  [PATTERN_CREATE_FIELD_NAME.OPTION_TYPE]: boolean;

  [PATTERN_CREATE_FIELD_NAME.PRICE]: number;
  [PATTERN_CREATE_FIELD_NAME.DISCOUNT]: number;
  [PATTERN_CREATE_FIELD_NAME.COUNT]: number | undefined;

  [PATTERN_CREATE_FIELD_NAME.IS_PUBLIC]: boolean;
  [PATTERN_CREATE_FIELD_NAME.IN_ENGLISH]: boolean;
  [PATTERN_CREATE_FIELD_NAME.FILES]: FileType[];

  [PATTERN_CREATE_FIELD_NAME.OPTIONS]: PatternOptionValues[];
};
export enum PATTERN_CREATE_ACTION_TYPE {
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
export type PatternCreateStateType = {
  createPending: boolean;
  createSuccess: boolean;
  createError?: string;

  getPending: boolean;
  initialValues?: PatternValues;
  getError?: string;

  removePending: boolean;
  removeSuccess: boolean;
  removeError?: string;

  updatePending: boolean;
  updateSuccess: boolean;
  updateError?: string;
};
export type PatternCreateActionType = {
  type: PATTERN_CREATE_ACTION_TYPE;
  error?: string;
  data?: PatternValues;
};
export interface PatternCreateComponentProps
  extends FormikConfig<PatternValues> {
  isEdit: boolean;
  onRemove: () => void;
  state: PatternCreateStateType;
}
type FormikType = FormikHandlers &
  FormikHelpers<PatternValues> &
  FormikState<PatternValues> &
  FormikErrors<PatternValues>;
export type PatternCreateFormProps = {
  formik: FormikType;
  isEdit: boolean;
  state: PatternCreateStateType;
  onRemove: () => void;
};

export type PatternCreateOptionsProps = {
  formik: FormikType;
};
export type PatternCreateOptionItemProps = {
  formik: FormikType;
  value: PatternOptionValues;
  prefix: string;
  onRemove: () => void;
};
