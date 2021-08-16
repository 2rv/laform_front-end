import {
  CART_ACTION_TYPE,
  SEWING_PRODUCT,
  PATTERN_PRODUCT,
} from './cart.constant';

export interface CartStoreAction {
  type: CART_ACTION_TYPE;
  payload?: SEWING_PRODUCT | PATTERN_PRODUCT;
}
