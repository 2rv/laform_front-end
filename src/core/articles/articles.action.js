import { httpRequest } from '../../main/http';
import { ARTICLES_API } from './articles.constant';
import { ARTICLES_ACTION_TYPE } from './articles.type';
import { convertArticleProducts } from 'src/lib/common/product-converters';

export function articlesUploadData(currentLang, isAuth) {
  return async (dispatch) => {
    dispatch({
      type: ARTICLES_ACTION_TYPE.ARTICLES_UPLOAD_PENDING,
    });

    try {
      const response = isAuth
        ? await httpRequest({
            method: ARTICLES_API.ARTICLES_UPLOAD_AUTH.TYPE,
            url: ARTICLES_API.ARTICLES_UPLOAD_AUTH.ENDPOINT(currentLang),
          })
        : await httpRequest({
            method: ARTICLES_API.ARTICLES_UPLOAD.TYPE,
            url: ARTICLES_API.ARTICLES_UPLOAD.ENDPOINT(currentLang),
          });
      dispatch({
        type: ARTICLES_ACTION_TYPE.ARTICLES_UPLOAD_SUCCESS,
        data: convertArticleProducts(response.data),
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
