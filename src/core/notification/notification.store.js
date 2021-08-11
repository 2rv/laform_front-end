import {
  initRequestState,
  setRequestError,
  setRequestPending,
  setRequestSuccess,
} from '../../main/store/store.service';

import { NOTIFICATION_ACTION_TYPE } from './notification.type';

const initialState = {
  notificationForm: initRequestState(),
  notificationLoadEmail: initRequestState(),
};

export function notificationStore(state = initialState, action) {
  switch (action.type) {
    case NOTIFICATION_ACTION_TYPE.NOTIFICATION_FORM_UPLOAD_PENDING:
      return {
        ...state,
        notificationForm: setRequestPending(state.notificationForm),
      };

    case NOTIFICATION_ACTION_TYPE.NOTIFICATION_FORM_UPLOAD_SUCCESS:
      return {
        ...state,
        notificationForm: setRequestSuccess(state.notificationForm),
      };

    case NOTIFICATION_ACTION_TYPE.NOTIFICATION_FORM_UPLOAD_ERROR:
      return {
        ...state,
        notificationForm: setRequestError(
          state.notificationForm,
          action.errorMessage,
        ),
      };

    case NOTIFICATION_ACTION_TYPE.NOTIFICATION_LOAD_EMAIL_PENDING:
      return {
        ...state,
        notificationLoadEmail: setRequestPending(state.notificationLoadEmail),
      };

    case NOTIFICATION_ACTION_TYPE.NOTIFICATION_LOAD_EMAIL_SUCCESS:
      return {
        ...state,
        notificationLoadEmail: setRequestSuccess(
          state.notificationLoadEmail,
          action.data,
        ),
      };

    case NOTIFICATION_ACTION_TYPE.NOTIFICATION_LOAD_EMAIL_ERROR:
      return {
        ...state,
        notificationLoadEmail: setRequestError(
          state.notificationLoadEmail,
          action.errorMessage,
        ),
      };

    default:
      return state;
  }
}
