import {
  initRequestState,
  setRequestError,
  setRequestPending,
  setRequestSuccess,
} from '../../main/store/store.service';

import { SETTINGS_CHANGE_DELIVERY_INFO_ACTION_TYPE } from './settings-change-delivery-info.type';

const initialState = {
  changeDeliveryInfo: initRequestState(),
  formChangeDeliveryInfo: initRequestState(),
  deliveryTypes: initRequestState(),
};

export function settingsChangeDeliveryInfoStore(state = initialState, action) {
  switch (action.type) {
    case SETTINGS_CHANGE_DELIVERY_INFO_ACTION_TYPE.SETTINGS_CHANGE_DELIVERY_INFO_DATA_LOAD_PENDING:
      return {
        ...state,
        changeDeliveryInfo: setRequestPending(state.changeDeliveryInfo),
      };
    case SETTINGS_CHANGE_DELIVERY_INFO_ACTION_TYPE.SETTINGS_CHANGE_DELIVERY_INFO_DATA_LOAD_SUCCESS:
      return {
        ...state,
        changeDeliveryInfo: setRequestSuccess(
          state.changeDeliveryInfo,
          action.data,
        ),
      };
    case SETTINGS_CHANGE_DELIVERY_INFO_ACTION_TYPE.SETTINGS_CHANGE_DELIVERY_INFO_DATA_LOAD_ERROR:
      return {
        ...state,
        changeDeliveryInfo: setRequestError(
          state.changeDeliveryInfo,
          action.errorMessage,
        ),
      };

    case SETTINGS_CHANGE_DELIVERY_INFO_ACTION_TYPE.SETTINGS_CHANGE_DELIVERY_INFO_FORM_UPLOAD_PENDING:
      return {
        ...state,
        formChangeDeliveryInfo: setRequestPending(state.formChangeDeliveryInfo),
      };
    case SETTINGS_CHANGE_DELIVERY_INFO_ACTION_TYPE.SETTINGS_CHANGE_DELIVERY_INFO_FORM_UPLOAD_SUCCESS:
      return {
        ...state,
        formChangeDeliveryInfo: setRequestSuccess(state.formChangeDeliveryInfo),
      };
    case SETTINGS_CHANGE_DELIVERY_INFO_ACTION_TYPE.SETTINGS_CHANGE_DELIVERY_INFO_FORM_UPLOAD_ERROR:
      return {
        ...state,
        formChangeDeliveryInfo: setRequestError(
          state.formChangeDeliveryInfo,
          action.errorMessage,
        ),
      };

    case SETTINGS_CHANGE_DELIVERY_INFO_ACTION_TYPE.SETTINGS_GET_DELIVERY_TYPES_LOAD_PENDING:
      return {
        ...state,
        deliveryTypes: setRequestPending(state.deliveryTypes),
      };
    case SETTINGS_CHANGE_DELIVERY_INFO_ACTION_TYPE.SETTINGS_GET_DELIVERY_TYPES_LOAD_SUCCESS:
      return {
        ...state,
        deliveryTypes: setRequestSuccess(state.deliveryTypes, action.payload),
      };
    case SETTINGS_CHANGE_DELIVERY_INFO_ACTION_TYPE.SETTINGS_GET_DELIVERY_TYPES_LOAD_ERROR:
      return {
        ...state,
        deliveryTypes: setRequestError(
          state.deliveryTypes,
          action.errorMessage,
        ),
      };

    default:
      return state;
  }
}
