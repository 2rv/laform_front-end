export const CATEGORIES_STORE_NAME = 'CATEGORIES';

export const CATEGORIES_API = {
  CATEGORIES_UPLOAD_DATA: {
    ENDPOINT: (currentLang: 'ru' | 'en', type: number) =>
      `/category/get?lang=${currentLang}&type=${type}`,
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
