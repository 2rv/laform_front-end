export const SEARCH_BUTTON_STORE_NAME = 'SEARCH_BUTTON';

export const SEARCH_BUTTON_API = {
  MASTER_CLASS_UPLOAD_DATA: {
    ENDPOINT: (currentLang, filter = '', page = 1) =>
      `/master-class/get?lang=${currentLang}${Boolean(filter) ? `&where=${filter}`: ''}&page=${page}`,
    TYPE: 'GET',
  },
  SEWING_GOODS_UPLOAD_DATA: {
    ENDPOINT: (currentLang, filter = '', page = 1) =>
      `/sewing-product/get?lang=${currentLang}${Boolean(filter) ? `&where=${filter}`: ''}&page=${page}`,
    TYPE: 'GET',
  },
  ARTICLE_UPLOAD_DATA: {
    ENDPOINT: (currentLang, filter = '', page = 1) =>
      `/post/get?lang=${currentLang}${Boolean(filter) ? `&where=${filter}`: ''}&page=${page}`,
    TYPE: 'GET',
  },
  PATTERNS_UPLOAD: {
    ENDPOINT: (currentLang, filter = '', page = 1) =>
      `/pattern-product/get?lang=${currentLang}${Boolean(filter) ? `&where=${filter}`: ''}&page=${page}`,
    TYPE: 'GET',
  },
};
