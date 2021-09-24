import { httpRequest } from '../../main/http';
import { PATTERNS_API } from './patterns.constant';
import { PATTERNS_ACTION_TYPE } from './patterns.type';
import { performPatternsData } from './patterns.convert';
import { BASKET_STORE_NAME } from '../basket';

export function patternsUploadData(currentLang, isAuth) {
  return async (dispatch, getState) => {
    dispatch({
      type: PATTERNS_ACTION_TYPE.PATTERNS_UPLOAD_PENDING,
    });

    try {
      const response = isAuth
        ? await httpRequest({
            method: PATTERNS_API.PATTERNS_UPLOAD_AUTH.TYPE,
            url: PATTERNS_API.PATTERNS_UPLOAD_AUTH.ENDPOINT(currentLang),
          })
        : await httpRequest({
            method: PATTERNS_API.PATTERNS_UPLOAD.TYPE,
            url: PATTERNS_API.PATTERNS_UPLOAD.ENDPOINT(currentLang),
          });
      const data = performPatternsData(
        response.data,
        getState()[BASKET_STORE_NAME].basket,
      );
      dispatch({
        type: PATTERNS_ACTION_TYPE.PATTERNS_UPLOAD_SUCCESS,
        data: data,
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

export function patternsUpdateData(currentLang, id, body) {
  return async (dispatch) => {
    dispatch({
      type: PATTERNS_ACTION_TYPE.PATTERNS_UPDATE_PENDING,
    });

    try {
      const response = await httpRequest({
        method: PATTERNS_API.PATTERNS_UPDATE.TYPE,
        url: PATTERNS_API.PATTERNS_UPDATE.ENDPOINT(id),
        data: { patternProduct: body },
      });

      dispatch({
        type: PATTERNS_ACTION_TYPE.PATTERNS_UPDATE_SUCCESS,
      });
      dispatch(patternsUploadData(currentLang));
    } catch (err) {
      if (err.response) {
        dispatch({
          type: PATTERNS_ACTION_TYPE.PATTERNS_UPDATE_ERROR,
          errorMessage: err.response.data.message,
        });
      }
    }
  };
}
