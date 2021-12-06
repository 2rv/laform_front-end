import { MASTER_CLASS_PRODUCT_ROUTE_PATH } from '../master-class-product';
import { PATTERNS_PRODUCT_ROUTE_PATH } from '../patterns-product';
import { SEWING_GOODS_PRODUCT_ROUTE_PATH } from '../sewing-goods-product';
import { TableItemType } from 'src/lib/common/block-table/table.type';
import {
  BasicPurchaseProductType,
  BasicPurchaseType,
} from 'src/lib/basic-types';
import { convertOptions } from 'src/lib/common/product-converters';
import { getPrice } from 'src/lib/common/product-converters/convert.utils';
import { OrderPurchaseType } from './order-number.ts.type';

export function convertPurchaseInfo(
  rowData: BasicPurchaseType,
): OrderPurchaseType {
  return {
    id: rowData.id,
    orderNumber: rowData.orderNumber,
    createdDate: rowData.createdDate,
    orderStatus: rowData.orderStatus,
    email: rowData.email,
    fullName: rowData.fullName,
    address: rowData.address,
    phoneNumber: rowData.phoneNumber,
    comment: rowData.comment,
    price: rowData.price,
    promoCode: rowData.promoCode,
    promoCodeDiscount: rowData.promoCodeDiscount,
    typeOfDelivery: rowData.typeOfDelivery,
  };
}
export function convertPurchaseProducts(
  purchaseProducts: BasicPurchaseProductType[],
): [(TableItemType | undefined)[], BasicPurchaseProductType[], number] {
  let price = 0;
  return [
    purchaseProducts.map((item) => {
      if (item.masterClassId) {
        const result = masterItemConvert(item);
        price += result?.totalPrice || 0;
        return result;
      }
      if (item.patternProductId) {
        const result = patternItemConvert(item);
        price += result?.totalPrice || 0;
        return result;
      }
      if (item.sewingProductId) {
        const result = sewingItemConvert(item);
        price += result?.totalPrice || 0;
        return result;
      }
    }),
    purchaseProducts,
    price,
  ];
}
function masterItemConvert(data: BasicPurchaseProductType): TableItemType {
  const totalPrice = getPrice({
    price: data.totalPrice,
    discount: data.totalDiscount,
  });

  return {
    id: data.id,
    type: data.masterClassId.type,
    path: MASTER_CLASS_PRODUCT_ROUTE_PATH,
    pathConfig: { dynamic: true, params: { id: data.masterClassId.id } },
    image: data.masterClassId.images[0].fileUrl,
    name: data.masterClassId.titleRu,
    vendorCode: data.masterClassId.vendorCode,
    totalPrice: totalPrice,
    params: {
      program: 'Удаленная',
    },
  };
}
function patternItemConvert(data: BasicPurchaseProductType): TableItemType {
  const option = data.patternProductId?.options.find(
    (i) => i.id === data.optionId.id,
  );
  const optionIndex = data.patternProductId?.options.findIndex(
    (i) => i.id === data.optionId.id,
  );
  const totalPrice = getPrice({
    price: option?.price || data.totalPrice,
    discount: option?.discount || data.totalDiscount,
    count: data.totalCount,
  });

  return {
    id: data.id,
    type: data.patternProductId.type,
    optionIndex: optionIndex !== -1 ? optionIndex : undefined,
    path: PATTERNS_PRODUCT_ROUTE_PATH,
    pathConfig: { dynamic: true, params: { id: data.patternProductId.id } },
    image: data.patternProductId.images[0].fileUrl,
    name: data.patternProductId.titleRu,
    vendorCode: option?.vendorCode || data.patternProductId.vendorCode,
    totalPrice: totalPrice,
    sizes: convertOptions(
      data.patternProductId.options,
      data.patternProductId.optionType,
      2,
    ),
    count: data.totalCount,
    isCount: data.patternProductId.isCount,
    maxCount: option?.count || data.patternProductId.count || 1,
    params: {
      size: option?.size,
      format:
        data.patternProductId.type === 1
          ? 'PATTERNS.MY_PATTERNS.DETAILS.ELECTRONIC'
          : 'PATTERNS.MY_PATTERNS.DETAILS.PRINTED',
      complexity: data.patternProductId.complexity,
    },
  };
}
function sewingItemConvert(data: BasicPurchaseProductType): TableItemType {
  const option = data.sewingProductId?.options.find(
    (i) => i.id === data.optionId.id,
  );
  const optionIndex = data.sewingProductId?.options.findIndex(
    (i) => i.id === data.optionId.id,
  );
  const totalPrice = getPrice({
    price: option?.price || data.totalPrice,
    discount: option?.discount || data.totalDiscount,
    length: data.totalLength,
    count: data.totalCount,
  });

  return {
    id: data.id,
    type: data.sewingProductId.type,
    optionIndex: optionIndex === -1 ? optionIndex : undefined,
    path: SEWING_GOODS_PRODUCT_ROUTE_PATH,
    pathConfig: { dynamic: true, params: { id: data.sewingProductId.id } },
    image: data.sewingProductId.images[0].fileUrl,
    name: data.sewingProductId.titleRu,
    vendorCode: option?.vendorCode || data.sewingProductId.vendorCode,
    count: data.totalCount,
    isCount: data.sewingProductId.isCount,
    length: getPrice({ price: data.totalLength }),
    isLength: data.sewingProductId.isLength,
    maxCount: option?.count || data.sewingProductId.count || 0,
    maxLength: getPrice({
      price: option?.length || data.sewingProductId.length,
    }),
    totalPrice: totalPrice,
    params: {
      size: option?.size,
      color: option?.colorEn || option?.colorRu,
      count: data.totalCount,
      length: getPrice({ price: data.totalLength }),
      createdDate: data.createdDate,
    },

    options: convertOptions(
      data.sewingProductId.options,
      data.sewingProductId.optionType,
      1,
    ),
    sizes: convertOptions(
      data.sewingProductId.options,
      data.sewingProductId.optionType,
      2,
    ),
    colors: convertOptions(
      data.sewingProductId.options,
      data.sewingProductId.optionType,
      3,
    ),
  };
}
interface changeValues {
  id: string;
  length: string;
  count: number;
  optionId: string;
}
export function convertChangePurchaseProducts(
  purchaseProducts: BasicPurchaseProductType[],
  values: changeValues,
): BasicPurchaseProductType[] {
  return purchaseProducts.map((item) => {
    if (item.id === values.id) {
      if (values.count) item.totalCount = values.count;
      if (values.length) item.totalLength = values.length;
      if (values.optionId) item.optionId.id = values.optionId;
    }
    return item;
  });
}

export function convertForUpdatePurchaseProducts(
  purchaseProducts: BasicPurchaseProductType[],
) {
  return purchaseProducts.map((item) => {
    return {
      id: item.id,
      masterClassId: item.masterClassId?.id,
      patternProductId: item.patternProductId?.id,
      sewingProductId: item.sewingProductId?.id,
      optionId: item.optionId?.id,
      type: item.type,
      totalCount: item.totalCount || undefined,
      totalLength: item.totalLength || undefined,
    };
  });
}

export function convertForUpdate(
  values: OrderPurchaseType,
  products: BasicPurchaseProductType[],
) {
  return {
    orderStatus: Number(values.orderStatus),
    email: values.email,
    fullName: values.fullName,
    address: values.address,
    phoneNumber: values.phoneNumber,
    comment: values.comment,
    purchaseProducts: convertForUpdatePurchaseProducts(products),
    typeOfDelivery: values.typeOfDelivery,
  };
}
