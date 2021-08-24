import { Dispatch } from 'redux';
import { CART_ACTION_TYPE } from './cart.constant';
import {
  SewingProductPropType,
  PatternProductPropType,
  MasterClassPropType,
} from './cart.type';

export const purgeCart = () => {
  return (dispatch: Dispatch) => dispatch({ type: CART_ACTION_TYPE.PURGE });
};
export const rehidrate = () => {
  return (dispatch: Dispatch) => dispatch({ type: CART_ACTION_TYPE.REHIDRATE });
};
export const incrementSewingProduct = (
  id: number | string,
  incrementBy: number,
) => {
  return (dispatch: Dispatch) =>
    dispatch({
      type: CART_ACTION_TYPE.INCREMENT_SEWING_PRODUCT,
      id: id,
      incrementBy: incrementBy,
    });
};
export const incrementPatternProduct = (
  id: number | string,
  incrementBy: number,
) => {
  return (dispatch: Dispatch) =>
    dispatch({
      type: CART_ACTION_TYPE.INCREMENT_PATTERN_PRODUCT,
      id: id,
      incrementBy: incrementBy,
    });
};
export const incrementMasterClass = (
  id: number | string,
  incrementBy: number,
) => {
  return (dispatch: Dispatch) =>
    dispatch({
      type: CART_ACTION_TYPE.INCREMENT_MASTER_CLASS,
      id: id,
      incrementBy: incrementBy,
    });
};

export const decrementSewingProduct = (
  id: number | string,
  decrementBy: number,
) => {
  return (dispatch: Dispatch) =>
    dispatch({
      type: CART_ACTION_TYPE.DECREMENT_SEWING_PRODUCT,
      id: id,
      decrementBy: decrementBy,
    });
};
export const decrementPatternProduct = (
  id: number | string,
  decrementBy: number,
) => {
  return (dispatch: Dispatch) =>
    dispatch({
      type: CART_ACTION_TYPE.DECREMENT_PATTERN_PRODUCT,
      id: id,
      decrementBy: decrementBy,
    });
};
export const decrementMasterClass = (
  id: number | string,
  decrementBy: number,
) => {
  return (dispatch: Dispatch) =>
    dispatch({
      type: CART_ACTION_TYPE.DECREMENT_MASTER_CLASS,
      id: id,
      decrementBy: decrementBy,
    });
};

export const addSewingProduct = (product: SewingProductPropType) => {
  return (dispatch: Dispatch) =>
    dispatch({
      type: CART_ACTION_TYPE.ADD_SEWING_PRODUCT,
      product,
    });
};
export const addPatternProduct = (product: PatternProductPropType) => {
  return (dispatch: Dispatch) =>
    dispatch({
      type: CART_ACTION_TYPE.ADD_PATTERN_PRODUCT,
      product,
    });
};
export const addMasterClass = (product: MasterClassPropType) => {
  return (dispatch: Dispatch) =>
    dispatch({
      type: CART_ACTION_TYPE.ADD_MASTER_CLASS,
      product,
    });
};

export const deleteSewingProduct = (id: number | string) => {
  return (dispatch: Dispatch) =>
    dispatch({
      type: CART_ACTION_TYPE.DELETE_SEWING_PRODUCT,
      id,
    });
};
export const deletePatternProduct = (id: number | string) => {
  return (dispatch: Dispatch) =>
    dispatch({
      type: CART_ACTION_TYPE.DELETE_PATTERN_PRODUCT,
      id,
    });
};
export const deleteMasterClass = (id: number | string) => {
  return (dispatch: Dispatch) =>
    dispatch({
      type: CART_ACTION_TYPE.DELETE_MASTER_CLASS,
      id,
    });
};

export const changeSewingProductParametrs = (
  id: number | string,
  size: string,
  color: string,
) => {
  return (dispatch: Dispatch) =>
    dispatch({
      type: CART_ACTION_TYPE.CHANGE_SEWING_PRODUCT_PARAMETRS,
      id,
      size,
      color,
    });
};
export const changePatternProductParametrs = (
  id: number | string,
  size: string,
  format: string,
) => {
  return (dispatch: Dispatch) =>
    dispatch({
      type: CART_ACTION_TYPE.CHANGE_PATTERN_PRODUCT_PARAMETRS,
      id,
      size,
      format,
    });
};
export const changeMasterClassParametrs = (
  id: number | string,
  programm: string,
) => {
  return (dispatch: Dispatch) =>
    dispatch({
      type: CART_ACTION_TYPE.CHANGE_MASTER_CLASS_PARAMETRS,
      id,
      programm,
    });
};
