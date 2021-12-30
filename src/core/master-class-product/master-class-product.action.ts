import { httpRequest } from 'src/main/http';
import {
  MasterClassProductActionType,
  MASTER_CLASS_PRODUCT_ACTION_TYPE,
} from './master-class-product.type';
import { convertMasterClassProductData } from './master-class-product.convert';
import { AxiosResponse } from 'axios';
import { BasicMasterClassType } from 'src/lib/basic-types';
import { Dispatch } from 'react';

export function getMasterClassProductAction(id: string, isAuth: boolean) {
  return async (dispatch: Dispatch<MasterClassProductActionType>) => {
    dispatch({
      type: MASTER_CLASS_PRODUCT_ACTION_TYPE.PENDING,
    });

    try {
      const response: AxiosResponse<BasicMasterClassType> = await httpRequest({
        method: 'GET',
        url: isAuth ? '/master-class/auth/get/' + id : 'master-class/get/' + id,
      });

      dispatch({
        type: MASTER_CLASS_PRODUCT_ACTION_TYPE.SUCCESS,
        data: convertMasterClassProductData(response.data),
      });
    } catch (err: any) {
      if (err.response) {
        dispatch({
          type: MASTER_CLASS_PRODUCT_ACTION_TYPE.ERROR,
          error: err.response.data.message,
        });
      }
    }
  };
}
