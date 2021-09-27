import {
  initRequestState,
  setRequestError,
  setRequestPending,
  setRequestSuccess,
} from '../../main/store/store.service';
import { LIKES_ACTION_TYPE } from './likes.type';

const initialState = {
  likes: initRequestState(),
};

export function allLikesStore(state = initialState, action) {
  switch (action.type) {
    case LIKES_ACTION_TYPE.LIKES_UPLOAD_PENDING:
      return {
        ...state,
        likes: setRequestPending(state.likes),
      };
    case LIKES_ACTION_TYPE.LIKES_UPLOAD_SUCCESS:
      return {
        ...state,
        likes: setRequestSuccess(state.likes, action.data),
      };
    case LIKES_ACTION_TYPE.LIKES_UPLOAD_ERROR:
      return {
        ...state,
        likes: setRequestError(state.likes, action.errorMessage),
      };
    default:
      return state;
  }
}
