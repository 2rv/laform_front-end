import { SEWING_GOODS_PAGE_ROUTE_PATH } from '../sewing-goods-page';
import { MASTER_CLASS_PAGE_ROUTE_PATH } from '../master-class-page';
import { PATTERNS_PAGE_ROUTE_PATH } from '../patterns-page';
import {
  basicPurchaseDataType,
  paramsTableType,
  purchaseProductsDataType,
} from './purchase-products.ts.type';

function getPrice(
  price = 0,
  discount = 0,
  count: any,
  length: any = null,
): number {
  if (count) {
    return (price - price * (discount / 100)) * count;
  }
  if (length) {
    return (price - price * (discount / 100)) * length;
  }
  return (price - price * (discount / 100)) * 1;
}

export function convertForTable(rowData: basicPurchaseDataType[]) {
  const purchaseProducts: any = rowData.map((purchase: any) =>
    purchase.purchaseProducts.map((product: any) => ({
      orderStatus: purchase.orderStatus,
      email: purchase.email,
      fullName: purchase.fullName,
      city: purchase.city,
      phoneNumber: purchase.phoneNumber,
      ...product,
    })),
  );
  const newPurhaseProducs: purchaseProductsDataType[] = purchaseProducts.flat();
  return newPurhaseProducs.reduce(
    (acc: any, item: purchaseProductsDataType) => {
      if (item.type === 0) {
        const result = convertMasterItem(item);
        acc.masterProduct.push(result);
      }
      if (item.type === 1) {
        const result = convertPatternElectronicItem(item);
        acc.patternElectronicProduct.push(result);
      }
      if (item.type === 2) {
        const result = convertPatternPrintItem(item);
        acc.patternPrintProduct.push(result);
      }
      if (item.type === 3) {
        const result = convertSewingItem(item);
        acc.sewingProduct.push(result);
      }
      return acc;
    },
    {
      masterProduct: [],
      patternElectronicProduct: [],
      patternPrintProduct: [],
      sewingProduct: [],
    },
  );
}
const convertMasterItem = (item: purchaseProductsDataType): paramsTableType => {
  return {
    id: item.id,
    type: item.type,
    name: item.masterClassId?.titleRu || item.masterClassId?.titleEn,
    path: MASTER_CLASS_PAGE_ROUTE_PATH,
    pathConfig: { dinamic: true, params: { id: item.id } },
    image: item.masterClassId?.images?.[0]?.fileUrl,
    totalPrice: getPrice(item.totalPrice, item.totalDiscount, item.totalCount),
    vendorCode: item.masterClassId?.vendorCode,
    params: {
      program: 'удаленная',
    },
    otherParams: {
      email: item.email,
      fullName: item.fullName,
      city: item.city,
      phoneNumber: item.phoneNumber,
    },
    status: item.orderStatus,
  };
};
const convertPatternElectronicItem = (
  item: purchaseProductsDataType,
): paramsTableType => {
  return {
    id: item.id,
    type: item.type,
    name: item.patternProductId?.titleRu || item.patternProductId?.titleEn,
    path: PATTERNS_PAGE_ROUTE_PATH,
    pathConfig: { dinamic: true, params: { id: item.id } },
    image: item.patternProductId?.images?.[0]?.fileUrl,
    totalPrice: getPrice(item.totalPrice, item.totalDiscount, item.totalCount),
    filePDF:
      item.patternProductId?.filePdf?.fileUrl ||
      item.optionId?.filePdf?.fileUrl,
    vendorCode: item.patternProductId?.vendorCode || item.optionId?.vendorCode,
    params: {
      size: item.optionId?.size,
      format: 'PATTERNS.MY_PATTERNS.DETAILS.ELECTRONIC',
    },
    otherParams: {
      email: item.email,
      fullName: item.fullName,
      city: item.city,
      phoneNumber: item.phoneNumber,
    },
    status: item.orderStatus,
  };
};
const convertPatternPrintItem = (
  item: purchaseProductsDataType,
): paramsTableType => {
  return {
    id: item.id,
    type: item.type,
    name: item.patternProductId?.titleRu || item.patternProductId?.titleEn,
    path: PATTERNS_PAGE_ROUTE_PATH,
    pathConfig: { dinamic: true, params: { id: item.id } },
    image: item.patternProductId?.images?.[0]?.fileUrl,
    totalPrice: getPrice(item.totalPrice, item.totalDiscount, item.totalCount),
    vendorCode: item.patternProductId?.vendorCode || item.optionId?.vendorCode,
    params: {
      count: item.totalCount,
      size: item.optionId?.size,
      format: 'PATTERNS.MY_PATTERNS.DETAILS.PRINTED',
    },
    otherParams: {
      email: item.email,
      fullName: item.fullName,
      city: item.city,
      phoneNumber: item.phoneNumber,
    },
    status: item.orderStatus,
  };
};
const convertSewingItem = (item: purchaseProductsDataType): paramsTableType => {
  return {
    id: item.id,
    type: item.type,
    name: item.sewingProductId?.titleRu || item.sewingProductId?.titleEn,
    path: SEWING_GOODS_PAGE_ROUTE_PATH,
    pathConfig: { dinamic: true, params: { id: item.id } },
    image: item.sewingProductId?.images?.[0]?.fileUrl,
    totalPrice: getPrice(
      item.totalPrice,
      item.totalDiscount,
      item.totalCount,
      item.totalLength,
    ),
    vendorCode: item.sewingProductId?.vendorCode || item.optionId?.vendorCode,
    params: {
      count: item.totalCount,
      length: item.totalLength,
      size: item.optionId?.size,
      color: item.optionId?.colorRu || item.optionId?.colorEn,
    },
    otherParams: {
      email: item.email,
      fullName: item.fullName,
      city: item.city,
      phoneNumber: item.phoneNumber,
    },
    status: item.orderStatus,
  };
};
