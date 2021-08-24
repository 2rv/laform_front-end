import { httpRequest } from '../../main/http';
import { PATTERNS_API } from './patterns.constant';
import { PATTERNS_ACTION_TYPE } from './patterns.type';

export function patternsUploadData() {
  return async (dispatch) => {
    dispatch({
      type: PATTERNS_ACTION_TYPE.PATTERNS_UPLOAD_PENDING,
    });

    try {
      await httpRequest({
        method: PATTERNS_API.PATTERNS_UPLOAD.TYPE,
        url: PATTERNS_API.PATTERNS_UPLOAD.ENDPOINT,
      });

      dispatch({
        type: PATTERNS_ACTION_TYPE.PATTERNS_UPLOAD_SUCCESS,
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
