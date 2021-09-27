import {
  initRequestState,
  setRequestError,
  setRequestPending,
  setRequestSuccess,
} from '../../main/store/store.service';
import { USERS_ACTION_TYPE } from './users.type';

const initialState = {
  users: initRequestState(),
};

export function usersStore(state = initialState, action) {
  switch (action?.type) {
    case USERS_ACTION_TYPE.USERS_UPLOAD_PENDING:
      return {
        ...state,
        users: setRequestPending(state.users),
      };
    case USERS_ACTION_TYPE.USERS_UPLOAD_SUCCESS:
      return {
        ...state,
        users: setRequestSuccess(state.users, action.payload),
      };
    case USERS_ACTION_TYPE.USERS_UPLOAD_ERROR:
      return {
        ...state,
        users: setRequestError(state.users, action.errorMessage),
      };
    default:
      return state;
  }
}
