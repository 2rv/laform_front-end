import { MASTER_CLASS_PRODUCT_ROUTE_PATH } from '../master-class-product';
import { PATTERNS_PRODUCT_ROUTE_PATH } from '../patterns-product';
import { SEWING_GOODS_PRODUCT_ROUTE_PATH } from '../sewing-goods-product';
import { ABOUT_ORDER_FIELD_NAME } from './order-number.type';
import { TableItemType } from 'src/lib/common/block-table/table.type';
import { BasicPurchaseProductType } from 'src/lib/basic-types';
import { convertOptions } from 'src/lib/common/product-converters';
import { getPrice } from 'src/lib/common/product-converters/convert.utils';

export function convertPurchaseInfo(rowData: any) {
  return {
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

export function convertForUpdate(
  values: any,
  products: BasicPurchaseProductType[],
) {
  console.log(values, products);

  return {
    [ABOUT_ORDER_FIELD_NAME.ORDER_STATUS]: Number(
      values[ABOUT_ORDER_FIELD_NAME.ORDER_STATUS],
    ),
  };
}
