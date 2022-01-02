import { ChangeEvent, KeyboardEventHandler, MutableRefObject } from 'react';

export enum COMMENT_ACTION_TYPE {
  GET_PENDING = 'GET_PENDING',
  GET_SUCCESS = 'GET_SUCCESS',
  GET_ERROR = 'GET_ERROR',

  CREATE_PENDING = 'CREATE_PENDING',
  CREATE_SUCCESS = 'CREATE_SUCCESS',
  CREATE_ERROR = 'CREATE_ERROR',

  UPDATE_PENDING = 'UPDATE_PENDING',
  UPDATE_SUCCESS = 'UPDATE_SUCCESS',
  UPDATE_ERROR = 'UPDATE_ERROR',

  DELETE_PENDING = 'DELETE_PENDING',
  DELETE_SUCCESS = 'DELETE_SUCCESS',
  DELETE_ERROR = 'DELETE_ERROR',

  SUB_CREATE_PENDING = 'SUB_CREATE_PENDING',
  SUB_CREATE_SUCCESS = 'SUB_CREATE_SUCCESS',
  SUB_CREATE_ERROR = 'SUB_CREATE_ERROR',

  SUB_UPDATE_PENDING = 'SUB_UPDATE_PENDING',
  SUB_UPDATE_SUCCESS = 'SUB_UPDATE_SUCCESS',
  SUB_UPDATE_ERROR = 'SUB_UPDATE_ERROR',

  SUB_DELETE_PENDING = 'SUB_DELETE_PENDING',
  SUB_DELETE_SUCCESS = 'SUB_DELETE_SUCCESS',
  SUB_DELETE_ERROR = 'SUB_DELETE_ERROR',
}
export type CommentContainerProps = {
  id: string;
  type: 0 | 1 | 2 | 3 | 4;
};
export type CommentStateType = {
  getPending: boolean;
  comments: CommentType[];
  getError?: string;

  createPending: boolean;
  createError?: string;

  updatePending: boolean;
  updateError?: string;

  deletePending: boolean;
  deleteError?: string;
};
export type CommentActionType = {
  type: COMMENT_ACTION_TYPE;
  comments?: CommentType[];
  comment?: CommentType;
  subComment?: SubCommentType;
  error?: string;
  id?: string;
  subId?: string;
  text?: string;
};

export type CommentValues = {
  id: string;
  type: 0 | 1 | 2 | 3 | 4;
  value: string;
};
export type CommentComponentProps = {
  onSubmit: () => void;
  onRemove: (iid: string, subId?: string) => void;
  onEdit: (props?: CommentEditType) => void;
  onSubmitEnter: KeyboardEventHandler<HTMLTextAreaElement>;
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  value: string;
  isAdmin: boolean;
  isAuth: boolean;
  isEdit: CommentEditType;
  state: CommentStateType;
  textareaRef: MutableRefObject<HTMLTextAreaElement | null>;

  subUser: SubCommentValues;
  onSubComment: (data?: SubCommentValues) => void;
};
export type CommentItemProps = {
  data: CommentType;
  onRemove: (iid: string, subId?: string) => void;
  onEdit: (props?: CommentEditType) => void;
  isAdmin: boolean;
  subUser: SubCommentValues;
  onSubComment: (data?: SubCommentValues) => void;
};
export type SubCommentItemProps = {
  onRemove: (iid: string, subId?: string) => void;
  onEdit: (props?: CommentEditType) => void;
  data: SubCommentType;
  isAdmin: boolean;
  parentId: string;
};

export type CommentType = {
  id: string;
  text: string;
  createDate: Date;
  userId: CommentUserType;
  subComment: SubCommentType[];
};
export type CommentUserType = {
  id: number;
  login: string;
};
export type SubCommentType = {
  id: string;
  text: string;
  createDate: Date;
  userId: CommentUserType;
};

export type CommentEditType = {
  value?: string;
  id?: string;
  subId?: string;
};

export type SubCommentValues =
  | {
      id: number;
      login: string;
      commentId: string;
    }
  | undefined;
