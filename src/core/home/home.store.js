import {
  initRequestState,
  setRequestError,
  setRequestPending,
  setRequestSuccess,
} from '../../main/store/store.service';
import { HOME_ACTION_TYPE } from './home.type';

const initialState = {
  compilation: initRequestState(),
};

export function homeStore(state = initialState, action) {
  switch (action.type) {
    case HOME_ACTION_TYPE.HOME_COMPILATION_LOAD_PENDING:
      return {
        ...state,
        compilation: setRequestPending(state.compilation),
      };
    case HOME_ACTION_TYPE.HOME_COMPILATION_LOAD_SUCCESS:
      return {
        ...state,
        compilation: setRequestSuccess(state.compilation, action.data),
      };
    case HOME_ACTION_TYPE.HOME_COMPILATION_LOAD_ERROR:
      return {
        ...state,
        compilation: setRequestError(state.compilation, action.errorMessage),
      };
    default:
      return state;
  }
}
