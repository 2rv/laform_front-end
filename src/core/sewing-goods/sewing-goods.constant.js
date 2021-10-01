export const SEWING_GOODS_ROUTE_PATH = '/sewing-goods';
export const SEWING_GOODS_STORE_NAME = 'SEWING_GOODS';
export const SEWING_GOODS_API = {
  SEWING_GOODS_UPLOAD: {
    ENDPOINT: (currentLang, page, where, sort, by) =>
      `/sewing-product/get?lang=${currentLang}&page=${page}${
        Boolean(where) ? `&where=${where}` : ''
      }${Boolean(sort) ? `&sort=${sort}` : ''}${
        Boolean(by) ? `&by=${by}` : ''
      }`,
    TYPE: 'GET',
  },
  SEWING_GOODS_UPLOAD_AUTH: {
    ENDPOINT: (currentLang, page, where, sort, by) =>
      `/sewing-product/auth/get?lang=${currentLang}&page=${page}${
        Boolean(where) ? `&where=${where}` : ''
      }${Boolean(sort) ? `&sort=${sort}` : ''}${
        Boolean(by) ? `&by=${by}` : ''
      }`,
    TYPE: 'GET',
  },
  SEWING_GOODS_UPDATE: {
    ENDPOINT: (id) => `/sewing-product/update/${id}`,
    TYPE: 'PUT',
  },
};
