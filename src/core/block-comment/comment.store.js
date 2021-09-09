import {
  initRequestState,
  setRequestError,
  setRequestPending,
  setRequestSuccess,
} from '../../main/store/store.service';
import { COMMENT_ACTION_TYPE } from './comment.type';

const initialState = {
  commentState: initRequestState([]),
  createState: initRequestState(),
};

export function commentStore(state = initialState, action) {
  switch (action.type) {
    case COMMENT_ACTION_TYPE.COMMENT_UPLOAD_PENDING:
      return {
        ...state,
        commentState: setRequestPending(state.commentState),
      };
    case COMMENT_ACTION_TYPE.COMMENT_UPLOAD_SUCCESS:
      return {
        ...state,
        commentState: setRequestSuccess(state.commentState, action.data),
      };
    case COMMENT_ACTION_TYPE.COMMENT_UPLOAD_ERROR:
      return {
        ...state,
        commentState: setRequestError(state.commentState, action.errorMessage),
      };

    case COMMENT_ACTION_TYPE.COMMENT_CREATE_PENDING:
      return {
        ...state,
        createState: setRequestPending(state.createState),
      };
    case COMMENT_ACTION_TYPE.COMMENT_CREATE_SUCCESS:
      return {
        ...state,
        commentState: {
          ...state.commentState,
          data: [...state.commentState?.data, action.data],
        },
        createState: setRequestSuccess(state.createState, action.data),
      };
    case COMMENT_ACTION_TYPE.COMMENT_CREATE_ERROR:
      return {
        ...state,
        createState: setRequestError(state.createState, action.errorMessage),
      };
    default:
      return state;
  }
}
