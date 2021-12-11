import { httpRequest } from 'src/main/http';
import { SAVE_DATA_API, LOAD_DATA_API } from './faq-article.constant';
import { FAQ_ARTICLE_ACTION_TYPE } from './faq-article.type';

export function saveDataAction(data: any, name: string) {
  return async (dispatch: Function) => {
    dispatch({
      type: FAQ_ARTICLE_ACTION_TYPE.DATA_SAVE_PENDING,
    });

    try {
      await httpRequest({
        method: SAVE_DATA_API.TYPE,
        url: SAVE_DATA_API.ENDPOINT + name,
        data: { data },
      });

      dispatch({
        type: FAQ_ARTICLE_ACTION_TYPE.DATA_SAVE_SUCCESS,
      });
    } catch (err: any) {
      if (err.response) {
        dispatch({
          type: FAQ_ARTICLE_ACTION_TYPE.DATA_SAVE_ERROR,
          error: err.response.data.message,
        });
      }
    }
  };
}
export function loadDataAction(name: string) {
  return async (dispatch: Function) => {
    dispatch({
      type: FAQ_ARTICLE_ACTION_TYPE.DATA_LOAD_PENDING,
    });

    try {
      const response = await httpRequest({
        method: LOAD_DATA_API.TYPE,
        url: LOAD_DATA_API.ENDPOINT + name,
      });
      dispatch({
        type: FAQ_ARTICLE_ACTION_TYPE.DATA_LOAD_SUCCESS,
        data: response.data?.data || [],
      });
    } catch (err: any) {
      if (err.response) {
        dispatch({
          type: FAQ_ARTICLE_ACTION_TYPE.DATA_LOAD_ERROR,
          error: err.response.data.message,
        });
      }
    }
  };
}
