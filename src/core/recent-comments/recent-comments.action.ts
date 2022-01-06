import { Dispatch } from 'react';
import { httpRequest } from 'src/main/http';
import { convertCommentsData } from './recent-comments.convert';
import {
  RECENT_COMMENTS_ACTION_TYPE,
  RecentCommentsActionType,
} from './recent-comments.type';

export function getRecentCommentsAction(page: number) {
  return async (dispatch: Dispatch<RecentCommentsActionType>) => {
    dispatch({
      type: RECENT_COMMENTS_ACTION_TYPE.PENDING,
    });

    try {
      const response = await httpRequest({
        method: 'GET',
        url: '/comment/get/for-admin',
        params: {
          page: page,
        },
      });
      dispatch({
        type: RECENT_COMMENTS_ACTION_TYPE.SUCCESS,
        comments: convertCommentsData(response.data[0]),
        total: response.data[1],
      });
    } catch (err: any) {
      if (err.response) {
        dispatch({
          type: RECENT_COMMENTS_ACTION_TYPE.ERROR,
          error: err.response.data.message,
        });
      }
    }
  };
}
