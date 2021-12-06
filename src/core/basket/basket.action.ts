import { httpRequest } from '../../main/http';
import { BASKET_API } from './basket.constant';
import {
  BASKET_ACTION_TYPE,
  addToCartDataType,
  basketStateType,
  changeCartataType,
  formikValues,
} from './basket.type';
import {
  convertAddToCart,
  convertCreateOrder,
  convertUserInfo,
} from './basket.convert';

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

export function addToCartAction(data: addToCartDataType, currentLang: string) {
  return async (dispatch: Function) => {
    dispatch({
      type: BASKET_ACTION_TYPE.PRODUCT_ADD_PENDING,
    });
    try {
      const response = await httpRequest({
        method: 'GET',
        url: BASKET_API.ADD_BACKET_LOAD_ITEM_INFO(
          data.type,
          data.id,
          currentLang,
        ),
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
      });
    } catch (error) {
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
  data: changeCartataType,
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
  data: changeCartataType,
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
) {
  return async (dispatch: Function) => {
    dispatch({
      type: BASKET_ACTION_TYPE.CREATE_ORDER_PENDING,
    });
    try {
      const data = convertCreateOrder(values, bascketState);

      const response = await httpRequest({
        method: 'POST',
        url: BASKET_API.CREATE_ORDER(isAuth),
        data: data,
      });
      console.log(response.data);

      if (values.saveUserInfo && isAuth) {
        await updateUserInfoAction(values);
      }
      dispatch({
        type: BASKET_ACTION_TYPE.CREATE_ORDER_SUCCESS,
      });
      //   dispatch(clearCartAction());
      //   if (response.data.userExist) {
      //     redirect(LOGIN_ROUTE_PATH);
      //   } else if (isAuth) {
      //     redirect(USER_ORDERS_ROUTE_PATH);
      //   } else {
      //     alert(text('BASKET.ALERT'));
      //   }
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

export function getUserInfoAction() {
  return async (dispatch: Function) => {
    dispatch({
      type: BASKET_ACTION_TYPE.LOAD_USER_INFO_PENDING,
    });

    try {
      const response = await httpRequest({
        method: 'GET',
        url: BASKET_API.LOAD_USER_INFO,
      });
      dispatch({
        type: BASKET_ACTION_TYPE.LOAD_USER_INFO_SUCCESS,
        data: convertUserInfo(response.data),
      });
    } catch (err: any) {
      if (err.response) {
        dispatch({
          type: BASKET_ACTION_TYPE.LOAD_USER_INFO_ERROR,
          errorMessage: err.response.data.message,
        });
      }
    }
  };
}
async function updateUserInfoAction(values: formikValues) {
  const response = await httpRequest({
    method: 'PATCH',
    url: BASKET_API.UPDATE_USER_INFO,
    data: convertUserInfo(values),
  });
  return response;
}
