import { httpRequest } from '../../main/http';
import { MY_PATTERNS_API } from './my-patterns.constant';
import { MY_PATTERNS_ACTION_TYPE } from './my-patterns.type';

export function myPatternsUploadData() {
  return async (dispatch) => {
    dispatch({
      type: MY_PATTERNS_ACTION_TYPE.MY_PATTERNS_UPLOAD_PENDING,
    });

    try {
      await httpRequest({
        method: MY_PATTERNS_API.MY_PATTERNS_UPLOAD.TYPE,
        url: MY_PATTERNS_API.MY_PATTERNS_UPLOAD.ENDPOINT,
      });

      dispatch({
        type: MY_PATTERNS_ACTION_TYPE.MY_PATTERNS_UPLOAD_SUCCESS,
      });
    } catch (err) {
      if (err.response) {
        dispatch({
          type: MY_PATTERNS_ACTION_TYPE.MY_PATTERNS_UPLOAD_ERROR,
          errorMessage: err.response.data.message,
        });
      }
    }
  };
}
