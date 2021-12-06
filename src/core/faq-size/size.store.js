import {
  initRequestState,
  setRequestError,
  setRequestPending,
  setRequestSuccess,
} from '../../main/store/store.service';
import { SIZE_ACTION_TYPE } from './size.type';

const initialState = {
  data: initRequestState(),
  save: initRequestState(),
};

export function sizeStore(state = initialState, action) {
  switch (action.type) {
    case SIZE_ACTION_TYPE.DATA_GET_PENDING:
      return {
        ...state,
        data: setRequestPending(state.data),
      };
    case SIZE_ACTION_TYPE.DATA_GET_SUCCESS:
      return {
        ...state,
        data: setRequestSuccess(state.data, action.data),
      };
    case SIZE_ACTION_TYPE.DATA_GET_ERROR:
      return {
        ...state,
        data: setRequestError(state.data, action.errorMessage),
      };

    case SIZE_ACTION_TYPE.DATA_SAVE_PENDING:
      return {
        ...state,
        save: setRequestPending(state.save),
      };
    case SIZE_ACTION_TYPE.DATA_SAVE_SUCCESS:
      return {
        ...state,
        save: setRequestSuccess(state.save),
      };
    case SIZE_ACTION_TYPE.DATA_SAVE_ERROR:
      return {
        ...state,
        save: setRequestError(state.save, action.errorMessage),
      };

    default:
      return state;
  }
}
