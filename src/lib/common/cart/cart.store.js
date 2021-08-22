import { CART_ACTION_TYPE, SEWING_PRODUCT } from './cart.constant';
import {
  initialCartState,
  incrementProduct,
  decrementProduct,
  addSewingProduct,
  addPatternProduct,
  addMasterClass,
  deleteSewingProduct,
  deletePatternProduct,
  deleteMasterClass,
  changeSewingProductParametrs,
  changePatternProductParametrs,
  changeMasterClassParametrs,
} from './cart.service';

const initialState = initialCartState;
export const cartStore = (state = initialState, action) => {
  switch (action.type) {
    case CART_ACTION_TYPE.INCREMENT_SEWING_PRODUCT:
      return incrementProduct(
        state,
        'sewingProduct',
        action.id,
        action.incrementBy,
      );
    case CART_ACTION_TYPE.INCREMENT_PATTERN_PRODUCT:
      return incrementProduct(
        state,
        'patternProduct',
        action.id,
        action.incrementBy,
      );
    case CART_ACTION_TYPE.INCREMENT_MASTER_CLASS:
      return incrementProduct(
        state,
        'masterClass',
        action.id,
        action.incrementBy,
      );
    case CART_ACTION_TYPE.DECREMENT_SEWING_PRODUCT:
      return decrementProduct(
        state,
        'sewingProduct',
        action.id,
        action.decrementBy,
      );
    case CART_ACTION_TYPE.DECREMENT_PATTERN_PRODUCT:
      return decrementProduct(
        state,
        'patternProduct',
        action.id,
        action.decrementBy,
      );
    case CART_ACTION_TYPE.DECREMENT_MASTER_CLASS:
      return decrementProduct(
        state,
        'masterClass',
        action.id,
        action.decrementBy,
      );

    case CART_ACTION_TYPE.ADD_SEWING_PRODUCT:
      return addSewingProduct({ ...action.product, state });
    case CART_ACTION_TYPE.ADD_PATTERN_PRODUCT:
      return addPatternProduct({ ...action.product, state });
    case CART_ACTION_TYPE.ADD_MASTER_CLASS:
      return addMasterClass({ ...action.product, state });

    case CART_ACTION_TYPE.DELETE_SEWING_PRODUCT:
      return deleteSewingProduct(state, action.id);
    case CART_ACTION_TYPE.DELETE_PATTERN_PRODUCT:
      return deletePatternProduct(state, action.id);
    case CART_ACTION_TYPE.DELETE_MASTER_CLASS:
      return deleteMasterClass(state, action.id);

    case CART_ACTION_TYPE.CHANGE_SEWING_PRODUCT_PARAMETRS:
      return changeSewingProductParametrs(
        state,
        action.id,
        action.size,
        action.color,
      );
    case CART_ACTION_TYPE.CHANGE_PATTERN_PRODUCT_PARAMETRS:
      return changePatternProductParametrs(
        state,
        action.id,
        action.size,
        action.format,
      );
    case CART_ACTION_TYPE.CHANGE_MASTER_CLASS_PARAMETRS:
      return changeMasterClassParametrs(state, action.id, action.programm);

    case CART_ACTION_TYPE.PURGE:
      return initialCartState;
    default:
      return state;
  }
};
