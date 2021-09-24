import {
  convertArticleProducts,
  convertMasterClassProducts,
  convertPatternProducts,
  convertSewingGoodProducts,
} from 'src/lib/common/product-converters';
import { httpRequest } from '../../main/http';
import { BASKET_STORE_NAME } from '../basket';
import { RECOMENDATION_API } from './recomendation.constant';
import { RECOMENDATION_ACTION_TYPE } from './recomendation.type';

export function masterClassUploadData(currentLang) {
  return async (dispatch, getState) => {
    dispatch({
      type: RECOMENDATION_ACTION_TYPE.MASTER_CLASSES_UPLOAD_PENDING,
    });
    try {
      const response = await httpRequest({
        method: RECOMENDATION_API.MASTER_CLASS_UPLOAD_DATA.TYPE,
        url: RECOMENDATION_API.MASTER_CLASS_UPLOAD_DATA.ENDPOINT(currentLang),
      });
      dispatch({
        type: RECOMENDATION_ACTION_TYPE.MASTER_CLASSES_UPLOAD_SUCCESS,
        data: convertMasterClassProducts(
          response.data,
          getState()[BASKET_STORE_NAME].basket,
        ),
      });
    } catch (err) {
      if (err.response) {
        dispatch({
          type: RECOMENDATION_ACTION_TYPE.MASTER_CLASSES_UPLOAD_ERROR,
          errorMessage: err.response.data.message,
        });
      }
    }
  };
}
export function sewingGoodsUploadData(currentLang) {
  return async (dispatch, getState) => {
    dispatch({
      type: RECOMENDATION_ACTION_TYPE.SEWING_GOODS_UPLOAD_PENDING,
    });
    try {
      const response = await httpRequest({
        method: RECOMENDATION_API.SEWING_GOODS_UPLOAD_DATA.TYPE,
        url: RECOMENDATION_API.SEWING_GOODS_UPLOAD_DATA.ENDPOINT(currentLang),
      });
      dispatch({
        type: RECOMENDATION_ACTION_TYPE.SEWING_GOODS_UPLOAD_SUCCESS,
        data: convertSewingGoodProducts(
          response.data,
          getState()[BASKET_STORE_NAME].basket,
        ),
      });
    } catch (err) {
      if (err.response) {
        dispatch({
          type: RECOMENDATION_ACTION_TYPE.SEWING_GOODS_UPLOAD_ERROR,
          errorMessage: err.response.data.message,
        });
      }
    }
  };
}
export function articleUploadData(currentLang) {
  return async (dispatch) => {
    dispatch({
      type: RECOMENDATION_ACTION_TYPE.ARTICLES_UPLOAD_PENDING,
    });
    try {
      const response = await httpRequest({
        method: RECOMENDATION_API.ARTICLE_UPLOAD_DATA.TYPE,
        url: RECOMENDATION_API.ARTICLE_UPLOAD_DATA.ENDPOINT(currentLang),
      });
      dispatch({
        type: RECOMENDATION_ACTION_TYPE.ARTICLES_UPLOAD_SUCCESS,
        data: convertArticleProducts(response.data),
      });
    } catch (err) {
      if (err.response) {
        dispatch({
          type: RECOMENDATION_ACTION_TYPE.ARTICLES_UPLOAD_ERROR,
          errorMessage: err.response.data.message,
        });
      }
    }
  };
}
export function patternsUploadData(currentLang) {
  return async (dispatch, getState) => {
    dispatch({
      type: RECOMENDATION_ACTION_TYPE.PATTERNS_UPLOAD_PENDING,
    });

    try {
      const response = await httpRequest({
        method: RECOMENDATION_API.PATTERNS_UPLOAD.TYPE,
        url: RECOMENDATION_API.PATTERNS_UPLOAD.ENDPOINT(currentLang),
      });
      dispatch({
        type: RECOMENDATION_ACTION_TYPE.PATTERNS_UPLOAD_SUCCESS,
        data: convertPatternProducts(
          response.data,
          getState()[BASKET_STORE_NAME].basket,
        ),
      });
    } catch (err) {
      if (err.response) {
        dispatch({
          type: RECOMENDATION_ACTION_TYPE.PATTERNS_UPLOAD_ERROR,
          errorMessage: err.response.data.message,
        });
      }
    }
  };
}
