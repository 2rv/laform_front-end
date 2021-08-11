import { httpRequest } from '../../main/http';

import { MASTER_CLASSES_API } from './master-classes.constant';
import { MASTER_CLASSES_ACTION_TYPE } from './master-classes.type';

export function masterClassesUploadData() {
  return async (dispatch) => {
    dispatch({
      type: MASTER_CLASSES_ACTION_TYPE.MASTER_CLASSES_UPLOAD_PENDING,
    });

    try {
      const response = await httpRequest({
        method: MASTER_CLASSES_API.MASTER_CLASSES_LOAD_DATA.TYPE,
        url: MASTER_CLASSES_API.MASTER_CLASSES_LOAD_DATA.ENDPOINT,
      });

      dispatch({
        type: MASTER_CLASSES_ACTION_TYPE.MASTER_CLASSES_UPLOAD_SUCCESS,
        masterClasses: response.data,
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
