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

export function likeSewingProductUploadData(currentLang) {
  return async (dispatch, getState) => {
    dispatch({
      type: LIKES_ACTION_TYPE.LIKES_UPLOAD_PENDING,
    });

    try {
      const response = await httpRequest({
        method: LIKES_API.SEWING_PRODUCT_LIKES_UPLOAD.TYPE,
        url: LIKES_API.SEWING_PRODUCT_LIKES_UPLOAD.ENDPOINT(currentLang),
      });
      dispatch({
        type: LIKES_ACTION_TYPE.LIKES_UPLOAD_SUCCESS,
        data: convertSewingGoodProducts(
          response.data,
          getState()[BASKET_STORE_NAME].basket,
        ),
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

export function likeMasterClassUploadData(currentLang) {
  return async (dispatch, getState) => {
    dispatch({
      type: LIKES_ACTION_TYPE.LIKES_UPLOAD_PENDING,
    });

    try {
      const response = await httpRequest({
        method: LIKES_API.MASTER_CLASS_LIKES_UPLOAD.TYPE,
        url: LIKES_API.MASTER_CLASS_LIKES_UPLOAD.ENDPOINT(currentLang),
      });
      dispatch({
        type: LIKES_ACTION_TYPE.LIKES_UPLOAD_SUCCESS,
        data: convertMasterClassProducts(
          response.data,
          getState()[BASKET_STORE_NAME].basket,
        ),
      });
    } catch (err) {
      console.log(err);
      if (err.response) {
        dispatch({
          type: LIKES_ACTION_TYPE.LIKES_UPLOAD_ERROR,
          errorMessage: err.response.data.message,
        });
      }
    }
  };
}

export function likePatternPrductUploadData(currentLang) {
  return async (dispatch, getState) => {
    dispatch({
      type: LIKES_ACTION_TYPE.LIKES_UPLOAD_PENDING,
    });

    try {
      const response = await httpRequest({
        method: LIKES_API.PATTERN_PRODUCT_LIKES_UPLOAD.TYPE,
        url: LIKES_API.PATTERN_PRODUCT_LIKES_UPLOAD.ENDPOINT(currentLang),
      });
      dispatch({
        type: LIKES_ACTION_TYPE.LIKES_UPLOAD_SUCCESS,
        data: convertPatternProducts(
          response.data,
          getState()[BASKET_STORE_NAME].basket,
        ),
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
