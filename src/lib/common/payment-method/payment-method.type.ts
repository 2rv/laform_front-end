import { PAYMENT_METHOD_ACTION_TYPE } from './payment-method.constant';

export enum PAYMENT_METHOD {
  ONLINE = 1,
  DIFFERENT = 2,
}

export interface PaymentMethodStoreState {
  method: PAYMENT_METHOD;
}

export interface PaymentMethodStoreAction extends PaymentMethodStoreState {
  type: PAYMENT_METHOD_ACTION_TYPE;
}
