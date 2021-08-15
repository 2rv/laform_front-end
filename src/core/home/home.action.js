import { httpRequest } from '../../main/http';
import { HOME_API } from './home.constant';
import { HOME_ACTION_TYPE } from './home.type';

export function pinnedMasterClassesUploadData(currentLang) {
  return async (dispatch) => {
    dispatch({
      type: HOME_ACTION_TYPE.HOME_UPLOAD_PENDING,
    });

    try {
      const response = await httpRequest({
        method: HOME_API.PINNED_MASTER_CLASSES_UPLOAD.TYPE,
        url: HOME_API.PINNED_MASTER_CLASSES_UPLOAD.ENDPOINT(currentLang),
      });

      dispatch({
        type: HOME_ACTION_TYPE.HOME_UPLOAD_SUCCESS,
        pinnedMasterClasses: response.data,
      });
    } catch (err) {
      if (err.response) {
        dispatch({
          type: HOME_ACTION_TYPE.HOME_UPLOAD_ERROR,
          errorMessage: err.response.data.message,
        });
      }
    }
  };
}
