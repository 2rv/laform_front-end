import { httpRequest } from '../../main/http';
import { convertCommentsData } from '../about-account/about-account.convert';
import { RECENT_COMMENTS_API } from './recent-comments.constant';
import { RECENT_COMMENTS_ACTION_TYPE } from './recent-comments.type';

export function fetchRecentComments(page) {
  return async (dispatch) => {
    dispatch({
      type: RECENT_COMMENTS_ACTION_TYPE.RECENT_COMMENTS_UPLOAD_PENDING,
    });

    try {
      const response = await httpRequest({
        method: RECENT_COMMENTS_API.RECENT_COMMENTS_UPLOAD.TYPE,
        url: RECENT_COMMENTS_API.RECENT_COMMENTS_UPLOAD.ENDPOINT(page),
      });
      dispatch({
        type: RECENT_COMMENTS_ACTION_TYPE.RECENT_COMMENTS_UPLOAD_SUCCESS,
        data: convertCommentsData(response.data[0]),
        total: response.data[1],
      });
    } catch (err) {
      if (err.response) {
        dispatch({
          type: RECENT_COMMENTS_ACTION_TYPE.RECENT_COMMENTS_UPLOAD_ERROR,
          errorMessage: err.response.data.message,
        });
      }
    }
  };
}
