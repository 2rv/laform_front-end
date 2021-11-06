import { httpRequest } from 'src/main/http';
import { CATEGORIES_ACTION_TYPE } from './categories.type';
import { CATEGORIES_API } from './categories.constant';
import { convertForCreate } from './categories.convert';
import { BasicCategoryType } from 'src/lib/basic-types';

export function uploadCategoriesAction(currentLang: 'ru' | 'en', type: number) {
  return async (dispatch: Function) => {
    dispatch({
      type: CATEGORIES_ACTION_TYPE.CATEGORIES_UPLOAD_PENDING,
    });
    try {
      // @ts-ignore
      const response = await httpRequest({
        method: CATEGORIES_API.CATEGORIES_UPLOAD_DATA.TYPE,
        url: CATEGORIES_API.CATEGORIES_UPLOAD_DATA.ENDPOINT(currentLang, type),
      });
      dispatch({
        type: CATEGORIES_ACTION_TYPE.CATEGORIES_UPLOAD_SUCCESS,
        data: response.data,
      });
    } catch (err: any) {
      if (err.response) {
        dispatch({
          type: CATEGORIES_ACTION_TYPE.CATEGORIES_UPLOAD_ERROR,
          errorMessage: err.response.data.message,
        });
      }
    }
  };
}

export function createCategoryAction(value: string, type: number) {
  return async (dispatch: Function) => {
    dispatch({
      type: CATEGORIES_ACTION_TYPE.CATEGORIES_CREATE_PENDING,
    });
    try {
      const convertedData = convertForCreate(value, type);
      // @ts-ignore
      const response = await httpRequest({
        method: CATEGORIES_API.CATEGORIES_CREATE.TYPE,
        url: CATEGORIES_API.CATEGORIES_CREATE.ENDPOINT,
        data: convertedData,
      });
      dispatch({
        type: CATEGORIES_ACTION_TYPE.CATEGORIES_CREATE_SUCCESS,
        data: response.data,
      });
    } catch (err: any) {
      if (err.response) {
        dispatch({
          type: CATEGORIES_ACTION_TYPE.CATEGORIES_CREATE_ERROR,
          errorMessage: err.response.data.message,
        });
      }
    }
  };
}

export function deleteCategotyAction(
  id: string,
  categories: BasicCategoryType[],
) {
  return async (dispatch: Function) => {
    dispatch({
      type: CATEGORIES_ACTION_TYPE.CATEGORIES_DELETE_PENDING,
    });
    try {
      //@ts-ignore
      const response = await httpRequest({
        method: CATEGORIES_API.CATEGORY_DELETE.TYPE,
        url: CATEGORIES_API.CATEGORY_DELETE.ENDPOINT(id),
      });
      const result = categories.filter((i) => i.id !== id);
      dispatch({
        type: CATEGORIES_ACTION_TYPE.CATEGORIES_DELETE_SUCCESS,
        data: result,
      });
    } catch (err: any) {
      if (err.response) {
        dispatch({
          type: CATEGORIES_ACTION_TYPE.CATEGORIES_DELETE_ERROR,
          errorMessage: err.response.data.message,
        });
      }
    }
  };
}
