import { AxiosResponse } from 'axios';
import { Dispatch } from 'react';
import { httpRequest } from 'src/main/http';
import {
  convertArticleProducts,
  convertMasterClassProducts,
  convertPatternProducts,
  convertSewingGoodProducts,
} from 'src/lib/common/product-converters';
import {
  prodResType,
  PRODUCT_SEARCH_ACTION_TYPE,
  ProductSearchActionType,
} from './product-search.type';
import {
  BasicPostType,
  BasicMasterClassType,
  BasicPatternType,
  BasicSewingGoodType,
} from 'src/lib/basic-types';

type QueryType = {
  lang: string;
  page?: number;
  where?: string;
};

async function getMasterClasses(query: QueryType): Promise<prodResType> {
  const response: AxiosResponse<[BasicMasterClassType[], number]> =
    await httpRequest({
      url: '/master-class/get',
      method: 'GET',
      params: {
        lang: query.lang,
        where: query.where,
        page: query.page,
        size: 5,
      },
    });
  return {
    data: convertMasterClassProducts(response.data[0]),
    total: response.data[1],
  };
}
async function getPatternProducts(query: QueryType): Promise<prodResType> {
  const response: AxiosResponse<[BasicPatternType[], number]> =
    await httpRequest({
      url: '/pattern-product/get',
      method: 'GET',
      params: {
        lang: query.lang,
        where: query.where,
        page: query.page,
        size: 5,
      },
    });
  return {
    data: convertPatternProducts(response.data[0]),
    total: response.data[1],
  };
}
async function getSewingGoods(query: QueryType): Promise<prodResType> {
  const response: AxiosResponse<[BasicSewingGoodType[], number]> =
    await httpRequest({
      url: '/sewing-product/get',
      method: 'GET',
      params: {
        lang: query.lang,
        where: query.where,
        page: query.page,
        size: 5,
      },
    });
  return {
    data: convertSewingGoodProducts(response.data[0]),
    total: response.data[1],
  };
}
async function getPosts(query: QueryType): Promise<prodResType> {
  const response: AxiosResponse<[BasicPostType[], number]> = await httpRequest({
    url: '/post/get',
    method: 'GET',
    params: {
      lang: query.lang,
      where: query.where,
      page: query.page,
      size: 5,
    },
  });
  return {
    data: convertArticleProducts(response.data[0]),
    total: response.data[1],
  };
}

export function getProductsByType(query: QueryType) {
  return async (dispatch: Dispatch<ProductSearchActionType>) => {
    dispatch({ type: PRODUCT_SEARCH_ACTION_TYPE.RESET });
    dispatch({
      type: PRODUCT_SEARCH_ACTION_TYPE.GET_PENDING,
    });
    try {
      const masterClasses = await getMasterClasses(query);
      const patternProducts = await getPatternProducts(query);
      const sewignProducts = await getSewingGoods(query);
      const posts = await getPosts(query);

      const products = [
        ...(masterClasses?.data || []),
        ...(patternProducts.data || []),
        ...(sewignProducts.data || []),
        ...(posts.data || []),
      ];
      const total =
        (masterClasses.total || 0) +
        (patternProducts.total || 0) +
        (sewignProducts.total || 0) +
        (posts.total || 0);

      dispatch({
        type: PRODUCT_SEARCH_ACTION_TYPE.GET_SUCCESS,
        products: products,
        total: total,
      });
    } catch (err: any) {
      if (err.response) {
        dispatch({
          type: PRODUCT_SEARCH_ACTION_TYPE.GET_ERROR,
          error: err.response.data.message,
        });
      }
    }
  };
}

export function paginateProductsByType(query: QueryType) {
  return async (dispatch: Dispatch<ProductSearchActionType>) => {
    dispatch({
      type: PRODUCT_SEARCH_ACTION_TYPE.PAGINATE_PENDING,
    });
    try {
      const masterClasses = await getMasterClasses(query);
      const patternProducts = await getPatternProducts(query);
      const sewignProducts = await getSewingGoods(query);
      const posts = await getPosts(query);

      const products = [
        ...(masterClasses?.data || []),
        ...(patternProducts.data || []),
        ...(sewignProducts.data || []),
        ...(posts.data || []),
      ];
      const total =
        (masterClasses.total || 0) +
        (patternProducts.total || 0) +
        (sewignProducts.total || 0) +
        (posts.total || 0);

      dispatch({
        type: PRODUCT_SEARCH_ACTION_TYPE.PAGINATE_SUCCESS,
        products: products,
        total: total,
      });
    } catch (err: any) {
      if (err.response) {
        dispatch({
          type: PRODUCT_SEARCH_ACTION_TYPE.PAGINATE_ERROR,
          error: err.response.data.message,
        });
      }
    }
  };
}
