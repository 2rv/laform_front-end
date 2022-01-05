import { MASTER_CLASS_PRODUCT_ROUTE_PATH } from '../master-class-product';
import { PATTERNS_PRODUCT_ROUTE_PATH } from '../patterns-product';
import { SEWING_GOODS_PRODUCT_ROUTE_PATH } from '../sewing-goods-product';
import { TableItemType } from 'src/lib/common/block-table/table.type';
import { BasicPurchaseType } from 'src/lib/basic-types';
import { convertOptions } from 'src/lib/common/product-converters';
import { getPrice } from 'src/lib/common/product-converters/convert.utils';
import {
  OrderValues,
  ProductsType,
  PurchaseProductTypeForOrer,
  changePurchaseProductValues,
} from './order.type';
import { UpdatePurchaseDto } from 'src/lib/basic-types/create';

export function convertPurchase(data: BasicPurchaseType): OrderValues {
  return {
    id: data.id,
    orderNumber: data.orderNumber,
    orderStatus: data.orderStatus,
    email: data.email,
    fullName: data.fullName,
    address: data.address,
    phone: data.phone,
    comment: data.comment,
    price: +data.price,
    shippingPrice: +data.shippingPrice,
    promoCode: data.promoCode,
    promoCodeDiscount: data.promoCodeDiscount,
  };
}
export function convertPurchaseProducts(
  purchaseProducts: PurchaseProductTypeForOrer[],
): ProductsType {
  return purchaseProducts.reduce<ProductsType>(
    (acc, item) => {
      if (item.masterClassId) {
        const result = masterItemConvert(item);
        acc[1] += result?.totalPrice || 0;
        acc[0].push(result);
      }
      if (item.patternProductId) {
        const result = patternItemConvert(item);
        acc[1] += result?.totalPrice || 0;
        acc[0].push(result);
      }
      if (item.sewingProductId) {
        const result = sewingItemConvert(item);
        acc[1] += result?.totalPrice || 0;
        acc[0].push(result);
      }
      return acc;
    },
    [[], 0],
  );
}
function masterItemConvert(data: PurchaseProductTypeForOrer): TableItemType {
  const totalPrice = getPrice({
    price: data.totalPrice,
    discount: data.totalDiscount,
  });

  return {
    id: data.id,
    type: data.masterClassId.type,
    path: MASTER_CLASS_PRODUCT_ROUTE_PATH,
    pathConfig: { params: { id: data.masterClassId.id } },
    image: data.masterClassId.images[0]?.fileUrl,
    name: data.masterClassId.titleRu,
    vendorCode: data.masterClassId.vendorCode,
    totalPrice: totalPrice,
    params: {
      program: 'Удаленная',
    },
  };
}
function patternItemConvert(data: PurchaseProductTypeForOrer): TableItemType {
  const option = data.patternProductId?.options.find(
    (i) => i.id === data.optionId?.id,
  );
  const optionIndex = data.patternProductId?.options.findIndex(
    (i) => i.id === data.optionId?.id,
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
    pathConfig: { params: { id: data.patternProductId.id } },
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
      type: data.type,
      complexity: data.patternProductId.complexity,
    },
  };
}
function sewingItemConvert(data: PurchaseProductTypeForOrer): TableItemType {
  const option = data.sewingProductId?.options.find(
    (i) => i.id === data.optionId?.id,
  );
  const optionIndex = data.sewingProductId?.options.findIndex(
    (i) => i.id === data.optionId?.id,
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
    pathConfig: { params: { id: data.sewingProductId.id } },
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

export function convertChangePurchaseProducts(
  purchaseProducts: PurchaseProductTypeForOrer[],
  values: changePurchaseProductValues,
): PurchaseProductTypeForOrer[] {
  return purchaseProducts.map((item) => {
    if (item.id === values.id) {
      if (values.count) item.totalCount = values.count;
      if (values.length) item.totalLength = values.length;
      if (values.optionId) item.optionId = { id: values.optionId };
    }
    return item;
  });
}

export function convertForUpdate(
  values: OrderValues,
  purchaseProducts: PurchaseProductTypeForOrer[],
): UpdatePurchaseDto {
  return {
    orderStatus: +values.orderStatus,
    email: values.email,
    fullName: values.fullName,
    address: values.address,
    phone: values.phone,
    comment: values.comment,
    purchaseProducts: purchaseProducts.map((item) => ({
      id: item.id,
      masterClassId: item.masterClassId?.id,
      patternProductId: item.patternProductId?.id,
      sewingProductId: item.sewingProductId?.id,
      optionId: item.optionId?.id,
      type: item.type,
      totalCount: +item.totalCount || undefined,
      totalLength: +item.totalLength || undefined,
    })),
  };
}
