import { EMAIL_CONFIRMED_ACTION_TYPE } from './email-confirmed.type';
import { EMAIL_CONFIRMED_API } from './email-confirmed.constant';
import { httpRequest } from '../../main/http';
import { authSetData } from '../../lib/common/auth';
import { redirect } from '../../main/navigation';
import { HOME_ROUTE_PATH } from './email-confirmed.constant';

export function emailConfirmCheckConfirmed() {
  return async (dispatch) => {
    dispatch({
      type: EMAIL_CONFIRMED_ACTION_TYPE.CHECK_EMAIL_CONFIRMED_PENDING,
    });

    try {
      const res = await httpRequest({
        method: EMAIL_CONFIRMED_API.METHOD,
        url: EMAIL_CONFIRMED_API.ENDPOINT,
      });
      dispatch(authSetData(res.data.accessToken));
      dispatch({
        type: EMAIL_CONFIRMED_ACTION_TYPE.CHECK_EMAIL_CONFIRMED_SUCCESS,
      });
      redirect(HOME_ROUTE_PATH);
    } catch (err) {
      if (err.response) {
        dispatch({
          type: EMAIL_CONFIRMED_ACTION_TYPE.CHECK_EMAIL_CONFIRMED_ERROR,
          errorMessage: err.response.data.message,
        });
      }
    }
  };
}
