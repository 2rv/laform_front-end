import { httpRequest } from '../../main/http';
import { ALL_PRODUCTS_API } from './all-products.constant';
import { ALL_PRODUCTS_ACTION_TYPE } from './all-products.type';
import {
  convertArticleProducts,
  convertMasterClassProducts,
  convertPatternProducts,
  convertSewingGoodProducts,
} from 'src/lib/common/product-converters';

export function fetchSewingGoods(query) {
  return async (dispatch) => {
    dispatch({
      type: ALL_PRODUCTS_ACTION_TYPE.ALL_PRODUCTS_UPLOAD_PENDING,
    });

    try {
      const response = await httpRequest({
        method: ALL_PRODUCTS_API.FETCH_SEWING_PRODUCTS.TYPE,
        url: ALL_PRODUCTS_API.FETCH_SEWING_PRODUCTS.ENDPOINT(query),
      });
      dispatch({
        type: ALL_PRODUCTS_ACTION_TYPE.ALL_PRODUCTS_UPLOAD_SUCCESS,
        data: {
          products: convertSewingGoodProducts(response.data[0]),
          totalRecords: response.data[1],
        },
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

export function fetchMasterClasses(query) {
  return async (dispatch) => {
    dispatch({
      type: ALL_PRODUCTS_ACTION_TYPE.ALL_PRODUCTS_UPLOAD_PENDING,
    });

    try {
      const response = await httpRequest({
        method: ALL_PRODUCTS_API.FETCH_MASTER_CLASSES.TYPE,
        url: ALL_PRODUCTS_API.FETCH_MASTER_CLASSES.ENDPOINT(query),
      });
      dispatch({
        type: ALL_PRODUCTS_ACTION_TYPE.ALL_PRODUCTS_UPLOAD_SUCCESS,
        data: {
          products: convertMasterClassProducts(response.data[0]),
          totalRecords: response.data[1],
        },
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

export function fetchPatternProducts(query) {
  return async (dispatch) => {
    dispatch({
      type: ALL_PRODUCTS_ACTION_TYPE.ALL_PRODUCTS_UPLOAD_PENDING,
    });

    try {
      const response = await httpRequest({
        method: ALL_PRODUCTS_API.FETCH_PATTERN_PRODUCTS.TYPE,
        url: ALL_PRODUCTS_API.FETCH_PATTERN_PRODUCTS.ENDPOINT(query),
      });
      dispatch({
        type: ALL_PRODUCTS_ACTION_TYPE.ALL_PRODUCTS_UPLOAD_SUCCESS,
        data: {
          products: convertPatternProducts(response.data[0]),
          totalRecords: response.data[1],
        },
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

export function fetchPosts(query) {
  return async (dispatch) => {
    dispatch({
      type: ALL_PRODUCTS_ACTION_TYPE.ALL_PRODUCTS_UPLOAD_PENDING,
    });

    try {
      const response = await httpRequest({
        method: ALL_PRODUCTS_API.FETCH_POSTS.TYPE,
        url: ALL_PRODUCTS_API.FETCH_POSTS.ENDPOINT(query),
      });
      dispatch({
        type: ALL_PRODUCTS_ACTION_TYPE.ALL_PRODUCTS_UPLOAD_SUCCESS,
        data: {
          products: convertArticleProducts(response.data[0]),
          totalRecords: response.data[1],
        },
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

export function fetchCategories(currentLang, type) {
  return async (dispatch) => {
    dispatch({
      type: ALL_PRODUCTS_ACTION_TYPE.CATEGORIES_UPLOAD_PENDING,
    });
    try {
      const response = await httpRequest({
        method: ALL_PRODUCTS_API.FETCH_CATEGORIES.TYPE,
        url: ALL_PRODUCTS_API.FETCH_CATEGORIES.ENDPOINT(currentLang, type),
      });

      const convertedCategories = response.data.map((category) => ({
        id: category.id,
        tid: category.categoryNameRu,
      }));

      dispatch({
        type: ALL_PRODUCTS_ACTION_TYPE.CATEGORIES_UPLOAD_SUCCESS,
        payload: convertedCategories,
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

export function deleteProduct(currentLang, product, id, body) {
  return async (dispatch) => {
    dispatch({
      type: ALL_PRODUCTS_ACTION_TYPE.DELETE_PRODUCT_PENDING,
    });

    try {
      await httpRequest({
        method: ALL_PRODUCTS_API.DELETE_PRODUCT.TYPE,
        url: ALL_PRODUCTS_API.DELETE_PRODUCT.ENDPOINT(product, id),
        data: body,
      });

      dispatch({
        type: ALL_PRODUCTS_ACTION_TYPE.DELETE_PRODUCT_SUCCESS,
        payload: { productId: id },
      });
    } catch (err) {
      if (err.response) {
        dispatch({
          type: ALL_PRODUCTS_ACTION_TYPE.DELETE_PRODUCT_ERROR,
          errorMessage: err.response.data.message,
        });
      }
    }
  };
}
