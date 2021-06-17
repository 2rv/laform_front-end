import { httpRequest } from '../../main/http';

import { SETTINGS_CHANGE_DELIVERY_INFO_API } from './settings-change-delivery-info.constant';
import { SETTINGS_CHANGE_DELIVERY_INFO_ACTION_TYPE } from './settings-change-delivery-info.type';

export function settingsChangeDeliveryInfoLoadData() {
  return async (dispatch) => {
    dispatch({
      type: SETTINGS_CHANGE_DELIVERY_INFO_ACTION_TYPE.SETTINGS_CHANGE_DELIVERY_INFO_DATA_LOAD_PENDING,
    });

    try {
      const { data } = await httpRequest({
        method: SETTINGS_CHANGE_DELIVERY_INFO_API.GET_INFO.METHOD,
        url: SETTINGS_CHANGE_DELIVERY_INFO_API.GET_INFO.ENDPOINT,
      });

      dispatch({
        type: SETTINGS_CHANGE_DELIVERY_INFO_ACTION_TYPE.SETTINGS_CHANGE_DELIVERY_INFO_DATA_LOAD_SUCCESS,
        data,
      });
    } catch (err) {
      if (err.response) {
        dispatch({
          type: SETTINGS_CHANGE_DELIVERY_INFO_ACTION_TYPE.SETTINGS_CHANGE_DELIVERY_INFO_DATA_LOAD_ERROR,
          errorMessage: err.response.data.message,
        });
      }
    }
  };
}

export function settingsChangeDeliveryInfoFormUploadData(data) {
  return async (dispatch) => {
    dispatch({
      type: SETTINGS_CHANGE_DELIVERY_INFO_ACTION_TYPE.SETTINGS_CHANGE_DELIVERY_INFO_FORM_UPLOAD_PENDING,
    });

    try {
      await httpRequest({
        method: SETTINGS_CHANGE_DELIVERY_INFO_API.UPDATE_INFO.METHOD,
        url: SETTINGS_CHANGE_DELIVERY_INFO_API.UPDATE_INFO.ENDPOINT,
        data,
      });

      dispatch({
        type: SETTINGS_CHANGE_DELIVERY_INFO_ACTION_TYPE.SETTINGS_CHANGE_DELIVERY_INFO_FORM_UPLOAD_SUCCESS,
      });
    } catch (err) {
      if (err.response) {
        dispatch({
          type: SETTINGS_CHANGE_DELIVERY_INFO_ACTION_TYPE.SETTINGS_CHANGE_DELIVERY_INFO_FORM_UPLOAD_ERROR,
          errorMessage: err.response.data.message,
        });
      }
    }
  };
}
