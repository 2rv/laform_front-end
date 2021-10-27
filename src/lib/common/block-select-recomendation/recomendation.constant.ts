export const RECOMENDATION_STORE_NAME = 'RECOMENDATION_BLOCK';

export const RECOMENDATION_API = {
  MASTER_CLASS_UPLOAD_DATA: {
    ENDPOINT: (currentLang: string = 'ru') =>
      `/master-class/get?lang=${currentLang}`,
    TYPE: 'GET',
  },
  SEWING_GOODS_UPLOAD_DATA: {
    ENDPOINT: (currentLang: string = 'ru') =>
      `/sewing-product/get?lang=${currentLang}`,
    TYPE: 'GET',
  },
  ARTICLE_UPLOAD_DATA: {
    ENDPOINT: (currentLang: string = 'ru') => `/post/get?lang=${currentLang}`,
    TYPE: 'GET',
  },
  PATTERNS_UPLOAD: {
    ENDPOINT: (currentLang: string = 'ru') =>
      `/pattern-product/get?lang=${currentLang}`,
    TYPE: 'GET',
  },
};
