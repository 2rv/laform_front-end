import { httpRequest } from '../../main/http';

import { MASTER_CLASS_API } from './master-class.constant';
import { MASTER_CLASS_ACTION_TYPE } from './master-class.type';

export function masterClassUploadData() {
  return async (dispatch) => {
    dispatch({
      type: MASTER_CLASS_ACTION_TYPE.MASTER_CLASS_UPLOAD_PENDING,
    });

    try {
      const response = await httpRequest({
        method: MASTER_CLASS_API.MASTER_CLASS_UPLOAD.TYPE,
        url: MASTER_CLASS_API.MASTER_CLASS_UPLOAD.ENDPOINT,
      });

      dispatch({
        type: MASTER_CLASS_ACTION_TYPE.MASTER_CLASS_UPLOAD_SUCCESS,
        masterClass: response.data,
      });
    } catch (err) {
      if (err.response) {
        dispatch({
          type: MASTER_CLASS_ACTION_TYPE.MASTER_CLASS_UPLOAD_ERROR,
          errorMessage: err.response.data.message,
        });
      }
    }
  };
}
