export const CATEGORIES_STORE_NAME = 'CATEGORIES';

export const CATEGORIES_API = {
  CATEGORIES_UPLOAD_DATA: {
    ENDPOINT: (currentLang: 'ru' | 'en') => `/category/get?lang=${currentLang}`,
    TYPE: 'GET',
  },
  CATEGORIES_CREATE: {
    ENDPOINT: '/category/create',
    TYPE: 'post',
  },
  CATEGORY_DELETE: {
    ENDPOINT: (id: string) => `/category/delete/${id}`,
    TYPE: 'delete',
  },
};
