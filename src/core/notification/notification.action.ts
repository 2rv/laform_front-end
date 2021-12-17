import { Dispatch } from 'react';
import { httpRequest } from 'src/main/http';
import {
  NotificationdActionType,
  NOTIFICATION_ACTION_TYPE,
} from './notification.type';

export function getSubscripteStatus() {
  return async (dispatch: Dispatch<NotificationdActionType>) => {
    dispatch({
      type: NOTIFICATION_ACTION_TYPE.PENDING,
    });
    try {
      const response = await httpRequest({
        method: 'GET',
        url: 'user/subscribe-status',
      });
      dispatch({
        type: NOTIFICATION_ACTION_TYPE.INIT,
        data: response.data,
      });
    } catch (err: any) {
      if (err.response) {
        dispatch({
          type: NOTIFICATION_ACTION_TYPE.ERROR,
          error: err.response.data.message,
        });
      }
    }
  };
}

export function changeSubscribeStatus(checked: boolean) {
  return async (dispatch: Dispatch<NotificationdActionType>) => {
    dispatch({
      type: NOTIFICATION_ACTION_TYPE.PENDING,
    });

    try {
      await httpRequest({
        method: 'PATCH',
        url: 'user/subscribe-update',
        data: { notificationEmail: !checked },
      });

      dispatch({
        type: NOTIFICATION_ACTION_TYPE.SUCCESS,
        data: !checked,
      });
    } catch (err: any) {
      if (err.response) {
        dispatch({
          type: NOTIFICATION_ACTION_TYPE.ERROR,
          error: err.response.data.message,
        });
      }
    }
  };
}
