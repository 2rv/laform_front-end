import { httpRequest } from 'src/main/http';
import { ARTICLE_PAGE_ACTION_TYPE } from './article-page.type';
import { performArticleProductData } from './article-page.convert';

export function articlePageUploadData(id, isAuth) {
  return async (dispatch) => {
    dispatch({
      type: ARTICLE_PAGE_ACTION_TYPE.ARTICLE_PAGE_UPLOAD_PENDING,
    });
    try {
      const response = await httpRequest({
        method: 'GET',
        url: isAuth ? '/post/auth/get' + id : '/post/get' + id,
      });

      dispatch({
        type: ARTICLE_PAGE_ACTION_TYPE.ARTICLE_PAGE_UPLOAD_SUCCESS,
        data: performArticleProductData(response.data),
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
