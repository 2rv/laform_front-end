import { httpRequest } from 'src/main/http';
import { convertPatternProducts } from 'src/lib/common/product-converters';
import { PATTERNS_ACTION_TYPE } from './patterns.type';
import { PATTERNS_API } from './patterns.constant';

export function getCategoriesAction(currentLang) {
  return async (dispatch) => {
    dispatch({
      type: PATTERNS_ACTION_TYPE.CATEGORIES_UPLOAD_PENDING,
    });
    try {
      const response = await httpRequest({
        method: PATTERNS_API.GET_CATEGORIES.TYPE,
        url: PATTERNS_API.GET_CATEGORIES.ENDPOINT,
        params: {
          lang: currentLang,
          type: '2',
        },
      });
      dispatch({
        type: PATTERNS_ACTION_TYPE.CATEGORIES_UPLOAD_SUCCESS,
        data: response.data.map((category) => ({
          id: category.id,
          tid: category.categoryNameRu,
        })),
      });
    } catch (err) {
      if (err.response) {
        dispatch({
          type: PATTERNS_ACTION_TYPE.CATEGORIES_UPLOAD_ERROR,
          errorMessage: err.response.data.message,
        });
      }
    }
  };
}

export function getProductsAction(type, currentLang, isAuth, query) {
  return async (dispatch) => {
    dispatch({ type: PATTERNS_ACTION_TYPE.RESET_PRODUCTS_STATE });
    dispatch({
      type: PATTERNS_ACTION_TYPE.PATTERNS_UPLOAD_PENDING,
    });
    try {
      const response = await httpRequest({
        method: 'GET',
        url: isAuth
          ? PATTERNS_API.GET_AUTH_PATTERNS
          : PATTERNS_API.GET_PATTERNS,
        params: {
          lang: currentLang,
          where: query.where,
          sort: query.sort,
          by: query.by,
          category: query.category,
          type: type,
        },
      });
      dispatch({
        type: PATTERNS_ACTION_TYPE.PATTERNS_UPLOAD_SUCCESS,
        data: convertPatternProducts(response.data[0]),
        total: response.data[1],
      });
    } catch (err) {
      if (err.response) {
        dispatch({
          type: PATTERNS_ACTION_TYPE.PATTERNS_UPLOAD_ERROR,
          errorMessage: err.response.data.message,
        });
      }
    }
  };
}

export function paginateProductsAction(type, currentLang, isAuth, page, query) {
  return async (dispatch) => {
    dispatch({
      type: PATTERNS_ACTION_TYPE.PATTERNS_PAGINATION_PENDING,
    });
    try {
      const response = await httpRequest({
        method: PATTERNS_API.GET_PATTERNS.TYPE,
        url: isAuth
          ? PATTERNS_API.GET_AUTH_PATTERNS
          : PATTERNS_API.GET_PATTERNS,
        params: {
          lang: currentLang,
          page: page,
          where: query.where,
          sort: query.sort,
          by: query.by,
          category: query.category,
          type: type,
        },
      });
      dispatch({
        type: PATTERNS_ACTION_TYPE.PATTERNS_PAGINATION_SUCCESS,
        data: convertPatternProducts(response.data[0]),
        total: response.data[1],
      });
    } catch (err) {
      if (err.response) {
        dispatch({
          type: PATTERNS_ACTION_TYPE.PATTERNS_PAGINATION_ERROR,
          errorMessage: err.response.data.message,
        });
      }
    }
  };
}
