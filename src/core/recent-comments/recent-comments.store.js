import {
  initRequestState,
  setRequestError,
  setRequestPending,
  setRequestSuccess,
} from '../../main/store/store.service';
import { RECENT_COMMENTS_ACTION_TYPE } from './recent-comments.type';

const initialState = {
  comments: initRequestState([]),
  page: 1,
  total: 0,
};

export function recentCommentsStore(state = initialState, action) {
  switch (action.type) {
    case RECENT_COMMENTS_ACTION_TYPE.RESET_COMMENTS_STATE:
      return initialState;
    case RECENT_COMMENTS_ACTION_TYPE.RECENT_COMMENTS_UPLOAD_PENDING:
      return {
        ...state,
        comments: setRequestPending(state.comments),
      };
    case RECENT_COMMENTS_ACTION_TYPE.RECENT_COMMENTS_UPLOAD_SUCCESS:
      return {
        ...state,
        comments: setRequestSuccess(
          state.comments,
          state.comments.data.concat(action.data),
        ),
        page: state.page + 1,
        total: action.total,
      };
    case RECENT_COMMENTS_ACTION_TYPE.RECENT_COMMENTS_UPLOAD_ERROR:
      return {
        ...state,
        comments: setRequestError(state.comments, action.errorMessage),
      };
    default:
      return state;
  }
}
