export type { dataType as paramsTableType } from 'src/lib/common/block-table/table.type';
import { BasicOptionType } from 'src/lib/common/product-converters/convert.type';

export interface basicPurchaseDataType {
  id: string;
  city: string;
  email: string;
  fullName: string;
  orderStatus: any;
  phoneNumber: string;
  purchaseProducts: basicPurchaseProductsDataType[];
}
export interface basicPurchaseProductsDataType {
  createdDate: string;
  id: string;
  masterClassId?: any;
  optionId?: BasicOptionType;
  patternProductId?: any;
  sewingProductId?: any;
  totalCount?: number;
  totalDiscount?: number;
  totalLength?: number;
  totalPrice: number;
  type: number;
}

export interface purchaseProductsDataType {
  city: string;
  email: string;
  fullName: string;
  orderStatus: any;
  phoneNumber: string;
  createdDate: string;
  id: string;
  masterClassId?: any;
  optionId?: BasicOptionType;
  patternProductId?: any;
  sewingProductId?: any;
  totalCount: string;
  totalDiscount?: number;
  totalLength?: string;
  totalPrice: number;
  type: number;
}
