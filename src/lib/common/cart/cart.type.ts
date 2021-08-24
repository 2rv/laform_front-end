interface ProductPropType {
  state?: any;
  id: number | string;
  image: string;
  name: string;
  quantity?: number | string;
  price: number;
  limit: number;
}

export interface SewingProductPropType extends ProductPropType {
  color: string;
  colorEnum: string[];
  size: string;
  sizeEnum: string[];
  category: string;
}

export interface PatternProductPropType extends ProductPropType {
  size: string;
  sizeEnum: string[];
  format: string;
  formatEnum: string[];
}

export interface MasterClassPropType extends ProductPropType {
  programm: string;
  programmEnum: string[];
}

export const PRODUCT_KEY = {
  ID: 'id',
  QUANTITY: 'quantity',
  PRICE: 'price',
  NAME: 'name',
  IMAGE: 'image',
  LIMIT: 'limit',
};
export const SEWING_PRODUCT_KEY = {
  ...PRODUCT_KEY,
  COLOR: 'color',
  COLOR_ENUM: 'colorEnum',
  SIZE: 'size',
  SIZE_ENUM: 'sizeEnum',
  CATEGORY: 'category',
};
export const PATTERN_PRODUCT_KEY = {
  ...PRODUCT_KEY,
  FORMAT: 'format',
  FORMAT_ENUM: 'formatEnum',
  SIZE: 'size',
  SIZE_ENUM: 'sizeEnum',
};
export const MASTER_CLASS_KEY = {
  ...PRODUCT_KEY,
  PROGRAMM: 'programm',
  PROGRAMM_ENUM: 'programmEnum',
};

export const PATTER_PRODUCT_FORMAT = {
  REMOTE: 'REMOTE',
  PRINT: 'PRINT',
};
