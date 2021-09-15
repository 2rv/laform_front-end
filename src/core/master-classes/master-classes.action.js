import { httpRequest } from '../../main/http';
import { MASTER_CLASSES_API } from './master-classes.constant';
import { MASTER_CLASSES_ACTION_TYPE } from './master-classes.type';
import { performMasterClassData } from './master-classes.convert';
import { BASKET_STORE_NAME } from '../basket';

export function masterClassesUploadData(currentLang) {
  return async (dispatch, getState) => {
    dispatch({
      type: MASTER_CLASSES_ACTION_TYPE.MASTER_CLASSES_UPLOAD_PENDING,
    });

    try {
      const response = await httpRequest({
        method: MASTER_CLASSES_API.MASTER_CLASSES_LOAD_DATA.TYPE,
        url: MASTER_CLASSES_API.MASTER_CLASSES_LOAD_DATA.ENDPOINT(currentLang),
      });
      const data = performMasterClassData(
        response.data,
        getState()[BASKET_STORE_NAME].basket,
      );
      dispatch({
        type: MASTER_CLASSES_ACTION_TYPE.MASTER_CLASSES_UPLOAD_SUCCESS,
        data: data,
      });
    } catch (err) {
      console.log(err);
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
