import { AxiosResponse } from 'axios';
import { Dispatch } from 'react';
import { BasicCompilationType } from 'src/lib/basic-types';
import { httpRequest } from 'src/main/http';
import {
  convertProductsCompilation,
  convertProductsCompilationForSave,
} from './products-compilation.convert';
import {
  ProductsCompilationValues,
  PRODUCT_SELECTIONS_ACTION_TYPE,
  ProductsCompilationActionType,
} from './products-compilation.type';

export function getCompilationAction(lang: string) {
  return async (dispatch: Dispatch<ProductsCompilationActionType>) => {
    dispatch({
      type: PRODUCT_SELECTIONS_ACTION_TYPE.GET_PENDING,
    });

    try {
      const response: AxiosResponse<BasicCompilationType[]> = await httpRequest(
        {
          method: 'GET',
          url: '/compilation/get',
          params: {
            lang: lang,
          },
        },
      );

      dispatch({
        type: PRODUCT_SELECTIONS_ACTION_TYPE.GET_SUCCESS,
        products: convertProductsCompilation(response.data),
      });
    } catch (err: any) {
      if (err.response) {
        dispatch({
          type: PRODUCT_SELECTIONS_ACTION_TYPE.GET_ERROR,
          error: err.response.data.message,
        });
      }
    }
  };
}
export function saveCompilationAction(values: ProductsCompilationValues) {
  return async (dispatch: Dispatch<ProductsCompilationActionType>) => {
    dispatch({
      type: PRODUCT_SELECTIONS_ACTION_TYPE.SAVE_PENDING,
    });

    try {
      await httpRequest({
        method: 'POST',
        url: '/compilation/create',
        data: convertProductsCompilationForSave(values.products),
      });
      dispatch({
        type: PRODUCT_SELECTIONS_ACTION_TYPE.SAVE_SUCCESS,
      });
    } catch (err: any) {
      if (err.response) {
        dispatch({
          type: PRODUCT_SELECTIONS_ACTION_TYPE.SAVE_ERROR,
          error: err.response.data.message,
        });
      }
    }
  };
}
export function deleteCompilatioAction(id: string) {
  return async (dispatch: Dispatch<ProductsCompilationActionType>) => {
    dispatch({
      type: PRODUCT_SELECTIONS_ACTION_TYPE.DELETE_PENDING,
    });
    try {
      await httpRequest({
        method: 'DELETE',
        url: '/compilation/delete/' + id,
      });
      dispatch({
        type: PRODUCT_SELECTIONS_ACTION_TYPE.DELETE_SUCCESS,
      });
    } catch (err: any) {
      if (err.response) {
        dispatch({
          type: PRODUCT_SELECTIONS_ACTION_TYPE.DELETE_ERROR,
          error: err.response.data.message,
        });
      }
    }
  };
}
