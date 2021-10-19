import { httpRequest } from '../../main/http';
import { PATTERNS_API } from './patterns.constant';
import { PATTERNS_ACTION_TYPE } from './patterns.type';
import { BASKET_STORE_NAME } from '../basket';
import { convertPatternProducts } from 'src/lib/common/product-converters';

export function patternsUploadData(isAuth, query) {
  return async (dispatch, getState) => {
    dispatch({
      type: PATTERNS_ACTION_TYPE.PATTERNS_UPLOAD_PENDING,
    });

    try {
      const response = isAuth
        ? await httpRequest({
            method: PATTERNS_API.PATTERNS_UPLOAD_AUTH.TYPE,
            url: PATTERNS_API.PATTERNS_UPLOAD_AUTH.ENDPOINT(query),
          })
        : await httpRequest({
            method: PATTERNS_API.PATTERNS_UPLOAD.TYPE,
            url: PATTERNS_API.PATTERNS_UPLOAD.ENDPOINT(query),
          });
      dispatch({
        type: PATTERNS_ACTION_TYPE.PATTERNS_UPLOAD_SUCCESS,
        data: convertPatternProducts(
          response.data,
          getState()[BASKET_STORE_NAME].basket,
        ),
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

export function patternsUpdateData(isAuth, query, id, body) {
  return async (dispatch) => {
    dispatch({
      type: PATTERNS_ACTION_TYPE.PATTERNS_UPDATE_PENDING,
    });

    try {
      const response = await httpRequest({
        method: PATTERNS_API.PATTERNS_DELETE.TYPE,
        url: PATTERNS_API.PATTERNS_DELETE.ENDPOINT(id),
        data: body,
      });

      dispatch({
        type: PATTERNS_ACTION_TYPE.PATTERNS_UPDATE_SUCCESS,
      });
      dispatch(patternsUploadData(isAuth, query));
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
