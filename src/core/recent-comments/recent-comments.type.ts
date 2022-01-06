import { CommentsProps } from 'src/lib/common/block-comments';

export enum RECENT_COMMENTS_ACTION_TYPE {
  RESET = 'RESET',
  PENDING = 'PENDING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR',
}
export type RecentCommentsComponentProps = {
  state: RecentCommentsStateType;
  onPagination: () => void;
};
export type RecentCommentsStateType = {
  pending: boolean;
  error?: string;
  comments: CommentsProps[];
  page: number;
  total: number;
};
export type RecentCommentsActionType = {
  type: RECENT_COMMENTS_ACTION_TYPE;
  error?: string;
  comments?: CommentsProps[];
  total?: number;
};
