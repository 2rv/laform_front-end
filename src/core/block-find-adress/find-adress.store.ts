import {
  initRequestState,
  setRequestError,
  setRequestPending,
  setRequestSuccess,
} from '../../main/store/store.service';
import { FIND_ADRESS_ACTION_TYPE } from './find-adress.type';

const initialState = {
  save: initRequestState(),
  data: initRequestState(),
};

export function findAdressStore(state = initialState, action: any) {
  switch (action.type) {
    case FIND_ADRESS_ACTION_TYPE.SAVE_DATA_PENDING:
      return {
        ...state,
        save: setRequestPending(state.save),
      };
    case FIND_ADRESS_ACTION_TYPE.SAVE_DATA_SUCCESS:
      return {
        ...state,
        save: setRequestSuccess(state.save),
      };
    case FIND_ADRESS_ACTION_TYPE.SAVE_DATA_ERROR:
      return {
        ...state,
        save: setRequestError(state.save, action.errorMessage),
      };

    case FIND_ADRESS_ACTION_TYPE.GET_DATA_PENDING:
      return {
        ...state,
        data: setRequestPending(state.data),
      };
    case FIND_ADRESS_ACTION_TYPE.GET_DATA_SUCCESS:
      return {
        ...state,
        data: setRequestSuccess(state.data, action.data),
      };
    case FIND_ADRESS_ACTION_TYPE.GET_DATA_ERROR:
      return {
        ...state,
        data: setRequestError(state.data, action.errorMessage),
      };

    default:
      return state;
  }
}
