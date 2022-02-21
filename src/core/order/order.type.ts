import { BasicPurchaseProductType, DELIVERY_TYPE } from 'src/lib/basic-types';
import {
  TableItemData,
  DeleteItemFnType,
  ChangeItemFnType,
} from 'src/lib/common/block-table';
import { FormikConfig } from 'formik';
export enum ORDER_FIELD_NAME {
  ID = 'id',
  ADRESS = 'address',
  EMAIL = 'email',
  FULL_NAME = 'fullName',
  ORDER_NUMBER = 'orderNumber',
  PHONE_NUMBER = 'phone',
  ORDER_STATUS = 'orderStatus',
  PRICE = 'price',
  SHIPPING_PRICE = 'shippingPrice',
  PROMO_CODE = 'promoCode',
  COMMENT = 'comment',
  PROMO_CODE_DISCOUNT = 'promoCodeDiscount',
  DELIVERY_TYPE = 'deliveryType',
}
export enum ORDER_ACTION_TYPE {
  GET_PENDING = 'GET_PENDING',
  GET_SUCCESS = 'GET_SUCCESS',
  GET_ERROR = 'GET_ERROR',

  UPDATE_PENDING = 'UPDATE_PENDING',
  UPDATE_SUCCESS = 'UPDATE_SUCCESS',
  UPDATE_ERROR = 'UPDATE_ERROR',

  CHANGE_PRODUCT = 'CHANGE_PRODUCT',
}
export type OrderValues = {
  [ORDER_FIELD_NAME.ID]?: string;
  [ORDER_FIELD_NAME.ORDER_NUMBER]?: string;
  [ORDER_FIELD_NAME.ADRESS]: string;
  [ORDER_FIELD_NAME.EMAIL]: string;
  [ORDER_FIELD_NAME.FULL_NAME]: string;
  [ORDER_FIELD_NAME.PHONE_NUMBER]: string;
  [ORDER_FIELD_NAME.PROMO_CODE]: string;
  [ORDER_FIELD_NAME.COMMENT]: string;
  [ORDER_FIELD_NAME.ORDER_STATUS]: number;
  [ORDER_FIELD_NAME.PRICE]: number;
  [ORDER_FIELD_NAME.PROMO_CODE_DISCOUNT]: number;
  [ORDER_FIELD_NAME.SHIPPING_PRICE]: number;
  [ORDER_FIELD_NAME.DELIVERY_TYPE]: DELIVERY_TYPE;
};
export type ProductsType = [TableItemData[], number];
export type OrderActionType = {
  type: ORDER_ACTION_TYPE;
  error?: string;
  order?: OrderValues;
  purchaseProducts?: PurchaseProductTypeForOrer[];
  products?: TableItemData[];
  price?: number;
};
export type OrderStateType = {
  getPending: boolean;
  order?: OrderValues;
  purchaseProducts: PurchaseProductTypeForOrer[];
  products: TableItemData[];
  price: number;
  getError?: string;

  updatePending: boolean;
  updateSuccess: boolean;
  updateError?: string;
};
export interface OrderComponentProps extends FormikConfig<OrderValues> {
  state: OrderStateType;
  changeItem: ChangeItemFnType;
  deleteItem: DeleteItemFnType;
}
export interface OrderFormProps extends FormikConfig<OrderValues> {
  state: OrderStateType;
}
export interface PurchaseProductTypeForOrer
  extends Omit<BasicPurchaseProductType, 'optionId'> {
  optionId?: { id: string };
}
