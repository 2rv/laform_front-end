export const PRODUCT_KEY = {
  QUANTITY: 'quantity',
  PRICE: 'price',
  NAME: 'name',
  IMAGE: 'image',
  LIMIT: 'limit',
};
export const SEWING_PRODUCT_KEY = {
  ...PRODUCT_KEY,
  SEWING_PRODUCT_ID: 'sewingProductId',
  COLOR: 'color',
  COLOR_ENUM: 'colorEnum',
  SIZE: 'size',
  SIZE_ENUM: 'sizeEnum',
  CATEGORY: 'category',
};
export const PATTERN_PRODUCT_KEY = {
  ...PRODUCT_KEY,
  PATTERN_PRODUCT_ID: 'patternProductId',
  FORMAT: 'format',
  FORMAT_ENUM: 'formatEnum',
  SIZE: 'size',
  SIZE_ENUM: 'sizeEnum',
};
export const MASTER_CLASS_KEY = {
  ...PRODUCT_KEY,
  MASTER_CLASS_ID: 'masterClassId',
  PROGRAMM: 'programm',
  PROGRAMM_ENUM: 'programmEnum',
};

export const PRODUCT_TYPE = {
  MASTER_CLASS: 1,
  PATTERN_PRODUCT: 2,
  SEWING_PRODUCT: 3,
};

export const ADD_PRODUCT_KEY_AUTHTORIZED = {
  MASTER_CLASS_ID: 'masterClassId',
  PATTERN_PRODUCT_ID: 'patternProductId',
  SEWING_PRODUCT_ID: 'sewingProductId',
  COLOR: 'color',
  SIZE: 'size',
  FORMAT: 'format',
  PROGRAM: 'program',
};

export const CHANGE_PARAMS_PRODUCTS = {
  COLOR: 'color',
  SIZE: 'size',
  FORMAT: 'format',
  PROGRAM: 'program',
  QUANTITY: 'quantity',
};

export const PATTER_PRODUCT_FORMAT = {
  REMOTE: 'REMOTE',
  PRINT: 'PRINT',
};
