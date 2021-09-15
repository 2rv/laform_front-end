import { httpRequest } from '../../main/http';
import { ARTICLE_PAGE_API } from './article-page.constant';
import { ARTICLE_PAGE_ACTION_TYPE } from './article-page.type';
import { performArticleProductData } from './article-page.convert';

export function articlePageUploadData(currentLang, id) {
  return async (dispatch) => {
    dispatch({
      type: ARTICLE_PAGE_ACTION_TYPE.ARTICLE_PAGE_UPLOAD_PENDING,
    });

    try {
      const response = await httpRequest({
        method: ARTICLE_PAGE_API.ARTICLE_PAGE_UPLOAD.TYPE,
        url: ARTICLE_PAGE_API.ARTICLE_PAGE_UPLOAD.ENDPOINT(currentLang, id),
      });
      const data = performArticleProductData(response.data);
      dispatch({
        type: ARTICLE_PAGE_ACTION_TYPE.ARTICLE_PAGE_UPLOAD_SUCCESS,
        data: data,
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
