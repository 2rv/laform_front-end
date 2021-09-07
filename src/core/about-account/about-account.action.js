import { httpRequest } from '../../main/http';
import { ABOUT_ACCOUNT_API } from './about-account.constant';
import { ABOUT_ACCOUNT_ACTION_TYPE } from './about-account.type';
import { convertPurchasesData, convertLikesData, convertCommentsData } from './about-account.convert';

export function userLoadData() {
  return async (dispatch) => {
    dispatch({
      type: ABOUT_ACCOUNT_ACTION_TYPE.USER_LOAD_DATA_PENDING,
    });

    try {
      const response = await httpRequest({
        method: ABOUT_ACCOUNT_API.USER_LOAD_DATA.TYPE,
        url: ABOUT_ACCOUNT_API.USER_LOAD_DATA.ENDPOINT,
      });

      dispatch({
        type: ABOUT_ACCOUNT_ACTION_TYPE.USER_LOAD_DATA_SUCCESS,
        user: response.data,
      });
    } catch (err) {
      if (err.response) {
        dispatch({
          type: ABOUT_ACCOUNT_ACTION_TYPE.USER_LOAD_DATA_ERROR,
          errorMessage: err.response.data.message,
        });
      }
    }
  };
}

export function purchasesLoadData() {
  return async (dispatch) => {
    dispatch({
      type: ABOUT_ACCOUNT_ACTION_TYPE.PURCHASES_PENDING,
    });

    try {
      const response = await httpRequest({
        method: ABOUT_ACCOUNT_API.PURCHASES_LOAD.TYPE,
        url: ABOUT_ACCOUNT_API.PURCHASES_LOAD.ENDPOINT,
      });

      const purchases = response.data.flatMap(convertPurchasesData);

      dispatch({
        type: ABOUT_ACCOUNT_ACTION_TYPE.PURCHASES_SUCCESS,
        purchases,
      });
    } catch (err) {
      if (err.response) {
        dispatch({
          type: ABOUT_ACCOUNT_ACTION_TYPE.PURCHASES_ERROR,
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

      const likes = convertLikesData(response.data);

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

export function commentsLoadData() {
  return async (dispatch) => {
    dispatch({
      type: ABOUT_ACCOUNT_ACTION_TYPE.COMMENTS_PENDING,
    });

    try {
      const response = await httpRequest({
        method: ABOUT_ACCOUNT_API.COMMENTS_LOAD.TYPE,
        url: ABOUT_ACCOUNT_API.COMMENTS_LOAD.ENDPOINT,
      });

      const comments = convertCommentsData(response.data);

      dispatch({
        type: ABOUT_ACCOUNT_ACTION_TYPE.COMMENTS_SUCCESS,
        comments,
      });
    } catch (err) {
      if (err.response) {
        dispatch({
          type: ABOUT_ACCOUNT_ACTION_TYPE.COMMENTS_ERROR,
          errorMessage: err.response.data.message,
        });
      }
    }
  };
}
