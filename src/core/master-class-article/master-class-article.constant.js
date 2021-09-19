export const MASTER_CLASS_ARTICLE_ROUTE_PATH = '/article/[id]';

export const MASTER_CLASS_ARTICLE_STORE_NAME = 'MASTER_CLASS_ARTICLE';

export const MASTER_CLASS_ARTICLE_API = {
  MASTER_CLASS_ARTICLE_UPLOAD: {
    ENDPOINT: (currentLang, id) => `/master-class/get/${id}/?lang=${currentLang}`,
    TYPE: 'GET',
  },
};
