import { Dispatch } from 'react';
import { BasicReactEditorType } from 'src/lib/basic-types';
import { httpRequest } from 'src/main/http';
import { FAQ_ACTION_TYPE, FaqArticleActionType } from './faq-article.type';

export function getFaqAction(name: string) {
  return async (dispatch: Dispatch<FaqArticleActionType>) => {
    dispatch({
      type: FAQ_ACTION_TYPE.RESET,
    });
    dispatch({
      type: FAQ_ACTION_TYPE.GET_PENDING,
    });

    try {
      const response = await httpRequest({
        method: 'GET',
        url: '/faq' + name,
      });
      dispatch({
        type: FAQ_ACTION_TYPE.GET_SUCCESS,
        data: response.data?.data || { blocks: [] },
      });
    } catch (err: any) {
      if (err.response) {
        dispatch({
          type: FAQ_ACTION_TYPE.GET_ERROR,
          error: err.response.data.message,
        });
      }
    }
  };
}

export function saveFaqAction(data: BasicReactEditorType, name: string) {
  return async (dispatch: Function) => {
    dispatch({
      type: FAQ_ACTION_TYPE.SAVE_PENDING,
    });

    try {
      await httpRequest({
        method: 'POST',
        url: '/faq' + name,
        data: { data },
      });

      dispatch({
        type: FAQ_ACTION_TYPE.SAVE_SUCCESS,
      });
    } catch (err: any) {
      if (err.response) {
        dispatch({
          type: FAQ_ACTION_TYPE.SAVE_ERROR,
          error: err.response.data.message,
        });
      }
    }
  };
}
