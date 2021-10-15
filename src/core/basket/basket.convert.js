import { MASTER_CLASS_PRODUCT_ROUTE_PATH } from '../master-class-product';
import { PATTERNS_PRODUCT_ROUTE_PATH } from '../patterns-product';
import { SEWING_GOODS_PRODUCT_ROUTE_PATH } from '../sewing-goods-product';
import {
  ORDER_DATA_NAME,
  ORDER_FIELD_NAME,
  USER_INFO_DATA_NAME,
} from './basket.type';

export const convertForCreateOrder = (data, bascketState) => ({
  purchase: data,
  purchaseProducts: bascketState.map((item) => {
    return {
      masterClassId: item.type === 0 ? item.id : undefined,
      patternProductId:
        item.type === 1 || item.type === 2 ? item.id : undefined,
      sewingProductId: item.type === 3 ? item.id : undefined,
      type: item.type,
      color: item.color,
      size: item.size,
      program: item.program,
      totalCount: item.count ?? 1,
    };
  }),
});

export const performUserInfoData = (rowData) => ({
  [ORDER_FIELD_NAME.FULL_NAME]: rowData[USER_INFO_DATA_NAME.FULL_NAME],
  [ORDER_FIELD_NAME.CITY]: rowData[USER_INFO_DATA_NAME.CITY],
  [ORDER_FIELD_NAME.DELIVERY_METHOD]:
    rowData[USER_INFO_DATA_NAME.DELIVERY_METHOD],
  [ORDER_FIELD_NAME.PAYMENT_METHOD]:
    rowData[USER_INFO_DATA_NAME.PAYMENT_METHOD],
  [ORDER_FIELD_NAME.PHONE]: rowData[USER_INFO_DATA_NAME.PHONE],
});
export const convertUserInfoData = (data) => ({
  [USER_INFO_DATA_NAME.FULL_NAME]: data[ORDER_FIELD_NAME.FULL_NAME],
  [USER_INFO_DATA_NAME.CITY]: data[ORDER_FIELD_NAME.CITY],
  [USER_INFO_DATA_NAME.PHONE]: data[ORDER_FIELD_NAME.PHONE],
});

export const convertPromoCodeForCheck = (promocode) => ({
  [ORDER_DATA_NAME.PROMO_CODE]: promocode,
});

export function convertAddToCart(product, data, indexId = 0) {
  if (data.type === 0) {
    return {
      indexId: product.id + indexId,
      id: product.id,
      type: data.type,
      masterClass: product,
    };
  }
  if (product.type === 1 || product.type === 2) {
    return {
      indexId: product.id + indexId,
      id: product.id,
      type: data.type,
      patternProduct: product,
      optionId: data.optionId,
      count: data.count,
      length: data.length,
    };
  }
  if (product.type === 3) {
    return {
      indexId: product.id + indexId,
      id: product.id,
      type: product.type,
      sewingProduct: product,
      optionId: data.optionId,
      count: data.count,
      length: data.length,
    };
  }
}

export function reduceBascketState(bascketState) {
  return bascketState.reduce(
    (acc, i) => {
      if (i.type === 0) {
        const item = constructorMasterClassItem(i);
        acc.itemsMaster.push(item);
        acc.price = acc.price + item.totalPrice;
      }
      if (i.type === 1 || i.type === 2) {
        const item = constructorPatternItem(i);
        acc.itemsPatterns.push(item);
        acc.price = acc.price + item.totalPrice;
      }
      if (i.type === 3) {
        const item = constructorSewingGoodsItem(i);
        acc.itemsGoods.push(item);
        acc.price = acc.price + item.totalPrice;
      }
      return acc;
    },
    { itemsGoods: [], itemsMaster: [], itemsPatterns: [], price: 0 },
  );
}

const constructorMasterClassItem = (data) => {
  const program =
    data.masterClass.programs.find(({ id }) => id === data.program) ??
    data.masterClass.programs[0];
  const totalPrice = calcTotalPrice(program.price, data.masterClass.discount);
  return {
    id: data.masterClass.id,
    indexId: data.indexId,
    path: MASTER_CLASS_PRODUCT_ROUTE_PATH,
    pathConfig: { dynamic: true, params: { id: data.masterClass.id } },
    image: data.masterClass.images[0].fileUrl,
    name: data.masterClass.titleRu,
    vendorCode: program.vendorCode,
    totalPrice: totalPrice,
    params: {
      program: { id: program.id, value: program.programNameRu },
      category: data.masterClass.categories[0]?.textRu,
    },
    programsOptions: data.masterClass.programs.map((item) => ({
      id: item.id,
      tid: item.programNameRu,
    })),
  };
};

const constructorSewingGoodsItem = (data) => {
  const count = data.count ?? 1;
  const size =
    data.sewingProduct.sizes.find(({ id }) => id === data.size) ??
    data.sewingProduct.sizes[0];
  const color =
    data.sewingProduct.colors.find(({ id }) => id === data.color) ??
    data.sewingProduct.colors[0];

  const totalPrice =
    calcTotalPrice(size.price, data.sewingProduct.discount) * count;

  return {
    id: data.sewingProduct.id,
    indexId: data.indexId,
    path: SEWING_GOODS_PRODUCT_ROUTE_PATH,
    pathConfig: { dynamic: true, params: { id: data.sewingProduct.id } },
    image: data.sewingProduct.images[0].fileUrl,
    name: data.sewingProduct.titleRu,
    vendorCode: size.vendorCode,
    count: count,
    totalPrice: totalPrice,
    params: {
      size: { id: size.id, value: size.size },
      color: { id: color.id, value: color.color },
      category: data.sewingProduct.categories[0]?.textRu,
    },
    sizesOptions: data.sewingProduct.sizes.map((item) => ({
      id: item.id,
      tid: item.size,
      price: item.price,
    })),
    colorsOptions: data.sewingProduct.colors.map((item) => ({
      id: item.id,
      tid: item.color,
      price: item.price,
    })),
  };
};

const constructorPatternItem = (data) => {
  const size =
    data.patternProduct.sizes.find(({ id }) => id === data.size) ??
    data.patternProduct.sizes[0];

  const totalPrice = calcTotalPrice(size.price, data.patternProduct.discount);

  return {
    id: data.patternProduct.id,
    indexId: data.indexId,
    path: PATTERNS_PRODUCT_ROUTE_PATH,
    pathConfig: { dynamic: true, params: { id: data.patternProduct.id } },
    image: data.patternProduct.images[0].fileUrl,
    name: data.patternProduct.titleRu,
    vendorCode: size.vendorCode,
    totalPrice: totalPrice,
    params: {
      size: { id: size.id, value: size.size },
      format:
        data.type === 1
          ? 'PATTERNS.MY_PATTERNS.DETAILS.ELECTRONIC'
          : 'PATTERNS.MY_PATTERNS.DETAILS.PRINTED',
      complexity: data.patternProduct.complexity,
      category: data.patternProduct.categories[0]?.textRu,
    },
    sizesOptions: data.patternProduct.sizes.map((item) => ({
      id: item.id,
      tid: item.size,
    })),
  };
};
const calcTotalPrice = (price, discount) => price - price * (discount / 100);
