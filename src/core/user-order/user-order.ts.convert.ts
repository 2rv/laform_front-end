import { MASTER_CLASS_PRODUCT_ROUTE_PATH } from '../master-class-product';
import { PATTERNS_PRODUCT_ROUTE_PATH } from '../patterns-product';
import { SEWING_GOODS_PRODUCT_ROUTE_PATH } from '../sewing-goods-product';
import { baseOrderDataType, orderDataType } from './user-order.ts.type';
import { ABOUT_ORDER_FIELD_NAME } from './user-order.type';

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

export const convertPurchaseData = (
  rowData: baseOrderDataType,
): orderDataType => {
  return {
    purchaseInfo: {
      [ABOUT_ORDER_FIELD_NAME.ID]: rowData.id,
      [ABOUT_ORDER_FIELD_NAME.ORDER_NUMBER]: rowData.orderNumber,
      [ABOUT_ORDER_FIELD_NAME.ORDER_STATUS]: rowData.orderStatus,
      [ABOUT_ORDER_FIELD_NAME.EMAIL]: rowData.email,
      [ABOUT_ORDER_FIELD_NAME.FULL_NAME]: rowData.fullName,
      [ABOUT_ORDER_FIELD_NAME.CITY]: rowData.city,
      [ABOUT_ORDER_FIELD_NAME.PHONE_NUMBER]: rowData.phoneNumber,
      [ABOUT_ORDER_FIELD_NAME.COMMENT]: rowData.comment,
      [ABOUT_ORDER_FIELD_NAME.PRICE]: rowData.price,
      [ABOUT_ORDER_FIELD_NAME.PROMO_CODE]: rowData.promoCode,
      [ABOUT_ORDER_FIELD_NAME.PROMO_CODE_DISCOUNT]: rowData.promoCodeDiscount,
    },
    purchaseProducts: rowData.purchaseProducts.map((item) => {
      const totalPrice = getPrice(
        item.totalPrice,
        item.totalDiscount,
        item.totalCount,
        item.totalLength,
      );
      const product =
        item.masterClassId || item.sewingProductId || item.patternProductId;

      return {
        id: product.id,
        path: typePathProduct(product.type),
        pathConfig: { dynamic: true, params: { id: product.id } },
        type: product.type,
        name: product.titleRu,
        image: product.images?.[0].fileUrl,
        totalPrice: totalPrice,
        vendorCode: item.optionId?.vendorCode || product?.vendorCode,
        params: {
          count: item?.totalCount,
          length: item?.totalLength,
          size: item.optionId?.size,
          color: item.optionId?.colorEn || item.optionId?.colorRu,
          createdDate: item.createdDate,
        },
      };
    }),
  };
};

const typePathProduct = (type: number) => {
  if (type === 0) return MASTER_CLASS_PRODUCT_ROUTE_PATH;
  if (type === 1 || type === 2) return PATTERNS_PRODUCT_ROUTE_PATH;
  if (type === 3) return SEWING_GOODS_PRODUCT_ROUTE_PATH;
};
