import {
  initRequestState,
  setRequestError,
  setRequestPending,
  setRequestSuccess,
} from '../../../main/store/store.service';
import { FIND_ADRESS_ACTION_TYPE } from './find-adress.type';

const initialState = {
  adress: initRequestState(),
};

export function findAdressStore(state = initialState, action: any) {
  switch (action.type) {
    case FIND_ADRESS_ACTION_TYPE.FIND_ADRESS_PENDING:
      return {
        ...state,
        adress: setRequestPending(state.adress),
      };
    case FIND_ADRESS_ACTION_TYPE.FIND_ADRESS_SUCCESS:
      return {
        ...state,
        adress: setRequestSuccess(state.adress, action.data),
      };
    case FIND_ADRESS_ACTION_TYPE.FIND_ADRESS_ERROR:
      return {
        ...state,
        adress: setRequestError(state.adress, action.errorMessage),
      };
    default:
      return state;
  }
}
