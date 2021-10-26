export const USERS_ROUTE_PATH = '/users';
export const USERS_STORE_NAME = 'USERS';
export const USERS_API = {
  USERS_LOAD: {
    ENDPOINT: (page = 1) => `user/get?page=${page}`,
    TYPE: 'GET',
  },
  USER_UPDATE_DATA: {
    ENDPOINT: (userId) => `user/update/${userId}`,
    TYPE: 'PUT',
  },
};
