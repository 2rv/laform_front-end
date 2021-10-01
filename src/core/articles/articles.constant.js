export const ARTICLES_ROUTE_PATH = '/article';
export const ARTICLES_STORE_NAME = 'ARTICLES';
export const ARTICLES_API = {
  ARTICLES_UPLOAD: {
    ENDPOINT: (currentLang, page, where, sort, by) =>
      `/post/get?lang=${currentLang}&page=${page}${
        Boolean(where) ? `&where=${where}` : ''
      }${Boolean(sort) ? `&sort=${sort}` : ''}${
        Boolean(by) ? `&by=${by}` : ''
      }`,
    TYPE: 'GET',
  },
  ARTICLES_UPLOAD_AUTH: {
    ENDPOINT: (currentLang, page, where, sort, by) =>
      `/post/auth/get?lang=${currentLang}&page=${page}${
        Boolean(where) ? `&where=${where}` : ''
      }${Boolean(sort) ? `&sort=${sort}` : ''}${
        Boolean(by) ? `&by=${by}` : ''
      }`,
    TYPE: 'GET',
  },
};
