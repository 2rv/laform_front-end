import {
  initRequestState,
  setRequestError,
  setRequestPending,
  setRequestSuccess,
} from '../../main/store/store.service';

import { PROMOCODES_ACTION_TYPE } from './promocodes.type';

const initialState = {
  promocodes: initRequestState(),
};

export function promocodesStore(state = initialState, action) {
  switch (action.type) {
    case PROMOCODES_ACTION_TYPE.PROMOCODES_UPLOAD_PENDING:
      return {
        ...state,
        promocodes: setRequestPending(state.promocodes),
      };
    case PROMOCODES_ACTION_TYPE.PROMOCODES_UPLOAD_SUCCESS:
      return {
        ...state,
        promocodes: setRequestSuccess(state.promocodes, action.promocodes),
      };
    case PROMOCODES_ACTION_TYPE.PROMOCODES_UPLOAD_ERROR:
      return {
        ...state,
        promocodes: setRequestError(state.promocodes, action.errorMessage),
      };
    default:
      return state;
  }
}
