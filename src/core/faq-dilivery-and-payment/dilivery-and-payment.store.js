import {
  initRequestState,
  setRequestError,
  setRequestPending,
  setRequestSuccess,
} from '../../main/store/store.service';
import { DELIVERY_PAYMENT_ACTION_TYPE } from './dilivery-and-payment.type';

const initialState = {
  data: initRequestState(),
  save: initRequestState(),
};

export function deliveryPaymentStore(state = initialState, action) {
  switch (action.type) {
    case DELIVERY_PAYMENT_ACTION_TYPE.DATA_GET_PENDING:
      return {
        ...state,
        data: setRequestPending(state.data),
      };
    case DELIVERY_PAYMENT_ACTION_TYPE.DATA_GET_SUCCESS:
      return {
        ...state,
        data: setRequestSuccess(state.data, action.data),
      };
    case DELIVERY_PAYMENT_ACTION_TYPE.DATA_GET_ERROR:
      return {
        ...state,
        data: setRequestError(state.data, action.errorMessage),
      };

    case DELIVERY_PAYMENT_ACTION_TYPE.DATA_SAVE_PENDING:
      return {
        ...state,
        save: setRequestPending(state.save),
      };
    case DELIVERY_PAYMENT_ACTION_TYPE.DATA_SAVE_SUCCESS:
      return {
        ...state,
        save: setRequestSuccess(state.save),
      };
    case DELIVERY_PAYMENT_ACTION_TYPE.DATA_SAVE_ERROR:
      return {
        ...state,
        save: setRequestError(state.save, action.errorMessage),
      };

    default:
      return state;
  }
}
