import { Dispatch } from 'react';

export type LikeDispatch = Dispatch<LikeActionType>;

export type LikeStateType = {
  like: boolean;
  pending: boolean;
};
export type LikeActionType = {
  type: 'pending' | 'success';
};

export type LikeContainerProps = {
  id: string;
  type: 0 | 1 | 2 | 3 | 4;
  like: boolean | undefined;
  onRemoveLike?: (id: string) => void;
};
export type LikeComponentProps = {
  like: boolean;
  pending: boolean;
  switchLike: () => void;
};
