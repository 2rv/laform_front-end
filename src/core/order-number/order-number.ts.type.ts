import { dataType } from 'src/lib/common/block-table/table.type';
import { BasicOptionType } from 'src/lib/common/product-converters/convert.type';

export interface baseOrderDataType {
  id: string;
  orderNumber: string;
  email: string;
  fullName: string;
  city: string;
  phoneNumber: string;
  comment?: string;
  price: number;
  promoCode?: string;
  promoCodeDiscount?: number;
  purchaseProducts: basicOrderPurchaseProductsData[];
}
export interface basicOrderPurchaseProductsData {
  id: string;
  type: number;
  createdDate: string;
  masterClassId: any;
  patternProductId: any;
  sewingProductId: any;
  optionId: BasicOptionType;
  totalCount: string;
  totalLength?: string;
  totalPrice: number;
  totalDiscount?: number;
}
export interface orderDataType {
  purchaseInfo: any;
  purchaseProducts: dataType[];
}
