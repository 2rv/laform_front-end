import { httpRequest } from '../../main/http';
import { COMPILATION_API } from './compilation.constant';
import { COMPILATION_ACTION_TYPE } from './compilation.type';

export function compilationUploadData() {
  return async (dispatch) => {
    dispatch({
      type: COMPILATION_ACTION_TYPE.COMPILATION_UPLOAD_PENDING,
    });

    try {
      await httpRequest({
        method: COMPILATION_API.COMPILATION_UPLOAD.TYPE,
        url: COMPILATION_API.COMPILATION_UPLOAD.ENDPOINT,
      });

      dispatch({
        type: COMPILATION_ACTION_TYPE.COMPILATION_UPLOAD_SUCCESS,
      });
    } catch (err) {
      if (err.response) {
        dispatch({
          type: COMPILATION_ACTION_TYPE.COMPILATION_UPLOAD_ERROR,
          errorMessage: err.response.data.message,
        });
      }
    }
  };
}
