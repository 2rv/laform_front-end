import { httpRequest } from '../../main/http';
import { ARTICLE_PAGE_API } from './article-page.constant';
import { ARTICLE_PAGE_ACTION_TYPE } from './article-page.type';

export function articlePageUploadData() {
  return async (dispatch) => {
    dispatch({
      type: ARTICLE_PAGE_ACTION_TYPE.ARTICLE_PAGE_UPLOAD_PENDING,
    });

    try {
      await httpRequest({
        method: ARTICLE_PAGE_API.ARTICLE_PAGE_UPLOAD.TYPE,
        url: ARTICLE_PAGE_API.ARTICLE_PAGE_UPLOAD.ENDPOINT,
      });

      dispatch({
        type: ARTICLE_PAGE_ACTION_TYPE.ARTICLE_PAGE_UPLOAD_SUCCESS,
      });
    } catch (err) {
      if (err.response) {
        dispatch({
          type: ARTICLE_PAGE_ACTION_TYPE.ARTICLE_PAGE_UPLOAD_ERROR,
          errorMessage: err.response.data.message,
        });
      }
    }
  };
}
