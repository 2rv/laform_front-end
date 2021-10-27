import { httpRequest } from '../../main/http';
import { LIKES_API } from './likes.constant';
import { LIKES_ACTION_TYPE } from './likes.type';
import { BASKET_STORE_NAME } from '../basket';
import {
  convertArticleProducts,
  convertMasterClassProducts,
  convertPatternProducts,
  convertSewingGoodProducts,
} from 'src/lib/common/product-converters';

export function likeSewingProductUploadData(currentLang, page) {
  return async (dispatch, getState) => {
    dispatch({
      type: LIKES_ACTION_TYPE.LIKES_UPLOAD_PENDING,
    });

    try {
      const response = await httpRequest({
        method: LIKES_API.SEWING_PRODUCT_LIKES_UPLOAD.TYPE,
        url: LIKES_API.SEWING_PRODUCT_LIKES_UPLOAD.ENDPOINT(currentLang, page),
      });
      dispatch({
        type: LIKES_ACTION_TYPE.LIKES_UPLOAD_SUCCESS,
        data: {
          products: convertSewingGoodProducts(
            response.data[0],
            getState()[BASKET_STORE_NAME].basket,
          ),
          totalRecords: response.data[1],
        }
      });
    } catch (err) {
      if (err.response) {
        dispatch({
          type: LIKES_ACTION_TYPE.LIKES_UPLOAD_ERROR,
          errorMessage: err.response.data.message,
        });
      }
    }
  };
}

export function likeMasterClassUploadData(currentLang, page) {
  return async (dispatch, getState) => {
    dispatch({
      type: LIKES_ACTION_TYPE.LIKES_UPLOAD_PENDING,
    });

    try {
      const response = await httpRequest({
        method: LIKES_API.MASTER_CLASS_LIKES_UPLOAD.TYPE,
        url: LIKES_API.MASTER_CLASS_LIKES_UPLOAD.ENDPOINT(currentLang, page),
      });
      dispatch({
        type: LIKES_ACTION_TYPE.LIKES_UPLOAD_SUCCESS,
        data: {
          products: convertMasterClassProducts(
            response.data[0],
            getState()[BASKET_STORE_NAME].basket,
          ),
          totalRecords: response.data[1],
        },
      });
    } catch (err) {
      if (err.response) {
        dispatch({
          type: LIKES_ACTION_TYPE.LIKES_UPLOAD_ERROR,
          errorMessage: err.response.data.message,
        });
      }
    }
  };
}

export function likePatternProductUploadData(currentLang, page) {
  return async (dispatch, getState) => {
    dispatch({
      type: LIKES_ACTION_TYPE.LIKES_UPLOAD_PENDING,
    });

    try {
      const response = await httpRequest({
        method: LIKES_API.PATTERN_PRODUCT_LIKES_UPLOAD.TYPE,
        url: LIKES_API.PATTERN_PRODUCT_LIKES_UPLOAD.ENDPOINT(currentLang, page),
      });
      dispatch({
        type: LIKES_ACTION_TYPE.LIKES_UPLOAD_SUCCESS,
        data: {
          products: convertPatternProducts(
            response.data[0],
            getState()[BASKET_STORE_NAME].basket,
          ),
          totalRecords: response.data[1],
        },
      });
    } catch (err) {
      if (err.response) {
        dispatch({
          type: LIKES_ACTION_TYPE.LIKES_UPLOAD_ERROR,
          errorMessage: err.response.data.message,
        });
      }
    }
  };
}

export function likePostUploadData(currentLang, page) {
  return async (dispatch, getState) => {
    dispatch({
      type: LIKES_ACTION_TYPE.LIKES_UPLOAD_PENDING,
    });

    try {
      const response = await httpRequest({
        method: LIKES_API.POST_LIKES_UPLOAD.TYPE,
        url: LIKES_API.POST_LIKES_UPLOAD.ENDPOINT(currentLang, page),
      });
      dispatch({
        type: LIKES_ACTION_TYPE.LIKES_UPLOAD_SUCCESS,
        data: {
          products: convertArticleProducts(response.data[0]),
          totalRecords: response.data[1],
        },
      });
    } catch (err) {
      if (err.response) {
        dispatch({
          type: LIKES_ACTION_TYPE.LIKES_UPLOAD_ERROR,
          errorMessage: err.response.data.message,
        });
      }
    }
  };
}
