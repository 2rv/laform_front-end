import { httpRequest } from '../../main/http';
import { redirect } from '../../main/navigation';
import { authSetData } from '../../lib/common/auth';

import { LOGIN_API } from './login.constant';
import { LOGIN_ACTION_TYPE } from './login.type';
import { HOME_ROUTE_PATH } from '../home';

export function loginFormUploadData(data) {
  return async (dispatch) => {
    dispatch({
      type: LOGIN_ACTION_TYPE.LOGIN_FORM_UPLOAD_PENDING,
    });

    try {
      const res = await httpRequest({
        method: LOGIN_API.LOGIN_FORM_UPLOAD.METHOD,
        url: LOGIN_API.LOGIN_FORM_UPLOAD.ENDPOINT,
        data,
      });

      dispatch(authSetData(res.data.accessToken));

      dispatch({
        type: LOGIN_ACTION_TYPE.LOGIN_FORM_UPLOAD_SUCCESS,
      });

      redirect(HOME_ROUTE_PATH);
    } catch (err) {
      if (err.response) {
        dispatch({
          type: LOGIN_ACTION_TYPE.LOGIN_FORM_UPLOAD_ERROR,
          errorMessage: err.response.data.message,
        });
      }
    }
  };
}
