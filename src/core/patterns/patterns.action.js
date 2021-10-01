import { httpRequest } from '../../main/http';
import { PATTERNS_API } from './patterns.constant';
import { PATTERNS_ACTION_TYPE } from './patterns.type';
import { BASKET_STORE_NAME } from '../basket';
import { convertPatternProducts } from 'src/lib/common/product-converters';

export function patternsUploadData(currentLang, isAuth, type, where, sort, by) {
  return async (dispatch, getState) => {
    dispatch({
      type: PATTERNS_ACTION_TYPE.PATTERNS_UPLOAD_PENDING,
    });

    try {
      const response = isAuth
        ? await httpRequest({
            method: PATTERNS_API.PATTERNS_UPLOAD_AUTH.TYPE,
            url: PATTERNS_API.PATTERNS_UPLOAD_AUTH.ENDPOINT(
              currentLang,
              1,
              where,
              sort,
              by,
              type,
            ),
          })
        : await httpRequest({
            method: PATTERNS_API.PATTERNS_UPLOAD.TYPE,
            url: PATTERNS_API.PATTERNS_UPLOAD.ENDPOINT(
              currentLang,
              1,
              where,
              sort,
              by,
              type,
            ),
          });
      dispatch({
        type: PATTERNS_ACTION_TYPE.PATTERNS_UPLOAD_SUCCESS,
        data: convertPatternProducts(
          response.data[0],
          getState()[BASKET_STORE_NAME].basket,
        ),
        count: {
          totalCount: response.data[1],
          currentCount: response.data[0].length,
        },
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

export function patternsPaginationData(
  currentLang,
  isAuth,
  page,
  where,
  sort,
  by,
  type,
) {
  return async (dispatch, getState) => {
    dispatch({
      type: PATTERNS_ACTION_TYPE.PATTERNS_UPLOAD_PENDING,
    });

    try {
      const response = isAuth
        ? await httpRequest({
            method: PATTERNS_API.PATTERNS_UPLOAD_AUTH.TYPE,
            url: PATTERNS_API.PATTERNS_UPLOAD_AUTH.ENDPOINT(
              currentLang,
              page,
              where,
              sort,
              by,
              type,
            ),
          })
        : await httpRequest({
            method: PATTERNS_API.PATTERNS_UPLOAD.TYPE,
            url: PATTERNS_API.PATTERNS_UPLOAD.ENDPOINT(
              currentLang,
              page,
              where,
              sort,
              by,
              type,
            ),
          });
      dispatch({
        type: PATTERNS_ACTION_TYPE.PATTERNS_PAGINATION_SUCCESS,
        data: convertPatternProducts(
          response.data[0],
          getState()[BASKET_STORE_NAME].basket,
        ),
        count: {
          totalCount: response.data[1],
          currentCount: response.data[0].length,
        },
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
