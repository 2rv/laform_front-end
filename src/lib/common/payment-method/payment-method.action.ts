import { Dispatch } from 'redux';

import { getLocalStorage, setLocalStorage } from '../../../main/localStorage';

import {
  PAYMENT_METHOD_ACTION_TYPE,
  PAYMENT_METHOD_LOCAL_STORAGE_KEY,
} from './payment-method.constant';
import { PAYMENT_METHOD } from './payment-method.type';

export const setPaymentMethod = (method: PAYMENT_METHOD) => {
  return (dispatch: Dispatch) => {
    setLocalStorage(PAYMENT_METHOD_LOCAL_STORAGE_KEY, method);

    dispatch({
      type: PAYMENT_METHOD_ACTION_TYPE.SET_METHOD,
      method,
    });
  };
};

export const getPaymentMethod = () => {
  return getLocalStorage(PAYMENT_METHOD_LOCAL_STORAGE_KEY);
};
