export const RECOMENDATION_STORE_NAME = 'RECOMENDATION';

export const RECOMENDATION_API = {
  MASTER_CLASS_UPLOAD_DATA: {
    ENDPOINT: (currentLang) => `/master-class/get?lang=${currentLang}`,
    TYPE: 'GET',
  },
  SEWING_GOODS_UPLOAD_DATA: {
    ENDPOINT: (currentLang) => `/sewing-product/get?lang=${currentLang}`,
    TYPE: 'GET',
  },
  ARTICLE_UPLOAD_DATA: {
    ENDPOINT: (currentLang) => `/post/get?lang=${currentLang}`,
    TYPE: 'GET',
  },
  PATTERNS_UPLOAD: {
    ENDPOINT: (currentLang) => `/pattern-product/get?lang=${currentLang}`, //&page=1&size=1
    TYPE: 'GET',
  },
};
