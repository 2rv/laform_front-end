import {
  initRequestState,
  setRequestError,
  setRequestPending,
  setRequestSuccess,
} from '../../../main/store/store.service';

import {
  SUBSCRIBE_ACTION_TYPE,
  SubscribeStoreState,
  SubscribeStoreAction,
} from './subscribe.type';

const initialState: SubscribeStoreState = {
  subscribeForm: initRequestState(),
};

export function subscribeStore(
  state = initialState,
  action: SubscribeStoreAction,
): SubscribeStoreState {
  switch (action.type) {
    case SUBSCRIBE_ACTION_TYPE.UPLOAD_PENDING:
      return {
        ...state,
        subscribeForm: setRequestPending(state.subscribeForm),
      };

    case SUBSCRIBE_ACTION_TYPE.UPLOAD_SUCCESS:
      return {
        ...state,
        subscribeForm: setRequestSuccess(state.subscribeForm),
      };

    case SUBSCRIBE_ACTION_TYPE.UPLOAD_ERROR:
      debugger;
      return {
        ...state,
        subscribeForm: setRequestError(
          state.subscribeForm,
          (action as any).errorMessage,
        ),
      };

    default:
      return state;
  }
}
