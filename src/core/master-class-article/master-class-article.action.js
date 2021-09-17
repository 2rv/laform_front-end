import { httpRequest } from '../../main/http';
import { MASTER_CLASS_ARTICLE_API } from './master-class-article.constant';
import { MASTER_CLASS_ARTICLE_ACTION_TYPE } from './master-class-article.type';
import { performArticleProductData } from './master-class-article.convert';

export function masterClassArticleUploadData(currentLang, id) {
  return async (dispatch) => {
    dispatch({
      type: MASTER_CLASS_ARTICLE_ACTION_TYPE.MASTER_CLASS_ARTICLE_UPLOAD_PENDING,
    });

    try {
      const response = await httpRequest({
        method: MASTER_CLASS_ARTICLE_API.MASTER_CLASS_ARTICLE_UPLOAD.TYPE,
        url: MASTER_CLASS_ARTICLE_API.MASTER_CLASS_ARTICLE_UPLOAD.ENDPOINT(currentLang, id),
      });
      const data = performArticleProductData(response.data);
      dispatch({
        type: MASTER_CLASS_ARTICLE_ACTION_TYPE.MASTER_CLASS_ARTICLE_UPLOAD_SUCCESS,
        data: data,
      });
    } catch (err) {
      if (err.response) {
        dispatch({
          type: MASTER_CLASS_ARTICLE_ACTION_TYPE.MASTER_CLASS_ARTICLE_UPLOAD_ERROR,
          errorMessage: err.response.data.message,
        });
      }
    }
  };
}
