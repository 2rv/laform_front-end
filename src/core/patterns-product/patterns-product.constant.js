export const PATTERNS_PRODUCT_ROUTE_PATH = ({ id } = { id: '[id]' }) =>
  `/patterns/${id}`;

export const PATTERNS_PRODUCT_STORE_NAME = 'PATTERN_PRODUCT';

export const PATTERNS_PRODUCT_API = {
  PATTERNS_PRODUCT_UPLOAD: {
    ENDPOINT: (currentLang, id) =>
      `/pattern-product/get/${id}/?lang=${currentLang}`,
    TYPE: 'GET',
  },
  PATTERNS_PRODUCT_UPLOAD_AUTH: {
    ENDPOINT: (currentLang, id) =>
      `/pattern-product/auth/get/${id}/?lang=${currentLang}`,
    TYPE: 'GET',
  },
  PATTERNS_PRODUCT_SEND_PDF_TO_MAIL: {
    ENDPOINT: '/mail/send-pdf',
    TYPE: 'POST',
  },
};
