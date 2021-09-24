import {
  initRequestState,
  setRequestError,
  setRequestPending,
  setRequestSuccess,
} from '../../main/store/store.service';

import { LIKE_ACTION_TYPE } from './like.type';

const initialState = {
  like: initRequestState(),
};

export function likeStore(state = initialState, action) {
  switch (action.type) {
    case LIKE_ACTION_TYPE.LIKE_UPLOAD_PENDING:
      return {
        ...state,
        like: setRequestPending(state.like),
      };

    case LIKE_ACTION_TYPE.LIKE_UPLOAD_SUCCESS:
      return {
        ...state,
        like: setRequestSuccess(state.like, action.data),
      };

    case LIKE_ACTION_TYPE.LIKE_UPLOAD_ERROR:
      return {
        ...state,
        like: setRequestError(state.like, action.errorMessage),
      };
    default:
      return state;
  }
}
