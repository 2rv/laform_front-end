import { httpRequest } from 'src/main/http';
import { redirect } from 'src/main/navigation';
import { authSetData } from 'src/lib/common/auth';
import { SIGNUP_API } from './signup.constant';
import { SIGNUP_ACTION_TYPE } from './signup.type';
import { AUTH_CONFIRM_EMAIL_ROUTE_PATH } from '../auth-confirm-email';

export function signupFormUploadData(data) {
  return async (dispatch) => {
    dispatch({
      type: SIGNUP_ACTION_TYPE.SIGNUP_FORM_UPLOAD_PENDING,
    });

    try {
      const res = await httpRequest({
        method: SIGNUP_API.SIGNUP_FORM_UPLOAD.METHOD,
        url: SIGNUP_API.SIGNUP_FORM_UPLOAD.ENDPOINT,
        data,
      });
      dispatch(authSetData(res.data.accessToken));
      dispatch({
        type: SIGNUP_ACTION_TYPE.SIGNUP_FORM_UPLOAD_SUCCESS,
      });
      redirect(AUTH_CONFIRM_EMAIL_ROUTE_PATH);
    } catch (err) {
      if (err.response) {
        dispatch({
          type: SIGNUP_ACTION_TYPE.SIGNUP_FORM_UPLOAD_ERROR,
          errorMessage: err.response.data.message,
        });
      }
    }
  };
}
