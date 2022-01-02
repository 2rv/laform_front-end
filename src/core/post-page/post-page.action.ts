import { Dispatch } from 'react';
import { httpRequest } from 'src/main/http';
import { POST_PAGE_ACTION_TYPE, PostPageActionType } from './post-page.type';
import { convertPost } from './post-page.convert';

export function getPostAction(id: string, isAuth: boolean) {
  return async (dispatch: Dispatch<PostPageActionType>) => {
    dispatch({
      type: POST_PAGE_ACTION_TYPE.PENDING,
    });
    try {
      const response = await httpRequest({
        method: 'GET',
        url: isAuth ? '/post/auth/get/' + id : '/post/get/' + id,
      });
      dispatch({
        type: POST_PAGE_ACTION_TYPE.SUCCESS,
        post: convertPost(response.data),
      });
    } catch (err: any) {
      if (err.response) {
        dispatch({
          type: POST_PAGE_ACTION_TYPE.ERROR,
          error: err.response.data.message,
        });
      }
    }
  };
}
