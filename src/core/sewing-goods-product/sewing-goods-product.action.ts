import { httpRequest } from 'src/main/http';
import { AxiosResponse } from 'axios';
import { Dispatch } from 'react';
import { BasicSewingGoodType } from 'src/lib/basic-types';
import {
  SewingGoodsProductActionType,
  SEWING_GOODS_PRODUCT_ACTION_TYPE,
} from './sewing-goods-product.type';
import { convertSewingGoodsProductData } from './sewing-goods-product.convert';

export function getSewingGoodsProductAction(id: string, isAuth: boolean) {
  return async (dispatch: Dispatch<SewingGoodsProductActionType>) => {
    dispatch({
      type: SEWING_GOODS_PRODUCT_ACTION_TYPE.PENDING,
    });

    try {
      const response: AxiosResponse<BasicSewingGoodType> = await httpRequest({
        method: 'GET',
        url: isAuth
          ? '/sewing-product/auth/get/' + id
          : 'sewing-product/get/' + id,
      });
      dispatch({
        type: SEWING_GOODS_PRODUCT_ACTION_TYPE.SUCCESS,
        data: convertSewingGoodsProductData(response.data),
      });
    } catch (err: any) {
      if (err.response) {
        dispatch({
          type: SEWING_GOODS_PRODUCT_ACTION_TYPE.ERROR,
          error: err.response.data.message,
        });
      }
    }
  };
}
