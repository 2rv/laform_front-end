import {
  initRequestState,
  setRequestError,
  setRequestPending,
  setRequestSuccess,
} from '../../main/store/store.service';
import { USERS_ACTION_TYPE } from './users.type';

const initialState = {
  users: initRequestState({
    users: [],
    currentPage: 1,
    totalRecords: 0,
  }),
};

export function usersStore(state = initialState, action) {
  switch (action?.type) {
    case USERS_ACTION_TYPE.USERS_UPLOAD_PENDING:
      return {
        ...state,
        users: setRequestPending(state.users),
      };
    case USERS_ACTION_TYPE.USERS_UPLOAD_SUCCESS:
      const oldUsers = state.users.data.users;
      const newUsers = action.payload.users;
      const totalRecords = action.payload.totalRecords;
      const prevCurrentPage = state.users.data.currentPage;
      return {
        ...state,
        users: setRequestSuccess(
          state.users,
          {
            users: [...oldUsers, ...newUsers],
            currentPage: prevCurrentPage + 1,
            totalRecords,
          },
        ),
      };
    case USERS_ACTION_TYPE.USERS_UPLOAD_ERROR:
      return {
        ...state,
        users: setRequestError(state.users, action.errorMessage),
      };
    case USERS_ACTION_TYPE.USER_UPDATE_UPLOAD_PENDING:
      return {
        ...state,
        users: setRequestPending(state.users),
      };
    case USERS_ACTION_TYPE.USER_UPDATE_UPLOAD_SUCCESS:
      const users = state.users.data.users;
      console.log('users:', users);
      return {
        ...state,
        users: setRequestSuccess(
          state.users,
          {
            ...state.users.data,
            users: state.users.data.users.map((user) => {
              if (user.id === action.payload.userId) {
                user.role = action.payload.role;
              }

              return user;
            })
          }
        ),
      };
    case USERS_ACTION_TYPE.USER_UPDATE_UPLOAD_ERROR:
      return {
        ...state,
        users: setRequestError(state.users, action.errorMessage),
      };
    default:
      return state;
  }
}
