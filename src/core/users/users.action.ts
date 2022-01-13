import { Dispatch } from 'react';
import { httpRequest } from 'src/main/http';
import { USERS_ACTION_TYPE, UsersActionType, updateData } from './users.type';

type QueryType = {
  page?: number;
  where?: string;
  sort?: string;
  by?: string;
  category?: any;
};

enum USER_ROLE {
  'Заблокирован',
  'Пользователь',
  'Администратор',
}

export function getUsersAction(query: QueryType) {
  return async (dispatch: Dispatch<UsersActionType>) => {
    dispatch({
      type: USERS_ACTION_TYPE.RESET,
    });

    dispatch({
      type: USERS_ACTION_TYPE.GET_PENDING,
    });

    try {
      const response = await httpRequest({
        method: 'GET',
        url: 'user/get',
        params: {
          where: query.where,
          sort: query.sort,
          by: query.by,
          role: query.category ? USER_ROLE[query.category] : undefined,
        },
      });
      dispatch({
        type: USERS_ACTION_TYPE.GET_SUCCESS,
        users: response.data[0],
        total: response.data[1],
      });
    } catch (err: any) {
      if (err.response) {
        dispatch({
          type: USERS_ACTION_TYPE.GET_ERROR,
          error: err.response.data.message,
        });
      }
    }
  };
}
export function paginateUsersAction(query: QueryType) {
  return async (dispatch: Dispatch<UsersActionType>) => {
    dispatch({
      type: USERS_ACTION_TYPE.PAGINATION_PENDING,
    });
    try {
      const response = await httpRequest({
        method: 'GET',
        url: 'user/get',
        params: {
          page: query.page,
          where: query.where,
          sort: query.sort,
          by: query.by,
          role: query.category,
        },
      });
      dispatch({
        type: USERS_ACTION_TYPE.PAGINATION_SUCCESS,
        users: response.data[0],
        total: response.data[1],
      });
    } catch (err: any) {
      if (err.response) {
        dispatch({
          type: USERS_ACTION_TYPE.PAGINATION_ERROR,
          error: err.response.data.message,
        });
      }
    }
  };
}

export function updateUserAction(userId: number, data: updateData) {
  return async (dispatch: Dispatch<UsersActionType>) => {
    dispatch({
      type: USERS_ACTION_TYPE.UPDATE_PENDING,
    });

    try {
      await httpRequest({
        method: 'PUT',
        url: 'user/update/' + userId,
        data: data,
      });

      dispatch({
        type: USERS_ACTION_TYPE.UPDATE_SUCCESS,
        userId: userId,
        data: data,
      });
    } catch (err: any) {
      if (err.response) {
        dispatch({
          type: USERS_ACTION_TYPE.UPDATE_ERROR,
          error: err.response.data.message,
        });
      }
    }
  };
}
