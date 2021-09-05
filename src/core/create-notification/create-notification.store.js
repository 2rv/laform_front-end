import {
  initRequestState,
  setRequestError,
  setRequestPending,
  setRequestSuccess,
} from '../../main/store/store.service';
import { CREATE_NOTIFICATION_ACTION_TYPE } from './create-notification.type';

const initialState = {
  createNotification: initRequestState(),
};

export function createNotificationStore(state = initialState, action) {
  switch (action.type) {
    case CREATE_NOTIFICATION_ACTION_TYPE.CREATE_NOTIFICATION_UPLOAD_PENDING:
      return {
        ...state,
        createNotification: setRequestPending(state.createNotification),
      };
    case CREATE_NOTIFICATION_ACTION_TYPE.CREATE_NOTIFICATION_UPLOAD_SUCCESS:
      return {
        ...state,
        createNotification: setRequestSuccess(state.createNotification),
      };
    case CREATE_NOTIFICATION_ACTION_TYPE.CREATE_NOTIFICATION_UPLOAD_ERROR:
      return {
        ...state,
        createNotification: setRequestError(
          state.createNotification,
          action.errorMessage,
        ),
      };
    default:
      return state;
  }
}
