import { httpRequest } from '../../main/http';
import { ARTICLES_API } from './articles.constant';
import { ARTICLES_ACTION_TYPE } from './articles.type';
import { convertArticleProducts } from 'src/lib/common/product-converters';

export function articlesUploadData(isAuth, query) {
  return async (dispatch) => {
    dispatch({
      type: ARTICLES_ACTION_TYPE.ARTICLES_UPLOAD_PENDING,
    });

    try {
      const response = isAuth
        ? await httpRequest({
            method: ARTICLES_API.ARTICLES_UPLOAD_AUTH.TYPE,
            url: ARTICLES_API.ARTICLES_UPLOAD_AUTH.ENDPOINT(query),
          })
        : await httpRequest({
            method: ARTICLES_API.ARTICLES_UPLOAD.TYPE,
            url: ARTICLES_API.ARTICLES_UPLOAD.ENDPOINT(query),
          });
      dispatch({
        type: ARTICLES_ACTION_TYPE.ARTICLES_UPLOAD_SUCCESS,
        data: {
          products: convertArticleProducts(response.data[0]),
          totalRecords: response.data[1],
        },
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
export function fetchCategories(currentLang, type) {
  return async (dispatch) => {
    dispatch({
      type: ARTICLES_ACTION_TYPE.CATEGORIES_UPLOAD_PENDING,
    });
    try {
      const response = await httpRequest({
        method: ARTICLES_API.CATEGORIES_UPLOAD_DATA.TYPE,
        url: ARTICLES_API.CATEGORIES_UPLOAD_DATA.ENDPOINT(currentLang, type),
      });
      const convertedCategories = response.data.map((category) => ({
        id: category.id,
        tid: category.categoryNameRu,
      }));
      dispatch({
        type: ARTICLES_ACTION_TYPE.CATEGORIES_UPLOAD_SUCCESS,
        data: convertedCategories,
      });
    } catch (err) {
      if (err.response) {
        dispatch({
          type: ARTICLES_ACTION_TYPE.CATEGORIES_UPLOAD_ERROR,
          errorMessage: err.response.data.message,
        });
      }
    }
  };
}
