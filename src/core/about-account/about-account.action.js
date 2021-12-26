import { httpRequest } from '../../main/http';
import { ABOUT_ACCOUNT_API } from './about-account.constant';
import { ABOUT_ACCOUNT_ACTION_TYPE } from './about-account.type';
import { convertUserInfo } from './about-account.convert';

export function userLoadData(id) {
  return async (dispatch) => {
    dispatch({
      type: ABOUT_ACCOUNT_ACTION_TYPE.USER_LOAD_DATA_PENDING,
    });

    try {
      const response = await httpRequest({
        method: ABOUT_ACCOUNT_API.USER_LOAD_DATA.TYPE,
        url: ABOUT_ACCOUNT_API.USER_LOAD_DATA.ENDPOINT(id),
      });

      dispatch({
        type: ABOUT_ACCOUNT_ACTION_TYPE.USER_LOAD_DATA_SUCCESS,
        data: convertUserInfo(response.data),
      });
    } catch (err) {
      console.log(err);
      if (err.response) {
        dispatch({
          type: ABOUT_ACCOUNT_ACTION_TYPE.USER_LOAD_DATA_ERROR,
          errorMessage: err.response.data.message,
        });
      }
    }
  };
}
