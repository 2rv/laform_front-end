import {
  initRequestState,
  setRequestError,
  setRequestPending,
  setRequestSuccess,
} from '../../main/store/store.service';

import { MY_PURCHASES_ACTION_TYPE } from './my-purchases.type';

const initialState = {
  myPurchases: initRequestState(),
};

export function myPurchasesStore(state = initialState, action) {
  switch (action.type) {
    case MY_PURCHASES_ACTION_TYPE.MY_PURCHASES_UPLOAD_PENDING:
      return {
        ...state,
        myPurchases: setRequestPending(state.myPurchases),
      };
    case MY_PURCHASES_ACTION_TYPE.MY_PURCHASES_UPLOAD_SUCCESS:
      return {
        ...state,
        myPurchases: setRequestSuccess(state.myPurchases),
      };
    case MY_PURCHASES_ACTION_TYPE.MY_PURCHASES_UPLOAD_ERROR:
      return {
        ...state,
        myPurchases: setRequestError(state.myPurchases, action.errorMessage),
      };
    default:
      return state;
  }
}
