import { httpRequest } from 'src/main/http';
import { convertPatternProducts } from 'src/lib/common/product-converters';
import { PatternsActionType, PATTERNS_ACTION_TYPE } from './patterns.type';
import { convertCategories } from 'src/lib/common/block-search';
import { Dispatch } from 'react';

export type QueryType = {
  type: any;
  lang: string;
  isAuth: boolean;
  page?: number;
  where?: string;
  sort?: string;
  by?: string;
  category?: string;
};

export function getProductsAction(query: QueryType) {
  return async (dispatch: Dispatch<PatternsActionType>) => {
    dispatch({ type: PATTERNS_ACTION_TYPE.RESET });
    dispatch({
      type: PATTERNS_ACTION_TYPE.GET_PENDING,
    });
    try {
      const catResponse = await httpRequest({
        method: 'GET',
        url: '/category/get',
        params: {
          lang: query.lang,
          type: '2',
        },
      });

      const response = await httpRequest({
        method: 'GET',
        url: query.isAuth
          ? '/pattern-product/auth/get'
          : '/pattern-product/get',
        params: {
          lang: query.lang,
          where: query.where,
          sort: query.sort,
          by: query.by,
          category: query.category,
          type: query.type,
        },
      });
      dispatch({
        type: PATTERNS_ACTION_TYPE.GET_SUCCESS,
        products: convertPatternProducts(response.data[0]),
        total: response.data[1],
        categories: convertCategories(catResponse.data),
      });
    } catch (err: any) {
      if (err.response) {
        dispatch({
          type: PATTERNS_ACTION_TYPE.GET_ERROR,
          error: err.response.data.message,
        });
      }
    }
  };
}
export function paginateProductsAction(query: QueryType) {
  return async (dispatch: Dispatch<PatternsActionType>) => {
    dispatch({
      type: PATTERNS_ACTION_TYPE.PAGINATION_PENDING,
    });
    try {
      const response = await httpRequest({
        method: 'GET',
        url: query.isAuth
          ? '/pattern-product/auth/get'
          : '/pattern-product/get',
        params: {
          lang: query.lang,
          page: query.page,
          where: query.where,
          sort: query.sort,
          by: query.by,
          category: query.category,
          type: query.type,
        },
      });
      dispatch({
        type: PATTERNS_ACTION_TYPE.PAGINATION_SUCCESS,
        products: convertPatternProducts(response.data[0]),
        total: response.data[1],
      });
    } catch (err: any) {
      if (err.response) {
        dispatch({
          type: PATTERNS_ACTION_TYPE.PAGINATION_ERROR,
          error: err.response.data.message,
        });
      }
    }
  };
}
