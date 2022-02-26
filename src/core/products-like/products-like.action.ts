import { httpRequest } from 'src/main/http';
import {
  convertArticleProducts,
  convertMasterClassProducts,
  convertPatternProducts,
  convertSewingGoodProducts,
} from 'src/lib/common/product-converters';
import { convertCategories } from 'src/lib/common/block-categories/categories.convert';
import {
  ProductsLikeActionType,
  PRODUCTS_LIKE_ACTION_TYPE,
  PRODUCTS_LIKE_TAB_TYPES,
} from './products-like.type';
import { Dispatch } from 'react';
import { getCategoriestByType } from 'src/lib/common/block-categories/categories.action';

type QueryType = {
  lang: string;
  page?: number;
  where?: string;
  sort?: string;
  by?: string;
  category?: string;
};

async function getMasterClasses(query: QueryType) {
  const catResponse = await getCategoriestByType(query.lang, 0);

  const response = await httpRequest({
    method: 'GET',
    url: '/master-class/liked/get',
    params: {
      lang: query.lang,
      page: query.page,
      where: query.where,
      sort: query.sort,
      by: query.by,
      category: query.category,
      getAll: true,
    },
  });
  return {
    data: convertMasterClassProducts(response.data[0]),
    total: response.data[1],
    categories: convertCategories(catResponse.data),
  };
}
async function getElectrinicPatternProducts(query: QueryType) {
  const catResponse = await getCategoriestByType(query.lang, 1);

  const response = await httpRequest({
    method: 'GET',
    url: '/pattern-product/liked/get',
    params: {
      lang: query.lang,
      page: query.page,
      where: query.where,
      sort: query.sort,
      by: query.by,
      category: query.category,
      type: 'electronic',
      getAll: true,
    },
  });
  return {
    data: convertPatternProducts(response.data[0]),
    total: response.data[1],
    categories: convertCategories(catResponse.data),
  };
}
async function getPrintPatternProducts(query: QueryType) {
  const catResponse = await getCategoriestByType(query.lang, 2);

  const response = await httpRequest({
    method: 'GET',
    url: '/pattern-product/liked/get',
    params: {
      lang: query.lang,
      page: query.page,
      where: query.where,
      sort: query.sort,
      by: query.by,
      category: query.category,
      type: 'print',
      getAll: true,
    },
  });
  return {
    data: convertPatternProducts(response.data[0]),
    total: response.data[1],
    categories: convertCategories(catResponse.data),
  };
}
async function getSewingGoods(query: QueryType) {
  const catResponse = await getCategoriestByType(query.lang, 3);

  const response = await httpRequest({
    method: 'GET',
    url: '/sewing-product/liked/get',
    params: {
      lang: query.lang,
      page: query.page,
      where: query.where,
      sort: query.sort,
      by: query.by,
      category: query.category,
      getAll: true,
    },
  });
  return {
    data: convertSewingGoodProducts(response.data[0]),
    total: response.data[1],
    categories: convertCategories(catResponse.data),
  };
}
async function getPosts(query: QueryType) {
  const catResponse = await getCategoriestByType(query.lang, 4);

  const response = await httpRequest({
    method: 'GET',
    url: '/post/liked/get',
    params: {
      lang: query.lang,
      page: query.page,
      where: query.where,
      sort: query.sort,
      by: query.by,
      category: query.category,
      getAll: true,
    },
  });
  return {
    data: convertArticleProducts(response.data[0]),
    total: response.data[1],
    categories: convertCategories(catResponse.data),
  };
}

function getProductsByType(activePath: keyof PRODUCTS_LIKE_TAB_TYPES) {
  switch (activePath) {
    case PRODUCTS_LIKE_TAB_TYPES[0]:
      return getMasterClasses;
    case PRODUCTS_LIKE_TAB_TYPES[1]:
      return getElectrinicPatternProducts;
    case PRODUCTS_LIKE_TAB_TYPES[2]:
      return getPrintPatternProducts;
    case PRODUCTS_LIKE_TAB_TYPES[3]:
      return getSewingGoods;
    case PRODUCTS_LIKE_TAB_TYPES[4]:
      return getPosts;
    default:
      return getMasterClasses;
  }
}

export function getProductsAction(
  activePath: keyof PRODUCTS_LIKE_TAB_TYPES,
  query: QueryType,
) {
  return async (dispatch: Dispatch<ProductsLikeActionType>) => {
    dispatch({ type: PRODUCTS_LIKE_ACTION_TYPE.RESET });
    dispatch({ type: PRODUCTS_LIKE_ACTION_TYPE.GET_PENDING });
    try {
      const data = await getProductsByType(activePath)(query);

      dispatch({
        type: PRODUCTS_LIKE_ACTION_TYPE.GET_SUCCESS,
        products: data.data,
        total: data.total,
        categories: data.categories,
      });
    } catch (err: any) {
      if (err.response) {
        dispatch({
          type: PRODUCTS_LIKE_ACTION_TYPE.GET_ERROR,
          error: err.response.data.message,
        });
      }
    }
  };
}
export function paginateProductsAction(
  activePath: keyof PRODUCTS_LIKE_TAB_TYPES,
  query: QueryType,
) {
  return async (dispatch: Dispatch<ProductsLikeActionType>) => {
    dispatch({
      type: PRODUCTS_LIKE_ACTION_TYPE.PAGINATION_PENDING,
    });
    try {
      const data = await getProductsByType(activePath)(query);
      dispatch({
        type: PRODUCTS_LIKE_ACTION_TYPE.PAGINATION_SUCCESS,
        products: data.data,
        total: data.total,
        categories: data.categories,
      });
    } catch (err: any) {
      if (err.response) {
        dispatch({
          type: PRODUCTS_LIKE_ACTION_TYPE.PAGINATION_ERROR,
          error: err.response.data.message,
        });
      }
    }
  };
}
