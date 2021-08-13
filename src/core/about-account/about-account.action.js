import { httpRequest } from '../../main/http';
import { ABOUT_ACCOUNT_API } from './about-account.constant';
import { ABOUT_ACCOUNT_ACTION_TYPE } from './about-account.type';

export function aboutAccountUploadData() {
  return async (dispatch) => {
    dispatch({
      type: ABOUT_ACCOUNT_ACTION_TYPE.ABOUT_ACCOUNT_UPLOAD_PENDING,
    });

    try {
      await httpRequest({
        method: ABOUT_ACCOUNT_API.ABOUT_ACCOUNT_UPLOAD.TYPE,
        url: ABOUT_ACCOUNT_API.ABOUT_ACCOUNT_UPLOAD.ENDPOINT,
      });

      dispatch({
        type: ABOUT_ACCOUNT_ACTION_TYPE.ABOUT_ACCOUNT_UPLOAD_SUCCESS,
      });
    } catch (err) {
      if (err.response) {
        dispatch({
          type: ABOUT_ACCOUNT_ACTION_TYPE.ABOUT_ACCOUNT_UPLOAD_ERROR,
          errorMessage: err.response.data.message,
        });
      }
    }
  };
}
