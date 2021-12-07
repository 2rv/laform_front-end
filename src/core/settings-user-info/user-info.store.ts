import {
  initRequestState,
  setRequestError,
  setRequestPending,
  setRequestSuccess,
} from '../../main/store/store.service';
import { USER_INFO_ACTION_TYPE } from './user-info.type';

const initialState = {
  save: initRequestState(),
  data: initRequestState(),
};

export function userInfoStore(state = initialState, action: any) {
  switch (action.type) {
    case USER_INFO_ACTION_TYPE.SAVE_DATA_PENDING:
      return {
        ...state,
        save: setRequestPending(state.save),
      };
    case USER_INFO_ACTION_TYPE.SAVE_DATA_SUCCESS:
      return {
        ...state,
        save: setRequestSuccess(state.save),
      };
    case USER_INFO_ACTION_TYPE.SAVE_DATA_ERROR:
      return {
        ...state,
        save: setRequestError(state.save, action.errorMessage),
      };

    case USER_INFO_ACTION_TYPE.GET_DATA_PENDING:
      return {
        ...state,
        data: setRequestPending(state.data),
      };
    case USER_INFO_ACTION_TYPE.GET_DATA_SUCCESS:
      return {
        ...state,
        data: setRequestSuccess(state.data, action.data),
      };
    case USER_INFO_ACTION_TYPE.GET_DATA_ERROR:
      return {
        ...state,
        data: setRequestError(state.data, action.errorMessage),
      };

    default:
      return state;
  }
}
