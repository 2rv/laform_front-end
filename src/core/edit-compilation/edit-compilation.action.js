import { httpRequest } from '../../main/http';
import { EDIT_COMPILATION_API } from './edit-compilation.constant';
import { EDIT_COMPILATION_ACTION_TYPE } from './edit-compilation.type';

export function editCompilationUploadData() {
  return async (dispatch) => {
    dispatch({
      type: EDIT_COMPILATION_ACTION_TYPE.EDIT_COMPILATION_UPLOAD_PENDING,
    });

    try {
      await httpRequest({
        method: EDIT_COMPILATION_API.EDIT_COMPILATION_UPLOAD.TYPE,
        url: EDIT_COMPILATION_API.EDIT_COMPILATION_UPLOAD.ENDPOINT,
      });

      dispatch({
        type: EDIT_COMPILATION_ACTION_TYPE.EDIT_COMPILATION_UPLOAD_SUCCESS,
      });
    } catch (err) {
      if (err.response) {
        dispatch({
          type: EDIT_COMPILATION_ACTION_TYPE.EDIT_COMPILATION_UPLOAD_ERROR,
          errorMessage: err.response.data.message,
        });
      }
    }
  };
}
