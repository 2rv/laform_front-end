import { httpRequest } from '../../main/http';
import { PRIVACY_POLICY_API } from './privacy-policy.constant';
import { PRIVACY_POLICY_ACTION_TYPE } from './privacy-policy.type';

export function privacyPolicyUploadData(data) {
  return async (dispatch) => {
    dispatch({
      type: PRIVACY_POLICY_ACTION_TYPE.PRIVACY_POLICY_DATA_UPLOAD_PENDING,
    });

    try {
      const response = await httpRequest({
        method: PRIVACY_POLICY_API.PRIVACY_POLICY_DATA_UPLOAD.TYPE,
        url: PRIVACY_POLICY_API.PRIVACY_POLICY_DATA_UPLOAD.ENDPOINT,
        data,
      });

      dispatch({
        type: PRIVACY_POLICY_ACTION_TYPE.PRIVACY_POLICY_DATA_UPLOAD_SUCCESS,
        data: response.data,
      });
    } catch (err) {
      if (err.response) {
        dispatch({
          type: PRIVACY_POLICY_ACTION_TYPE.PRIVACY_POLICY_DATA_UPLOAD_ERROR,
          errorMessage: err.response.data.message,
        });
      }
    }
  };
}

export function privacyPolicyLoadData() {
  return async (dispatch) => {
    dispatch({
      type: PRIVACY_POLICY_ACTION_TYPE.PRIVACY_POLICY_DATA_UPLOAD_PENDING,
    });

    try {
      const response = await httpRequest({
        method: PRIVACY_POLICY_API.PRIVACY_POLICY_DATA_LOAD.TYPE,
        url: PRIVACY_POLICY_API.PRIVACY_POLICY_DATA_LOAD.ENDPOINT,
      });

      dispatch({
        type: PRIVACY_POLICY_ACTION_TYPE.PRIVACY_POLICY_DATA_UPLOAD_SUCCESS,
        data: response.data,
      });
    } catch (err) {
      if (err.response) {
        dispatch({
          type: PRIVACY_POLICY_ACTION_TYPE.PRIVACY_POLICY_DATA_UPLOAD_ERROR,
          errorMessage: err.response.data.message,
        });
      }
    }
  };
}
