import {
  initRequestState,
  setRequestError,
  setRequestPending,
  setRequestSuccess,
} from '../../main/store/store.service';
import { PRIVACY_POLICY_ACTION_TYPE } from './privacy-policy.type';

const initialState = {
  privacyPolicy: initRequestState(),
};

export function privacyPolicyStore(state = initialState, action) {
  switch (action.type) {
    case PRIVACY_POLICY_ACTION_TYPE.PRIVACY_POLICY_DATA_UPLOAD_PENDING:
      return {
        ...state,
        privacyPolicy: setRequestPending(state.privacyPolicy),
      };
    case PRIVACY_POLICY_ACTION_TYPE.PRIVACY_POLICY_DATA_UPLOAD_SUCCESS:
      return {
        ...state,
        privacyPolicy: setRequestSuccess(state.privacyPolicy, action.data),
      };
    case PRIVACY_POLICY_ACTION_TYPE.PRIVACY_POLICY_DATA_UPLOAD_ERROR:
      return {
        ...state,
        privacyPolicy: setRequestError(state.privacyPolicy, action.errorMessage),
      };
    default:
      return state;
  }
}
