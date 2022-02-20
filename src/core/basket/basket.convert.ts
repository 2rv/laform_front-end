import { MASTER_CLASS_PRODUCT_ROUTE_PATH } from '../master-class-product';
import { PATTERNS_PRODUCT_ROUTE_PATH } from '../patterns-product';
import { SEWING_GOODS_PRODUCT_ROUTE_PATH } from '../sewing-goods-product';
import {
  BasicMasterClassType,
  BasicPatternType,
  BasicSewingGoodType,
  DELIVERY_TYPE,
} from 'src/lib/basic-types';
import { convertOptions } from 'src/lib/common/product-converters';
import { TableItemData } from 'src/lib/common/block-table';
import {
  basketStateType,
  addToCartDataType,
  formikValues,
} from './basket.type';
import { getPrice } from 'src/lib/common/product-converters/convert.utils';

interface accumulator {
  masterProducts: TableItemData[];
  patternProducts: TableItemData[];
  sewingProducts: TableItemData[];
  basketPrice: number;
  basketCount: number;
}

export function convertAddToCart(
  product: BasicMasterClassType | BasicPatternType | BasicSewingGoodType,
  data: addToCartDataType,
  index: number = 0,
) {
  if (data.type === 0) {
    return {
      id: product.id,
      type: data.type,
      indexId: product.id + index,
      masterClassId: product,
      count: 1,
      isCount: false,
      isLength: false,
    };
  }
  if (product.type === 1) {
    return {
      id: product.id,
      type: data.type,
      indexId: product.id + index,
      patternProductId: product,
      optionId: data.optionId,
      count: 1,
      isCount: false,
      isLength: false,
    };
  }
  if (product.type === 2) {
    return {
      id: product.id,
      type: data.type,
      indexId: product.id + index,
      patternProductId: product,
      optionId: data.optionId,
      count: data.count,
      isCount: product.isCount,
      isLength: false,
    };
  }
  if (product.type === 3) {
    return {
      id: product.id,
      type: product.type,
      indexId: product.id + index,
      sewingProductId: product,
      optionId: data.optionId,
      count: data.count,
      length: data.length,
      isCount: product.isCount,
      isLength: product.isLength,
    };
  }
}
export function convertForTable(basketState: basketStateType[]) {
  return basketState.reduce<accumulator>(
    (acc, i) => {
      if (i.type === 0) {
        const item = masterItemConvert(i);
        acc.masterProducts.push(item);
        acc.basketPrice = acc.basketPrice + (item.totalPrice || 0);
      }
      if (i.type === 1) {
        const item = patternItemConvert(i);
        acc.patternProducts.push(item);
        acc.basketPrice = acc.basketPrice + (item.totalPrice || 0);
      }
      if (i.type === 2) {
        const item = patternItemConvert(i);
        acc.patternProducts.push(item);
        if (item.isCount) {
          acc.basketCount += item.count || 0;
        } else {
          acc.basketCount += 1;
        }
        acc.basketPrice = acc.basketPrice + (item.totalPrice || 0);
      }
      if (i.type === 3) {
        const item = sewingItemConvert(i);
        acc.sewingProducts.push(item);

        if (item.isCount) {
          acc.basketCount += item.count || 0;
        } else if (item.isLength) {
          acc.basketCount += Math.ceil(item.length || 0);
        } else {
          acc.basketCount += 1;
        }
        acc.basketPrice = acc.basketPrice + (item.totalPrice || 0);
      }
      return acc;
    },
    {
      masterProducts: [],
      patternProducts: [],
      sewingProducts: [],
      basketCount: 0,
      basketPrice: 0,
    },
  );
}
const masterItemConvert = (data: basketStateType): TableItemData => {
  const totalPrice = getPrice({
    price: data.masterClassId.price,
    discount: data.masterClassId.discount,
  });

  return {
    id: data.masterClassId.id,
    type: data.masterClassId.type,
    indexId: data.indexId,
    path: MASTER_CLASS_PRODUCT_ROUTE_PATH,
    pathConfig: { params: { id: data.masterClassId.id } },
    image: data.masterClassId.images[0]?.fileUrl,
    name: data.masterClassId.titleRu || data.masterClassId.titleEn,
    vendorCode: data.masterClassId.vendorCode,
    totalPrice: totalPrice,
    params: {
      program: 'BASKET.TABLE.PARAMETERS.REMOTE',
    },
  };
};
const patternItemConvert = (data: basketStateType): TableItemData => {
  const option = (data.patternProductId?.options || []).find(
    (i) => i.id === data.optionId,
  );
  const optionIndex = (data.patternProductId?.options || []).findIndex(
    (i) => i.id === data.optionId,
  );

  const totalPrice = getPrice({
    price: option?.price || data.patternProductId.price,
    discount: option?.discount || data.patternProductId.discount,
    count: data.count,
  });

  return {
    id: data.patternProductId.id,
    type: data.patternProductId.type,
    optionIndex: optionIndex !== -1 ? optionIndex : undefined,
    indexId: data.indexId,
    path: PATTERNS_PRODUCT_ROUTE_PATH,
    pathConfig: { params: { id: data.patternProductId.id } },
    image: data.patternProductId.images[0]?.fileUrl,
    name: data.patternProductId.titleRu || data.patternProductId.titleEn,
    vendorCode: option?.vendorCode || data.patternProductId.vendorCode,
    totalPrice: totalPrice,
    sizes: convertOptions(
      data.patternProductId.options,
      data.patternProductId.optionType,
      2,
    ),
    count: data.count,
    isCount: data.isCount,
    maxCount: option?.count || data.patternProductId.count || 1,
    params: {
      size: option?.size,
      type: data.type,
      complexity: data.patternProductId.complexity,
    },
  };
};
const sewingItemConvert = (data: basketStateType): TableItemData => {
  const option = data.sewingProductId?.options.find(
    (i) => i.id === data.optionId,
  );
  const optionIndex = data.sewingProductId?.options.findIndex(
    (i) => i.id === data.optionId,
  );
  const totalPrice = getPrice({
    price: option?.price || data.sewingProductId.price,
    discount: option?.discount || data.sewingProductId.discount,
    length: data.length,
    count: data.count,
  });

  return {
    id: data.sewingProductId.id,
    type: data.sewingProductId.type,
    optionIndex: optionIndex !== -1 ? optionIndex : undefined,
    indexId: data.indexId,
    path: SEWING_GOODS_PRODUCT_ROUTE_PATH,
    pathConfig: { params: { id: data.sewingProductId.id } },
    image: data.sewingProductId.images[0]?.fileUrl,
    name: data.sewingProductId.titleRu,
    vendorCode: option?.vendorCode || data.sewingProductId.vendorCode,
    count: data.count,
    length: getPrice({ price: data.length }),
    maxCount: option?.count || data.sewingProductId.count || 0,
    maxLength: getPrice({
      price: option?.length || data.sewingProductId.length,
    }),
    totalPrice: totalPrice,
    params: {
      size: option?.size,
      color: option?.colorEn || option?.colorRu,
    },
    isCount: data.isCount,
    isLength: data.isLength,
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
};
export function convertCreateOrder(
  data: formikValues,
  bascketState: basketStateType[],
  isSdek: boolean,
) {
  return {
    purchase: {
      email: data.email,
      emailConfirmCode: data.emailConfirmCode,
      fullName: data.fullName,
      phone: data.phone,
      promoCode: data.promoCode,
      sdek: isSdek && +data.deliveryType === DELIVERY_TYPE.SDEK,
      sdekTariffCode: data?.sdekTariff?.tariff_code,
      sdekCityCode: data?.sdekPoint?.location?.city_code,
      address: `${data.address.country}, ${
        data.address.city || data.address.settlement
      }, ${data.address.street}, ${data.address.house}, ${
        data.address.postal_code
      }`,
      comment: data.comment,
      deliveryType: +data.deliveryType,
    },
    purchaseProducts: bascketState.map((item) => {
      return {
        masterClassId: item.type === 0 ? item.id : undefined,
        patternProductId:
          item.type === 1 || item.type === 2 ? item.id : undefined,
        sewingProductId: item.type === 3 ? item.id : undefined,
        type: item.type,
        optionId: item.optionId,
        totalCount: item.count,
        totalLength: item.length,
      };
    }),
  };
}
