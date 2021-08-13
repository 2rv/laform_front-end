import {
  initRequestState,
  setRequestError,
  setRequestPending,
  setRequestSuccess,
} from '../../main/store/store.service';

import { HOME_ACTION_TYPE } from './home.type';

const initialState = {
  pinnedMasterClasses: initRequestState(),
};

export function homeStore(state = initialState, action) {
  switch (action.type) {
    case HOME_ACTION_TYPE.HOME_UPLOAD_PENDING:
      return {
        ...state,
        pinnedMasterClasses: setRequestPending(state.pinnedMasterClasses),
      };
    case HOME_ACTION_TYPE.HOME_UPLOAD_SUCCESS:
      return {
        ...state,
        pinnedMasterClasses: setRequestSuccess(state.pinnedMasterClasses, action.pinnedMasterClasses),
      };
    case HOME_ACTION_TYPE.HOME_UPLOAD_ERROR:
      return {
        ...state,
        pinnedMasterClasses: setRequestError(state.pinnedMasterClasses, action.errorMessage),
      };
    default:
      return state;
  }
}
