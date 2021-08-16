export enum CART_ACTION_TYPE {
  ADD_SEWING_PRODUCT = 'CART_ACTION_TYPE.ADD_SEWING_PRODUCT',
}

export interface PRODUCT {
  id: string;
  image: string;
  name: string;
  price: string;
}

// tslint:disable-next-line: class-name
export interface SEWING_PRODUCT extends PRODUCT {
  color: string;
  size: string;
  category: string;
}

// tslint:disable-next-line: class-name
export interface PATTERN_PRODUCT extends PRODUCT {
  size: string;
  format: string;
}

export const CART_STORE_NAME = 'CART';
