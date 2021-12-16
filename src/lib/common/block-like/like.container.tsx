import { useCallback, useReducer } from 'react';
import { useDispatch } from 'react-redux';
import { likeAction, unlikeAction } from './like.action';
import { updateLocateLikesStore } from 'src/core/likes';
import { LikeComponent } from './like.component';
import { LikeActionType, LikeContainerProps, LikeStateType } from './like.type';

function init(like: boolean) {
  return {
    pending: false,
    like: like,
  };
}

function likeReducer(state: LikeStateType, action: LikeActionType) {
  switch (action.type) {
    case 'pending':
      return {
        ...state,
        pending: true,
      };
    case 'success':
      return {
        ...state,
        pending: false,
        like: !state.like,
      };
    default:
      return state;
  }
}

export function LikeContainer(props: LikeContainerProps) {
  const { id, type, like = false } = props;
  const [state, setState] = useReducer(likeReducer, like, init);
  const dispatch = useDispatch();

  const updateLikesPage = useCallback(
    (id: string) => {
      dispatch(updateLocateLikesStore(id));
    },
    [dispatch],
  );

  function switchLike() {
    if (state.like) {
      unlikeAction(id, type, updateLikesPage)(setState);
    } else likeAction(id, type)(setState);
  }

  return (
    <LikeComponent
      switchLike={switchLike}
      like={state.like}
      pending={state.pending}
    />
  );
}
