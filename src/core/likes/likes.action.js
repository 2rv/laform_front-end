import { httpRequest } from '../../main/http';
import { LIKES_API } from './likes.constant';
import { LIKES_ACTION_TYPE } from './likes.type';
import { BASKET_STORE_NAME } from '../basket';
import { performSewingGoodsData } from '../sewing-goods';
import { performMasterClassData } from '../master-classes';
import { performPatternsData } from '../patterns';

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
      const data = performSewingGoodsData(
        response.data,
        getState()[BASKET_STORE_NAME].basket,
      );
      dispatch({
        type: LIKES_ACTION_TYPE.LIKES_UPLOAD_SUCCESS,
        data: data,
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
      const data = performMasterClassData(
        response.data,
        getState()[BASKET_STORE_NAME].basket,
      );
      dispatch({
        type: LIKES_ACTION_TYPE.LIKES_UPLOAD_SUCCESS,
        data: data,
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
      const data = performPatternsData(
        response.data,
        getState()[BASKET_STORE_NAME].basket,
      );
      dispatch({
        type: LIKES_ACTION_TYPE.LIKES_UPLOAD_SUCCESS,
        data: data,
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
