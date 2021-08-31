import { httpRequest } from '../../main/http';
import { ABOUT_ACCOUNT_API } from './about-account.constant';
import { ABOUT_ACCOUNT_ACTION_TYPE } from './about-account.type';
import { convertLikesData } from './about-account.convert';

export function aboutAccountLoadData() {
  return async (dispatch) => {
    dispatch({
      type: ABOUT_ACCOUNT_ACTION_TYPE.ABOUT_ACCOUNT_UPLOAD_PENDING,
    });

    try {
      await httpRequest({
        method: ABOUT_ACCOUNT_API.ABOUT_ACCOUNT_LOAD.TYPE,
        url: ABOUT_ACCOUNT_API.ABOUT_ACCOUNT_LOAD.ENDPOINT,
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

export function likesLoadData() {
  return async (dispatch) => {
    dispatch({
      type: ABOUT_ACCOUNT_ACTION_TYPE.LIKES_PENDING,
    });

    try {
      const response = await httpRequest({
        method: ABOUT_ACCOUNT_API.LIKES_LOAD.TYPE,
        url: ABOUT_ACCOUNT_API.LIKES_LOAD.ENDPOINT,
      });

      const likes = response.data.map(convertLikesData);

      dispatch({
        type: ABOUT_ACCOUNT_ACTION_TYPE.LIKES_SUCCESS,
        likes,
      });
    } catch (err) {
      if (err.response) {
        dispatch({
          type: ABOUT_ACCOUNT_ACTION_TYPE.LIKES_ERROR,
          errorMessage: err.response.data.message,
        });
      }
    }
  };
}
