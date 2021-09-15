import {
  initRequestState,
  setRequestError,
  setRequestPending,
  setRequestSuccess,
} from '../../main/store/store.service';

import { EMAIL_CONFIRMED_ACTION_TYPE } from './email-confirmed.type';

const initialState = {
  emailConfirmed: initRequestState(),
};

export function emailConfirmedStore(state = initialState, action) {
  switch (action.type) {
    case EMAIL_CONFIRMED_ACTION_TYPE.CHECK_EMAIL_CONFIRMED_PENDING:
      return {
        ...state,
        emailConfirmed: setRequestPending(state.emailConfirmed),
      };

    case EMAIL_CONFIRMED_ACTION_TYPE.CHECK_EMAIL_CONFIRMED_SUCCESS:
      return {
        ...state,
        emailConfirmed: setRequestSuccess(state.emailConfirmed),
      };

    case EMAIL_CONFIRMED_ACTION_TYPE.CHECK_EMAIL_CONFIRMED_ERROR:
      return {
        ...state,
        emailConfirmed: setRequestError(
          state.emailConfirmed,
          action.errorMessage,
        ),
      };

    default:
      return state;
  }
}
