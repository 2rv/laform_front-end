import { PURCHASE_STATUS } from 'src/lib/basic-types';
import { TableItemData } from 'src/lib/common/block-table';

export enum USER_ORDER_ACTION_TYPE {
  PENDING = 'PENDING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR',
}

export type UserOrderValues = {
  id: string;
  address: string;
  email: string;
  fullName: string;
  orderNumber: string;
  phone: string;
  orderStatus: PURCHASE_STATUS;
  price: number;
  shippingPrice: number;
  promoCode: string;
  comment: string;
  promoCodeDiscount: number;
};
export type UserOrderData = {
  order: UserOrderValues;
  products: TableItemData[];
  price: number;
};
export type UserOrderActionType = {
  type: USER_ORDER_ACTION_TYPE;
  error?: string;
  order?: UserOrderValues;
  products?: TableItemData[];
  price?: number;
};
export type UserOrderStateType = {
  pending: boolean;
  order?: UserOrderValues;
  products: TableItemData[];
  price: number;
  error?: string;
};
export type UserOrderComponentProps = {
  state: UserOrderStateType;
};
