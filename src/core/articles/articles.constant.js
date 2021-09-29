export const ARTICLES_ROUTE_PATH = '/article';
export const ARTICLES_STORE_NAME = 'ARTICLES';
export const ARTICLES_API = {
  ARTICLES_UPLOAD: {
    ENDPOINT: (currentLang) => `/post/get?lang=${currentLang}`, //&size=1&page=1
    TYPE: 'GET',
  },
  ARTICLES_UPLOAD_AUTH: {
    ENDPOINT: (currentLang) => `/post/auth/get?lang=${currentLang}`, //&size=1&page=1
    TYPE: 'GET',
  },
};
