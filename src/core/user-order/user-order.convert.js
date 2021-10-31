import { MASTER_CLASS_PRODUCT_ROUTE_PATH } from '../master-class-product';
import { PATTERNS_PRODUCT_ROUTE_PATH } from '../patterns-product';
import { SEWING_GOODS_PRODUCT_ROUTE_PATH } from '../sewing-goods-product';
import { ABOUT_ORDER_FIELD_NAME } from './user-order.type';

export const convertUsersOrderData = (rowData) => {
  return {
    purchaseInfo: {
      [ABOUT_ORDER_FIELD_NAME.ID]: rowData.id,
      [ABOUT_ORDER_FIELD_NAME.ORDER_NUMBER]: rowData.orderNumber,
      [ABOUT_ORDER_FIELD_NAME.EMAIL]: rowData.email,
      [ABOUT_ORDER_FIELD_NAME.FULL_NAME]: rowData.fullName,
      [ABOUT_ORDER_FIELD_NAME.CITY]: rowData.city,
      [ABOUT_ORDER_FIELD_NAME.PHONE_NUMBER]: rowData.phoneNumber,
      [ABOUT_ORDER_FIELD_NAME.DELIVERY_METHOD]: rowData.typeOfDelivery,
      [ABOUT_ORDER_FIELD_NAME.COMMENT]: rowData.comment,
      [ABOUT_ORDER_FIELD_NAME.PRICE]: rowData.price,
      [ABOUT_ORDER_FIELD_NAME.PROMO_CODE]: rowData.promoCode,
      [ABOUT_ORDER_FIELD_NAME.PROMO_CODE_DISCOUNT]: rowData.promoCodeDiscount,
    },
    purchaseProducts: rowData.purchaseProducts.map((item) => {
      const count = Boolean(item?.totalCount) && Number(item.totalCount);
      const price = Number(item.totalPrice);
      const discount = Number(item.totalDiscount);
      const totalPrice = Boolean(count)
        ? (price - price * (discount / 100)) * count
        : price - price * (discount / 100);
      const product =
        item.masterClassId || item.sewingProductId || item.patternProductId;
      return {
        id: product.id,
        path: typePathProduct(product.type),
        pathConfig: { dynamic: true, params: { id: product.id } },
        type: product.type,
        name: product.titleRu,
        image: product.images?.[0]?.fileUrl,
        totalPrice: totalPrice,
        vendorCode:
          (Boolean(item?.program) && item.program.vendorCode) ||
          (Boolean(item?.size) && item.size.vendorCode),
        params: {
          program: Boolean(item?.program) && {
            id: item.program.id,
            value: item.program.programNameRu,
          },
          color: Boolean(item?.color) && {
            id: item.color.id,
            value: item.color.color,
          },
          size: Boolean(item?.size) && {
            id: item.size.id,
            value: item.size.size,
          },
          count,
          complexity: Boolean(product?.complexity) && item.complexity,
        },
      };
    }),
  };
};

const typePathProduct = (type) => {
  if (type === 0) return MASTER_CLASS_PRODUCT_ROUTE_PATH;
  if (type === 1 || type === 2) return PATTERNS_PRODUCT_ROUTE_PATH;
  if (type === 3) return SEWING_GOODS_PRODUCT_ROUTE_PATH;
};
