import { httpRequest } from '../../main/http';
import { ARTICLES_API } from './articles.constant';
import { ARTICLES_ACTION_TYPE } from './articles.type';
import { performArticlesData } from './articles.convert';

export function articlesUploadData(currentLang) {
  return async (dispatch) => {
    dispatch({
      type: ARTICLES_ACTION_TYPE.ARTICLES_UPLOAD_PENDING,
    });

    try {
      const response = await httpRequest({
        method: ARTICLES_API.ARTICLES_UPLOAD.TYPE,
        url: ARTICLES_API.ARTICLES_UPLOAD.ENDPOINT(currentLang),
      });

      const data = performArticlesData(response.data);

      dispatch({
        type: ARTICLES_ACTION_TYPE.ARTICLES_UPLOAD_SUCCESS,
        data: data,
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
