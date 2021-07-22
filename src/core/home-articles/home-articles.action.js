import { httpRequest } from '../../main/http';
import { HOME_ARTICLE_API } from './home-articles.constant';
import { HOME_ARTICLE_ACTION_TYPE } from './home-articles.type';
import { performHomeArticlesLoadData } from './home-articles.convert';

export function homeArticleLoad(data) {
  return async (dispatch) => {
    dispatch({
      type: HOME_ARTICLE_ACTION_TYPE.HOME_ARTICLE_LOAD_PENDING,
    });

    try {
      const res = await httpRequest({
        method: HOME_ARTICLE_API.HOME_ARTICLE_LOAD.METHOD,
        url: HOME_ARTICLE_API.HOME_ARTICLE_LOAD.ENDPOINT,
        data,
      });

      const data = performHomeArticlesLoadData(res.data);

      dispatch({
        type: HOME_ARTICLE_ACTION_TYPE.HOME_ARTICLE_LOAD_SUCCESS,
        data: data,
      });
    } catch (err) {
      if (err.response) {
        dispatch({
          type: HOME_ARTICLE_ACTION_TYPE.HOME_ARTICLE_LOAD_ERROR,
          errorMessage: err.response.data.message,
        });
      }
    }
  };
}
