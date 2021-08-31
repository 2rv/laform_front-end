export const CREATE_PRODUCT_ACTION_TYPE = {
  CREATE_PRODUCT_UPLOAD_PENDING:
    'CREATE_PRODUCT_ACTION_TYPE.CREATE_PRODUCT_UPLOAD_PENDING',
  CREATE_PRODUCT_UPLOAD_SUCCESS:
    'CREATE_PRODUCT_ACTION_TYPE.CREATE_PRODUCT_UPLOAD_SUCCESS',
  CREATE_PRODUCT_UPLOAD_ERROR:
    'CREATE_PRODUCT_ACTION_TYPE.CREATE_PRODUCT_UPLOAD_ERROR',
};

export const PRODUCT_FIELD_NAME = {
  NAME: 'titleRu',
  DESCRIPTION: 'descriptionRu',
  TYPE: 'type',
  MODIFIER: 'modifier',
  DISCOUNT: 'discount',

  MATERIAL: 'materialRu',
  COMPLEXITY: 'complexity',
  COUNT: 'count',
  PRICE: 'price',
  FILE: 'file',

  IMAGES: 'images',
  IMAGE: 'image',

  CATEGORIES: 'categories',
  CATEGORY: 'textRu',

  RECOMENDATIONS: 'recomendations',
  RECOMENDATION_NAME: 'recomendation',

  SIZES: 'sizes',
  SIZE_NAME: 'size',
  SIZE_PRICE: 'price',

  COLORS: 'colors',
  COLOR_NAME: 'color',
  COLOR_PRICE: 'price',

  PROGRAMS: 'programs',
  PROGRAM_NAME: 'programNameRu',
  PROGRAM_PRICE: 'price',
};

export const SELECT_OPTIONS = {
  [PRODUCT_FIELD_NAME.TYPE]: [
    { id: 0, tid: 'Мастер-класс' },
    { id: 1, tid: 'Выкройка электронная' },
    { id: 2, tid: 'Выкройка печатная' },
    { id: 3, tid: 'Товар для шитья' },
  ],
  [PRODUCT_FIELD_NAME.CATEGORIES]: [
    { id: 0, tid: 'Платные' },
    { id: 1, tid: 'Новые' },
    { id: 2, tid: 'Инструкции' },
    { id: 3, tid: 'Руководства' },
  ],
};

export const CREATE_PRODUCT_KEY = {
  CATEGORY_NAME: 'textRu',
};
