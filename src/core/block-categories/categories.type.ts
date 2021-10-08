export interface CategoriesContainerProps {
  values: any;
}

export interface CategoriesComponentProps {
  values: any;
  categories: CategoryType[];
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
  categories: CategoryType[];
  createPending: boolean;
  createCategory: Function;
  createError: boolean;
  createErrorMessage: string;
  deletePending: boolean;
  deleteCategory: Function;
  deleteError: boolean;
  deleteErrorMessage: string;
}

export interface CategoryType {
  id: number;
  basicId: string;
  tid: string;
}

export interface BasicCategoryType {
  id: string;
  categoryNameRu: string;
  categoryNameEn?: string;
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
