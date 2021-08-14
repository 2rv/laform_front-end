import { httpRequest } from '../../main/http';
import { CREATE_ARTICLE_API } from './create-article.constant';
import { CREATE_ARTICLE_ACTION_TYPE } from './create-article.type';

export function createArticleUploadData() {
  return async (dispatch) => {
    dispatch({
      type: CREATE_ARTICLE_ACTION_TYPE.CREATE_ARTICLE_UPLOAD_PENDING,
    });

    try {
      await httpRequest({
        method: CREATE_ARTICLE_API.CREATE_ARTICLE_UPLOAD.TYPE,
        url: CREATE_ARTICLE_API.CREATE_ARTICLE_UPLOAD.ENDPOINT,
      });

      dispatch({
        type: CREATE_ARTICLE_ACTION_TYPE.CREATE_ARTICLE_UPLOAD_SUCCESS,
      });
    } catch (err) {
      if (err.response) {
        dispatch({
          type: CREATE_ARTICLE_ACTION_TYPE.CREATE_ARTICLE_UPLOAD_ERROR,
          errorMessage: err.response.data.message,
        });
      }
    }
  };
}
