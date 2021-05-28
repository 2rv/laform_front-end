import {
  initRequestState,
  setRequestError,
  setRequestPending,
  setRequestSuccess,
} from '../../main/store/store.service';

import { SUBSCRIBE_ACTION_TYPE } from './footer.type';

const initialState = {
  subscribeForm: initRequestState(),
};

export function footerStore(state = initialState, action) {
  switch (action.type) {
    case SUBSCRIBE_ACTION_TYPE.SUBSCRIBE_FORM_UPLOAD_PENDING:
      return {
        ...state,
        subscribeForm: setRequestPending(state.subscribeForm),
      };

    case SUBSCRIBE_ACTION_TYPE.SUBSCRIBE_FORM_UPLOAD_SUCCESS:
      return {
        ...state,
        subscribeForm: setRequestSuccess(state.subscribeForm),
      };

    case SUBSCRIBE_ACTION_TYPE.SUBSCRIBE_FORM_UPLOAD_ERROR:
      return {
        ...state,
        subscribeForm: setRequestError(
          state.subscribeForm,
          action.errorMessage,
        ),
      };

    default:
      return state;
  }
}
