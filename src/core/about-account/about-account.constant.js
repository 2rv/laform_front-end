export const ABOUT_ACCOUNT_ROUTE_PATH = '/profile';
export const ABOUT_ACCOUNT_STORE_NAME = 'ABOUT_ACCOUNT';
export const ABOUT_ACCOUNT_API = {
  USER_LOAD_DATA: {
    ENDPOINT: 'auth/account-data',
    TYPE: 'GET',
  },
  USER_DELIVERY_INFO_LOAD: {
    ENDPOINT: 'user/info/get',
    TYPE: 'GET',
  },
  LIKES_LOAD: {
    ENDPOINT: 'like/get',
    TYPE: 'GET',
  },
  COMMENTS_LOAD: {
    ENDPOINT: 'comment/get',
    TYPE: 'GET',
  },
};
