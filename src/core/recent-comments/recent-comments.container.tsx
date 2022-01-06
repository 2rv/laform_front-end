import { useEffect, useReducer } from 'react';
import { RecentCommentsComponent } from './recent-comments.component';
import { getRecentCommentsAction } from './recent-comments.action';
import {
  RECENT_COMMENTS_ACTION_TYPE,
  RecentCommentsStateType,
  RecentCommentsActionType,
} from './recent-comments.type';

const initialState: RecentCommentsStateType = {
  pending: false,
  error: undefined,
  comments: [],
  page: 1,
  total: 0,
};
export function RecentCommentsStore(
  state: RecentCommentsStateType,
  action: RecentCommentsActionType,
): RecentCommentsStateType {
  switch (action.type) {
    case RECENT_COMMENTS_ACTION_TYPE.RESET:
      return initialState;
    case RECENT_COMMENTS_ACTION_TYPE.PENDING:
      return {
        ...state,
        pending: true,
        error: undefined,
      };
    case RECENT_COMMENTS_ACTION_TYPE.SUCCESS:
      return {
        ...state,
        pending: false,
        comments: state.comments.concat(action.comments || []),
        page: state.page + 1,
        total: action.total || 0,
      };
    case RECENT_COMMENTS_ACTION_TYPE.ERROR:
      return {
        ...state,
        pending: false,
        error: action.error,
      };
    default:
      return state;
  }
}

export function RecentCommentsContainer() {
  const [state, setState] = useReducer(RecentCommentsStore, initialState);

  useEffect(() => {
    setState({
      type: RECENT_COMMENTS_ACTION_TYPE.RESET,
    });
    getRecentCommentsAction(state.page)(setState);
  }, []);

  function onPagination() {
    getRecentCommentsAction(state.page)(setState);
  }

  return <RecentCommentsComponent onPagination={onPagination} state={state} />;
}
