export const ARTICLES_ROUTE_PATH = '/article';
export const ARTICLES_STORE_NAME = 'ARTICLES';
export const ARTICLES_API = {
  ARTICLES_UPLOAD: {
    ENDPOINT: ({ currentLang, page, where, sort, by, category }) =>
      `/post/get?lang=${currentLang}${Boolean(page) ? `&page=${page}` : ''}${
        Boolean(where) ? `&where=${where}` : ''
      }${Boolean(sort) ? `&sort=${sort}` : ''}${
        Boolean(by) ? `&by=${by}` : ''
      }${Boolean(category) ? `&category=${category}` : ''}`,
    TYPE: 'GET',
  },
  ARTICLES_UPLOAD_AUTH: {
    ENDPOINT: ({ currentLang, page, where, sort, by, category }) =>
      `/post/auth/get?lang=${currentLang}${
        Boolean(page) ? `&page=${page}` : ''
      }${Boolean(where) ? `&where=${where}` : ''}${
        Boolean(sort) ? `&sort=${sort}` : ''
      }${Boolean(by) ? `&by=${by}` : ''}${
        Boolean(category) ? `&category=${category}` : ''
      }`,
    TYPE: 'GET',
  },
  ARTICLE_UPDATE: {
    ENDPOINT: (id) => `/post/update/${id}`,
    TYPE: 'PUT',
  },
  ARTICLE_DELETE: {
    ENDPOINT: (id) => `/post/delete/${id}`,
    TYPE: 'DELETE',
  },
  CATEGORIES_UPLOAD_DATA: {
    ENDPOINT: (currentLang, type) => `/category/get?lang=${currentLang}&type=${type}`,
    TYPE: 'GET',
  },
};
