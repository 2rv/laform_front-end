export const ABOUT_ACCOUNT_ROUTE_PATH = '/profile';
export const ABOUT_ACCOUNT_STORE_NAME = 'ABOUT_ACCOUNT';
export const ABOUT_ACCOUNT_API = {
  USER_LOAD_DATA: {
    ENDPOINT: (id) => `user/get/${id}`,
    TYPE: 'GET',
  },
};
