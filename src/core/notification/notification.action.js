import { httpRequest } from '../../main/http';
import { NOTIFICATION_API } from './notification.constant';
import { NOTIFICATION_ACTION_TYPE } from './notification.type';

export function updateNotificationEmailStatus(userId, data) {
  return async (dispatch) => {
    dispatch({
      type: NOTIFICATION_ACTION_TYPE.NOTIFICATION_FORM_UPLOAD_PENDING,
    });

    try {
      await httpRequest({
        method: NOTIFICATION_API.NOTIFICATION_FORM_UPLOAD.METHOD,
        url: NOTIFICATION_API.NOTIFICATION_FORM_UPLOAD.ENDPOINT(userId),
        data,
      });

      dispatch({
        type: NOTIFICATION_ACTION_TYPE.NOTIFICATION_FORM_UPLOAD_SUCCESS,
      });
      dispatch(getUserNotificationEmailStatus());
    } catch (err) {
      if (err.response) {
        dispatch({
          type: NOTIFICATION_ACTION_TYPE.NOTIFICATION_FORM_UPLOAD_ERROR,
          errorMessage: err.response.data.message,
        });
      }
    }
  };
}

export function getUserNotificationEmailStatus() {
  return async (dispatch) => {
    dispatch({
      type: NOTIFICATION_ACTION_TYPE.GET_NOTIFICATION_STATUS_PENDING,
    });

    try {
      const response = await httpRequest({
        method: NOTIFICATION_API.LOAD_NOTIFICATION.METHOD,
        url: NOTIFICATION_API.LOAD_NOTIFICATION.ENDPOINT,
      });

      dispatch({
        type: NOTIFICATION_ACTION_TYPE.GET_NOTIFICATION_STATUS_SUCCESS,
        payload: { notificationEmail: response.data },
      });
    } catch (err) {
      if (err.response) {
        dispatch({
          type: NOTIFICATION_ACTION_TYPE.GET_NOTIFICATION_STATUS_ERROR,
          errorMessage: err.response.data.message,
        });
      }
    }
  };
}
