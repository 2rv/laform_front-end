import {
  initRequestState,
  setRequestError,
  setRequestPending,
  setRequestSuccess,
} from '../../main/store/store.service';
import { RECENT_COMMENTS_ACTION_TYPE } from './recent-comments.type';

const initialCommentsData = {
  comments: [],
  currentPage: 1,
  totalRecords: 0,
};

const initialState = {
  comments: initRequestState(initialCommentsData),
};

export function recentCommentsStore(state = initialState, action) {
  switch (action.type) {
    case RECENT_COMMENTS_ACTION_TYPE.RESET_COMMENTS_STATE:
      return {
        ...state,
        comments: initRequestState(initialCommentsData),
      };
    case RECENT_COMMENTS_ACTION_TYPE.RECENT_COMMENTS_UPLOAD_PENDING:
      return {
        ...state,
        comments: setRequestPending(state.comments),
      };
    case RECENT_COMMENTS_ACTION_TYPE.RECENT_COMMENTS_UPLOAD_SUCCESS:
      const oldComments = state.comments.data.comments;
      const newComments = action.payload.comments;
      const totalRecords = action.payload.totalRecords;
      const prevCurrentPage = state.comments.data.currentPage;
      return {
        ...state,
        comments: setRequestSuccess(
          state.comments,
          {
            comments: [...oldComments, ...newComments],
            currentPage: prevCurrentPage + 1,
            totalRecords,
          },
        ),
      };
    case RECENT_COMMENTS_ACTION_TYPE.RECENT_COMMENTS_UPLOAD_ERROR:
      return {
        ...state,
        comments: setRequestError(
          state.comments,
          action.errorMessage,
        ),
      };
    default:
      return state;
  }
}
