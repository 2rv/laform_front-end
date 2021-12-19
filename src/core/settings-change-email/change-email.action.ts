import { Dispatch } from 'react';
import { authSetData } from 'src/lib/common/auth';
import { httpRequest } from 'src/main/http';
import {
  CHANGE_EMAIL_ACTION_TYPE,
  changeEmailActionType,
  changeEmailValues,
} from './change-email.type';

export function getEmailAction() {
  return async (dispatch: Dispatch<changeEmailActionType>) => {
    dispatch({
      type: CHANGE_EMAIL_ACTION_TYPE.PENDING,
    });
    try {
      const response = await httpRequest({
        method: 'GET',
        url: 'user/email',
      });
      dispatch({
        type: CHANGE_EMAIL_ACTION_TYPE.GET_SUCCESS,
        data: response.data.email,
      });
    } catch (err: any) {
      if (err.response) {
        dispatch({
          type: CHANGE_EMAIL_ACTION_TYPE.GET_ERROR,
          error: err.response.data.message,
        });
      }
    }
  };
}

export function updateEmailAction(values: changeEmailValues) {
  return async (dispatch: Dispatch<changeEmailActionType>) => {
    dispatch({
      type: CHANGE_EMAIL_ACTION_TYPE.PENDING,
    });

    try {
      await httpRequest({
        method: 'PATCH',
        url: 'user/settings/email',
        data: values,
      });
      dispatch({
        type: CHANGE_EMAIL_ACTION_TYPE.UPDATE_START,
      });
    } catch (err: any) {
      if (err.response) {
        dispatch({
          type: CHANGE_EMAIL_ACTION_TYPE.UPDATE_ERROR,
          error: err.response.data.message,
        });
      }
    }
  };
}

export function updateEmailConfirmAction(values: changeEmailValues) {
  return async (
    setData: Dispatch<changeEmailActionType>,
    dispatch: Function,
  ) => {
    setData({
      type: CHANGE_EMAIL_ACTION_TYPE.PENDING,
    });

    try {
      const res = await httpRequest({
        method: 'PUT',
        url: '/auth/update-email',
        data: values,
      });

      setData({
        type: CHANGE_EMAIL_ACTION_TYPE.UPDATE_SUCCESS,
      });
      dispatch(authSetData(res.data.accessToken));
    } catch (err: any) {
      if (err.response) {
        setData({
          type: CHANGE_EMAIL_ACTION_TYPE.UPDATE_ERROR,
          error: err.response.data.message,
        });
      }
    }
  };
}
