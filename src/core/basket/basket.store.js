import {
  initRequestState,
  setRequestError,
  setRequestPending,
  setRequestSuccess,
} from '../../main/store/store.service';

import { BASKET_ACTION_TYPE } from './basket.type';

const initialState = {
  basket: [],
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
    case BASKET_ACTION_TYPE.ADD_TO_BASKET:
      return {
        ...state,
        basket: [...state.basket, action.data],
      };
    case BASKET_ACTION_TYPE.INIT_BASKET:
      return {
        ...state,
        basket: action.data,
      };
    default:
      return state;
  }
}
