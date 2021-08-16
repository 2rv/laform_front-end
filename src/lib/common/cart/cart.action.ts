import { Dispatch } from 'redux';
import { CART_ACTION_TYPE, SEWING_PRODUCT } from './cart.constant';

// SAVE CURRENT CART IN LOCAL STORAGE AFTER EVERY CHANGE
export const addSewingProduct = (data: SEWING_PRODUCT) => {
  return (dispatch: Dispatch) =>
    dispatch({
      type: CART_ACTION_TYPE.ADD_SEWING_PRODUCT,
      payload: data,
    });
};
