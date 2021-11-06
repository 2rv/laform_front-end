import {
  initRequestState,
  setRequestError,
  setRequestPending,
  setRequestSuccess,
} from '../../main/store/store.service';
import { LEGAL_INFORMATION_ACTION_TYPE } from './legal-information.type';

const initialState = {
  legalInformation: initRequestState(),
};

export function legalInformationStore(state = initialState, action) {
  switch (action.type) {
    case LEGAL_INFORMATION_ACTION_TYPE.LEGAL_INFORMATION_DATA_UPLOAD_PENDING:
      return {
        ...state,
        legalInformation: setRequestPending(state.legalInformation),
      };
    case LEGAL_INFORMATION_ACTION_TYPE.LEGAL_INFORMATION_DATA_UPLOAD_SUCCESS:
      return {
        ...state,
        legalInformation: setRequestSuccess(state.legalInformation, action.data),
      };
    case LEGAL_INFORMATION_ACTION_TYPE.LEGAL_INFORMATION_DATA_UPLOAD_ERROR:
      return {
        ...state,
        legalInformation: setRequestError(state.legalInformation, action.errorMessage),
      };
    default:
      return state;
  }
}