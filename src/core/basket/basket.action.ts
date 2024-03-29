import { httpRequest } from 'src/main/http';
import {
  BASKET_ACTION_TYPE,
  addToCartDataType,
  basketStateType,
  formikValues,
} from './basket.type';
import { convertAddToCart, convertCreateOrder } from './basket.convert';
import {
  ChangeItemFnValues,
  DeleteItemFnValues,
} from 'src/lib/common/block-table';

export function initializeBasketStore() {
  return async (dispatch: Function) => {
    try {
      const localState = localStorage.getItem('basket') || `[]`;
      const basketStorage = JSON.parse(localState);
      if (basketStorage) {
        dispatch({
          type: BASKET_ACTION_TYPE.INIT_BASKET,
          data: basketStorage,
        });
      }
    } catch (error) {
      dispatch(clearCartAction());
    }
  };
}
export function addToCartAction(data: addToCartDataType) {
  return async (dispatch: Function) => {
    dispatch({
      type: BASKET_ACTION_TYPE.PRODUCT_ADD_PENDING,
      id: data.id,
    });
    try {
      const response = await httpRequest({
        method: 'GET',
        url:
          [
            '/master-class/get/',
            '/pattern-product/get/',
            '/pattern-product/get/',
            '/sewing-product/get/',
          ][data.type] + data.id,
      });
      const basketStorage = JSON.parse(localStorage.getItem('basket') || '[]');
      const convertedData = convertAddToCart(
        response.data,
        data,
        basketStorage.length,
      );
      if (Boolean(basketStorage.length)) {
        basketStorage.push(convertedData);
        localStorage.setItem('basket', JSON.stringify(basketStorage));
      } else {
        localStorage.setItem('basket', JSON.stringify([convertedData]));
      }
      dispatch({
        type: BASKET_ACTION_TYPE.ADD_TO_BASKET,
        data: convertedData,
        id: data.id,
      });
    } catch (error) {
      console.log(error);
      dispatch({
        type: BASKET_ACTION_TYPE.PRODUCT_ADD_ERROR,
        id: data.id,
      });
      dispatch(clearCartAction());
    }
  };
}
export function clearCartAction() {
  return async (dispatch: Function) => {
    try {
      localStorage.removeItem('basket');
      dispatch({
        type: BASKET_ACTION_TYPE.CHANGE_BASKET,
        data: [],
      });
    } catch (error) {
      localStorage.removeItem('basket');
    }
  };
}

export function changeProductCartAction(
  data: ChangeItemFnValues,
  bascketState: basketStateType[],
) {
  return async (dispatch: Function) => {
    try {
      const { indexId, ...otherData } = data;
      const changedState = bascketState.map((item) => {
        if (item.indexId === indexId) return { ...item, ...otherData };
        return item;
      });
      dispatch({
        type: BASKET_ACTION_TYPE.CHANGE_BASKET,
        data: changedState,
      });
      localStorage.setItem('basket', JSON.stringify(changedState));
    } catch (error: any) {
      dispatch(clearCartAction());
    }
  };
}
export function deleteProuctCartAction(
  data: DeleteItemFnValues,
  bascketState: basketStateType[],
) {
  return async (dispatch: Function) => {
    try {
      const { indexId } = data;
      const changedState = bascketState.filter(
        (item) => item.indexId !== indexId,
      );
      dispatch({
        type: BASKET_ACTION_TYPE.CHANGE_BASKET,
        data: changedState,
      });
      localStorage.setItem('basket', JSON.stringify(changedState));
    } catch (error) {
      dispatch(clearCartAction());
    }
  };
}

export function createOrderAction(
  values: formikValues,
  bascketState: basketStateType[],
  isAuth: boolean,
  isSdek: boolean,
) {
  return async (dispatch: Function) => {
    dispatch({
      type: BASKET_ACTION_TYPE.CREATE_ORDER_PENDING,
    });
    try {
      const data = convertCreateOrder(values, bascketState, isSdek);
      const response = await httpRequest({
        method: 'POST',
        url: isAuth ? 'purchase/create' : 'purchase/not-auth/create',
        data: data,
      });

      if (response.data) {
        dispatch(clearCartAction());
        window.location.href = response.data;
      } else {
        dispatch({
          type: BASKET_ACTION_TYPE.CREATE_ORDER_ERROR,
          errorMessage: 'ERROR',
        });
      }

      dispatch({
        type: BASKET_ACTION_TYPE.CREATE_ORDER_SUCCESS,
      });
    } catch (err: any) {
      if (err.response) {
        dispatch({
          type: BASKET_ACTION_TYPE.CREATE_ORDER_ERROR,
          errorMessage: err.response.data.message,
        });
      }
    }
  };
}
export function getShtrihCode() {
  return async () => {
    try {
      const response = await httpRequest({
        method: 'POST',
        url: '/sdek/order/create/pdf',
        responseType: 'arraybuffer',
        data: {
          orders: [
            {
              order_uuid: '72753031-1b8f-4120-8ebc-73e3fc556710',
            },
          ],
        },
      });
      let blob = new Blob([response.data], { type: 'application/pdf' }),
        url = window.URL.createObjectURL(blob);
      window.open(url);
    } catch (error) {
      console.log(error);
    }
  };
}
