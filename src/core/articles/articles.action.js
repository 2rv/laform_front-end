import { httpRequest } from '../../main/http';
import { ARTICLES_API } from './articles.constant';
import { ARTICLES_ACTION_TYPE } from './articles.type';

export function articlesUploadData() {
  return async (dispatch) => {
    dispatch({
      type: ARTICLES_ACTION_TYPE.ARTICLES_UPLOAD_PENDING,
    });

    try {
      await httpRequest({
        method: ARTICLES_API.ARTICLES_UPLOAD.TYPE,
        url: ARTICLES_API.ARTICLES_UPLOAD.ENDPOINT,
      });

      dispatch({
        type: ARTICLES_ACTION_TYPE.ARTICLES_UPLOAD_SUCCESS,
      });
    } catch (err) {
      if (err.response) {
        dispatch({
          type: ARTICLES_ACTION_TYPE.ARTICLES_UPLOAD_ERROR,
          errorMessage: err.response.data.message,
        });
      }
    }
  };
}
