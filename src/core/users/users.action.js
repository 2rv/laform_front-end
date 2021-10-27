import { httpRequest } from '../../main/http';
import { USERS_API } from './users.constant';
import { USERS_ACTION_TYPE } from './users.type';
import { convertUsersOrderData } from './users.convert';

export function usersLoadData(page) {
  return async (dispatch) => {
    dispatch({
      type: USERS_ACTION_TYPE.USERS_UPLOAD_PENDING,
    });

    try {
      const response = await httpRequest({
        method: USERS_API.USERS_LOAD.TYPE,
        url: USERS_API.USERS_LOAD.ENDPOINT(page),
      });

      dispatch({
        type: USERS_ACTION_TYPE.USERS_UPLOAD_SUCCESS,
        payload: {
          users: response.data[0].map(convertUsersOrderData),
          totalRecords: response.data[1],
        },
      });
    } catch (err) {
      if (err.response) {
        dispatch({
          type: USERS_ACTION_TYPE.USERS_UPLOAD_ERROR,
          errorMessage: err.response.data.message,
        });
      }
    }
  };
}

export function updateUserData(userId, data) {
  return async (dispatch) => {
    dispatch({
      type: USERS_ACTION_TYPE.USER_UPDATE_UPLOAD_PENDING,
    });

    try {
      await httpRequest({
        method: USERS_API.USER_UPDATE_DATA.TYPE,
        url: USERS_API.USER_UPDATE_DATA.ENDPOINT(userId),
        data,
      });

      dispatch({
        type: USERS_ACTION_TYPE.USER_UPDATE_UPLOAD_SUCCESS,
        payload: { userId, role: data.role },
      });
    } catch (err) {
      if (err.response) {
        dispatch({
          type: USERS_ACTION_TYPE.USER_UPDATE_UPLOAD_ERROR,
          errorMessage: err.response.data.message,
        });
      }
    }
  };
}
