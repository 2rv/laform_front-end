import { httpRequest } from '../../main/http';
import { UNSUBSCRIBE_NOTIFICATION_API } from './unsubscribe-notification.constant';
import { UNSUBSCRIBE_NOTIFICATION_ACTION_TYPE } from './unsubscribe-notification.type';

export function unsubscribeNotification(code) {
  return async (dispatch) => {
    dispatch({
      type: UNSUBSCRIBE_NOTIFICATION_ACTION_TYPE.UNSUBSCRIBE_NOTIFICATION_UPLOAD_PENDING,
    });

    try {
      await httpRequest({
        method: UNSUBSCRIBE_NOTIFICATION_API.UNSUBSCRIBE_NOTIFICATION.TYPE,
        url: UNSUBSCRIBE_NOTIFICATION_API.UNSUBSCRIBE_NOTIFICATION.ENDPOINT(code),
      });

      dispatch({
        type: UNSUBSCRIBE_NOTIFICATION_ACTION_TYPE.UNSUBSCRIBE_NOTIFICATION_UPLOAD_SUCCESS,
      });
    } catch (err) {
      if (err.response) {
        dispatch({
          type: UNSUBSCRIBE_NOTIFICATION_ACTION_TYPE.UNSUBSCRIBE_NOTIFICATION_UPLOAD_ERROR,
          errorMessage: err.response.data.message,
        });
      }
    }
  };
}
