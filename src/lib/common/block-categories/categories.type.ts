import { FieldSelectOptionType } from 'src/lib/element/field';

export interface CategoriesContainerProps {
  values: CategoryOptionType[];
  type: 0 | 1 | 2 | 3 | 4;
}

export interface CategoriesComponentProps {
  values: CategoryOptionType[];
  categories: CategoryOptionType[];
  uploadPending: boolean;
  uploadError: boolean;
  uploadErrorMessage: string;
  createCategory: Function;
  createPending: boolean;
  createError: boolean;
  createErrorMessage: string;
  deleteCategory: Function;
  deletePending: boolean;
  deleteError: boolean;
  deleteErrorMessage: string;
}
export interface CategoriesModalProps {
  onOpen: boolean;
  setOpen: Function;
  categories: CategoryOptionType[];
  createPending: boolean;
  createCategory: Function;
  createError: boolean;
  createErrorMessage: string;
  deletePending: boolean;
  deleteCategory: Function;
  deleteError: boolean;
  deleteErrorMessage: string;
}

export interface CategoryOptionType extends FieldSelectOptionType {
  basicId: string;
}

export const CATEGORIES_TYPE = {
  CATEGORIES: 'categories',
  CATEGORY_NAME: 'categoryNameRu',
};

export const CATEGORIES_ACTION_TYPE = {
  CATEGORIES_UPLOAD_PENDING: 'CATEGORIES_ACTION_TYPE.CATEGORIES_UPLOAD_PENDING',
  CATEGORIES_UPLOAD_SUCCESS: 'CATEGORIES_ACTION_TYPE.CATEGORIES_UPLOAD_SUCCESS',
  CATEGORIES_UPLOAD_ERROR: 'CATEGORIES_ACTION_TYPE.CATEGORIES_UPLOAD_ERROR',

  CATEGORIES_CREATE_PENDING: 'CATEGORIES_ACTION_TYPE.CATEGORIES_CREATE_PENDING',
  CATEGORIES_CREATE_SUCCESS: 'CATEGORIES_ACTION_TYPE.CATEGORIES_CREATE_SUCCESS',
  CATEGORIES_CREATE_ERROR: 'CATEGORIES_ACTION_TYPE.CATEGORIES_CREATE_ERROR',

  CATEGORIES_DELETE_PENDING: 'CATEGORIES_ACTION_TYPE.CATEGORIES_DELETE_PENDING',
  CATEGORIES_DELETE_SUCCESS: 'CATEGORIES_ACTION_TYPE.CATEGORIES_DELETE_SUCCESS',
  CATEGORIES_DELETE_ERROR: 'CATEGORIES_ACTION_TYPE.CATEGORIES_DELETE_ERROR',
};
