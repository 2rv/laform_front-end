import {
  initRequestState,
  setRequestError,
  setRequestPending,
  setRequestSuccess,
} from '../../main/store/store.service';

import { BASKET_ACTION_TYPE } from './basket.type';

const initialState = {
  basket: initRequestState(),
  basketLoadData: initRequestState(),
  promoCode: initRequestState(),
  deleteProduct: initRequestState(),
};

export function basketStore(state = initialState, action) {
  switch (action.type) {
    case BASKET_ACTION_TYPE.BASKET_UPLOAD_PENDING:
      return {
        ...state,
        basket: setRequestPending(state.basket),
      };
    case BASKET_ACTION_TYPE.BASKET_UPLOAD_SUCCESS:
      return {
        ...state,
        basket: setRequestSuccess(state.basket),
      };
    case BASKET_ACTION_TYPE.BASKET_UPLOAD_ERROR:
      return {
        ...state,
        basket: setRequestError(state.basket, action.errorMessage),
      };

    case BASKET_ACTION_TYPE.BASKET_LOAD_USER_INFO_DATA_PENDING:
      return {
        ...state,
        basketLoadData: setRequestPending(state.basketLoadData),
      };
    case BASKET_ACTION_TYPE.BASKET_LOAD_USER_INFO_DATA_SUCCESS:
      return {
        ...state,
        basketLoadData: setRequestSuccess(state.basketLoadData, action.payload),
      };
    case BASKET_ACTION_TYPE.BASKET_LOAD_USER_INFO_DATA_ERROR:
      return {
        ...state,
        basketLoadData: setRequestError(
          state.basketLoadData,
          action.errorMessage,
        ),
      };

    case BASKET_ACTION_TYPE.CHECK_PROMO_CODE_PENDING:
      return {
        ...state,
        promoCode: setRequestPending(state.promoCode),
      };
    case BASKET_ACTION_TYPE.CHECK_PROMO_CODE_SUCCESS:
      return {
        ...state,
        promoCode: setRequestSuccess(state.promoCode, action.payload),
      };
    case BASKET_ACTION_TYPE.CHECK_PROMO_CODE_ERROR:
      return {
        ...state,
        promoCode: setRequestError(state.promoCode, action.errorMessage),
      };

    default:
      return state;
  }
}
