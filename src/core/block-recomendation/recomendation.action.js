import { httpRequest } from '../../main/http';
import { RECOMENDATION_API } from './recomendation.constant';
import { RECOMENDATION_ACTION_TYPE } from './recomendation.type';
import {
  performMasterClassData,
  performPatternsData,
  performSewingGoodsData,
} from './recomendation.convert';

export function masterClassUploadData(currentLang) {
  return async (dispatch) => {
    dispatch({
      type: RECOMENDATION_ACTION_TYPE.MASTER_CLASSES_UPLOAD_PENDING,
    });
    try {
      const response = await httpRequest({
        method: RECOMENDATION_API.MASTER_CLASS_UPLOAD_DATA.TYPE,
        url: RECOMENDATION_API.MASTER_CLASS_UPLOAD_DATA.ENDPOINT(currentLang),
      });

      const data = performMasterClassData(response.data);

      dispatch({
        type: RECOMENDATION_ACTION_TYPE.MASTER_CLASSES_UPLOAD_SUCCESS,
        data: data,
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
  return async (dispatch) => {
    dispatch({
      type: RECOMENDATION_ACTION_TYPE.SEWING_GOODS_UPLOAD_PENDING,
    });
    try {
      const response = await httpRequest({
        method: RECOMENDATION_API.SEWING_GOODS_UPLOAD_DATA.TYPE,
        url: RECOMENDATION_API.SEWING_GOODS_UPLOAD_DATA.ENDPOINT(currentLang),
      });
      const data = performSewingGoodsData(response.data);
      dispatch({
        type: RECOMENDATION_ACTION_TYPE.SEWING_GOODS_UPLOAD_SUCCESS,
        data: data,
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
      //   const response = await httpRequest({
      //     method: RECOMENDATION_API.ARTICLE_UPLOAD_DATA.TYPE,
      //     url: RECOMENDATION_API.ARTICLE_UPLOAD_DATA.ENDPOINT(currentLang),
      //   });
      const data = [];
      dispatch({
        type: RECOMENDATION_ACTION_TYPE.ARTICLES_UPLOAD_SUCCESS,
        data: data,
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
  return async (dispatch) => {
    dispatch({
      type: RECOMENDATION_ACTION_TYPE.PATTERNS_UPLOAD_PENDING,
    });

    try {
      const response = await httpRequest({
        method: RECOMENDATION_API.PATTERNS_UPLOAD.TYPE,
        url: RECOMENDATION_API.PATTERNS_UPLOAD.ENDPOINT(currentLang),
      });

      const data = performPatternsData(response.data);
      dispatch({
        type: RECOMENDATION_ACTION_TYPE.PATTERNS_UPLOAD_SUCCESS,
        data: data,
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
