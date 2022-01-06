import { Dispatch } from 'react';
import { httpRequest } from 'src/main/http';
import {
  convertPurchase,
  convertPurchaseProducts,
  convertChangePurchaseProducts,
  convertForUpdate,
} from './order.convert';
import {
  ORDER_ACTION_TYPE,
  OrderActionType,
  PurchaseProductTypeForOrer,
  OrderValues,
} from './order.type';
import {
  DeleteItemFnValues,
  ChangeItemFnValues,
} from 'src/lib/common/block-table';
export function getOrderAction(id: string) {
  return async (dispatch: Dispatch<OrderActionType>) => {
    dispatch({
      type: ORDER_ACTION_TYPE.GET_PENDING,
    });

    try {
      const response = await httpRequest({
        method: 'GET',
        url: '/purchase/get/' + id,
      });
      const { purchaseProducts, ...purchaseInfo } = response.data;
      const [products, price] = convertPurchaseProducts(purchaseProducts);

      dispatch({
        type: ORDER_ACTION_TYPE.GET_SUCCESS,
        order: convertPurchase(purchaseInfo),
        products: products,
        purchaseProducts: purchaseProducts,
        price: price,
      });
    } catch (err: any) {
      if (err.response) {
        dispatch({
          type: ORDER_ACTION_TYPE.GET_ERROR,
          error: err.response.data.message,
        });
      }
    }
  };
}
export function updateOrderAction(
  id: string,
  values: OrderValues,
  products: PurchaseProductTypeForOrer[],
) {
  return async (dispatch: Dispatch<OrderActionType>) => {
    dispatch({
      type: ORDER_ACTION_TYPE.UPDATE_PENDING,
    });
    try {
      await httpRequest({
        method: 'PUT',
        url: '/purchase/update/' + id,
        data: convertForUpdate(values, products),
      });
      dispatch({
        type: ORDER_ACTION_TYPE.UPDATE_SUCCESS,
      });
    } catch (err: any) {
      if (err.response) {
        dispatch({
          type: ORDER_ACTION_TYPE.UPDATE_ERROR,
          error: err.response.data.message,
        });
      }
    }
  };
}
export function changePurchaseProductAction(
  purchaseProducts: PurchaseProductTypeForOrer[],
  values: ChangeItemFnValues,
) {
  return async (dispatch: Dispatch<OrderActionType>) => {
    try {
      const result = convertChangePurchaseProducts(purchaseProducts, values);
      const [products, price] = convertPurchaseProducts(result);
      dispatch({
        type: ORDER_ACTION_TYPE.CHANGE_PRODUCT,
        products: products,
        purchaseProducts: result,
        price: price,
      });
    } catch (err) {
      console.log(err);
    }
  };
}
export function deletePurchaseProductAction(
  purchaseProducts: PurchaseProductTypeForOrer[],
  values: DeleteItemFnValues,
) {
  return async (dispatch: Dispatch<OrderActionType>) => {
    try {
      const result = purchaseProducts.filter((item) => item.id !== values.id);
      const [products, price] = convertPurchaseProducts(result);
      dispatch({
        type: ORDER_ACTION_TYPE.CHANGE_PRODUCT,
        products: products,
        purchaseProducts: result,
        price: price,
      });
    } catch (err) {
      console.log(err);
    }
  };
}
