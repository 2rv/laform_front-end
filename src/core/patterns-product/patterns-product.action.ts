import { AxiosResponse } from 'axios';
import { Dispatch } from 'react';
import { BasicPatternType } from 'src/lib/basic-types';
import { httpRequest } from 'src/main/http';
import { convertPatternsProductData } from './patterns-product.convert';
import {
  PatternsProductActionType,
  PATTERNS_PRODUCT_ACTION_TYPE,
} from './patterns-product.type';

export function getPatternsProductAction(
  id: string,
  isAuth: boolean,
  lang: string,
) {
  return async (dispatch: Dispatch<PatternsProductActionType>) => {
    dispatch({
      type: PATTERNS_PRODUCT_ACTION_TYPE.PENDING,
    });

    try {
      const response: AxiosResponse<BasicPatternType> = await httpRequest({
        method: 'GET',
        url: isAuth
          ? '/pattern-product/auth/get/' + id
          : 'pattern-product/get/' + id,
        params: {
          lang: lang,
        },
      });

      dispatch({
        type: PATTERNS_PRODUCT_ACTION_TYPE.SUCCESS,
        data: convertPatternsProductData(response.data),
      });
    } catch (err: any) {
      if (err.response) {
        dispatch({
          type: PATTERNS_PRODUCT_ACTION_TYPE.ERROR,
          error: err.response.data.message,
        });
      }
    }
  };
}
