import { httpRequest } from '../../main/http';
import { CREATE_NOTIFICATION_ACTION_TYPE } from './create-notification.type';
import {
  CREATE_NOTIFICATION_API,
  CREATE_NOTIFICATION_REDIRECT_ON_UPLOAD_PATH,
} from './create-notification.constant';
import { redirect } from '../../main/navigation';

export function createNotificationUpload(data) {
  return async (dispatch) => {
    dispatch({
      type: CREATE_NOTIFICATION_ACTION_TYPE.CREATE_NOTIFICATION_UPLOAD_PENDING,
    });
    try {
      const response = await httpRequest({
        method: CREATE_NOTIFICATION_API.CREATE_NOTIFICATION_UPLOAD.TYPE,
        url: CREATE_NOTIFICATION_API.CREATE_NOTIFICATION_UPLOAD.ENDPOINT,
        data: data,
      });
      dispatch({
        type: CREATE_NOTIFICATION_ACTION_TYPE.CREATE_NOTIFICATION_UPLOAD_SUCCESS,
      });
    } catch (err) {
      if (err.response) {
        dispatch({
          type: CREATE_NOTIFICATION_ACTION_TYPE.CREATE_NOTIFICATION_UPLOAD_ERROR,
          errorMessage: err.response.data.message,
        });
      }
    }
  };
}
