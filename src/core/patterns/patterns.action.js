import { httpRequest } from 'src/main/http';
import { convertPatternProducts } from 'src/lib/common/product-converters';
import { PATTERNS_ACTION_TYPE } from './patterns.type';
import { PATTERNS_API } from './patterns.constant';

export function getCategoriesAction(currentLang, type) {
  return async (dispatch) => {
    dispatch({
      type: PATTERNS_ACTION_TYPE.CATEGORIES_UPLOAD_PENDING,
    });
    try {
      const response = await httpRequest({
        method: PATTERNS_API.GET_CATEGORIES.TYPE,
        url: PATTERNS_API.GET_CATEGORIES.ENDPOINT(currentLang, type),
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
        method: PATTERNS_API.GET_PATTERNS.TYPE,
        url: PATTERNS_API.GET_PATTERNS.ENDPOINT(
          { ...query, type: type, currentLang: currentLang },
          isAuth,
        ),
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
      type: PATTERNS_ACTION_TYPE.PATTERNS_UPLOAD_PENDING,
    });
    try {
      const response = await httpRequest({
        method: PATTERNS_API.GET_PATTERNS.TYPE,
        url: PATTERNS_API.GET_PATTERNS.ENDPOINT(
          { ...query, type: type, page: page, currentLang: currentLang },
          isAuth,
        ),
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
