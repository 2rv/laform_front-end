export const PATTERNS_PRODUCT_ROUTE_PATH = '/patterns/[id]';

export const PATTERNS_PRODUCT_STORE_NAME = 'patterns-product';

export const PATTERNS_PRODUCT_API = {
  PATTERNS_PRODUCT_UPLOAD: {
    ENDPOINT: (id, currentLang) => `/pattern-product/get/${id}/?lang=${currentLang}`,
    TYPE: 'GET',
  },
  PATTERNS_PRODUCT_SEND_PDF_TO_MAIL: {
    ENDPOINT: '/mail/send-pdf',
    TYPE: 'POST',
  },
};
