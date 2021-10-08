import { httpRequest } from '../../main/http';
import { SEARCH_BUTTON_API } from './search-button.constant';
import { SEARCH_BUTTON_ACTION_TYPE } from './search-button.type';
import {
  convertArticleProducts,
  convertMasterClassProducts,
  convertPatternProducts,
  convertSewingGoodProducts,
} from 'src/lib/common/product-converters';

export function masterClassUploadData(currentLang, filter) {
  return async (dispatch) => {
    dispatch({
      type: SEARCH_BUTTON_ACTION_TYPE.MASTER_CLASSES_UPLOAD_PENDING,
    });
    try {
      const response = await httpRequest({
        method: SEARCH_BUTTON_API.MASTER_CLASS_UPLOAD_DATA.TYPE,
        url: SEARCH_BUTTON_API.MASTER_CLASS_UPLOAD_DATA.ENDPOINT(currentLang, filter),
      });
      dispatch({
        type: SEARCH_BUTTON_ACTION_TYPE.MASTER_CLASSES_UPLOAD_SUCCESS,
        payload: convertMasterClassProducts(response.data),
      });
    } catch (err) {
      if (err.response) {
        dispatch({
          type: SEARCH_BUTTON_ACTION_TYPE.MASTER_CLASSES_UPLOAD_ERROR,
          errorMessage: err.response.data.message,
        });
      }
    }
  };
}
export function sewingGoodsUploadData(currentLang, filter) {
  return async (dispatch) => {
    dispatch({
      type: SEARCH_BUTTON_ACTION_TYPE.SEWING_GOODS_UPLOAD_PENDING,
    });
    try {
      const response = await httpRequest({
        method: SEARCH_BUTTON_API.SEWING_GOODS_UPLOAD_DATA.TYPE,
        url: SEARCH_BUTTON_API.SEWING_GOODS_UPLOAD_DATA.ENDPOINT(currentLang, filter),
      });
      dispatch({
        type: SEARCH_BUTTON_ACTION_TYPE.SEWING_GOODS_UPLOAD_SUCCESS,
        payload: convertSewingGoodProducts(response.data),
      });
    } catch (err) {
      if (err.response) {
        dispatch({
          type: SEARCH_BUTTON_ACTION_TYPE.SEWING_GOODS_UPLOAD_ERROR,
          errorMessage: err.response.data.message,
        });
      }
    }
  };
}
export function articleUploadData(currentLang, filter) {
  return async (dispatch) => {
    dispatch({
      type: SEARCH_BUTTON_ACTION_TYPE.ARTICLES_UPLOAD_PENDING,
    });
    try {
      const response = await httpRequest({
        method: SEARCH_BUTTON_API.ARTICLE_UPLOAD_DATA.TYPE,
        url: SEARCH_BUTTON_API.ARTICLE_UPLOAD_DATA.ENDPOINT(currentLang, filter),
      });
      dispatch({
        type: SEARCH_BUTTON_ACTION_TYPE.ARTICLES_UPLOAD_SUCCESS,
        payload: convertArticleProducts(response.data),
      });
    } catch (err) {
      if (err.response) {
        dispatch({
          type: SEARCH_BUTTON_ACTION_TYPE.ARTICLES_UPLOAD_ERROR,
          errorMessage: err.response.data.message,
        });
      }
    }
  };
}
export function patternsUploadData(currentLang, filter) {
  return async (dispatch) => {
    dispatch({
      type: SEARCH_BUTTON_ACTION_TYPE.PATTERNS_UPLOAD_PENDING,
    });

    try {
      const response = await httpRequest({
        method: SEARCH_BUTTON_API.PATTERNS_UPLOAD.TYPE,
        url: SEARCH_BUTTON_API.PATTERNS_UPLOAD.ENDPOINT(currentLang, filter),
      });
      dispatch({
        type: SEARCH_BUTTON_ACTION_TYPE.PATTERNS_UPLOAD_SUCCESS,
        payload: convertPatternProducts(response.data),
      });
    } catch (err) {
      if (err.response) {
        dispatch({
          type: SEARCH_BUTTON_ACTION_TYPE.PATTERNS_UPLOAD_ERROR,
          errorMessage: err.response.data.message,
        });
      }
    }
  };
}
