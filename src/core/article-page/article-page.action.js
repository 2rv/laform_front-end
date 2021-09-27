import { httpRequest } from '../../main/http';
import { ARTICLE_PAGE_API } from './article-page.constant';
import { ARTICLE_PAGE_ACTION_TYPE } from './article-page.type';
import { performArticleProductData } from './article-page.convert';
import { BASKET_STORE_NAME } from '../basket';

export function articlePageUploadData(currentLang, id, logged) {
  return async (dispatch, getState) => {
    dispatch({
      type: ARTICLE_PAGE_ACTION_TYPE.ARTICLE_PAGE_UPLOAD_PENDING,
    });
    try {
      const response = logged
        ? await httpRequest({
            method: ARTICLE_PAGE_API.ARTICLE_PAGE_UPLOAD_AUTH.TYPE,
            url: ARTICLE_PAGE_API.ARTICLE_PAGE_UPLOAD_AUTH.ENDPOINT(
              currentLang,
              id,
            ),
          })
        : await httpRequest({
            method: ARTICLE_PAGE_API.ARTICLE_PAGE_UPLOAD.TYPE,
            url: ARTICLE_PAGE_API.ARTICLE_PAGE_UPLOAD.ENDPOINT(currentLang, id),
          });
      dispatch({
        type: ARTICLE_PAGE_ACTION_TYPE.ARTICLE_PAGE_UPLOAD_SUCCESS,
        data: performArticleProductData(
          response.data,
          getState()[BASKET_STORE_NAME].basket,
        ),
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
