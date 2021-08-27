import { PRODUCT_FIELD_NAME } from './create-product.type';

export const CREATE_PRODUCT_ROUTE_PATH = '/create-product';
export const CREATE_PRODUCT_STORE_NAME = 'CREATE_PRODUCT';
export const CREATE_PRODUCT_API = {
  CREATE_PRODUCT_UPLOAD: {
    TYPE: 'POST',
    ENDPOINT: (type) => {
      if (type === 0) return '/master-class/create';
      if (type === 1 || type === 2) return '/pattern-product/create';
      if (type === 3) return '/sewing-product/create';
    },
  },
  CREATE_PRODUCT_IMAGE_UPLOAD: {
    TYPE: 'POST',
    ENDPOINT: '/file/create-many',
  },
};

export const SELECT_OPTIONS_DATA = {
  [PRODUCT_FIELD_NAME.TYPE]: [
    { id: 0, tid: 'Мастер-класс' },
    { id: 1, tid: 'Выкройка электронная' },
    { id: 2, tid: 'Выкройка печатная' },
    { id: 3, tid: 'Товар для шитья' },
  ],
  [PRODUCT_FIELD_NAME.CATEGORY_NAME]: [
    { id: 0, tid: 'Платные' },
    { id: 1, tid: 'Новые' },
    { id: 2, tid: 'Инструкции' },
    { id: 3, tid: 'Руководства' },
  ],
};
