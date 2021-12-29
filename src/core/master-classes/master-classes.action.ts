import { Dispatch } from 'react';
import { httpRequest } from 'src/main/http';
import { convertMasterClassProducts } from 'src/lib/common/product-converters';
import { convertCategories } from 'src/lib/common/block-search';
import {
  MasterClassesActionType,
  MASTER_CLASSES_ACTION_TYPE,
} from './master-classes.type';

export type QueryType = {
  lang: string;
  isAuth: boolean;
  page?: number;
  where?: string;
  sort?: string;
  by?: string;
  category?: string;
};

export function getProductsAction(query: QueryType) {
  return async (dispatch: Dispatch<MasterClassesActionType>) => {
    dispatch({ type: MASTER_CLASSES_ACTION_TYPE.RESET });
    dispatch({
      type: MASTER_CLASSES_ACTION_TYPE.GET_PENDING,
    });
    try {
      const catResponse = await httpRequest({
        method: 'GET',
        url: '/category/get',
        params: {
          lang: query.lang,
          type: '0',
        },
      });

      const response = await httpRequest({
        method: 'GET',
        url: query.isAuth ? '/master-class/auth/get' : '/master-class/get',
        params: {
          lang: query.lang,
          where: query.where,
          sort: query.sort,
          by: query.by,
          category: query.category,
        },
      });
      dispatch({
        type: MASTER_CLASSES_ACTION_TYPE.GET_SUCCESS,
        products: convertMasterClassProducts(response.data[0]),
        total: response.data[1],
        categories: convertCategories(catResponse.data),
      });
    } catch (err: any) {
      if (err.response) {
        dispatch({
          type: MASTER_CLASSES_ACTION_TYPE.GET_ERROR,
          error: err.response.data.message,
        });
      }
    }
  };
}
export function paginateProductsAction(query: QueryType) {
  return async (dispatch: Dispatch<MasterClassesActionType>) => {
    dispatch({
      type: MASTER_CLASSES_ACTION_TYPE.PAGINATION_PENDING,
    });
    try {
      const response = await httpRequest({
        method: 'GET',
        url: query.isAuth ? '/master-class/auth/get' : '/master-class/get',
        params: {
          lang: query.lang,
          page: query.page,
          where: query.where,
          sort: query.sort,
          by: query.by,
          category: query.category,
        },
      });
      dispatch({
        type: MASTER_CLASSES_ACTION_TYPE.PAGINATION_SUCCESS,
        products: convertMasterClassProducts(response.data[0]),
        total: response.data[1],
      });
    } catch (err: any) {
      if (err.response) {
        dispatch({
          type: MASTER_CLASSES_ACTION_TYPE.PAGINATION_ERROR,
          error: err.response.data.message,
        });
      }
    }
  };
}
