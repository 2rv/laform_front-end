import { httpRequest } from '../../main/http';
import { PATTERNS_PAGE_API } from './patterns-page.constant';
import { PATTERNS_PAGE_ACTION_TYPE } from './patterns-page.type';

export function patternsPageUploadData() {
  return async (dispatch) => {
    dispatch({
      type: PATTERNS_PAGE_ACTION_TYPE.PATTERNS_PAGE_UPLOAD_PENDING,
    });

    try {
      await httpRequest({
        method: PATTERNS_PAGE_API.PATTERNS_PAGE_UPLOAD.TYPE,
        url: PATTERNS_PAGE_API.PATTERNS_PAGE_UPLOAD.ENDPOINT,
      });

      dispatch({
        type: PATTERNS_PAGE_ACTION_TYPE.PATTERNS_PAGE_UPLOAD_SUCCESS,
      });
    } catch (err) {
      if (err.response) {
        dispatch({
          type: PATTERNS_PAGE_ACTION_TYPE.PATTERNS_PAGE_UPLOAD_ERROR,
          errorMessage: err.response.data.message,
        });
      }
    }
  };
}
