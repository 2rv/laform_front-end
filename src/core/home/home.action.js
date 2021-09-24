import { httpRequest } from '../../main/http';
import { HOME_API } from './home.constant';
import { HOME_ACTION_TYPE } from './home.type';
import {
  performMasterClassData,
  performSewingGoodsData,
  performArticlesData,
} from './home.convert';

export function masterClassUploadData(currentLang, logged) {
  return async (dispatch) => {
    dispatch({
      type: HOME_ACTION_TYPE.HOME_MASTER_CLASS_PENDING,
    });
    try {
      const response = logged
        ? await httpRequest({
            method: HOME_API.MASTER_CLASS_UPLOAD_DATA_AUTH.TYPE,
            url: HOME_API.MASTER_CLASS_UPLOAD_DATA_AUTH.ENDPOINT(currentLang),
          })
        : await httpRequest({
            method: HOME_API.MASTER_CLASS_UPLOAD_DATA.TYPE,
            url: HOME_API.MASTER_CLASS_UPLOAD_DATA.ENDPOINT(currentLang),
          });

      const data = performMasterClassData(response.data);
      dispatch({
        type: HOME_ACTION_TYPE.HOME_MASTER_CLASS_SUCCESS,
        data: data,
      });
    } catch (err) {
      if (err.response) {
        dispatch({
          type: HOME_ACTION_TYPE.HOME_MASTER_CLASS_ERROR,
          errorMessage: err.response.data.message,
        });
      }
    }
  };
}
export function sewingGoodsUploadData(currentLang, logged) {
  return async (dispatch) => {
    dispatch({
      type: HOME_ACTION_TYPE.HOME_SEWING_GOODS_ERROR,
    });
    try {
      const response = logged
        ? await httpRequest({
            method: HOME_API.SEWING_GOODS_UPLOAD_DATA_AUTH.TYPE,
            url: HOME_API.SEWING_GOODS_UPLOAD_DATA_AUTH.ENDPOINT(currentLang),
          })
        : await httpRequest({
            method: HOME_API.SEWING_GOODS_UPLOAD_DATA.TYPE,
            url: HOME_API.SEWING_GOODS_UPLOAD_DATA.ENDPOINT(currentLang),
          });
      const data = performSewingGoodsData(response.data);
      dispatch({
        type: HOME_ACTION_TYPE.HOME_SEWING_GOODS_SUCCESS,
        data: data,
      });
    } catch (err) {
      if (err.response) {
        dispatch({
          type: HOME_ACTION_TYPE.HOME_SEWING_GOODS_ERROR,
          errorMessage: err.response.data.message,
        });
      }
    }
  };
}
export function articleUploadData(currentLang, logged) {
  return async (dispatch) => {
    dispatch({
      type: HOME_ACTION_TYPE.HOME_ARTICLE_ERROR,
    });
    try {
      const response = logged
        ? await httpRequest({
            method: HOME_API.ARTICLE_UPLOAD_DATA_AUTH.TYPE,
            url: HOME_API.ARTICLE_UPLOAD_DATA_AUTH.ENDPOINT(currentLang),
          })
        : await httpRequest({
            method: HOME_API.ARTICLE_UPLOAD_DATA.TYPE,
            url: HOME_API.ARTICLE_UPLOAD_DATA.ENDPOINT(currentLang),
          });
      const data = performArticlesData(response.data);
      console.log(data);
      dispatch({
        type: HOME_ACTION_TYPE.HOME_ARTICLE_SUCCESS,
        data: data,
      });
    } catch (err) {
      if (err.response) {
        dispatch({
          type: HOME_ACTION_TYPE.HOME_ARTICLE_ERROR,
          errorMessage: err.response.data.message,
        });
      }
    }
  };
}
