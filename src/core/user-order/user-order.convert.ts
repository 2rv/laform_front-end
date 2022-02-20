import {
  BasicPurchaseProductType,
  BasicPurchaseType,
} from 'src/lib/basic-types';
import { getPrice } from 'src/lib/common/product-converters/convert.utils';
import { TableItemData } from 'src/lib/common/block-table';
import { MASTER_CLASS_PAGE_ROUTE_PATH } from '../master-class-page';
import { PATTERNS_PAGE_ROUTE_PATH } from '../patterns-page';
import { SEWING_GOODS_PAGE_ROUTE_PATH } from '../sewing-goods-page';
import { UserOrderData } from './user-order.type';

export const convertUserOrder = (data: BasicPurchaseType): UserOrderData => {
  const { purchaseProducts, ...purchase } = data;
  const [products, price] = convertProducts(purchaseProducts);
  return {
    order: {
      id: purchase.id,
      address: purchase.address,
      email: purchase.email,
      fullName: purchase.fullName,
      orderNumber: purchase.orderNumber,
      phone: purchase.phone,
      orderStatus: purchase.orderStatus,
      price: +purchase.price,
      shippingPrice: +purchase.shippingPrice,
      promoCode: purchase.promoCode,
      comment: purchase.comment,
      promoCodeDiscount: purchase.promoCodeDiscount,
      deliveryType: purchase.deliveryType,
    },
    products: products,
    price: price,
  };
};
function convertProducts(purchaseProducts: BasicPurchaseProductType[]) {
  return purchaseProducts.reduce<[TableItemData[], number]>(
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
function masterItemConvert(data: BasicPurchaseProductType): TableItemData {
  const totalPrice = getPrice({
    price: data.totalPrice,
    discount: data.totalDiscount,
  });

  return {
    id: data.id,
    type: data.masterClassId.type,
    path: MASTER_CLASS_PAGE_ROUTE_PATH,
    pathConfig: { params: { id: data.id } },
    image: data.masterClassId.images[0]?.fileUrl,
    name: data.masterClassId.titleRu,
    vendorCode: data.masterClassId.vendorCode,
    totalPrice: totalPrice,
    params: {
      program: 'Удаленная',
      createdDate: data.createdDate,
    },
  };
}
function patternItemConvert(data: BasicPurchaseProductType): TableItemData {
  const totalPrice = getPrice({
    price: data.totalPrice,
    discount: data.totalDiscount,
    count: data.totalCount,
  });

  return {
    id: data.id,
    type: data.patternProductId.type,
    path: PATTERNS_PAGE_ROUTE_PATH,
    pathConfig: { params: { id: data.id } },
    image: data.patternProductId.images[0]?.fileUrl,
    name: data.patternProductId.titleRu,
    vendorCode: data.optionId?.vendorCode || data.sewingProductId.vendorCode,
    totalPrice: totalPrice,
    count: data.totalCount,
    isCount: data.patternProductId.isCount,
    params: {
      count: data.totalCount,
      size: data.optionId?.size,
      type: data.type,
      complexity: data.patternProductId.complexity,
      createdDate: data.createdDate,
    },
  };
}
function sewingItemConvert(data: BasicPurchaseProductType): TableItemData {
  const totalPrice = getPrice({
    price: data.totalPrice,
    discount: data.totalDiscount,
    count: data.totalCount,
    length: data.totalLength,
  });

  return {
    id: data.id,
    type: data.sewingProductId.type,
    path: SEWING_GOODS_PAGE_ROUTE_PATH,
    pathConfig: { params: { id: data.id } },
    image: data.sewingProductId.images[0]?.fileUrl,
    name: data.sewingProductId.titleRu,
    vendorCode: data.optionId?.vendorCode || data.sewingProductId.vendorCode,
    totalPrice: totalPrice,
    params: {
      count: data.totalCount,
      length: +data.totalLength,
      size: data.optionId?.size,
      color: data.optionId?.colorRu,
      createdDate: data.createdDate,
    },
  };
}
