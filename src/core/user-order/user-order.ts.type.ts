import { TableItemType } from 'src/lib/common/block-table/table.type';
import { BasicOptionType } from 'src/lib/basic-types';

export interface baseOrderDataType {
  id: string;
  orderNumber: string;
  orderStatus: string;
  email: string;
  fullName: string;
  address: string;
  phoneNumber: string;
  comment?: string;
  price: string;
  promoCode?: string;
  promoCodeDiscount?: number;
  purchaseProducts: basicOrderPurchaseProductsData[];
}
export interface basicOrderPurchaseProductsData {
  id: string;
  type: number;
  createdDate: Date;
  masterClassId: any;
  patternProductId: any;
  sewingProductId: any;
  optionId: BasicOptionType;
  totalCount: number;
  totalLength?: string;
  totalPrice: string;
  totalDiscount?: number;
}
export interface orderDataType {
  purchaseInfo: any;
  purchaseProducts: TableItemType[];
}
