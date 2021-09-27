export const ARTICLE_PAGE_ROUTE_PATH = ({ id } = { id: '[id]' }) =>
  `/article/${id}`;
export const ARTICLE_PAGE_STORE_NAME = 'ARTICLE_PAGE';
export const ARTICLE_PAGE_API = {
  ARTICLE_PAGE_UPLOAD: {
    ENDPOINT: (currentLang, id) => `/post/get/${id}/?lang=${currentLang}`,
    TYPE: 'GET',
  },
  ARTICLE_PAGE_UPLOAD_AUTH: {
    ENDPOINT: (currentLang, id) => `/post/auth/get/${id}/?lang=${currentLang}`,
    TYPE: 'GET',
  },
};
