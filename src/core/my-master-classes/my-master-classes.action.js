import { httpRequest } from '../../main/http';
import { MY_MASTER_CLASSES_API } from './my-master-classes.constant';
import { MY_MASTER_CLASSES_ACTION_TYPE } from './my-master-classes.type';

export function myMasterClassesUploadData() {
  return async (dispatch) => {
    dispatch({
      type: MY_MASTER_CLASSES_ACTION_TYPE.MY_MASTER_CLASSES_UPLOAD_PENDING,
    });

    try {
      await httpRequest({
        method: MY_MASTER_CLASSES_API.MY_MASTER_CLASSES_UPLOAD.TYPE,
        url: MY_MASTER_CLASSES_API.MY_MASTER_CLASSES_UPLOAD.ENDPOINT,
      });

      dispatch({
        type: MY_MASTER_CLASSES_ACTION_TYPE.MY_MASTER_CLASSES_UPLOAD_SUCCESS,
      });
    } catch (err) {
      if (err.response) {
        dispatch({
          type: MY_MASTER_CLASSES_ACTION_TYPE.MY_MASTER_CLASSES_UPLOAD_ERROR,
          errorMessage: err.response.data.message,
        });
      }
    }
  };
}
