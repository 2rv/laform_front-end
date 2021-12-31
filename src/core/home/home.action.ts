import { AxiosResponse } from 'axios';
import { Dispatch } from 'react';
import { BasicCompilationType } from 'src/lib/basic-types';
import { convertMultiProducts } from 'src/lib/common/product-converters';
import { httpRequest } from 'src/main/http';
import { HomeActionType, HOME_ACTION_TYPE } from './home.type';

export function getCompilationAction(lang: string, isAuth: boolean) {
  return async (dispatch: Dispatch<HomeActionType>) => {
    dispatch({
      type: HOME_ACTION_TYPE.GET_COMPILATION_PENDING,
    });
    try {
      const response: AxiosResponse<BasicCompilationType[]> = await httpRequest(
        {
          method: 'GET',
          url: isAuth ? '/compilation/auth/get' : '/compilation/get',
          params: {
            lang: lang,
          },
        },
      );
      dispatch({
        type: HOME_ACTION_TYPE.GET_COMPILATION_SUCCESS,
        data: response.data.map((item) => ({
          id: item.id,
          title: item.title,
          path: item.path,
          compilationProducts: convertMultiProducts(item.compilationProducts),
          inEnglish: item.inEnglish,
        })),
      });
    } catch (err: any) {
      if (err.response) {
        dispatch({
          type: HOME_ACTION_TYPE.GET_COMPILATION_ERROR,
          error: err.response.data.message,
        });
      }
    }
  };
}
