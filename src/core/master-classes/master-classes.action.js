import { httpRequest } from '../../main/http';
import { MASTER_CLASSES_API } from './master-classes.constant';
import { MASTER_CLASSES_ACTION_TYPE } from './master-classes.type';
import { convertMasterClassProducts } from '../../lib/common/product-converters';

export function masterClassesUploadData(isAuth, query) {
  return async (dispatch, getState) => {
    dispatch({
      type: MASTER_CLASSES_ACTION_TYPE.MASTER_CLASSES_UPLOAD_PENDING,
    });

    try {
      const response = isAuth
        ? await httpRequest({
            method: MASTER_CLASSES_API.MASTER_CLASSES_LOAD_DATA_AUTH.TYPE,
            url: MASTER_CLASSES_API.MASTER_CLASSES_LOAD_DATA_AUTH.ENDPOINT(
              query,
            ),
          })
        : await httpRequest({
            method: MASTER_CLASSES_API.MASTER_CLASSES_LOAD_DATA.TYPE,
            url: MASTER_CLASSES_API.MASTER_CLASSES_LOAD_DATA.ENDPOINT(query),
          });
      dispatch({
        type: MASTER_CLASSES_ACTION_TYPE.MASTER_CLASSES_UPLOAD_SUCCESS,
        data: {
          products: convertMasterClassProducts(response.data[0]),
          totalRecords: response.data[1],
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
export function fetchCategories(currentLang, type) {
  return async (dispatch) => {
    dispatch({
      type: MASTER_CLASSES_ACTION_TYPE.CATEGORIES_UPLOAD_PENDING,
    });
    try {
      const response = await httpRequest({
        method: MASTER_CLASSES_API.CATEGORIES_UPLOAD_DATA.TYPE,
        url: MASTER_CLASSES_API.CATEGORIES_UPLOAD_DATA.ENDPOINT(
          currentLang,
          type,
        ),
      });
      const convertedCategories = response.data.map((category) => ({
        id: category.id,
        tid: category.categoryNameRu,
      }));
      dispatch({
        type: MASTER_CLASSES_ACTION_TYPE.CATEGORIES_UPLOAD_SUCCESS,
        data: convertedCategories,
      });
    } catch (err) {
      if (err.response) {
        dispatch({
          type: MASTER_CLASSES_ACTION_TYPE.CATEGORIES_UPLOAD_ERROR,
          errorMessage: err.response.data.message,
        });
      }
    }
  };
}
