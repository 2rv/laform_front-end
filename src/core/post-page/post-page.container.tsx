import { useEffect, useReducer } from 'react';
import { useSelector } from 'react-redux';
import { getQuery } from 'src/main/navigation';
import { AUTH_STORE_NAME } from 'src/lib/common/auth';
import { getPostAction } from './post-page.action';
import { PostPageComponent } from './post-page.component';
import {
  POST_PAGE_ACTION_TYPE,
  PostPageStateType,
  PostPageActionType,
} from './post-page.type';

const initialState = {
  pending: false,
  post: undefined,
  error: '',
};
function PostPageReducer(state: PostPageStateType, action: PostPageActionType) {
  switch (action.type) {
    case POST_PAGE_ACTION_TYPE.PENDING:
      return {
        ...state,
        pending: true,
      };
    case POST_PAGE_ACTION_TYPE.SUCCESS:
      return {
        ...state,
        pending: false,
        post: action.post,
      };
    case POST_PAGE_ACTION_TYPE.ERROR:
      return {
        ...state,
        pending: false,
        error: action.error,
      };
    default:
      return state;
  }
}

export function PostPageContainer() {
  const [state, setState] = useReducer(PostPageReducer, initialState);
  const id: any = getQuery('id');
  const { isAuth } = useSelector((state: any) => ({
    isAuth: state[AUTH_STORE_NAME].logged,
  }));
  useEffect(() => {
    if (id) {
      getPostAction(id, isAuth)(setState);
    }
  }, [id]);
  return <PostPageComponent state={state} />;
}
