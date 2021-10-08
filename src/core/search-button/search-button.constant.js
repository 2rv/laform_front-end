export const SEARCH_BUTTON_STORE_NAME = 'SEARCH_BUTTON';

export const SEARCH_BUTTON_API = {
  MASTER_CLASS_UPLOAD_DATA: {
    ENDPOINT: (currentLang, filter = '') =>
      `/master-class/get?lang=${currentLang}${Boolean(filter) ? `&where=${filter}`: ''}`,
    TYPE: 'GET',
  },
  SEWING_GOODS_UPLOAD_DATA: {
    ENDPOINT: (currentLang, filter = '') =>
      `/sewing-product/get?lang=${currentLang}${Boolean(filter) ? `&where=${filter}`: ''}`,
    TYPE: 'GET',
  },
  ARTICLE_UPLOAD_DATA: {
    ENDPOINT: (currentLang, filter = '') =>
      `/post/get?lang=${currentLang}${Boolean(filter) ? `&where=${filter}`: ''}`,
    TYPE: 'GET',
  },
  PATTERNS_UPLOAD: {
    ENDPOINT: (currentLang, filter = '') =>
      `/pattern-product/get?lang=${currentLang}${Boolean(filter) ? `&where=${filter}`: ''}`,
    TYPE: 'GET',
  },
};
