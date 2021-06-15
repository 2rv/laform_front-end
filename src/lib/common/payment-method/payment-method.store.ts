import { PAYMENT_METHOD_ACTION_TYPE } from './payment-method.constant';
import {
  PaymentMethodStoreAction,
  PAYMENT_METHOD,
} from './payment-method.type';

const initialState = {
  method: PAYMENT_METHOD.ONLINE,
};

export const paymentMethodStore = (
  state = initialState,
  action: PaymentMethodStoreAction,
) => {
  switch (action.type) {
    case PAYMENT_METHOD_ACTION_TYPE.SET_METHOD:
      return {
        ...state,
        method: action.method,
      };
    default:
      return state;
  }
};
