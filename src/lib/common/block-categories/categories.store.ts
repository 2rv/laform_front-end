import {
  initRequestState,
  setRequestError,
  setRequestPending,
  setRequestSuccess,
} from '../../../main/store/store.service';
import { CATEGORIES_ACTION_TYPE } from './categories.type';

const initialState = {
  uploadCategories: initRequestState(),
  createCategory: initRequestState(),
  deleteCategory: initRequestState(),
};

export function categoriesStore(state = initialState, action: any) {
  switch (action.type) {
    case CATEGORIES_ACTION_TYPE.CATEGORIES_UPLOAD_PENDING:
      return {
        ...state,
        uploadCategories: setRequestPending(state.uploadCategories),
      };
    case CATEGORIES_ACTION_TYPE.CATEGORIES_UPLOAD_SUCCESS:
      return {
        ...state,
        uploadCategories: setRequestSuccess(
          state.uploadCategories,
          action.data,
        ),
      };
    case CATEGORIES_ACTION_TYPE.CATEGORIES_UPLOAD_ERROR:
      return {
        ...state,
        uploadCategories: setRequestError(
          state.uploadCategories,
          action.errorMessage,
        ),
      };

    case CATEGORIES_ACTION_TYPE.CATEGORIES_CREATE_PENDING:
      return {
        ...state,
        createCategory: setRequestPending(state.createCategory),
      };
    case CATEGORIES_ACTION_TYPE.CATEGORIES_CREATE_SUCCESS:
      return {
        ...state,
        createCategory: setRequestSuccess(state.createCategory, action.data),
        // @ts-ignore
        uploadCategories: setRequestSuccess(state.uploadCategories, [
          ...(state.uploadCategories.data || []),
          action.data,
        ]),
      };
    case CATEGORIES_ACTION_TYPE.CATEGORIES_CREATE_ERROR:
      return {
        ...state,
        createCategory: setRequestError(
          state.createCategory,
          action.errorMessage,
        ),
      };

    case CATEGORIES_ACTION_TYPE.CATEGORIES_DELETE_PENDING:
      return {
        ...state,
        deleteCategory: setRequestPending(state.deleteCategory),
      };
    case CATEGORIES_ACTION_TYPE.CATEGORIES_DELETE_SUCCESS:
      return {
        ...state,
        uploadCategories: setRequestSuccess(
          state.uploadCategories,
          action.data,
        ),
        deleteCategory: setRequestSuccess(state.deleteCategory),
      };
    case CATEGORIES_ACTION_TYPE.CATEGORIES_DELETE_ERROR:
      return {
        ...state,
        deleteCategory: setRequestError(
          state.deleteCategory,
          action.errorMessage,
        ),
      };
    default:
      return state;
  }
}
