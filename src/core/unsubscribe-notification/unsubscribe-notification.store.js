import {
  initRequestState,
  setRequestError,
  setRequestPending,
  setRequestSuccess,
} from '../../main/store/store.service';
import { UNSUBSCRIBE_NOTIFICATION_ACTION_TYPE } from './unsubscribe-notification.type';

const initialState = {
  unsubscribeNotification: initRequestState(),
};

export function unsubscribeNotificationStore(state = initialState, action) {
  switch (action.type) {
    case UNSUBSCRIBE_NOTIFICATION_ACTION_TYPE.UNSUBSCRIBE_NOTIFICATION_UPLOAD_PENDING:
      return {
        ...state,
        unsubscribeNotification: setRequestPending(state.unsubscribeNotification),
      };
    case UNSUBSCRIBE_NOTIFICATION_ACTION_TYPE.UNSUBSCRIBE_NOTIFICATION_UPLOAD_SUCCESS:
      return {
        ...state,
        unsubscribeNotification: setRequestSuccess(state.unsubscribeNotification, action.data),
      };
    case UNSUBSCRIBE_NOTIFICATION_ACTION_TYPE.UNSUBSCRIBE_NOTIFICATION_UPLOAD_ERROR:
      return {
        ...state,
        unsubscribeNotification: setRequestError(state.unsubscribeNotification, action.errorMessage),
      };
    default:
      return state;
  }
}
