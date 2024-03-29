export const PATTERNS_PAGE_ROUTE_PATH = ({ id } = { id: '[id]' }) =>
  `/purchases/pattern/${id}`;

export const PATTERNS_PAGE_STORE_NAME = 'PATTERN_PAGE';

export const PATTERNS_PAGE_API = {
  PATTERNS_PAGE_UPLOAD: {
    ENDPOINT: (id) => `/purchase/user/get/${id}`,
    TYPE: 'GET',
  },
  PATTERNS_PRODUCT_SEND_PDF_TO_MAIL: {
    ENDPOINT: '/mail/send-pdf',
    TYPE: 'POST',
  },
};
