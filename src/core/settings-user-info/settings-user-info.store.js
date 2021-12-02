import {
  initRequestState,
  setRequestError,
  setRequestPending,
  setRequestSuccess,
} from '../../main/store/store.service';
import { SETTINGS_USER_INFO_ACTION_TYPE } from './settings-user-info.type';

const initialState = {
  data: initRequestState(),
  save: initRequestState(),
};

export function settingsUserInfoStore(state = initialState, action) {
  switch (action.type) {
    case SETTINGS_USER_INFO_ACTION_TYPE.LOAD_PENDING:
      return {
        ...state,
        data: setRequestPending(state.data),
      };
    case SETTINGS_USER_INFO_ACTION_TYPE.LOAD_SUCCESS:
      return {
        ...state,
        data: setRequestSuccess(state.data, action.data),
      };
    case SETTINGS_USER_INFO_ACTION_TYPE.LOAD_ERROR:
      return {
        ...state,
        data: setRequestError(state.data, action.errorMessage),
      };

    case SETTINGS_USER_INFO_ACTION_TYPE.SAVE_PENDING:
      return {
        ...state,
        save: setRequestPending(state.save),
      };
    case SETTINGS_USER_INFO_ACTION_TYPE.SAVE_SUCCESS:
      return {
        ...state,
        save: setRequestSuccess(state.save),
      };
    case SETTINGS_USER_INFO_ACTION_TYPE.SAVE_ERROR:
      return {
        ...state,
        save: setRequestError(state.save, action.errorMessage),
      };

    default:
      return state;
  }
}
