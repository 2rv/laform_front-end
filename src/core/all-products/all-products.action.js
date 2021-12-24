import { httpRequest } from '../../main/http';
import {
  ALL_PRODUCTS_API,
  ALL_PRODUCTS_TAB_TYPES,
} from './all-products.constant';
import { ALL_PRODUCTS_ACTION_TYPE } from './all-products.type';
import {
  convertArticleProducts,
  convertMasterClassProducts,
  convertPatternProducts,
  convertSewingGoodProducts,
} from 'src/lib/common/product-converters';
import { convertCategories } from 'src/lib/common/block-search';

function getCategories(currentLang, type) {
  return async (dispatch) => {
    dispatch({
      type: ALL_PRODUCTS_ACTION_TYPE.CATEGORIES_UPLOAD_PENDING,
    });
    try {
      const response = await httpRequest({
        method: ALL_PRODUCTS_API.FETCH_CATEGORIES.TYPE,
        url: ALL_PRODUCTS_API.FETCH_CATEGORIES.ENDPOINT(currentLang, type),
      });
      dispatch({
        type: ALL_PRODUCTS_ACTION_TYPE.CATEGORIES_UPLOAD_SUCCESS,
        data: convertCategories(response.data),
      });
    } catch (err) {
      if (err.response) {
        dispatch({
          type: ALL_PRODUCTS_ACTION_TYPE.CATEGORIES_UPLOAD_ERROR,
          errorMessage: err.response.data.message,
        });
      }
    }
  };
}
async function getMasterClasses(query) {
  const response = await httpRequest({
    method: ALL_PRODUCTS_API.FETCH_MASTER_CLASSES.TYPE,
    url: ALL_PRODUCTS_API.FETCH_MASTER_CLASSES.ENDPOINT(query),
  });
  return {
    data: convertMasterClassProducts(response.data[0]),
    total: response.data[1],
  };
}
async function getPatternProducts(query) {
  const response = await httpRequest({
    method: ALL_PRODUCTS_API.FETCH_PATTERN_PRODUCTS.TYPE,
    url: ALL_PRODUCTS_API.FETCH_PATTERN_PRODUCTS.ENDPOINT(query),
  });
  return {
    data: convertPatternProducts(response.data[0]),
    total: response.data[1],
  };
}
async function getSewingGoods(query) {
  const response = await httpRequest({
    method: ALL_PRODUCTS_API.FETCH_SEWING_PRODUCTS.TYPE,
    url: ALL_PRODUCTS_API.FETCH_SEWING_PRODUCTS.ENDPOINT(query),
  });
  return {
    data: convertSewingGoodProducts(response.data[0]),
    total: response.data[1],
  };
}
async function getPosts(query) {
  const response = await httpRequest({
    method: ALL_PRODUCTS_API.FETCH_POSTS.TYPE,
    url: ALL_PRODUCTS_API.FETCH_POSTS.ENDPOINT(query),
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
  return Object.keys(ALL_PRODUCTS_TAB_TYPES).find(
    (key) => ALL_PRODUCTS_TAB_TYPES[key] === value,
  );
}
export function getProductsByType(value, currentLang, query) {
  return async (dispatch) => {
    dispatch({ type: ALL_PRODUCTS_ACTION_TYPE.RESET_PRODUCTS_STATE });
    dispatch({
      type: ALL_PRODUCTS_ACTION_TYPE.ALL_PRODUCTS_UPLOAD_PENDING,
    });
    try {
      const type = getTypeByValue(value);
      const response = await getProducts[type]({ type, currentLang, ...query });
      dispatch(getCategories(currentLang, type));
      dispatch({
        type: ALL_PRODUCTS_ACTION_TYPE.ALL_PRODUCTS_UPLOAD_SUCCESS,
        data: response.data,
        total: response.total,
      });
    } catch (err) {
      if (err.response) {
        dispatch({
          type: ALL_PRODUCTS_ACTION_TYPE.ALL_PRODUCTS_UPLOAD_ERROR,
          errorMessage: err.response.data.message,
        });
      }
    }
  };
}
export function paginateProductsByType(value, currentLang, page, query) {
  return async (dispatch) => {
    dispatch({
      type: ALL_PRODUCTS_ACTION_TYPE.ALL_PRODUCTS_PAGINATION_PENDING,
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
        type: ALL_PRODUCTS_ACTION_TYPE.ALL_PRODUCTS_PAGINATION_SUCCESS,
        data: response.data,
        total: response.total,
      });
    } catch (err) {
      if (err.response) {
        dispatch({
          type: ALL_PRODUCTS_ACTION_TYPE.ALL_PRODUCTS_PAGINATION_ERROR,
          errorMessage: err.response.data.message,
        });
      }
    }
  };
}
export function disableProduct(value, id, deleted) {
  return async (dispatch) => {
    dispatch({
      type: ALL_PRODUCTS_ACTION_TYPE.DISABLE_PRODUCT_PENDING,
    });

    try {
      const type = getTypeByValue(value);
      await httpRequest({
        method: ALL_PRODUCTS_API.DISABLE_PRODUCT.TYPE,
        url: ALL_PRODUCTS_API.DISABLE_PRODUCT.ENDPOINT(type, id),
        data: { deleted: deleted === 'false' },
      });

      dispatch({
        type: ALL_PRODUCTS_ACTION_TYPE.DISABLE_PRODUCT_SUCCESS,
        id: id,
        deleted: deleted === 'false',
      });
    } catch (err) {
      if (err.response) {
        dispatch({
          type: ALL_PRODUCTS_ACTION_TYPE.DISABLE_PRODUCT_ERROR,
          errorMessage: err.response.data.message,
        });
      }
    }
  };
}
