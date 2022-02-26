import { httpRequest } from 'src/main/http';
import { CATEGORIES_ACTION_TYPE } from './categories.type';
import { convertForCreate, convertCategories } from './categories.convert';
import { BasicCategoryType } from 'src/lib/basic-types';
import { AxiosResponse } from 'axios';

export async function getCategoriestByType(
  lang: string,
  type: 0 | 1 | 2 | 3 | 4,
): Promise<AxiosResponse<BasicCategoryType[]>> {
  return await httpRequest({
    method: 'GET',
    url: '/category/get/' + type,
    params: {
      lang: lang,
    },
  });
}

export function uploadCategoriesAction(
  currentLang: 'ru' | 'en',
  type: 0 | 1 | 2 | 3 | 4,
) {
  return async (dispatch: Function) => {
    dispatch({
      type: CATEGORIES_ACTION_TYPE.CATEGORIES_UPLOAD_PENDING,
    });
    try {
      const response = await getCategoriestByType(currentLang, type);

      dispatch({
        type: CATEGORIES_ACTION_TYPE.CATEGORIES_UPLOAD_SUCCESS,
        data: convertCategories(response.data, 'Выберите категорию'),
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

export function createCategoryAction(
  value: string,
  type: 0 | 1 | 2 | 3 | 4,
  currentLang: 'ru' | 'en',
) {
  return async (dispatch: Function) => {
    dispatch({
      type: CATEGORIES_ACTION_TYPE.CATEGORIES_CREATE_PENDING,
    });
    try {
      const convertedData = convertForCreate(value, type);

      await httpRequest({
        method: 'POST',
        url: '/category/create',
        data: convertedData,
        params: {
          lang: currentLang,
        },
      });
      const response = await getCategoriestByType(currentLang, type);

      dispatch({
        type: CATEGORIES_ACTION_TYPE.CATEGORIES_CREATE_SUCCESS,
        data: convertCategories(response.data, 'Выберите категорию'),
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
  type: 0 | 1 | 2 | 3 | 4,
  currentLang: 'ru' | 'en',
) {
  return async (dispatch: Function) => {
    dispatch({
      type: CATEGORIES_ACTION_TYPE.CATEGORIES_DELETE_PENDING,
    });
    try {
      await httpRequest({
        method: 'DELETE',
        url: '/category/delete/' + id,
      });
      const response = await getCategoriestByType(currentLang, type);

      dispatch({
        type: CATEGORIES_ACTION_TYPE.CATEGORIES_DELETE_SUCCESS,
        data: convertCategories(response.data, 'Выберите категорию'),
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
