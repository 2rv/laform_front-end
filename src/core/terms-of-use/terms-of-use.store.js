import {
  initRequestState,
  setRequestError,
  setRequestPending,
  setRequestSuccess,
} from '../../main/store/store.service';
import { TERMS_OF_USE_ACTION_TYPE } from './terms-of-use.type';

const initialState = {
  termsOfUse: initRequestState(),
};

export function termsOfUseStore(state = initialState, action) {
  switch (action.type) {
    case TERMS_OF_USE_ACTION_TYPE.TERMS_OF_USE_DATA_UPLOAD_PENDING:
      return {
        ...state,
        termsOfUse: setRequestPending(state.termsOfUse),
      };
    case TERMS_OF_USE_ACTION_TYPE.TERMS_OF_USE_DATA_UPLOAD_SUCCESS:
      return {
        ...state,
        termsOfUse: setRequestSuccess(state.termsOfUse, action.data),
      };
    case TERMS_OF_USE_ACTION_TYPE.TERMS_OF_USE_DATA_UPLOAD_ERROR:
      return {
        ...state,
        termsOfUse: setRequestError(state.termsOfUse, action.errorMessage),
      };
    default:
      return state;
  }
}
