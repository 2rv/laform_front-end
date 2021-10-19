import {
  initRequestState,
  setRequestError,
  setRequestPending,
  setRequestSuccess,
} from '../../main/store/store.service';

import { NOTIFICATION_ACTION_TYPE } from './notification.type';

const initialState = {
  notificationChange: initRequestState(),
  notificationStatus: initRequestState(),
};

export function notificationStore(state = initialState, action) {
  switch (action.type) {
    case NOTIFICATION_ACTION_TYPE.NOTIFICATION_FORM_UPLOAD_PENDING:
      return {
        ...state,
        notificationChange: setRequestPending(state.notificationChange),
      };
    case NOTIFICATION_ACTION_TYPE.NOTIFICATION_FORM_UPLOAD_SUCCESS:
      return {
        ...state,
        notificationChange: setRequestSuccess(state.notificationChange),
      };
    case NOTIFICATION_ACTION_TYPE.NOTIFICATION_FORM_UPLOAD_ERROR:
      return {
        ...state,
        notificationChange: setRequestError(state.notificationChange, action.errorMessage),
      };

    case NOTIFICATION_ACTION_TYPE.GET_NOTIFICATION_STATUS_PENDING:
      return {
        ...state,
        notificationStatus: setRequestPending(state.notificationStatus),
      };
    case NOTIFICATION_ACTION_TYPE.GET_NOTIFICATION_STATUS_SUCCESS:
      return {
        ...state,
        notificationStatus: setRequestSuccess(state.notificationStatus, action.payload),
      };
    case NOTIFICATION_ACTION_TYPE.GET_NOTIFICATION_STATUS_ERROR:
      return {
        ...state,
        notificationStatus: setRequestError(state.notificationStatus, action.errorMessage),
      };
    default:
      return state;
  }
}
