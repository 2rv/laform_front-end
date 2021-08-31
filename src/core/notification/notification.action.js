import { httpRequest } from '../../main/http';
import { NOTIFICATION_API } from './notification.constant';
import { NOTIFICATION_ACTION_TYPE } from './notification.type';
import { performNotificationLoadEmailData } from './notification.convert';

export function notificationFormUploadData(data, setSubmitting) {
  return async (dispatch) => {
    dispatch({
      type: NOTIFICATION_ACTION_TYPE.NOTIFICATION_FORM_UPLOAD_PENDING,
    });

    try {
      await httpRequest({
        method: NOTIFICATION_API.NOTIFICATION_FORM_UPLOAD.METHOD,
        url: NOTIFICATION_API.NOTIFICATION_FORM_UPLOAD.ENDPOINT,
        data,
      });

      dispatch({
        type: NOTIFICATION_ACTION_TYPE.NOTIFICATION_FORM_UPLOAD_SUCCESS,
      });

      setSubmitting(false);
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

export function notificationLoadEmail() {
  return async (dispatch) => {
    dispatch({
      type: NOTIFICATION_ACTION_TYPE.NOTIFICATION_LOAD_EMAIL_PENDING,
    });

    try {
      const { data } = await httpRequest({
        method: NOTIFICATION_API.NOTIFICATION_LOAD_EMAIL.METHOD,
        url: NOTIFICATION_API.NOTIFICATION_LOAD_EMAIL.ENDPOINT,
      });

      const email = performNotificationLoadEmailData(data);

      dispatch({
        type: NOTIFICATION_ACTION_TYPE.NOTIFICATION_LOAD_EMAIL_SUCCESS,
        data: email,
      });
    } catch (err) {
      if (err.response) {
        dispatch({
          type: NOTIFICATION_ACTION_TYPE.NOTIFICATION_LOAD_EMAIL_ERROR,
          errorMessage: err.response.data.message,
        });
      }
    }
  };
}
