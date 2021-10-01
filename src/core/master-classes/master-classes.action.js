import { httpRequest } from '../../main/http';
import { MASTER_CLASSES_API } from './master-classes.constant';
import { MASTER_CLASSES_ACTION_TYPE } from './master-classes.type';
import { BASKET_STORE_NAME } from '../basket';
import { convertMasterClassProducts } from '../../lib/common/product-converters';

export function masterClassesUploadData(currentLang, isAuth, where, sort, by) {
  return async (dispatch, getState) => {
    dispatch({
      type: MASTER_CLASSES_ACTION_TYPE.MASTER_CLASSES_UPLOAD_PENDING,
    });

    try {
      const response = isAuth
        ? await httpRequest({
            method: MASTER_CLASSES_API.MASTER_CLASSES_LOAD_DATA_AUTH.TYPE,
            url: MASTER_CLASSES_API.MASTER_CLASSES_LOAD_DATA_AUTH.ENDPOINT(
              currentLang,
              1,
              where,
              sort,
              by,
            ),
          })
        : await httpRequest({
            method: MASTER_CLASSES_API.MASTER_CLASSES_LOAD_DATA.TYPE,
            url: MASTER_CLASSES_API.MASTER_CLASSES_LOAD_DATA.ENDPOINT(
              currentLang,
              1,
              where,
              sort,
              by,
            ),
          });
      dispatch({
        type: MASTER_CLASSES_ACTION_TYPE.MASTER_CLASSES_UPLOAD_SUCCESS,
        data: convertMasterClassProducts(
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
          type: MASTER_CLASSES_ACTION_TYPE.MASTER_CLASSES_UPLOAD_ERROR,
          errorMessage: err.response.data.message,
        });
      }
    }
  };
}

export function masterClassesPaginationData(
  currentLang,
  isAuth,
  page,
  where,
  sort,
  by,
) {
  return async (dispatch, getState) => {
    dispatch({
      type: MASTER_CLASSES_ACTION_TYPE.MASTER_CLASSES_UPLOAD_PENDING,
    });

    try {
      const response = isAuth
        ? await httpRequest({
            method: MASTER_CLASSES_API.MASTER_CLASSES_LOAD_DATA_AUTH.TYPE,
            url: MASTER_CLASSES_API.MASTER_CLASSES_LOAD_DATA_AUTH.ENDPOINT(
              currentLang,
              page,
              where,
              sort,
              by,
            ),
          })
        : await httpRequest({
            method: MASTER_CLASSES_API.MASTER_CLASSES_LOAD_DATA.TYPE,
            url: MASTER_CLASSES_API.MASTER_CLASSES_LOAD_DATA.ENDPOINT(
              currentLang,
              page,
              where,
              sort,
              by,
            ),
          });
      dispatch({
        type: MASTER_CLASSES_ACTION_TYPE.MASTER_CLASSES_PAGINATION_SUCCESS,
        data: convertMasterClassProducts(
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
          type: MASTER_CLASSES_ACTION_TYPE.MASTER_CLASSES_UPLOAD_ERROR,
          errorMessage: err.response.data.message,
        });
      }
    }
  };
}

export function masterClassesUpdateData(currentLang, id, body) {
  return async (dispatch) => {
    dispatch({
      type: MASTER_CLASSES_ACTION_TYPE.MASTER_CLASSES_UPDATE_PENDING,
    });

    try {
      const response = await httpRequest({
        method: MASTER_CLASSES_API.MASTER_CLASSES_UPDATE.TYPE,
        url: MASTER_CLASSES_API.MASTER_CLASSES_UPDATE.ENDPOINT(id),
        data: { masterClass: body },
      });

      dispatch({
        type: MASTER_CLASSES_ACTION_TYPE.MASTER_CLASSES_UPDATE_SUCCESS,
      });
      dispatch(masterClassesUploadData(currentLang));
    } catch (err) {
      if (err.response) {
        dispatch({
          type: MASTER_CLASSES_ACTION_TYPE.MASTER_CLASSES_UPDATE_ERROR,
          errorMessage: err.response.data.message,
        });
      }
    }
  };
}
