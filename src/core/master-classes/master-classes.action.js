import { httpRequest } from '../../main/http';
import { MASTER_CLASSES_API } from './master-classes.constant';
import { MASTER_CLASSES_ACTION_TYPE } from './master-classes.type';
import { performMasterClassData } from './master-classes.convert';

export function masterClassesUploadData(currentLang) {
  return async (dispatch) => {
    dispatch({
      type: MASTER_CLASSES_ACTION_TYPE.MASTER_CLASSES_UPLOAD_PENDING,
    });

    try {
      const response = await httpRequest({
        method: MASTER_CLASSES_API.MASTER_CLASSES_LOAD_DATA.TYPE,
        url: MASTER_CLASSES_API.MASTER_CLASSES_LOAD_DATA.ENDPOINT(currentLang),
      });
      const data = performMasterClassData(response.data);

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
