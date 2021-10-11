import {
  initRequestState,
  setRequestError,
  setRequestPending,
  setRequestSuccess,
} from '../../main/store/store.service';
import { DELIVERY_PRICE_PAGE_ACTION_TYPE } from './delivery-price-page.type';

const initialState = {
  deliveryPricePage: initRequestState(),
};

export function deliveryPricePageStore(state = initialState, action) {
  switch (action.type) {
    case DELIVERY_PRICE_PAGE_ACTION_TYPE.DELIVERY_PRICE_PAGE_DATA_UPLOAD_PENDING:
      return {
        ...state,
        deliveryPricePage: setRequestPending(state.deliveryPricePage),
      };
    case DELIVERY_PRICE_PAGE_ACTION_TYPE.DELIVERY_PRICE_PAGE_DATA_UPLOAD_SUCCESS:
      return {
        ...state,
        deliveryPricePage: setRequestSuccess(state.deliveryPricePage, action.data),
      };
    case DELIVERY_PRICE_PAGE_ACTION_TYPE.DELIVERY_PRICE_PAGE_DATA_UPLOAD_ERROR:
      return {
        ...state,
        deliveryPricePage: setRequestError(state.deliveryPricePage, action.errorMessage),
      };
    default:
      return state;
  }
}
