import { httpRequest } from '../../main/http';
import { LEGAL_INFORMATION_API } from './legal-information.constant';
import { LEGAL_INFORMATION_ACTION_TYPE } from './legal-information.type';

export function legalInformationUploadData(data) {
  return async (dispatch) => {
    dispatch({
      type: LEGAL_INFORMATION_ACTION_TYPE.LEGAL_INFORMATION_DATA_UPLOAD_PENDING,
    });

    try {
      const response = await httpRequest({
        method: LEGAL_INFORMATION_API.LEGAL_INFORMATION_DATA_UPLOAD.TYPE,
        url: LEGAL_INFORMATION_API.LEGAL_INFORMATION_DATA_UPLOAD.ENDPOINT,
        data,
      });

      dispatch({
        type: LEGAL_INFORMATION_ACTION_TYPE.LEGAL_INFORMATION_DATA_UPLOAD_SUCCESS,
        data: response.data,
      });
    } catch (err) {
      if (err.response) {
        dispatch({
          type: LEGAL_INFORMATION_ACTION_TYPE.LEGAL_INFORMATION_DATA_UPLOAD_ERROR,
          errorMessage: err.response.data.message,
        });
      }
    }
  };
}

export function legalInformationLoadData() {
  return async (dispatch) => {
    dispatch({
      type: LEGAL_INFORMATION_ACTION_TYPE.LEGAL_INFORMATION_DATA_UPLOAD_PENDING,
    });

    try {
      const response = await httpRequest({
        method: LEGAL_INFORMATION_API.LEGAL_INFORMATION_DATA_LOAD.TYPE,
        url: LEGAL_INFORMATION_API.LEGAL_INFORMATION_DATA_LOAD.ENDPOINT,
      });

      dispatch({
        type: LEGAL_INFORMATION_ACTION_TYPE.LEGAL_INFORMATION_DATA_UPLOAD_SUCCESS,
        data: response.data,
      });
    } catch (err) {
      if (err.response) {
        dispatch({
          type: LEGAL_INFORMATION_ACTION_TYPE.LEGAL_INFORMATION_DATA_UPLOAD_ERROR,
          errorMessage: err.response.data.message,
        });
      }
    }
  };
}
