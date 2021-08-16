import { CART_ACTION_TYPE, SEWING_PRODUCT } from './cart.constant';
import { CartStoreAction } from './cart.type';

// ADD LOCAL STORAGE DATA IF EXISTS
const initialState = {
  sewingProduct: [],
  patternProduct: [],
  masterClass: [],
};

export const cartStore = (state = initialState, action) => {
  switch (action.type) {
    case CART_ACTION_TYPE.ADD_SEWING_PRODUCT:
      return {
        ...state,
        sewingProduct: [], // ADD PRODUCT BASED ON ITS LIMIT
      };

    default:
      return state;
  }
};
