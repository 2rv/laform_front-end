import {
  initRequestState,
  setRequestError,
  setRequestPending,
  setRequestSuccess,
} from '../../../main/store/store.service';
import { RECOMENDATION_ACTION_TYPE } from './recomendation.type';

const initialState = {
  productsState: initRequestState(),
};

export function recomendationStore(state = initialState, action: any) {
  switch (action.type) {
    case RECOMENDATION_ACTION_TYPE.PRODUCTS_UPLOAD_PENDING:
      return {
        ...state,
        productsState: setRequestPending(state.productsState),
      };
    case RECOMENDATION_ACTION_TYPE.PRODUCTS_UPLOAD_SUCCESS:
      return {
        ...state,
        productsState: setRequestSuccess(state.productsState, action.data),
      };
    case RECOMENDATION_ACTION_TYPE.PRODUCTS_UPLOAD_ERROR:
      return {
        ...state,
        productsState: setRequestError(
          state.productsState,
          action.errorMessage,
        ),
      };
    default:
      return state;
  }
}
