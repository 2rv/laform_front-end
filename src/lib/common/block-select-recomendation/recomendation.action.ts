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
  RECOMENDATION_ACTION_TYPE,
  RecommendationActionType,
} from './recomendation.type';
import {
  BasicPostType,
  BasicMasterClassType,
  BasicPatternType,
  BasicSewingGoodType,
} from 'src/lib/basic-types';
import { CardMultiType } from 'src/lib/element/card';
import { getCategoriestByType } from '../block-categories/categories.action';
import { convertCategories } from '../block-categories/categories.convert';

type prodResType = {
  data: CardMultiType[];
  total: number;
};
type QueryType = {
  lang: string;
  where?: string;
  sort?: string;
  by?: string;
  category?: string;
  page?: number;
  type: 0 | 1 | 2 | 3 | 4;
};
async function getMasterClasses(query: QueryType): Promise<prodResType> {
  const response: AxiosResponse<[BasicMasterClassType[], number]> =
    await httpRequest({
      url: '/master-class/get',
      method: 'GET',
      params: {
        lang: query.lang,
        where: query.where,
        sort: query.sort,
        by: query.by,
        category: query.category,
        page: query.page,
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
        sort: query.sort,
        by: query.by,
        category: query.category,
        type:
          query.type === 1
            ? 'electronic'
            : query.type === 2
            ? 'printed'
            : undefined,
        page: query.page,
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
        sort: query.sort,
        by: query.by,
        category: query.category,
        page: query.page,
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
      sort: query.sort,
      by: query.by,
      category: query.category,
      page: query.page,
    },
  });
  return {
    data: convertArticleProducts(response.data[0]),
    total: response.data[1],
  };
}
const getProducts = [
  getMasterClasses,
  getPatternProducts,
  getPatternProducts,
  getSewingGoods,
  getPosts,
];

export function getProductsByType(query: QueryType) {
  return async (dispatch: Dispatch<RecommendationActionType>) => {
    dispatch({ type: RECOMENDATION_ACTION_TYPE.RESET });
    dispatch({
      type: RECOMENDATION_ACTION_TYPE.GET_PENDING,
    });
    try {
      const prodRes = await getProducts[query.type](query);

      const catResponse = await getCategoriestByType(query.lang, query.type);

      dispatch({
        type: RECOMENDATION_ACTION_TYPE.GET_SUCCESS,
        products: prodRes.data,
        total: prodRes.total,
        categories: convertCategories(catResponse.data),
      });
    } catch (err: any) {
      if (err.response) {
        dispatch({
          type: RECOMENDATION_ACTION_TYPE.GET_ERROR,
          error: err.response.data.message,
        });
      }
    }
  };
}

export function paginateProductsByType(page: number, query: QueryType) {
  return async (dispatch: Dispatch<RecommendationActionType>) => {
    dispatch({
      type: RECOMENDATION_ACTION_TYPE.PAGINATE_PENDING,
    });
    try {
      const response = await getProducts[query.type]({
        page: page + 1,
        ...query,
      });
      dispatch({
        type: RECOMENDATION_ACTION_TYPE.PAGINATE_SUCCESS,
        products: response.data,
        total: response.total,
      });
    } catch (err: any) {
      if (err.response) {
        dispatch({
          type: RECOMENDATION_ACTION_TYPE.PAGINATE_ERROR,
          error: err.response.data.message,
        });
      }
    }
  };
}
