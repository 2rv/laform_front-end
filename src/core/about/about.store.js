import {
  initRequestState,
  setRequestError,
  setRequestPending,
  setRequestSuccess,
} from '../../main/store/store.service';
import { ABOUT_ACTION_TYPE } from './about.type';

const initialState = {
  about: initRequestState(),
};

export function aboutStore(state = initialState, action) {
  switch (action.type) {
    case ABOUT_ACTION_TYPE.ABOUT_DATA_UPLOAD_PENDING:
      return {
        ...state,
        about: setRequestPending(state.about),
      };
    case ABOUT_ACTION_TYPE.ABOUT_DATA_UPLOAD_SUCCESS:
      return {
        ...state,
        about: setRequestSuccess(state.about, action.data),
      };
    case ABOUT_ACTION_TYPE.ABOUT_DATA_UPLOAD_ERROR:
      return {
        ...state,
        about: setRequestError(state.about, action.errorMessage),
      };
    default:
      return state;
  }
}
