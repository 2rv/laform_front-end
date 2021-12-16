import { httpRequest } from 'src/main/http';
import {
  ALL_LIKES_TAB_TYPES,
  LIKES_API,
  ALL_LIKES_STORE_NAME,
} from './likes.constant';
import { LIKES_ACTION_TYPE } from './likes.type';
import {
  convertArticleProducts,
  convertMasterClassProducts,
  convertPatternProducts,
  convertSewingGoodProducts,
} from 'src/lib/common/product-converters';
import { getRequestData } from 'src/main/store/store.service';

function getCategories(currentLang, type) {
  return async (dispatch) => {
    dispatch({
      type: LIKES_ACTION_TYPE.GET_CATEGORIES_PENDING,
    });
    try {
      const response = await httpRequest({
        method: LIKES_API.GET_CATEGORIES.TYPE,
        url: LIKES_API.GET_CATEGORIES.ENDPOINT,
        params: {
          lang: currentLang,
          type: type,
        },
      });
      dispatch({
        type: LIKES_ACTION_TYPE.GET_CATEGORIES_SUCCESS,
        data: response.data.map((category) => ({
          id: category.id,
          tid: category.categoryNameRu,
        })),
      });
    } catch (err) {
      if (err.response) {
        dispatch({
          type: LIKES_ACTION_TYPE.GET_CATEGORIES_ERROR,
          errorMessage: err.response.data.message,
        });
      }
    }
  };
}
async function getMasterClasses(query) {
  const response = await httpRequest({
    method: LIKES_API.GET_MASTER_PROUCTS.TYPE,
    url: LIKES_API.GET_MASTER_PROUCTS.ENDPOINT,
    params: {
      lang: query.currentLang,
      page: query.page,
      where: query.where,
      sort: query.sort,
      by: query.by,
      category: query.category,
    },
  });
  return {
    data: convertMasterClassProducts(response.data[0]),
    total: response.data[1],
  };
}
async function getPatternProducts(query) {
  const response = await httpRequest({
    method: LIKES_API.GET_PATTERNS_PRODUCTS.TYPE,
    url: LIKES_API.GET_PATTERNS_PRODUCTS.ENDPOINT,
    params: {
      lang: query.currentLang,
      page: query.page,
      where: query.where,
      sort: query.sort,
      by: query.by,
      category: query.category,
    },
  });
  return {
    data: convertPatternProducts(response.data[0]),
    total: response.data[1],
  };
}
async function getSewingGoods(query) {
  const response = await httpRequest({
    method: LIKES_API.GET_SEWING_PRODUCTS.TYPE,
    url: LIKES_API.GET_SEWING_PRODUCTS.ENDPOINT,
    params: {
      lang: query.currentLang,
      page: query.page,
      where: query.where,
      sort: query.sort,
      by: query.by,
      category: query.category,
    },
  });
  return {
    data: convertSewingGoodProducts(response.data[0]),
    total: response.data[1],
  };
}
async function getPosts(query) {
  const response = await httpRequest({
    method: LIKES_API.GET_POST.TYPE,
    url: LIKES_API.GET_POST.ENDPOINT,
    params: {
      lang: query.currentLang,
      page: query.page,
      where: query.where,
      sort: query.sort,
      by: query.by,
      category: query.category,
    },
  });
  return {
    data: convertArticleProducts(response.data[0]),
    total: response.data[1],
  };
}
const getProducts = {
  0: getMasterClasses,
  1: getPatternProducts,
  2: getPatternProducts,
  3: getSewingGoods,
  4: getPosts,
};

function getTypeByValue(value) {
  return Object.keys(ALL_LIKES_TAB_TYPES).find(
    (key) => ALL_LIKES_TAB_TYPES[key] === value,
  );
}

export function getProductsByType(value, currentLang, query) {
  return async (dispatch) => {
    dispatch(clearLikesStoreAction);
    dispatch({
      type: LIKES_ACTION_TYPE.GET_LIKES_PENDING,
    });
    try {
      const type = getTypeByValue(value);

      const response = await getProducts[type]({ type, currentLang, ...query });
      dispatch(getCategories(currentLang, type));
      dispatch({
        type: LIKES_ACTION_TYPE.GET_LIKES_SUCCESS,
        data: response.data,
        total: response.total,
      });
    } catch (err) {
      if (err.response) {
        dispatch({
          type: LIKES_ACTION_TYPE.GET_LIKES_ERROR,
          errorMessage: err.response.data.message,
        });
      }
    }
  };
}
export function paginateProductsByType(value, query) {
  return async (dispatch) => {
    dispatch({
      type: LIKES_ACTION_TYPE.PAGINATION_LIKES_PENDING,
    });
    try {
      const type = getTypeByValue(value);
      const response = await getProducts[type]({
        type,
        currentLang,
        page,
        ...query,
      });
      dispatch({
        type: LIKES_ACTION_TYPE.PAGINATION_LIKES_SUCCESS,
        data: response.data,
        total: response.total,
      });
    } catch (err) {
      if (err.response) {
        dispatch({
          type: LIKES_ACTION_TYPE.PAGINATION_LIKES_ERROR,
          errorMessage: err.response.data.message,
        });
      }
    }
  };
}

export const clearLikesStoreAction = {
  type: LIKES_ACTION_TYPE.RESET_PRODUCTS_STATE,
};

export function updateLocateLikesStore(id) {
  return async (dispatch, getState) => {
    try {
      const state = getState()[ALL_LIKES_STORE_NAME].products;
      const products = getRequestData(state, []);
      dispatch({
        type: LIKES_ACTION_TYPE.UPDATE_PRODUCTS_STATE,
        data: products.filter((i) => i.id !== id),
      });
    } catch (err) {
      dispatch(clearLikesStoreAction);
    }
  };
}
