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

export enum POST_FIELD_NAME {
  NAME = 'titleRu',
  VENDOR_CODE = 'vendorCode',
  MODIFIER = 'modifierRu',
  IMAGES = 'images',
  CATEGORIES = 'categories',
  POST = 'articleRu',
  RECOMMENDATIONS = 'recommendation',
  IS_PUBLIC = 'isPublic',
  IN_ENGLISH = 'inEnglish',
}

export type PostValues = {
  [POST_FIELD_NAME.NAME]: string;
  [POST_FIELD_NAME.VENDOR_CODE]: string;
  [POST_FIELD_NAME.MODIFIER]: string;
  [POST_FIELD_NAME.IMAGES]: FileType[];
  [POST_FIELD_NAME.CATEGORIES]: CategoryType[];
  [POST_FIELD_NAME.POST]?: BasicReactEditorType;
  [POST_FIELD_NAME.RECOMMENDATIONS]: RecommendationType;
  [POST_FIELD_NAME.IS_PUBLIC]: boolean;
  [POST_FIELD_NAME.IN_ENGLISH]: boolean;
};

export interface PostCreateComponentProps extends FormikConfig<PostValues> {
  isEdit: boolean;
  onRemove: () => void;
  state: PostCreateStateType;
}
type FormikType = FormikHandlers &
  FormikHelpers<PostValues> &
  FormikState<PostValues> &
  FormikErrors<PostValues>;

export type PostCreateFormProps = {
  formik: FormikType;
  isEdit: boolean;
  state: PostCreateStateType;
  onRemove: () => void;
};

export type PostCreateStateType = {
  createPending: boolean;
  createSuccess: boolean;
  createError?: string;

  getPending: boolean;
  initialValues?: PostValues;
  getError?: string;

  removePending: boolean;
  removeSuccess: boolean;
  removeError?: string;

  updatePending: boolean;
  updateSuccess: boolean;
  updateError?: string;
};
export type PostCreateActionType = {
  type: POST_CREATE_ACTION_TYPE;
  error?: string;
  data?: PostValues;
};

export enum POST_CREATE_ACTION_TYPE {
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
