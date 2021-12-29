import { httpRequest } from 'src/main/http';
import { convertSewingGoodProducts } from 'src/lib/common/product-converters';
import { convertCategories } from 'src/lib/common/block-search';
import { Dispatch } from 'react';
import {
  SewingGoodsActionType,
  SEWING_GOODS_ACTION_TYPE,
} from './sewing-goods.type';

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
  return async (dispatch: Dispatch<SewingGoodsActionType>) => {
    dispatch({ type: SEWING_GOODS_ACTION_TYPE.RESET });
    dispatch({
      type: SEWING_GOODS_ACTION_TYPE.GET_PENDING,
    });
    try {
      const catResponse = await httpRequest({
        method: 'GET',
        url: '/category/get',
        params: {
          lang: query.lang,
          type: '3',
        },
      });

      const response = await httpRequest({
        method: 'GET',
        url: query.isAuth ? '/sewing-product/auth/get' : '/sewing-product/get',
        params: {
          lang: query.lang,
          where: query.where,
          sort: query.sort,
          by: query.by,
          category: query.category,
        },
      });
      dispatch({
        type: SEWING_GOODS_ACTION_TYPE.GET_SUCCESS,
        products: convertSewingGoodProducts(response.data[0]),
        total: response.data[1],
        categories: convertCategories(catResponse.data),
      });
    } catch (err: any) {
      if (err.response) {
        dispatch({
          type: SEWING_GOODS_ACTION_TYPE.GET_ERROR,
          error: err.response.data.message,
        });
      }
    }
  };
}
export function paginateProductsAction(query: QueryType) {
  return async (dispatch: Dispatch<SewingGoodsActionType>) => {
    dispatch({
      type: SEWING_GOODS_ACTION_TYPE.PAGINATION_PENDING,
    });
    try {
      const response = await httpRequest({
        method: 'GET',
        url: query.isAuth ? '/sewing-product/auth/get' : '/sewing-product/get',
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
        type: SEWING_GOODS_ACTION_TYPE.PAGINATION_SUCCESS,
        products: convertSewingGoodProducts(response.data[0]),
        total: response.data[1],
      });
    } catch (err: any) {
      if (err.response) {
        dispatch({
          type: SEWING_GOODS_ACTION_TYPE.PAGINATION_ERROR,
          error: err.response.data.message,
        });
      }
    }
  };
}
