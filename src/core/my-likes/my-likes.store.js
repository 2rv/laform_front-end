import {
  initRequestState,
  setRequestError,
  setRequestPending,
  setRequestSuccess,
} from '../../main/store/store.service';

import { MY_LIKES_ACTION_TYPE } from './my-likes.type';

const initialState = {
  myLikes: initRequestState(),
};

export function myLikesStore(state = initialState, action) {
  switch (action.type) {
    case MY_LIKES_ACTION_TYPE.MY_LIKES_UPLOAD_PENDING:
      return {
        ...state,
        myLikes: setRequestPending(state.myLikes),
      };
    case MY_LIKES_ACTION_TYPE.MY_LIKES_UPLOAD_SUCCESS:
      return {
        ...state,
        myLikes: setRequestSuccess(state.myLikes),
      };
    case MY_LIKES_ACTION_TYPE.MY_LIKES_UPLOAD_ERROR:
      return {
        ...state,
        myLikes: setRequestError(state.myLikes, action.errorMessage),
      };
    default:
      return state;
  }
}
